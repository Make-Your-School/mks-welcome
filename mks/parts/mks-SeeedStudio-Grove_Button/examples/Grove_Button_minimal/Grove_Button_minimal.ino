// Schließe einen Taster an Pin D2 auf dem Grove Shield an.
// lade den sketch hoch
// öffne den *Serial-Monitor*
// drücke den Taster 
// der Monitor zeigt den aktuellen Status des Tasters durch 0 / 1 an

const int tasterPin = 2;

void setup() {
    Serial.begin(115200);
    pinMode(tasterPin, INPUT);
    delay(10);
}

void loop() {
    Serial.println(digitalRead(tasterPin));
    delay(500);
}
