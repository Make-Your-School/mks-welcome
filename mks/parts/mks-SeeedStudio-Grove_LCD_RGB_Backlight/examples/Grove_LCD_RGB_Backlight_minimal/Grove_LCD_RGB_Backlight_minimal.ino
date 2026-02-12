// minimal Beispiel um das Grove LCD zu benutzen.
// für eine Anleitung schaue in die readme.md Datei.

#include "rgb_lcd.h"
#include <Wire.h>

rgb_lcd lcd;

const int colorR = 0;
const int colorG = 255;
const int colorB = 150;

void setup() {
    lcd.begin(16, 2);
    lcd.setRGB(colorR, colorG, colorB);
    lcd.print("hello, world!");
}

void loop() {
    // setze den cursor auf die position Spalte 0, Zeile 1
    // (Wichtig: Zeile 1 ist die Zweite-Zeile des Displays - es wird bei 0 angefangen zu zählen)
    lcd.setCursor(0, 1);
    // zeige die Sekunden seit *System-Reset*
    lcd.print(millis() / 1000);
    // warte 0.1s
    delay(100);
}
