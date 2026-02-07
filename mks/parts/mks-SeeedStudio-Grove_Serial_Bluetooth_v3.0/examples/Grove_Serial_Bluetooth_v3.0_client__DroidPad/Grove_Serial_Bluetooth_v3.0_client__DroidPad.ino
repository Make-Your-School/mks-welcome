/*
DroidPad * Arduino
details siehe readme.md
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

String befehl = "";

void setup() {
    pinMode(RxD, INPUT);
    pinMode(TxD, OUTPUT);
    pinMode(LED_Pin, OUTPUT);
    Serial.begin(9600);
    Bluetooth.begin(9600);
    Serial.println("Grove_Serial_Bluetooth_v3.0__DroidPad.ino");
}

void loop() {
    // wenn neue Daten angekommen sind...
    if (Bluetooth.available()) {
        // debugOutput();
        checkInput();
    }
}

void checkInput() {
    // Daten lesen und in "befehl" abspeichern
    String objID = Bluetooth.readStringUntil(',');
    String objType = Bluetooth.readStringUntil(',');
    String objAction = Bluetooth.readStringUntil('\n');
    Serial.println("empfangener Befehl:");
    Serial.print("    id: '");
    Serial.print(objID);
    Serial.println("'");
    Serial.print("    type: '");
    Serial.print(objType);
    Serial.println("'");
    Serial.print("    action: '");
    Serial.print(objAction);
    Serial.println("'");
    bearbeiteEvent(objID, objType, objAction);
}

void bearbeiteEvent(String id, String type, String action) {
    if (id == "led") {
        if (action == "CLICK") {
            // wechsele status der led
            // lese aktuellen zustand
            bool LEDState = digitalRead(LED_Pin);
            // invertiere zustand
            LEDState = !LEDState;
            // schreibe neuen zustand zur led pin
            digitalWrite(LED_Pin, LEDState);

            // sende aktuellen zustand an app zurück
            // dieser wird sehr speziell als JSON codiert..
            if (LEDState) {
                const String msg = "{\"id\": \"led\",\"type\": \"LED\",\"state\": \"ON\"}";
                Serial.println(" → sende 'led on' an app..");
                Bluetooth.println(msg);
                Bluetooth.flush();
            } else {
                const String msg = "{\"id\": \"led\",\"type\": \"LED\",\"state\": \"OFF\"}";
                Serial.println(" → sende 'led off' an app..");
                Bluetooth.println(msg);
                Bluetooth.flush();
            }
        }
    }
}

void debugOutput() {
    // Daten lesen und in "befehl" abspeichern
    // lese bis zeilenende (newline)
    befehl = Bluetooth.readStringUntil('\n');
    Serial.print("empfangener Befehl: '");
    Serial.print(befehl);
    Serial.println("'");
}
