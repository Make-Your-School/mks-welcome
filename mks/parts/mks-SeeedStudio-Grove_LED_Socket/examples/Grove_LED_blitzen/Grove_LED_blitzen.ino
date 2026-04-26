// Schließe eine *LED Platine* an Pin D2 auf dem Grove Shield an.
// lade den sketch hoch
// die LED Blitzt nun.

const int meineLED_PIN = 2;

void setup() {
    // setze den Pin für die LED als Ausgang
    pinMode(meineLED_PIN, OUTPUT);
}

void loop() {
    digitalWrite(meineLED_PIN, HIGH);
    delay(100);
    digitalWrite(meineLED_PIN, LOW);
    delay(100);
    digitalWrite(meineLED_PIN, HIGH);
    delay(100);
    digitalWrite(meineLED_PIN, LOW);
    delay(700);
}
