// schließe den Summer an Pin D6 des Grove-Shields an.
// lade den sketch hoch
// der Summer sollte nun im 1-Sekunden Takt Piepen.

void setup() {
    // Setze digitaler Pin 6 als Output für den Summer
    pinMode(6, OUTPUT);
}

void loop() {
    // Mache Summer an
    digitalWrite(6, HIGH);
    // Warte eine Sekunde
    delay(1000);
    // Mache Summer aus
    digitalWrite(6, LOW);
    // Warte eine Sekunde
    delay(1000);
}
