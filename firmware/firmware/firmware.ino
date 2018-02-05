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
    byte r, g, b;
    void set (String hexString) {
      char charbuf[8];
      hexString.toCharArray(charbuf,8);
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
  public:
    void attach(int r, int g, int b) {
      rPin = r;
      gPin = g;
      bPin = b;
      pinMode(rPin, OUTPUT);
      pinMode(gPin, OUTPUT);
      pinMode(bPin, OUTPUT);
    }
    void set(Color rgb) {
      analogWrite(rPin, rgb.r);
      analogWrite(gPin, rgb.g);
      analogWrite(bPin, rgb.b);
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
      theTime.set(stringToLong(newInput.substring(2, 11)));
      at = stringToLong(newInput.substring(11, 20));
      from1.set(newInput.substring(20, 27));
      from2.set(newInput.substring(27, 34)),
      from3.set(newInput.substring(34, 41)),
      from4.set(newInput.substring(41, 48)),
      duration = newInput.substring(48, 53).toInt(),
      to1.set(newInput.substring(53, 60)),
      to2.set(newInput.substring(60, 67)),
      to3.set(newInput.substring(67, 74)),
      to4.set(newInput.substring(74, 81));
    }

    void tick() {
      if (done) return;
      if (at <= theTime.get()) {
        done = true;
        led1.set(to1);
        led2.set(to2);
        led3.set(to3);
        led4.set(to4);
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
