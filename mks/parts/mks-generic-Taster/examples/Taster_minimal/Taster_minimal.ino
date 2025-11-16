// minimal Beispiel um einen Taster abzufragen.
// für eine Anleitung schaue in die readme.md Datei.

const int tasterPin = 2;

void setup() {
    Serial.begin(115200);
    // Wait for Serial Connection to be Opend from Host or 6second timeout
    unsigned long ulTimeStamp_Start = millis();
    while ((!Serial) && ((millis() - ulTimeStamp_Start) < 6000)) {
        1;
    }

    pinMode(tasterPin, INPUT_PULLUP);

    delay(10);
}

void loop() {
    Serial.println(digitalRead(tasterPin));
    delay(500);
}
