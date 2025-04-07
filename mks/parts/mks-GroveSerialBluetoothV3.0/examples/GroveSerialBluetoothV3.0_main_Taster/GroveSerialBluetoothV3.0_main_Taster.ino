/*
Dieser Sketch Sendet jeden Tastendruck per Bluetooth an ein anderes Bluetooth
Gerät. passt zu dem Sketch GroveSerialBluetoothV3.0_client_LED
den Taster an PIN A0 anschließen.
*/

#include <SoftwareSerial.h>
// Auf diesem Pin empfängt der Arduino Daten vom Bluetooth-Modul (R = receive)
#define RxD 6
// Auf diesem Pin sendet der Arduino Daten an das Bluetooth-Modul (T = transmit)
#define TxD 7

#define TASTER_PIN A0

// Bluetoothmodul an D6 auf dem Grove Shield anschließen
SoftwareSerial Bluetooth(RxD, TxD);

char command = '0';

void setup() {
    pinMode(TASTER_PIN, INPUT);
    pinMode(LED_Pin, OUTPUT);

    Serial.begin(115200);

    Bluetooth.begin(9600);

    delay(500);
    Serial.println("GroveSerialBluetoothV3.0_main_Taster.ino");

    // Konfiguriere das Bluetooth Modul as main
    Bluetooth.print("AT+DEFAULT");
    delay(100);
    Bluetooth.print("AT+ROLEM");
    delay(100);
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
