// Pinnummer wo der Touchsensor angeschlossen wird
const int TouchPin = 2;
// Pinnummer, wo die LED angeschlossen wird
const int ledPin = 3;

void setup() {
  // Der Touchsensor ist ein Input
  pinMode(TouchPin, INPUT);
  // Die LED ein Output
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // Wir schauen nach, ob der Touch-Sensor etwas detektiert und speichern es ab
  int sensorValue = digitalRead(TouchPin);

  // Falls jemand berührt, dann ...
  if( sensorValue == 1) {
    // Schalte die LED an
    digitalWrite(ledPin, HIGH);
  } else {
    // sonst, schalte die LED aus.
    digitalWrite(ledPin, LOW);
  }
}