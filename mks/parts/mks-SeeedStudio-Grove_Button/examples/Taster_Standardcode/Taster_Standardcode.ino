// Der digitale Pin des Tasters
const int pinTaster = 2;
// Der Pin der eingebauten LED des Arduinos
const int pinLed =  LED_BUILTIN;


// Eine Variable, um sich den Zustand des Tasters zu merken
int zustandTaster = 0;


void setup() {
    // Wir sagen dem Arduino, dass der Taster ein Input ist
    pinMode(pinTaster, INPUT);
    // Wir sagen dem Arduino, dass die LED ein Output ist
    pinMode(pinLed, OUTPUT);


    Serial.begin(9600);
}


void loop(){
    // Wir lesen den Tasterzustand aus und speichern ihn ab
    zustandTaster = digitalRead(pinTaster);


    // WENN der Taster gedrückt ist, dann ...
    if (zustandTaster == HIGH) {
        // Mach die interne LED vom Arduino an
        digitalWrite(pinLed, HIGH);
        // Und wir schreiben es auch noch in die Console
        Serial.println("1");
    } else {
        // wenn nicht, mach die interne LED aus
        digitalWrite(pinLed, LOW);
        // und schreib es auch in die Konsole
        Serial.println("0");
    }
}
