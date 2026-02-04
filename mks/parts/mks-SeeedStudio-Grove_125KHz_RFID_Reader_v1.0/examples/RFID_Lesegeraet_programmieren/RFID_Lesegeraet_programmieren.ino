/*
  RFID_Lesegeraet_programmieren

  based on https://github.com/MakeYourSchool/52-RFID-Leser 
  and https://www.youtube.com/watch?v=dJXTgtIMUPw

  modified on 16 Dec 2025
  by klemens wohlfarth, added comments
*/

#include <SoftwareSerial.h>

// RFID-Leser an PIN 2 (RX/Empfangen) und PIN 3 (TX/Senden) anschließen
SoftwareSerial SoftSerial(2, 3);

char Karten_ID[64];
char Zwischenspeicher;
int Zaehler = 0;
bool zugang_erlaubt = false;

// ID unserer Zugangskarte
char Zugangskarte[12] = "020077115F3B";

void setup()
{
  SoftSerial.begin(9600);
  Serial.begin(9600);
}

void loop()
{

  if (SoftSerial.available()) {

    Zwischenspeicher = SoftSerial.read();

    if (Zwischenspeicher == 0x02) {
      // Zeichen 0x02 markiert den Start der Karten ID
      Zaehler = 0;
      clear_card_value();
    } else if (Zwischenspeicher == 0x03) {
	    // Zeichen 0x03 markiert das Ende der Karten ID

	    // vergleiche die angelegte Karte mit unserer Zugangskarte
      if (strcmp(Karten_ID, Zugangskarte) == 0) {
        // angelegte Karte ist unsere Zugangskarte -> Zugang erlaubt
        zugang_erlaubt = 1;
      } else {
        // angelegte Karte ist NICHT unsere Zugangskarte -> Zugang NICHT erlaubt
        zugang_erlaubt = 0;
      }

      Serial.println(Karten_ID);
      Serial.println("Zugang erlaubt: " + String(zugang_erlaubt));
    } else {
      // alle anderen Zeichen sind Teil der Karten ID und werden in den Karten_ID Speicher geschrieben
      Karten_ID[Zaehler] = Zwischenspeicher;
      Zaehler += 1;
    }
  }
}

void clear_card_value() {
  for (int i = 0; i < 64; i++) {
    Karten_ID[i] = NULL;
  }
}