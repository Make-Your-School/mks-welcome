// Minimalbeispiel, um das Grove LCD zu benutzen.
// für eine Anleitung schaue in die readme.md Datei.
#include "rgb_lcd.h"
#include <Wire.h>

rgb_lcd lcd;

// setze die Hintergrundfarbe des Displays
// mische Rot, Gruen und Blau von 0 (dunkel) bis 255 (hell)
const int farbeRot = 0;
const int farbeGruen = 255;
const int farbeBlau = 150;

void setup() {
    lcd.begin(16, 2);
    lcd.setRGB(farbeRot, farbeGruen, farbeBlau);
    lcd.print("Hallo, Welt!");
}

void loop() {
    // setze den Cursor auf die Position Spalte 0, Zeile 1
    // (Wichtig: Zeile 1 ist die zweite Zeile des Displays - es wird bei 0 angefangen zu zählen)
    lcd.setCursor(0, 1);
    // zeige die Sekunden seit *System-Reset*
    lcd.print(millis() / 1000);
    // warte 0.1s
    delay(100);
}
