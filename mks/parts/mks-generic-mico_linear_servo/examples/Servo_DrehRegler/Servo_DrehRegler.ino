// schließe einen Servo an Pin D9 des Arduino / Grove Shield an
// schließe einen Dreh-Regler an Pin A0 des Arduino / Grove Shield an
// lade den code auf den Arduino
// nun kannst du die Position des Servos mit Hilfe des Dreh-Reglers einstellen
// wenn du wissen willst welchen wert der Servo gerade hat:
// öffne den Seriellen Monitor und stelle die Geschwindigkeit auf 115200 ein.
// dann wird dort der wert des Servos angezeigt.

#include <Servo.h>

// erstellt ein Servo-Objekt, um einen Servomotor zu steuern
Servo myservo;

// Analog Pin, an dem das Potentiometer angeschlossen ist
int potpin = A0;

// Variable um den Wert des Analogen Pin zwischenzuspeichern
int val;

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
    pinMode(potpin, INPUT);
    // verknüpft den Servomotor an Pin 9 mit dem Servo-Objekt
    myservo.attach(9);
}

void loop() {
    // liest das Potentiometer aus (Wert zwischen 0 und 1023)
    val = analogRead(potpin);

    // rechnet den Wert in den Wertebereich des Servomotors um
    val = map(val, 0, 1023, 0, 180);

    // gibt den wert im Seriellen Monitor aus
    Serial.println(val);

    // überträgt die Zielposition an den Servomotors
    myservo.write(val);

    // lässt dem Servomotor Zeit, die Zielposition zu erreichen
    delay(100);
}
