// Schließe eine *LED Platine* an Pin D2 auf dem Grove Shield an.
// lade den sketch hoch
// die LED Blinkt nun.

const int meineLED_PIN =  2;

void setup() {
    // setze den Pin für die LED als Ausgang
    pinMode(meineLED_PIN, OUTPUT);
}

void loop() {
    // schalte die LED an
    digitalWrite(meineLED_PIN, HIGH);
    // warte 0.5s
    delay(500);
    // schalte die LED aus
    digitalWrite(meineLED_PIN, LOW);
    // warte 0.5s
    delay(500);
}
