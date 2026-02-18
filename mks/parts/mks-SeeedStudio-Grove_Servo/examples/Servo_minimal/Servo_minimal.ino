// schließe einen Servo an Pin D9 des Arduino / Grove Shield an
// lade den code auf den Arduino
// der Servo wird verschiedene Positionen anfahren.
// Danach passiert nichts mehr bis du den Arduino neustartest.
// dies geht z.B. mit der Reset-Taste.

#include <Servo.h>

// erstellt ein Servo-Objekt, um einen Servomotor zu steuern
Servo myservo;

void setup() {
    // verknüpft den Servomotor an Pin 9 mit dem Servo-Objekt
    myservo.attach(9);
    
    // fahre Servo zu Position 0 (Links Anschlag)
    myservo.write(0);
    delay(500);

    // fahre Servo zu Position 180 (Rechts Anschlag)
    myservo.write(180);
    delay(500);
    
    // fahre Servo zu Position 90 (genau die Mitte)
    myservo.write(90);
    delay(500);
}

void loop() {
}
