/*
Mit diesem Programm kann man eine LED über Bluetooth an-/ausschalten.
Bevor man dieses Programm nutzt, sollte das Bluetooth-Modul (einmalig)
konfiguriert werden. Wie das funktioniert steht in "Anleitungen -
Bluetooth-Modul konfigurieren". Für einen einfachen Einstieg reicht es aus, das
Modul auf Werkseinstellungen zu setzen.
*/

#include <SoftwareSerial.h>
// Auf diesem Pin empfängt der Arduino Daten vom Bluetooth-Modul (R = receive)
#define RxD 6
// Auf diesem Pin sendet der Arduino Daten an das Bluetooth-Modul (T = transmit)
#define TxD 7
// auf dem Arduino ist eine LED fest verbaut. Diese ist an Pin 13 angeschlossen.
#define LED_Pin 13

// Bluetoothmodul an D6 auf dem Grove Shield anschließen
SoftwareSerial Bluetooth(RxD, TxD);

char command = '0';

void setup() {
    pinMode(RxD, INPUT);
    pinMode(TxD, OUTPUT);
    pinMode(LED_Pin, OUTPUT);
    Serial.begin(9600);
    Bluetooth.begin(9600);
}

void loop() {
    // wenn neue Daten angekommen sind...
    if (Bluetooth.available()) {
        // Daten lesen und in "command" abspeichern
        command = Bluetooth.read();
        Serial.print("command: '");
        Serial.print(command);
        Serial.println("'");

        if (command == '1') {
            // wenn eine "1" empfangen wurde: LED anschalten
            digitalWrite(LED_Pin, HIGH);
            Serial.println("led an.");
        } else if (command == '\n' || command == '\r') {
            // zeilen ende empfangen - dieses ignorieren wir einfach..
        } else {
            // bei jedem anderen empfangenen Zeichen: LED ausschalten
            digitalWrite(LED_Pin, LOW);
            Serial.println("led aus.");
        }
    }
}
