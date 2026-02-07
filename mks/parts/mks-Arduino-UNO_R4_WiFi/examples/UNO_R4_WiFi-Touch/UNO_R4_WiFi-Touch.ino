// bitte library `Arduino_CapacitiveTouch` installieren!

#include "Arduino_CapacitiveTouch.h"

CapacitiveTouch touchButton = CapacitiveTouch(A1);

void setup() {
    Serial.begin(115200);

    if (touchButton.begin()) {
        Serial.println("Capacitive touch sensor initialisiert.");
    } else {
        Serial.println("Bitte benutze einen unterstützten pin!");
        while (true)
            ;
    }

    touchButton.setThreshold(1000);
}

void loop() {
    int sensorValue = touchButton.read();
    Serial.print("Roh-Wert: ");
    Serial.println(sensorValue);

    if (touchButton.isTouched()) {
        Serial.println("Button berührt!");
    }

    delay(100);
}