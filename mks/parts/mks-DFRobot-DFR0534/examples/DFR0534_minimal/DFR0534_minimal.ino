// Minimal Beispiel für das MP3 Modul DFR0534

#include <DFR0534.h>
#include <SoftwareSerial.h>

#define TX_PIN A1
#define RX_PIN A0
SoftwareSerial mp3_serial(RX_PIN, TX_PIN);
DFR0534 mp3_audio(mp3_serial);

void setup() {
    // Serial für Informationen am Laptop
    Serial.begin(115200);

    // Software serial für die Kommunikation mit dem MP3 Module (DFR0534)
    mp3_serial.begin(9600);

    // Setze Lautstärke (0..30)
    mp3_audio.setVolume(18);
}

void loop() {

    // für die Dateinamen dieses format Verwenden:
    // "/01BELL  MP3"
    // "/02DOOR*WAV"
    // "/03*MP3"
    //
    // - falls der Dateiname weniger als 8 Zeichen hat 
    //     die fehlenden Zeichen mit Leerzeichen füllen.
    // - oder zum füllen das * verwenden
    // - nur GROßBUCHSTABEN verwenden
    // - den Punkt weglassen
    // - der Datei-Typ (MP3 oder WAV) muss angegeben werden

    Serial.println("play /BELL*MP3");
    mp3_audio.playFileByName("/BELL*MP3");
    delay(4000);

    Serial.println("play /DOOR*WAV");
    mp3_audio.playFileByName("/DOOR*WAV");
    delay(4000);

    Serial.println("play /03*MP3");
    mp3_audio.playFileByName("/03*MP3");
    delay(4000);
}
