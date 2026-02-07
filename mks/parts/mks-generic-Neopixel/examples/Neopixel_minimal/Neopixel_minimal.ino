#include <Adafruit_NeoPixel.h>

#define PIN 2
#define NUMPIXELS 15

Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);
#define DELAYVAL 500

void setup() { 
    // bereite pixels vor..
    pixels.begin(); 
}

void loop() {
    // alles ausmachen
    pixels.clear();

    // mache alle pixel nach einander an.
    for (int i = 0; i < NUMPIXELS; i++) {
        pixels.setPixelColor(i, pixels.Color(0, 150, 0));
        pixels.show();
        delay(DELAYVAL);
    }
}