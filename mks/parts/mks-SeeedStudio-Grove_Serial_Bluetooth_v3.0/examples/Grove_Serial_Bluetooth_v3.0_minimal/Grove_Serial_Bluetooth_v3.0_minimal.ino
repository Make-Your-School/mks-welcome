// Einfacher Test: Sende Daten des Seriellen-Ports an das Bluetooth module

#include <SoftwareSerial.h>

// auf diesem Pin empfängt der Arduino Daten vom Bluetooth-Modul (R = receive)
#define RxD 6
// auf diesem Pin sendet der Arduino Daten an das Bluetooth-Modul (T = transmit)
#define TxD 7

// Bluetoothmodul an D6 auf dem Grove Shield anschließen
SoftwareSerial Bluetooth(RxD, TxD);

char command = '0';

void setup() {
    Serial.begin(9600);

    pinMode(RxD, INPUT);
    pinMode(TxD, OUTPUT);
    Bluetooth.begin(9600);

    delay(100);
    Serial.flush();
    Bluetooth.flush();

    Serial.println("Los geht's");
}

void loop() {
    // Daten vom Bluetooth-Modul empfangen und an PC weiterleiten
    if (Bluetooth.available()) {
        command = Bluetooth.read();
        Serial.write(command);
    }

    // Daten vom PC (serieller Monitor) an das Bluetooth-Modul senden
    if (Serial.available()) {
        Bluetooth.write(Serial.read());
    }
}
