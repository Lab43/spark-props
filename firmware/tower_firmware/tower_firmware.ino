#include <math.h>

#include <XBee.h>
XBee xbee = XBee();
XBeeResponse response = XBeeResponse();
Rx16Response rx16 = Rx16Response();

#include <RGBConverter.h>
RGBConverter conv;



// =================
// utility functions
// =================

long stringToLong(String string) {
  char characters[string.length()];
  string.toCharArray(characters, sizeof(characters));
  return atol(characters);
}

// like the built in map function, but for floats
double mapf(double x, double in_min, double in_max, double out_min, double out_max) {
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}




// =============
// time tracking
// =============

class Time {
    long lastReceivedTime;
    long localTimeAtLastReceive;
  public:
    void set(long newTime) {
      lastReceivedTime = newTime;
      localTimeAtLastReceive = millis();
    }
    long get() {
      return millis() - localTimeAtLastReceive + lastReceivedTime;
    }
};

Time theTime;

long lastStartedCommandAt;
long lastStartedCommandTime;



// =====
// color
// =====

class Color {
  public:
    String hex;
    byte r, g, b;
    double h, s, v;
    void set (String newHex) {
      hex = newHex;
      // convert hex string to rgb
      char charbuf[8];
      hex.toCharArray(charbuf, 8);
      long int rgb = strtol(charbuf, 0, 16);
      r = (byte)(rgb >> 16);
      g = (byte)(rgb >> 8);
      b = (byte)(rgb);
      // convert rgb to hsv
      double hsv[3];
      conv.rgbToHsv(r, g, b, hsv);
      h = hsv[0];
      s = hsv[1];
      v = hsv[2];
    }
};



// ========
// RGB leds
// ========

class RGBLED {
    int rPin, gPin, bPin;
  public:
    void attach(int r, int g, int b) {
      rPin = r;
      gPin = g;
      bPin = b;
      pinMode(rPin, OUTPUT);
      pinMode(gPin, OUTPUT);
      pinMode(bPin, OUTPUT);
    }
    void set(Color color) {
      //Serial.print("Setting led to ");
      //Serial.println(color.hex);
      analogWrite(rPin, color.r);
      analogWrite(gPin, color.g);
      analogWrite(bPin, color.b);
    }
    void setRgb(byte rgb[3]) {
      //Serial.print("Setting led to ");
      //Serial.print(rgb[0]);
      //Serial.print(", ");
      //Serial.print(rgb[1]);
      //Serial.print(", ");
      //Serial.println(rgb[2]);
      analogWrite(rPin, rgb[0]);
      analogWrite(gPin, rgb[1]);
      analogWrite(bPin, rgb[2]);
    }
    void setRandomHue() {
      byte rgb[3];
      conv.hsvToRgb(random(0, 100) / 100.0, 1, 1, rgb);
      analogWrite(rPin, rgb[0]);
      analogWrite(gPin, rgb[1]);
      analogWrite(bPin, rgb[2]);
    }
};

RGBLED led1, led2, led3, led4;



// ========================================
// set the fade color based on elapsed time
// ========================================

void setFadeProgress(bool up, RGBLED led, Color from, Color to, long at, long duration, double msSinceStart);
void setFadeProgress(bool up, RGBLED led, Color from, Color to, long at, long duration, double msSinceStart) {
  // if we're fading down, make sure the starting hue is higher than the ending hue
  double fromHue = (!up) && (from.h < to.h) ? from.h + 1.0 : from.h;
  // if we're fading up, make sure the ending hue is higher than the starting hue
  double toHue = up && (from.h > to.h) ? to.h + 1.0 : to.h;
  double h = fmod(mapf(msSinceStart, 0, duration, fromHue, toHue), 1.0);
  double s = mapf(msSinceStart, 0, duration, from.s, to.s);
  double v = mapf(msSinceStart, 0, duration, from.v, to.v);
  byte rgb[3];
  conv.hsvToRgb(h, s, v, rgb);
  led.setRgb(rgb);
}



// =============
// command stack
// =============

class Command {

  public:

    bool done = true;

    String input;
    char type;
    long at, duration;
    Color from1, from2, from3, from4, to1, to2, to3, to4;

    void set(String newInput) {
      done = false;
      input = newInput;
      Serial.println(input);
      type = input.charAt(0);
      theTime.set(stringToLong(input.substring(2, 11)));
      at = stringToLong(input.substring(11, 20));
      from1.set(input.substring(20, 27));
      from2.set(input.substring(27, 34)),
      from3.set(input.substring(34, 41)),
      from4.set(input.substring(41, 48)),
      duration = input.substring(48, 53).toInt(),
      to1.set(input.substring(53, 60)),
      to2.set(input.substring(60, 67)),
      to3.set(input.substring(67, 74)),
      to4.set(input.substring(74, 81));
    }

    void tick() {
      if (done) return; // this has already executed
      if (at > theTime.get()) return; // this is scheduled for the future
      if ((lastStartedCommandAt > at) && ((millis() - lastStartedCommandTime) < 20000)) {
        Serial.println("A command with a later at time was executed with 20 seconds, so skipping this one.");\
        done = true;
        return;
      } else {
        lastStartedCommandAt = at;
        lastStartedCommandTime = millis();
      }
      double msSinceStart = theTime.get() - at;
      switch (type) {

        case 's': // set color
          done = true;
          led1.set(to1);
          led2.set(to2);
          led3.set(to3);
          led4.set(to4);
          break;

        case 'f': // set one color, wait, then set another color
          if (theTime.get() - at > duration) {
            done = true;
            led1.set(to1);
            led2.set(to2);
            led3.set(to3);
            led4.set(to4);
          } else {
            led1.set(from1);
            led2.set(from2);
            led3.set(from3);
            led4.set(from4);
          }
          break;

        case 'u': // fade up
          if (theTime.get() - at > duration) {
            Serial.println("Ending fade");
            done = true;
            led1.set(to1);
            led2.set(to2);
            led3.set(to3);
            led4.set(to4);
          } else {
            setFadeProgress(true, led1, from1, to1, at, duration, msSinceStart);
            setFadeProgress(true, led2, from2, to2, at, duration, msSinceStart);
            setFadeProgress(true, led3, from3, to3, at, duration, msSinceStart);
            setFadeProgress(true, led4, from4, to4, at, duration, msSinceStart);
          }
          break;

         case 'd': // fade down
          if (theTime.get() - at > duration) {
            Serial.println("Ending fade");
            done = true;
            led1.set(to1);
            led2.set(to2);
            led3.set(to3);
            led4.set(to4);
          } else {
            setFadeProgress(false, led1, from1, to1, at, duration, msSinceStart);
            setFadeProgress(false, led2, from2, to2, at, duration, msSinceStart);
            setFadeProgress(false, led3, from3, to3, at, duration, msSinceStart);
            setFadeProgress(false, led4, from4, to4, at, duration, msSinceStart);
          }
          break;

        case 'r': // random hue
          if (theTime.get() - at > duration) {
            done = true;
            led1.set(to1);
            led2.set(to2);
            led3.set(to3);
            led4.set(to4);
          } else {
            int randomPanel = random(1, 1000);
            if (randomPanel == 1) {
              led1.setRandomHue(); 
            }
            if (randomPanel == 2) {
              led2.setRandomHue(); 
            }
            if (randomPanel == 3) {
              led3.setRandomHue(); 
            }
            if (randomPanel == 4) {
              led4.setRandomHue(); 
            }
          }
          break;

        case 'e': // electrocute
          if (theTime.get() - at > duration) {
            done = true;
            led1.set(to1);
            led2.set(to2);
            led3.set(to3);
            led4.set(to4);
          } else {
            int randomPanel = random(1, 1000);
            if (randomPanel == 1) {
              led1.set(from1);
              led2.set(from2);
              led3.set(from2);
              led4.set(from2);
            }
            if (randomPanel == 2) {
              led1.set(from2);
              led2.set(from1);
              led3.set(from2);
              led4.set(from2);
            }
            if (randomPanel == 3) {
              led1.set(from2);
              led2.set(from2);
              led3.set(from1);
              led4.set(from2);
            }
            if (randomPanel == 4) {
              led1.set(from2);
              led2.set(from2);
              led3.set(from1);
              led4.set(from2);
            }
          }
          break;

        default:
          done = true;
          Serial.print("I don't know what to do with command type ");
          Serial.println(type);

      }
    }

};

const int stackLength = 10;
int stackPosition = 0;
Command stack[stackLength];



// =====
// setup
// =====

void setup() {

  // input from XBee
  Serial1.begin(115200);
  xbee.setSerial(Serial1);

  // output to serial monitor, for debugging
  Serial.begin(9600);
  Serial.write("Listening...");

  led1.attach(9, 13, 5);
  led2.attach(8, 12, 4);
  led3.attach(7, 11, 3);
  led4.attach(6, 10, 2);

  randomSeed(analogRead(0));

}



// ===========
// here we go!
// ===========

void loop() {

  xbee.readPacket();

  if (xbee.getResponse().isAvailable()) {
    Serial.println("command available");
    xbee.getResponse().getRx16Response(rx16);

    String data;
    for (int i = 0; i < rx16.getDataLength(); i++) {
      data += char(rx16.getData(i));
    }
    data += " ";

    stack[stackPosition].set(data);
    stackPosition = (stackPosition + 1) % stackLength;

  }

  for (int i = 0; i < stackLength; i++) {
    stack[i].tick();
  }

}
