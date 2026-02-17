#define SUMMER_PIN 6  // must be a PWM pin
#define LAUTSTAERKE 8 // Wie laut es ist, von 0 - 255

void setup() {
  // Setze den Summer Pin auf Output
  pinMode(SUMMER_PIN, OUTPUT);
}

void loop() {
  // Mache den Summer an
  analogWrite(SUMMER_PIN, LAUTSTAERKE);
  // Warte eine Sekunde
  delay(1000);
  // Mache den Summer aus
  analogWrite(SUMMER_PIN, 0); 
  // Warte eine Sekunde
  delay(2000);
}
