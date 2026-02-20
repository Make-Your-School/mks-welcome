// verbinde den Motortreiber mit einem der I2C Steckplätze auf dem Grove shield.
// schließe je einen DC-Motor an die beiden Ausgänge an.
// installiere die Grove_I2C_Motor_Driver library mithilfe des Library-Managers.
// lade den Sketch auf den Arduino
// drücke den Reset Knopf auf dem Motortreiber und dem Arduino
// nun sollten sich beide Motoren wie unten beschrieben Drehen

// einbinden der Motortreiber-Bibliothek
#include "Grove_I2C_Motor_Driver.h"

// Das ist die I2C Standardadresse
#define I2C_ADDRESS 0x0f

void setup() {
    // Verbinde mit Motortreiber
    Motor.begin(I2C_ADDRESS);
}

void loop() {
    // Die Drehgeschwindigkeit kann von -255 bis 255 eingestellt werden
    // oft drehen sich die Motoren bei Werte kleiner als 50 nicht.

    // drehe Motor1 schnell im Uhrzeigersinn
    Motor.speed(MOTOR1, 255);
    // drehe Motor2 langsam gegen den Uhrzeigersinn
    Motor.speed(MOTOR2, -80);
    // warte 2 Sekunden
    delay(2000);

    // lasse Motor1 langsam gegen den Uhrzeigersinn laufen
    Motor.speed(MOTOR1, -90);
    // lasse Motor2 langsam mit dem Uhrzeigersinn laufen
    Motor.speed(MOTOR2, 100);
    delay(2000);

    // Stoppe MOTOR1 und MOTOR2
    Motor.stop(MOTOR1);
    Motor.stop(MOTOR2);
    delay(2000);
}
