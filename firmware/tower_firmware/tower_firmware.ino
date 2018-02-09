#include <XBee.h>
XBee xbee = XBee();
XBeeResponse response = XBeeResponse();
Rx16Response rx16 = Rx16Response();



// =================
// utility functions
// =================

long stringToLong(String string) {
  char characters[string.length()];
  string.toCharArray(characters, sizeof(characters));
  return atol(characters);
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



// =====
// color
// =====

class Color {  
  public:
    String hex;
    byte r, g, b;
    void set (String newHex) {
      hex = newHex;
      // convert hex string to rgb
      char charbuf[8];
      hex.toCharArray(charbuf,8);
      long int rgb = strtol(charbuf,0,16);
      r = (byte)(rgb>>16);
      g = (byte)(rgb>>8);
      b = (byte)(rgb);
    }
};



// ========
// RGB leds
// ========

class RGBLED {
  int rPin, gPin, bPin;
  Color color;
  public:
    void attach(int r, int g, int b) {
      rPin = r;
      gPin = g;
      bPin = b;
      pinMode(rPin, OUTPUT);
      pinMode(gPin, OUTPUT);
      pinMode(bPin, OUTPUT);
    }
    void set(Color newColor) {
      if (color.hex.equals(newColor.hex)) return;
      color = newColor;
      Serial.print("Setting led to ");
      Serial.println(color.hex);
      analogWrite(rPin, color.r);
      analogWrite(gPin, color.g);
      analogWrite(bPin, color.b);
    }
};

RGBLED led1, led2, led3, led4;



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

}



// ===========
// here we go!
// ===========

void loop() {

  xbee.readPacket();

  if (xbee.getResponse().isAvailable()) {
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
