#include "Arduino_LED_Matrix.h"

ArduinoLEDMatrix matrix;

void setup() {
    Serial.begin(115200);

    // lade eine eingebaute Animation
    // weiter mögliche animationen:
    // https://docs.arduino.cc/tutorials/uno-r4-wifi/led-matrix/#animation-generation
    matrix.loadSequence(LEDMATRIX_ANIMATION_OPENSOURCE);
    matrix.begin();
    // spiele die animation ab.
    matrix.play(true);
}

void loop() {}