// schließe einen Servo an Pin D5 des Arduino / Grove Shield an
// lade den code auf den Arduino
// der Servo wird verschiedene Positionen anfahren.
// Danach passiert nichts mehr bis du den Arduino neustartest.
// dies geht z.B. mit der Reset-Taste.

#include <Servo.h>

// erstellt ein Servo-Objekt, um einen Servomotor zu steuern
Servo meinServo;

void setup() {
    // verknüpft das meinServo Object mit dem Pin 5
    meinServo.attach(5);
    
    // fahre Servo zu Position 0 (Links Anschlag)
    meinServo.write(0);
    delay(1000);

    // fahre Servo zu Position 180 (Rechts Anschlag)
    meinServo.write(180);
    delay(1000);
    
    // fahre Servo zu Position 90 (genau die Mitte)
    meinServo.write(90);
}

void loop() {
}
