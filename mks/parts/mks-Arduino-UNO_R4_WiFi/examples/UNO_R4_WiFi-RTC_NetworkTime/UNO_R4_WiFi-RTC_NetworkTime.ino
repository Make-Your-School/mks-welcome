// Extra benötigte Libraries:
// - NTPClient
// - ArduinoGraphics

#include "RTC.h"

#include <NTPClient.h>

#include "arduino_secrets.h"
#include <WiFiS3.h>
#include <WiFiUdp.h>

#include <ArduinoGraphics.h>
#include <Arduino_LED_Matrix.h>

// bitte deine Sensitiven-Daten in dem tab/arduino_secrets.h anpassen.
char ssid[] = SECRET_SSID;
char pass[] = SECRET_PASS;

auto timeZoneOffsetHours = 1;

int wifiStatus = WL_IDLE_STATUS;
WiFiUDP Udp;
NTPClient timeClient(Udp);

ArduinoLEDMatrix matrix;

void printWifiStatus() {
    // ssid == WiFi netzwerk name
    Serial.print("SSID: ");
    Serial.println(WiFi.SSID());

    IPAddress ip = WiFi.localIP();
    Serial.print("IP Address: ");
    Serial.println(ip);

    // zeige wie gut das Signal ist
    long rssi = WiFi.RSSI();
    Serial.print("signal strength (RSSI):");
    Serial.print(rssi);
    Serial.println(" dBm");
}

void connectToWiFi() {
    // check for the WiFi module:
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

void displayTime() {
    RTCTime tempTime;
    RTC.getTime(tempTime);
    char text[] = "00:00:00\0";
    sprintf(text, "%02d:%02d:%02d", tempTime.getHour(), tempTime.getMinutes(),
            tempTime.getSeconds());

    matrix.beginDraw();
    matrix.textScrollSpeed(80);
    matrix.stroke(0xFFFFFFFF);
    matrix.textFont(Font_5x7);
    matrix.beginText(0, 0, 0xFFFFFF);
    matrix.println(text);
    matrix.endText(SCROLL_LEFT);
    matrix.endDraw();
}

void setup() {
    delay(1000);
    Serial.begin(115200);
    while (!Serial) {
        // warte bis der computer sich mit dem Arduino Seriell verbunden hat.
        ;
    }
    delay(500);
    Serial.println("UNO_R4_WiFi_RTC_NetworkTime.ino");

    matrix.begin();

    matrix.beginDraw();
    matrix.stroke(0xFFFFFFFF);
    matrix.textFont(Font_5x7);
    matrix.clear();
    matrix.text("??", 0, 0);
    matrix.endDraw();
    delay(100);

    connectToWiFi();
    RTC.begin();

    Serial.println("\nStarte Verbindung zu NTP Server...");
    timeClient.begin();
    timeClient.update();

    // hole aktuelle Zeit und konvertiere diese entsprechend.
    auto unixTime = timeClient.getEpochTime() + (timeZoneOffsetHours * 3600);
    Serial.print("Unix time = ");
    Serial.println(unixTime);
    RTCTime timeToSet = RTCTime(unixTime);
    RTC.setTime(timeToSet);

    // Retrieve the date and time from the RTC and print them
    RTCTime currentTime;
    RTC.getTime(currentTime);
    Serial.println("Die RTC ist nun auf '" + String(currentTime) +
                   "' gesetzt.");

    matrix.beginDraw();
    matrix.clear();
    matrix.endDraw();
}

void loop() {
    // diese Funktion läuft solange bis der Text einmal über die LEDMatrix
    // gescrollt hat.
    displayTime();
}
