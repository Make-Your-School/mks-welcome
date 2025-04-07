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





struct person_t {
  int32_t tag;
  String name;
  uint8_t age;
};

const person_t person_list[] = {
  {
    230583729, // tag
    "Bob",
    17
  },
  {
    272930485, // tag
    "Orange",
    35
  },
};

// get size of memory for person, divide by size of type to get count...
const uint8_t person_list_COUNT = sizeof(person_list) / sizeof(person_t);






void setup() {
  Serial.begin(115200);

  Serial.println("RFID_125kHz_RDM6300__withIdDecoding__cardLookup.ino");
  RFID_setup();
  Serial.println("INIT DONE");
}

void loop() {
  int32_t tag = RFID_update();
  if (tag > -1) {
      tag_found(tag);
  }
}





void tag_found(int32_t tag) {
  Serial.print("Found Tag: ");
  Serial.print(tag);
  Serial.println();
  int8_t person_index = find_person_index(tag);
  if (person_index != -1) {
    // person found:
    Serial.print("Found Person: ");
    Serial.print(person_list[person_index].name);
    Serial.print(" (");
    Serial.print(person_list[person_index].age);
    Serial.print(")");
    Serial.println();
  } else {
    Serial.println("Tag Unknown.");
  }

}



int8_t find_person_index(int32_t tag) {
    // we return -1 if we do not find a match...
    int8_t person_index = -1;
    for(size_t i=0; i < person_list_COUNT; i++) {
        if (person_list[i].tag == tag) {
            person_index = i;
        }
    }
    return person_index;
}
