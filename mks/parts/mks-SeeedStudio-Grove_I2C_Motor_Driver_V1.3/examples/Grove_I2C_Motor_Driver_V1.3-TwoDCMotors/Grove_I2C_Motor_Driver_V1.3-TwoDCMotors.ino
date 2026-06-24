// Verbinde zwei Motortreiber mit je einem I2C Steckplatz auf dem Grove shield.
// Schließe an jeden Motortreiber je einen DC-Motor an die beiden Ausgänge an.
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
#include "Grove_I2C_Motor_Driver.h"

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
    // Die Drehgeschwindigkeit kann von -255 bis 255 eingestellt werden
    // oft drehen sich die Motoren bei Werten kleiner als 50 nicht.

    // Motortreiber 1: Motor1 schnell im Uhrzeigersinn, Motor2 langsam gegen den Uhrzeigersinn
    Motor.speed(MOTOR1, 255);
    Motor.speed(MOTOR2, -80);
    // Motortreiber 2: Motor1 langsam gegen den Uhrzeigersinn, Motor2 schnell im Uhrzeigersinn
    Motor2.speed(MOTOR1, -80);
    Motor2.speed(MOTOR2, 255);
    delay(2000);

    // Motortreiber 1: Motor1 langsam gegen den Uhrzeigersinn, Motor2 langsam im Uhrzeigersinn
    Motor.speed(MOTOR1, -90);
    Motor.speed(MOTOR2, 100);
    // Motortreiber 2: Motor1 langsam im Uhrzeigersinn, Motor2 langsam gegen den Uhrzeigersinn
    Motor2.speed(MOTOR1, 100);
    Motor2.speed(MOTOR2, -90);
    delay(2000);

    // Stoppe alle Motoren an beiden Motortreibern
    Motor.stop(MOTOR1);
    Motor.stop(MOTOR2);
    Motor2.stop(MOTOR1);
    Motor2.stop(MOTOR2);
    delay(2000);
}
