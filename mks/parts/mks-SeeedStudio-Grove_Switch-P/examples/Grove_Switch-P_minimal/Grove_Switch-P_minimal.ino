
// Der digitale Pin des Schalters
const int pinSchalter = 2;
// Der digitale Pin der LED
const int pinLed =  6;

// Eine Variable um den Zustand des Schalters zu merken
int zustandSchalter = 0;

void setup() {
    // Wir sagen dem Arduino, dass der Schalter ein Input ist
    pinMode(pinSchalter, INPUT);
    // Wir sagen dem Arduino, dass die LED ein Output ist 
    pinMode(pinLed, OUTPUT);

    Serial.begin(9600);
}

void loop(){
    // Wir lesen den Schalterzustand aus und speichern ihn ab
    zustandSchalter = digitalRead(pinSchalter);

    // WENN der Schalter angeschalten ist, dann ...
    if (zustandSchalter == HIGH) {
        // Mach die LED an
        digitalWrite(pinLed, HIGH);
        // Und wir schreiben es auch noch in die Console
        Serial.println("Schalter an!");
    } else {
        // wenn nicht, dann mach sie aus
        digitalWrite(pinLed, LOW);
        // und schreib es auch in die Konsole
        Serial.println("Schalter aus!");
    }
}