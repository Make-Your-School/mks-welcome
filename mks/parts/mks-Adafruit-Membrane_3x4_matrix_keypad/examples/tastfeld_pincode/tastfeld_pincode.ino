// Hier laden wir die Library, die uns hilft das Tastfeld zu benutzen
#include <Keypad.h>

// Wieviele Tasten Reihen und Spalten es gibt
const byte REIHEN = 4;
const byte SPALTEN = 3;

// Hier sagen wir was für Tasten es gibt
char tasten[REIHEN][SPALTEN] = {
  { '1', '2', '3' },
  { '4', '5', '6' },
  { '7', '8', '9' },
  { '*', '0', '#' }
};

byte rowPins[REIHEN] = { 8, 7, 6, 5 };
byte colPins[SPALTEN] = { 4, 3, 2 };

// Hier wird ein Tastfeld-Objekt erzeugt, das wir im Code benutzen können
Keypad keypad = Keypad(makeKeymap(tasten), rowPins, colPins, REIHEN, SPALTEN);

// Der Pin, welcher eingegeben werden soll (4-stellig)
String korrekterPin = "1234";
// Eine Variable um zu merken, welche Zahlen gedrückt werden
String eingegebenerPin = "";

void setup() {
  // Beginne die Kommunikation mit dem Laptop
  Serial.begin(9600);
  Serial.println("Bitte geben Sie den 4-stelligen Pin ein:");
}

void loop() {
  // Lese aus ob eine Taste gedrückt wird
  char taste = keypad.getKey();

  // Wenn eine taste gedrückt wird, dann ...
  if (taste) {
    // Wenn # gedrückt wird, prüfe den Pin
    if (taste == '#') {
      if (eingegebenerPin.length() == 4) {
        if (eingegebenerPin == korrekterPin) {
          Serial.println("\nPin korrekt! Zugang gewährt.");
        } else {
          Serial.println("\nPin falsch! Bitte versuchen Sie es erneut.");
        }
        eingegebenerPin = "";
        Serial.println("\nBitte geben Sie den 4-stelligen Pin ein:");
      } else {
        Serial.println("\nPin muss 4-stellig sein! Bitte erneut eingeben:");
        eingegebenerPin = "";
      }
    }

    // Wenn * gedrückt wird, lösche die letzte Ziffer
    else if (taste == '*') {
      if (eingegebenerPin.length() > 0) {
        eingegebenerPin.remove(eingegebenerPin.length() - 1);
        Serial.println("\nLetzte Ziffer gelöscht.");
      }
    }

    // Sonst füge die Ziffer zum aktuellen Pin hinzu
    else {
      eingegebenerPin += taste;
      Serial.print("*");
    }
  }
}
