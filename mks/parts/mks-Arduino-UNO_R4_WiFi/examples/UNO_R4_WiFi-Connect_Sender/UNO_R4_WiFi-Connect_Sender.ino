
#include "arduino_secrets.h"
#include <WiFiS3.h>
#include <WiFiUdp.h>

// bitte deine Sensitiven-Daten in dem tab/arduino_secrets.h anpassen.
char ssid[] = SECRET_SSID;
char pass[] = SECRET_PASS;

int wifiStatus = WL_IDLE_STATUS;
WiFiUDP Udp;
const unsigned int udpPort = 2390;

const int inputPin = A0;
int inputOld = 0;

void printWifiStatus() {
    // ssid == WiFi netzwerk name
    Serial.print("SSID: ");
    Serial.println(WiFi.SSID());

    IPAddress ip = WiFi.localIP();
    Serial.print("IP Address: ");
    Serial.println(ip);

    IPAddress ipGateway = WiFi.gatewayIP();
    Serial.print("Gateway/AccessPoint IP Address: ");
    Serial.println(ipGateway);

    // zeige wie gut das Signal ist
    long rssi = WiFi.RSSI();
    Serial.print("signal strength (RSSI):");
    Serial.print(rssi);
    Serial.println(" dBm");
}

void connectToWiFi() {
    if (WiFi.status() == WL_NO_MODULE) {
        Serial.println("Verbindung zu WiFi module fehlgeschlagen!");
        // wir können hier nicht weitermachen.
        // also bleiben wir extra in einer Endlosschleife hängen.
        while (true)
            ;
    }

    String fv = WiFi.firmwareVersion();
    if (fv < WIFI_FIRMWARE_LATEST_VERSION) {
        Serial.println(
            "Bitte die firmware des Wifi-Sub-Systems aktualisieren.");
        Serial.println("https://support.arduino.cc/hc/en-us/articles/"
                       "9670986058780-Update-the-connectivity-module-firmware-"
                       "on-UNO-R4-WiFi");
    }

    while (wifiStatus != WL_CONNECTED) {
        Serial.println("verbinden mit SSID '" + String(ssid) + "' ...");
        // verbinde mit WPA/WPA2 netzwerk.
        wifiStatus = WiFi.begin(ssid, pass);

        // warte 10s:
        Serial.print("warten ");
        for (int i; i < 10; i++) {
            delay(1000);
            Serial.print(". ");
        }
        Serial.println();
    }

    Serial.println("Erfolgreich mit WiFi '" + String(ssid) + "' verbunden.");
    printWifiStatus();
}

void sendeWertAnEmpfaenger(bool inputValue) {
    Serial.println("sende Wert '" + String(inputValue) + "' an Empfänger.");
    Udp.beginPacket(WiFi.gatewayIP(), udpPort);
    Udp.write(inputValue);
    Udp.endPacket();
}

void setup() {
    delay(500);
    Serial.begin(115200);
    unsigned long startZeit = millis();
    while ((!Serial) && ((millis() - startZeit) < 6000)) {
        // warte bis der computer sich mit dem Arduino Seriell verbunden hat.
        // oder mache nach über 6s warten ohne Verbindung weiter.
        1;
    }
    delay(500);
    Serial.println("UNO_R4_WiFi_Connect_Sender.ino");

    pinMode(inputPin, INPUT_PULLUP);

    connectToWiFi();

    Udp.begin(udpPort);
}

unsigned long timeStamp_lastPrint = millis();

void loop() {
    bool inputNow = digitalRead(inputPin);
    if (inputOld != inputNow) {
        inputOld = inputNow;
        // taster hat sich verändert.
        sendeWertAnEmpfaenger(inputNow);
    }

    // zeige alle 0.5s im SerialMonitor
    while ((millis() - timeStamp_lastPrint) > 500) {
        timeStamp_lastPrint = millis();
        Serial.println(inputNow);
    }
}
