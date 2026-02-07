#include "Arduino_LED_Matrix.h"

#include "animation.h"

ArduinoLEDMatrix matrix;

void setup() {
    Serial.begin(115200);
    matrix.begin();

    matrix.loadSequence(mys);
    matrix.begin();
    matrix.play(true);
}

void loop() {}