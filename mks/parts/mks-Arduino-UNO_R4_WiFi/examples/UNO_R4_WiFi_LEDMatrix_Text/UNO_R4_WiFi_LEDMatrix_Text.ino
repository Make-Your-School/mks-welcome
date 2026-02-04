// bitte ArduinoGraphics library installieren!

// um die ArduinoGraphics library zu verwenden diese vor der Arduino_LED_Matrix library includieren!
#include <ArduinoGraphics.h>
#include <Arduino_LED_Matrix.h>

ArduinoLEDMatrix matrix;

void setup() {
    Serial.begin(115200);
    matrix.begin();

    // zeige Text *MYS* auf der LED-Matrix
    matrix.beginDraw();
    // *farbe* setzen (die leds kennen nur an und aus.)
    matrix.stroke(0xFFFFFFFF);
    const char text[] = "MYS";
    matrix.textFont(Font_4x6);
    matrix.beginText(0, 1, 0xFFFFFF);h
    matrix.println(text);
    matrix.endText();
    matrix.endDraw();

    delay(2000);
}

void loop() {

    // ein längerer text der *scrollt*
    matrix.beginDraw();

    matrix.stroke(0xFFFFFFFF);
    matrix.textScrollSpeed(50);

    const char text[] = "Hackdays :-)";
    matrix.textFont(Font_5x7);
    matrix.beginText(0, 1, 0xFFFFFF);
    matrix.println(text);
    matrix.endText(SCROLL_LEFT);

    matrix.endDraw();
}