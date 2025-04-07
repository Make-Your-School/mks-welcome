/*
RDM6300-125KHz-RFID

based on www.mschoeffler.de Arduino Examples
https://mschoeffler.com/2018/01/05/arduino-tutorial-how-to-use-the-rdm630-rdm6300-rfid-reader/

modified on 20 Jan 2020
by Amir Mohammad Shojaee @ Electropeak
https://electropeak.com/learn/interfacing-rdm6300-125khz-rfid-reader-module-with-arduino/

20220531 s-light.eu stefan krüger
extracted RFID code into extra file and some light tweaks.
https://github.com/s-light/MYS__52-RFID-Leser/blob/master/examples/RFID_125kHz_RDM6300__withIdDecoding/RFID_125kHz_RDM6300__withIdDecoding.ino
*/

const int BUFFER_SIZE = 14; // RFID DATA FRAME FORMAT: 1byte head (value: 2), 10byte data (2byte version + 8byte tag), 2byte checksum, 1byte tail (value: 3)
const int DATA_SIZE = 10; // 10byte data (2byte version + 8byte tag)
const int DATA_VERSION_SIZE = 2; // 2byte version (actual meaning of these two bytes may vary)
const int DATA_TAG_SIZE = 8; // 8byte tag
const int CHECKSUM_SIZE = 2; // 2byte checksum

uint8_t buffer[BUFFER_SIZE]; // used to store an incoming data frame
int buffer_index = 0;


#include <SoftwareSerial.h>

SoftwareSerial ssrfid = SoftwareSerial(2, 3);


// ******************************************
// declare functions
// this way we are free in the implementation order...

void RFID_setup();
int32_t RFID_update(bool detailed_output = false);
int32_t extract_tag(bool detailed_output = false);
int32_t hexstr_to_value(char *str, unsigned int length);


// ******************************************
// implementation

void RFID_setup(void) {
  ssrfid.begin(9600);
  ssrfid.listen();
}

int32_t RFID_update(bool detailed_output = false) {
    // returns tag id if tag is read. otherwise -1
    int32_t tag = -1;
    if (ssrfid.available() > 0){
        bool call_extract_tag = false;

        int ssvalue = ssrfid.read(); // read
        // Serial.print("ssvalue : '");
        // Serial.print(ssvalue);
        // Serial.println("'");
        if (ssvalue == -1) {
            // no data was read
        } else {
            // RDM630/RDM6300 found a tag => tag incoming
            if (ssvalue == 2) {
                buffer_index = 0;
            } else if (ssvalue == 3) {
                // tag has been fully transmitted
                // extract tag at the end of the function call
                call_extract_tag = true;
            } else {
                // checking for a buffer overflow (It's very unlikely that an buffer overflow comes up!)
                if (buffer_index >= BUFFER_SIZE) {
                    Serial.println("Error: Buffer overflow detected! ");
                } else {
                    // everything is alright => copy current value to buffer
                    buffer[buffer_index++] = ssvalue;
                }
            }

            if (call_extract_tag == true) {
                if (buffer_index == (BUFFER_SIZE - 2) ) {
                    tag = extract_tag(detailed_output);
                } else { // something is wrong... start again looking for preamble (value: 2)
                    buffer_index = 0;
                    return;
                }
            }
        }
    }
    return tag;
}

int32_t extract_tag(bool detailed_output = false) {
    uint8_t msg_head = buffer[0];
    uint8_t *msg_data = buffer + 1; // 10 byte => data contains 2byte version + 8byte tag
    uint8_t *msg_data_version = msg_data;
    uint8_t *msg_data_tag = msg_data + 2;
    uint8_t *msg_checksum = buffer + 11; // 2 byte
    uint8_t msg_tail = buffer[13];

    int32_t tag = hexstr_to_value(msg_data_tag, DATA_TAG_SIZE);

    long checksum = 0;
    for (int i = 0; i < DATA_SIZE; i+= CHECKSUM_SIZE) {
        long val = hexstr_to_value(msg_data + i, CHECKSUM_SIZE);
        checksum ^= val;
    }

    long msg_checksum_int = hexstr_to_value(msg_checksum, CHECKSUM_SIZE);

    // print message that was sent from RDM630/RDM6300
    if (detailed_output) {
        Serial.println("--------");

        Serial.print("Message-Head: ");
        Serial.println(msg_head);

        Serial.println("Message-Data (HEX): ");
        for (int i = 0; i < DATA_VERSION_SIZE; ++i) {
            Serial.print(char(msg_data_version[i]));
        }
        Serial.println(" (version)");
        for (int i = 0; i < DATA_TAG_SIZE; ++i) {
            Serial.print(char(msg_data_tag[i]));
        }
        Serial.println(" (tag)");

        Serial.print("Message-Checksum (HEX): ");
        for (int i = 0; i < CHECKSUM_SIZE; ++i) {
            Serial.print(char(msg_checksum[i]));
        }
        Serial.println("");

        Serial.print("Message-Tail: ");
        Serial.println(msg_tail);

        Serial.println("--");

        Serial.print("Extracted Tag: ");
        Serial.println(tag);

        Serial.print("Extracted Checksum (HEX): ");
        Serial.print(checksum, HEX);

        if (checksum == msg_checksum_int) { // compare calculated checksum to retrieved checksum
            Serial.print(" (OK)"); // calculated checksum corresponds to transmitted checksum!
        } else {
            Serial.print(" (NOT OK)"); // checksums do not match
        }

        Serial.println("");
        Serial.println("--------");
    }

    return tag;
}

int32_t hexstr_to_value(char *str, unsigned int length) {
    // converts a hexadecimal value (encoded as ASCII string) to a numeric value
    char* copy = malloc((sizeof(char) * length) + 1);
    // the variable "copy" is a copy of the parameter "str".
    memcpy(copy, str, sizeof(char) * length);
    // "copy" has an additional '\0' element to make sure that "str" is null-terminated.
    copy[length] = '\0';
    // strtol converts a null-terminated string to a long value
    int32_t value = strtol(copy, NULL, 16);
    // clean up
    free(copy);
    return value;
}
