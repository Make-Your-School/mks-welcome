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

void setup() {
  // Beginne die Kommunikation mit dem Laptop
  Serial.begin(9600);
}

void loop() {
  // Lese aus ob eine Taste gedrückt wird
  char taste = keypad.getKey();

  // Schreibe in den Seriellen Monitor, wenn eine Taste gedrückt wird
  if (taste) {
    Serial.print("Taste wurde gedrückt: ");
    Serial.println(taste);
  }
}