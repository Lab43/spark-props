#include <Switch.h>

#include <RGBConverter.h>
RGBConverter conv;


const byte p1 = A2;
const byte p2 = A3;
int p = 0;

int threshold = 250;

bool triggered = false;

bool firstTrigger = false;

const int triggerDelay = 150;

byte preset = 0;
byte presetCount = 5;

Switch forwardButton = Switch(A0);
Switch backButton = Switch(A1);

const byte i1 = 2;
const byte i2 = 4;
const byte i3 = 7;
const byte i4 = 8;
const byte i5 = 12;
const byte i6 = 13;

// lights
const byte l1[] = {5, 3, 6};
const byte l2[] = {10, 9, 11};

// colors
const byte off[] = {0, 0, 0};
const byte teal[] = {0, 255, 170};
const byte lightTeal[] = {0, 17, 85};
const byte red[] = {255, 0, 0};
const byte brightRed[] = {255, 0, 85};


void setLight(const byte light[], const byte color[]) {
  analogWrite(light[0], color[0]);
  analogWrite(light[1], color[1]);
  analogWrite(light[2], color[2]);
}

void setAllLights(const byte color[]) {
  setLight(l1, color);
  setLight(l2, color);
}

void setPresetIndicator(const byte i) {
  digitalWrite(i1, i == 1);
  digitalWrite(i2, i == 2);
  digitalWrite(i3, i == 3);
  digitalWrite(i4, i == 4);
  digitalWrite(i5, i == 5);
  digitalWrite(i6, i == 6);
}



// =======
// presets
// =======

void allOff() {
  setAllLights(off);
}

void deadTealHits(const bool triggered) {
  if (triggered) {
    firstTrigger = true;
    setAllLights(teal);
    delay(triggerDelay);
  } else {
    if (firstTrigger) {
      setAllLights(lightTeal);
    } else {
      setAllLights(off);
    }
  }
}

void tealHits(const bool triggered) {
  if (triggered) {
    setAllLights(teal);
    delay(triggerDelay);
  } else {
    setAllLights(lightTeal);
  }
}

void redHits(const bool triggered) {
  if (triggered) {
    setAllLights(brightRed);
    delay(triggerDelay);
  } else {
    setAllLights(red);
  }
}

void setup() {
  Serial.begin(9600);
  pinMode(i1, OUTPUT);
  pinMode(i2, OUTPUT);
  pinMode(i3, OUTPUT);
  pinMode(i4, OUTPUT);
  pinMode(i5, OUTPUT);
  pinMode(i6, OUTPUT);
  setPresetIndicator(preset);
}

void loop() {
  forwardButton.poll();
  if (forwardButton.pushed()) {
    firstTrigger = false;
    preset = (preset + 1) % (presetCount + 1);
    setPresetIndicator(preset);
  }
  backButton.poll();
  if (backButton.pushed()) {
    firstTrigger = false;
    preset = (preset - 1) % (presetCount + 1);
    setPresetIndicator(preset);
  }
  p = max(analogRead(p1), analogRead(p2));
  triggered = p > threshold;
  if (preset == 0) allOff();
  if (preset == 1) deadTealHits(triggered);
  if (preset == 2) allOff();
  if (preset == 3) tealHits(triggered);
  if (preset == 4) allOff();
  if (preset == 5) redHits(triggered);
}
