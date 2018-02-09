int r1 = 9;
int g1 = 13;
int b1 = 5;

int r2 = 8;
int g2 = 12;
int b2 = 4;

int r3 = 7;
int g3 = 11;
int b3 = 3;

int r4 = 6;
int g4 = 10;
int b4 = 2;

int testPin = b3;

void setup() {
  pinMode(r1, OUTPUT);
  pinMode(g1, OUTPUT);
  pinMode(b1, OUTPUT);
  pinMode(r2, OUTPUT);
  pinMode(g2, OUTPUT);
  pinMode(b2, OUTPUT);
  pinMode(r3, OUTPUT);
  pinMode(g3, OUTPUT);
  pinMode(b3, OUTPUT);
  pinMode(r4, OUTPUT);
  pinMode(g4, OUTPUT);
  pinMode(b4, OUTPUT);
}

void loop() {
  analogWrite(r1, 0);
  analogWrite(g1, 0);
  analogWrite(b1, 0);
  analogWrite(r2, 0);
  analogWrite(g2, 0);
  analogWrite(b2, 0);
  analogWrite(r3, 0);
  analogWrite(g3, 0);
  analogWrite(b3, 0);
  analogWrite(r4, 0);
  analogWrite(g4, 0);
  analogWrite(b4, 0);
  analogWrite(r1, 255);
  analogWrite(r2, 255);
  analogWrite(r3, 255);
  analogWrite(r4, 255);
  delay(1000);
  analogWrite(r1, 0);
  analogWrite(g1, 0);
  analogWrite(b1, 0);
  analogWrite(r2, 0);
  analogWrite(g2, 0);
  analogWrite(b2, 0);
  analogWrite(r3, 0);
  analogWrite(g3, 0);
  analogWrite(b3, 0);
  analogWrite(r4, 0);
  analogWrite(g4, 0);
  analogWrite(b4, 0);
  analogWrite(g1, 255);
  analogWrite(g2, 255);
  analogWrite(g3, 255);
  analogWrite(g4, 255);
  delay(1000);
  analogWrite(r1, 0);
  analogWrite(g1, 0);
  analogWrite(b1, 0);
  analogWrite(r2, 0);
  analogWrite(g2, 0);
  analogWrite(b2, 0);
  analogWrite(r3, 0);
  analogWrite(g3, 0);
  analogWrite(b3, 0);
  analogWrite(r4, 0);
  analogWrite(g4, 0);
  analogWrite(b4, 0);
  analogWrite(b1, 255);
  analogWrite(b2, 255);
  analogWrite(b3, 255);
  analogWrite(b4, 255);
  delay(1000);
}
