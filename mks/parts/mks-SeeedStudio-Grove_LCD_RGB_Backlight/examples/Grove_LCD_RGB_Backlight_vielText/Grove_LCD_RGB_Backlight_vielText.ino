// diese Beispile Zeigt wie du viel Text im Arduino Speichern kannst.
// dies braucht etwas mehr aufwand,
// da sonst der Arbeits-Speicher des Arduinos zu klein ist..
//
// Vorgehen:
// installiere die library Grove_LCD_RGB_Backlight
// schließe ein Grove LCD_RGB an einen der I2C ports des Grove-Shields an.
// lade den Sketch hoch
// nun sollten alle Zeilen nach einander auf dem
// Display angezeigt werden.
// öffne den Seriellen Monitor
// stelle die Geschwindigkeit auf 115200
// nun sollte die aktuelle Textzeile auch im Seriellen Monitor angezeigt werden.

#include "rgb_lcd.h"

rgb_lcd lcd;
const int colorR = 50;
const int colorG = 0;
const int colorB = 255;

const int TEXT_ZEILEN = 65;
const int ZEILE_MAXIMAL_LAENGE = 52;

typedef struct {
    char description[ZEILE_MAXIMAL_LAENGE];
} descriptionType;

// Quelle des Textes:
// https://de.wikisource.org/wiki/Alice_im_Wunderland
const descriptionType derGanzeText[TEXT_ZEILEN] PROGMEM = {
    {"Alice’s Abenteuer"},
    {"im Wunderland"},
    {"von Lewis Carroll."},
    {""},
    {"O schoener, goldner Nachmittag,"},
    {"Wo Flut und Himmel lacht!"},
    {"Von schwacher Kindeshand bewegt,"},
    {"Die Ruder plaetschern sacht –"},
    {"Das Steuer haelt ein Kindesarm"},
    {"Und lenket unsre Fahrt."},
    {""},
    {"So fuhren wir gemaechlich hin"},
    {"Auf traeumerischen Wellen –"},
    {"Doch ach! die drei vereinten sich,"},
    {"Den mueden Freund zu quaelen –"},
    {"Sie trieben ihn, sie draengten ihn,"},
    {"Ein Maehrchen zu erzaehlen."},
    {""},
    {"Die Erste gab’s Commandowort;"},
    {"O schnell, o fange an!"},
    {"Und mach’ es so, die Zweite bat,"},
    {"Daß man recht lachen kann!"},
    {"Die Dritte ließ ihm keine Ruh"},
    {"Mit wie? und wo? und wann?"},
    {""},
    {"Jetzt lauschen sie vom Zauberland"},
    {"Der wunderbaren Maehr’;"},
    {"Mit Thier und Vogel sind sie bald"},
    {"In freundlichem Verkehr,"},
    {"Und fuehlen sich so heimisch dort,"},
    {"Als ob es Wahrheit waer’. –"},
    {""},
    {"Und jedes Mal, wenn Fantasie"},
    {"Dem Freunde ganz versiegt: –"},
    {"„Das Übrige ein ander Mal!“"},
    {"O nein, sie leiden’s nicht."},
    {"„Es ist ja schon ein ander Mal!“ –"},
    {"So rufen sie vergnuegt."},
    {""},
    {"So ward vom schoenen Wunderland"},
    {"Das Maerchen ausgedacht,"},
    {"So langsam Stueck fuer Stueck erzaehlt,"},
    {"Beplaudert und belacht,"},
    {"Und froh, als es zu Ende war,"},
    {"Der Weg nach Haus gemacht."},
    {""},
    {"Alice! o nimm es freundlich an!"},
    {"Leg’ es mit guet’ger Hand"},
    {"Zum Strauße, den Erinnerung"},
    {"Aus Kindheitstraeumen band,"},
    {"Gleich welken Bluethen, mitgebracht"},
    {"Aus liebem, fernen Land."},
    {""},
    {""},
    {"Erstes Kapitel."},
    {"Hinunter in den Kaninchenbau."},
    {""},
    {"Alice fing an sich zu langweilen; "},
    {"sie saß schon lange bei ihrer Schwester"},
    {"am Ufer und hatte nichts zu thun. "},
    {"Das Buch, das ihre Schwester las, gefiel ihr nicht;"},
    {"denn es waren weder Bilder noch Gespraeche darin. "},
    {"'Und was nuetzen Buecher,' dachte Alice,"},
    {"'ohne Bilder und Gespraeche?' "},
    {"..."},
};



void setup() {
    delay(500);
    Serial.begin(115200);
    unsigned long startZeit = millis();
    while ((!Serial) && ((millis() - startZeit) < 6000)) {
        // warte bis der computer sich mit dem Arduino Seriell verbunden hat.
        // oder mache nach ueber 6s warten ohne Verbindung weiter.
        1;
    }
    delay(500);
    Serial.println("Grove_LCD_RGB_Backlight_vielText.ino");

    lcd.begin(16, 2);
    lcd.setRGB(colorR, colorG, colorB);
    lcd.setCursor(0, 0);
    lcd.print("Beispiel fuer");
    lcd.setCursor(0, 1);
    lcd.print("viel Text :-)");
    delay(1000);
}

void loop() {
    for (int i = 0; i < TEXT_ZEILEN; i++) {
        showText(i);
        delay(500);
    }
}

void showText(int textIndex) {
    lcd.clear();
    lcd.setCursor(0, 1);
    descriptionType eineZeileText;
    memcpy_P(&eineZeileText, &derGanzeText[textIndex], sizeof eineZeileText);
    Serial.println(eineZeileText.description);
    lcd.print(eineZeileText.description);
    int zeilenLaenge = strlen(eineZeileText.description);
    for (int i = 0; i < zeilenLaenge; i++) {
        // Schiebe den Inhalt des LCDs um ein Zeichen nach links
        lcd.scrollDisplayLeft();
        delay(100);
    }
}
