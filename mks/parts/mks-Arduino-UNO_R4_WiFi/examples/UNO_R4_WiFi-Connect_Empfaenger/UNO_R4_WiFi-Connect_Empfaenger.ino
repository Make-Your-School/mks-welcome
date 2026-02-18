
#include "arduino_secrets.h"
#include <WiFiS3.h>
#include <WiFiUdp.h>

// bitte deine Sensitiven-Daten in dem tab/arduino_secrets.h anpassen.
char ssid[] = SECRET_SSID;
char pass[] = SECRET_PASS;

int wifiStatus = WL_IDLE_STATUS;
int numClientsOld = 0;
WiFiUDP Udp;
const unsigned int udpPort = 2390;
char packetBuffer[256];
const int outputPin = LED_BUILTIN;

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

    // setze AccessPoint IP
    WiFi.config(IPAddress(192, 168, 4, 1));

    Serial.print("Starte Access Point Modus mit Namen: ");
    Serial.println(ssid);

    wifiStatus = WiFi.beginAP(ssid, pass);
    if (wifiStatus != WL_AP_LISTENING) {
        Serial.println("Fehler beim erzeugen des AccessPoints. STOP.");
        // wir können hier nicht weitermachen.
        // also bleiben wir extra in einer Endlosschleife hängen.
        while (true)
            ;
    }

    // warte 1s
    Serial.print("warten ");
    for (int i = 0; i < 10; i++) {
        delay(100);
        Serial.print(". ");
    }
    Serial.println();

    Serial.println("AccessPoint '" + String(ssid) + "' active.");
    printWifiStatus();
}


void checkEmpfang() {
    // prüfe ob daten empfangen wurden
    int packetSize = Udp.parsePacket();
    if (packetSize) {
        Serial.print("Packet empfangen. größe: ");
        Serial.print(packetSize);
        Serial.print("; von ");
        IPAddress remoteIp = Udp.remoteIP();
        Serial.print(remoteIp);
        Serial.print(":");
        Serial.println(Udp.remotePort());

        // lese das Packet in den Buffer
        int len = Udp.read(packetBuffer, 255);
        if (len > 0) {
            // setze nach dem Inhalt ein 0 zeichen
            // das ist nötig damit wir dann den Inhalt im serial monitor anzeigen können.
            packetBuffer[len] = 0;
        }
        // Serial.print("Inhalt: '");
        // Serial.print(packetBuffer);
        // Serial.print("'");
        // Serial.println();
        bool value = bool(packetBuffer[0]);
        Serial.print("Inhalt: '" + String(value) + "'");
        Serial.println();
        digitalWrite(outputPin, value);
    }
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

    pinMode(outputPin, OUTPUT);

    connectToWiFi();

    Udp.begin(udpPort);
}

unsigned long timeStamp_lastPrint = millis();

void loop() {
    checkEmpfang();
}
