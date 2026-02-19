// Laden der Motortreiber-Bibliothek
#include <Grove_I2C_Motor_Driver.h>

// Das ist die I2C Standardadresse
#define I2C_ADDRESS 0x0f

void setup() {
  // Baue eine serielle Verbindung mit dem Laptop auf
  Serial.begin(9600);

  // Verbinde mit Motortreiber
  Motor.begin(I2C_ADDRESS);
}

void loop() {
  // Drehe etwas im Uhrzeigersinn
  Motor.StepperRun(128);
  // Warte
  delay(500);
  // Drehe gegen den Uhrzeigersinn
  Motor.StepperRun(-128);
  // Warte
  delay(500);
}


