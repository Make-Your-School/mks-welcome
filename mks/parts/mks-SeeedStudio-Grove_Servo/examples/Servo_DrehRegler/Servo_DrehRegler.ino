// schließe einen Servo an Pin D5 des Arduino / Grove Shield an
// schließe einen Dreh-Regler an Pin A0 des Arduino / Grove Shield an
// lade den code auf den Arduino
// nun kannst du die Position des Servos mit Hilfe des Dreh-Reglers einstellen
// wenn du wissen willst welchen wert der Servo gerade hat:
// öffne den Seriellen Monitor und stelle die Geschwindigkeit auf 115200 ein.
// dann wird dort der wert des Servos angezeigt.

#include <Servo.h>

// erstellt ein Servo-Objekt, um einen Servomotor zu steuern
Servo meinServo;

// Analog Pin, an dem das Potentiometer angeschlossen ist
const int drehreglerPin = A0;
const int servoPin = 5;

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
    Serial.println("Servo_DrehRegler.ino");

    // definiere den Pin des Dreh-Reglers als Eingang.
    pinMode(drehreglerPin, INPUT);
    // verknüpft das meinServo Object mit dem Pin 5
    meinServo.attach(servoPin);
}

void loop() {
    // liest das Potentiometer aus (Wert zwischen 0 und 1023)
    // und speichert diesen in der Variable `valRoh`
    int valRoh = analogRead(drehreglerPin);
    // rechnet den Wert in den Wertebereich des Servomotors um
    // und speichert das Ergebnis in der Variablen `valServo`
    int valServo = map(valRoh, 0, 1023, 0, 180);

    // gibt die Wert im Seriellen Monitor aus
    Serial.print(valRoh);
    Serial.print(" → ");
    Serial.print(valServo);
    Serial.println();

    // überträgt die Zielposition an den Servomotors
    meinServo.write(valServo);

    // lässt dem Servomotor Zeit, die Zielposition zu erreichen
    delay(100);
}
