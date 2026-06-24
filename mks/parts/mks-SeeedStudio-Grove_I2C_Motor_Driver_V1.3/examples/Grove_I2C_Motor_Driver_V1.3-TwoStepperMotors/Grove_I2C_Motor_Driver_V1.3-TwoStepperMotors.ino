// Verbinde zwei Motortreiber mit je einem I2C Steckplatz auf dem Grove shield.
// Schließe jeweils einen 5V Stepper-Motor am Pin-Header an.
// Wenn der StepperMotor 5 Kabel hat, bleibt wahrscheinlich das rote Kabel übrig.
// Dieses hat dann keine Verbindung zum Motortreiber.
//
// I2C-Adressen einstellen:
//   Motortreiber 1: Jumper auf Adresse 0x0f (Standard, alle Jumper offen)
//   Motortreiber 2: Jumper auf Adresse 0x0e (A0 gebrückt)
// Die Adresse wird über die vier Lötjumper auf der Rückseite des Boards eingestellt.
//
// Installiere die Grove_I2C_Motor_Driver library mithilfe des Library-Managers.
// Lade den Sketch auf den Arduino.
// Drücke den Reset-Knopf auf beiden Motortreibern und dem Arduino.

// einbinden der Motortreiber-Bibliothek
#include <Grove_I2C_Motor_Driver.h>

// I2C-Adressen der beiden Motortreiber
#define I2C_ADDRESS_1 0x0f  // Standard-Adresse (alle Jumper offen)
#define I2C_ADDRESS_2 0x0e  // zweite Adresse (A0 gebrückt)

// Die Bibliothek stellt eine globale Instanz "Motor" bereit.
// Für den zweiten Motortreiber legen wir eine eigene Instanz an.
I2CMotorDriver Motor2;

void setup() {
    // Verbinde mit erstem Motortreiber (globale Instanz der Bibliothek)
    Motor.begin(I2C_ADDRESS_1);
    // Verbinde mit zweitem Motortreiber (eigene Instanz)
    Motor2.begin(I2C_ADDRESS_2);
}

void loop() {
    // Drehe Motor 1: 512 Schritte im Uhrzeigersinn
    // Drehe Motor 2: 512 Schritte gegen den Uhrzeigersinn (entgegengesetzt)
    Motor.StepperRun(512);
    Motor2.StepperRun(-512);
    // Warte eine halbe Sekunde
    delay(500);

    // Drehe Motor 1: 1024 Schritte gegen den Uhrzeigersinn
    // Drehe Motor 2: 1024 Schritte im Uhrzeigersinn (entgegengesetzt)
    Motor.StepperRun(-1024);
    Motor2.StepperRun(1024);
    // Warte eine halbe Sekunde
    delay(500);
}
