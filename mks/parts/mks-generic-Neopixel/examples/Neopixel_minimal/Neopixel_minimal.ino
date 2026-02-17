#include <Adafruit_NeoPixel.h>

// An welchem digitalem Pin der LED Streifen angeschlossen ist
#define PIN 2
// Wieviele Pixel der LED Streifen hat
#define NUMPIXELS 15
// Der Zeitabstand in Millisekunden
#define DELAYVAL 500

Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

void setup() {
    // Bereite den LED Streifen vor..
    pixels.begin();
}

void loop() {
    // alles ausmachen
    pixels.clear();

    // mache alle pixel nach einander an.
    for (int i = 0; i < NUMPIXELS; i++) {
        // setze die Farbe der LED
        // die drei Zahlen setzen die Helligkeit von (rot, grün, blau) von 0 (aus) bis 255 (maximal hell)
        // durch mischen kannst du alle Farben erzeugen
        pixels.setPixelColor(i, pixels.Color(0, 150, 0));
        pixels.show();

        // Warte einen Moment
        delay(DELAYVAL);
    }
}
