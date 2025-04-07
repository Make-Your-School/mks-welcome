/*
  RDM6300-125KHz-RFID

  based on www.mschoeffler.de Arduino Examples

  modified on 20 Jan 2020
  by Amir Mohammad Shojaee @ Electropeak
  https://electropeak.com/learn/interfacing-rdm6300-125khz-rfid-reader-module-with-arduino/

  20230213 s-light.eu stefan krüger
    extracted RFID code into extra file.
*/

#include "RFID.h"


void setup() {
  Serial.begin(115200);

  Serial.println("RFID_125kHz_RDM6300__withIdDecoding.ino");
  RFID_setup();
  Serial.println("INIT DONE");
}

void loop() {
  int32_t tag = RFID_update(true);
  if (tag > -1) {
      tag_found(tag);
  }
}


void tag_found(int32_t tag) {
  Serial.print("Found Tag: ");
  Serial.print(tag);
  Serial.println();
}
