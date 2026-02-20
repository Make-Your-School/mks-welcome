// verbinde den Motortreiber mit einem der I2C Steckplätze auf dem Grove shield.
// schließe einen 5V Stepper-Motor am Pin-Header an.
// wenn der StepperMotor 5 Kabel hat, bleibt wahrscheinlich das Rote-Kabel übrig.
// dieses hat dann keine Verbindung zum Motortreiber.
// installiere die Grove_I2C_Motor_Driver library mithilfe des Library-Managers.
// lade den Sketch auf den Arduino
// drücke den Reset Knopf auf dem Motortreiber und dem Arduino
// nun sollten sich der Stepper-Motor wie unten beschrieben Drehen

// einbinden der Motortreiber-Bibliothek
#include <Grove_I2C_Motor_Driver.h>

// Das ist die I2C Standardadresse
#define I2C_ADDRESS 0x0f

void setup() {
    // Verbinde mit Motortreiber
    Motor.begin(I2C_ADDRESS);
}

void loop() {
    // Drehe 512 Schritte im Uhrzeigersinn
    Motor.StepperRun(512);
    // Warte eine halbe Sekunde
    delay(500);
    // Drehe 1024 Schritte gegen den Uhrzeigersinn
    Motor.StepperRun(-1024);
    // Warte eine halbe Sekunde
    delay(500);
}
