// Schließe einen Taster an Pin D2 auf dem Grove Shield an.
// lade den sketch hoch
// öffne den *Serial-Monitor*
// stelle die Geschwindigkeit des Serial-Monitor auf 115200
// drücke den Taster 
// der Monitor zeigt den aktuellen Status des Tasters durch 0 / 1 an

const int tasterPin = 2;

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
    Serial.println("Grove_Button_minimal.ino");

    pinMode(tasterPin, INPUT);
}

void loop() {
    Serial.print("Taster 1: ");
    Serial.println(digitalRead(tasterPin));
    delay(500);
}
