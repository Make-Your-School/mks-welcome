// schließe einen Servo an Pin D5 des Arduino / Grove Shield an
// schließe einen Dreh-Regler an Pin A0 des Arduino / Grove Shield an
// lade den code auf den Arduino
// der Servo dreht sich nun:
// - erst Linksrum
// - dann Rechtsrum
// - macht 1s Pause

#include <Servo.h>

// erstellt ein Servo-Objekt, um einen Servomotor zu steuern
Servo meinServo;

void setup() {
    delay(500);
    // verknüpft das meinServo Object mit dem Pin 5
    meinServo.attach(5);
}

void loop() {
    // fahre das Servo langsam von 0° bis 180°
    servoLangsamLinksrum(0, 180);
    servoLangsamRechtsrum(180, 0);
    // pause 1s
    delay(1000);
}

void servoLangsamLinksrum(int start, int ziel) {
    // bewege den Servo langsam in 1° schritten linksrum
    // (gegen den Uhrzeigersinn)
    for (int pos = start; pos <= ziel; pos += 1) {
        // sage dem Servo es soll die neue Position `pos` anfahren.
        meinServo.write(pos);
        // warte 15ms damit das Servo die neue Position erreichen kann
        delay(20);
    }
}
void servoLangsamRechtsrum(int start, int ziel) {
    // bewege den Servo langsam in 1° schritten rechtsrum
    // (mit dem Uhrzeigersinn)
    for (int pos = start; pos >= ziel; pos -= 1) {
        // sage dem Servo es soll die neue Position `pos` anfahren.
        meinServo.write(pos);
        // warte 15ms damit das Servo die neue Position erreichen kann
        delay(20);
    }
}
