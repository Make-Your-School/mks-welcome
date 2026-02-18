// minimal Beispiel um einen Taster abzufragen.
// für eine Anleitung schaue in die readme.md Datei.

const int tasterPin = 4;

void setup() {
    delay(500);
    Serial.begin(115200);
    unsigned long startZeit = millis();
    while ((!Serial) && ((millis() - startZeit) < 6000)) {
        // warte bis der computer sich mit dem Arduino Seriell verbunden hat.
        // oder mache nach über 6s warten ohne Verbindung weiter.
        1;
    }
    delay(500);
    Serial.println("Taster_minimal.ino");

    pinMode(tasterPin, INPUT_PULLUP);
}

void loop() {
    Serial.println(digitalRead(tasterPin));
    delay(500);
}
