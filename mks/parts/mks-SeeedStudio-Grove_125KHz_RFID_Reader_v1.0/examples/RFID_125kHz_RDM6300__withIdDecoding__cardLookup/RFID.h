#include "Stream.h"
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

24.05.2025 s-light.eu stefan krüger
tweaked converting tag and checksum


*/

// decoding info
// https://forum.arduino.cc/t/rdm6300-reading-format/1072597/10
// https://elty.pl/upload/download/RFID/RDM630-Spec.pdf
// RFID DATA FRAME FORMAT:
//      1byte head (value: 2),
//      10byte data (2byte version + 8byte tag),
//      2byte checksum,
//      1byte tail (value: 3)
const int BUFFER_SIZE = 14;
// 2byte version (actual meaning of these two bytes may vary)
const int DATA_VERSION_SIZE = 2;
// 8byte tag
const int DATA_TAG_SIZE = 8;
// 10byte data (2byte version + 8byte tag)
const int DATA_SIZE = DATA_VERSION_SIZE + DATA_TAG_SIZE;
// 2byte checksum
const int CHECKSUM_SIZE = 2;
const int PAYLOAD_SIZE = DATA_SIZE + CHECKSUM_SIZE;

const int MSG_HEAD = 0x02;
const int MSG_TAIL = 0x03;

// union
// https://legacy.cplusplus.com/doc/tutorial/other_data_types/
union data_t {
    char raw[DATA_SIZE];
    struct {
        char version[DATA_VERSION_SIZE];
        char tag[DATA_TAG_SIZE];
    };
};
union message_t {
    char raw[PAYLOAD_SIZE];
    struct {
        // char head;
        data_t data;
        char checksum[CHECKSUM_SIZE];
        // char tail;
    };
};

// used to store an incoming data frame
message_t buffer; 
int buffer_index = 0;

#include <SoftwareSerial.h>
SoftwareSerial swSerialRFID = SoftwareSerial(2, 3);

// ******************************************
// declare functions
// this way we are free in the implementation order...

void RFID_setup();
uint32_t RFID_update(bool detailed_output = false);
uint32_t extract_tag(bool detailed_output = false);
uint32_t hexstr_to_value(char *str, unsigned int length);
String tagDecimalToString(uint32_t decimal);

// ******************************************
// implementation

void RFID_setup(void) {
    swSerialRFID.begin(9600);
    swSerialRFID.listen();
}

uint32_t RFID_update(bool detailed_output = false) {
    // returns tag id if tag is read. 0 otherwise.
    int32_t tag = 0;
    if (swSerialRFID.available() > 0) {
        bool call_extract_tag = false;

        int ssvalue = swSerialRFID.read(); // read
        // Serial.print("ssvalue : ");
        // Serial.print(ssvalue, DEC);
        // Serial.print(" - 0x");
        // Serial.print(ssvalue, HEX);
        // Serial.print(" - ");
        // Serial.print(char(ssvalue));
        // Serial.println("");
        if (ssvalue == -1) {
            // no data was read
        } else {
            // RDM630/RDM6300 found a tag => tag incoming
            if (ssvalue == MSG_HEAD) {
                buffer_index = 0;
            } else if (ssvalue == MSG_TAIL) {
                // tag has been fully transmitted
                // extract tag at the end of the function call
                call_extract_tag = true;
            } else {
                // checking for a buffer overflow (It's very unlikely that
                // an buffer overflow comes up!)
                if (buffer_index >= BUFFER_SIZE) {
                    Serial.println("Error: Buffer overflow detected! ");
                } else {
                    // everything is alright => copy current value to buffer
                    buffer.raw[buffer_index++] = ssvalue;
                }
            }

            if (call_extract_tag == true) {
                if (buffer_index == PAYLOAD_SIZE) {
                    tag = extract_tag(detailed_output);
                } else {
                    // something is wrong...
                    // start again looking for MSG_HEAD
                    buffer_index = 0;
                    return;
                }
            }
        }
    }
    return tag;
}

uint32_t extract_tag(bool detailed_output = false) {
    uint32_t tagDecimal = hexstr_to_value(buffer.data.tag, DATA_TAG_SIZE);
    uint32_t checksumDecimal = hexstr_to_value(buffer.checksum, CHECKSUM_SIZE);

    // Serial.println("calculate decimal checksum: ");
    uint32_t checksumDecimalCalculated = 0;
    for (int i = 0; i < DATA_SIZE; i += 2) {
        // why ever - this does not work..
        // uint32_t val = hexstr_to_value(buffer.data.raw[i], 2);
        // this AI generated code snippet works as expected.
        char byteStr[3];
        byteStr[0] = buffer.data.raw[i];
        byteStr[1] = buffer.data.raw[i + 1];
        byteStr[2] = '\0'; // null-terminate the string
        uint8_t byteValue = (uint8_t)strtol(byteStr, NULL, 16);

        // Serial.print("  ");
        // Serial.print(i);
        // Serial.print(" ");
        // Serial.print("'");
        // Serial.print(char(buffer.data.raw[i]));
        // Serial.print("'");
        // Serial.print(" → ");
        // Serial.print(val);
        // Serial.print(" → ");
        // Serial.print(byteValue);
        // Serial.println();
        checksumDecimalCalculated ^= byteValue;
    }

    // print message that was sent from RDM630/RDM6300
    if (detailed_output) {
        Serial.println("------------------------------------------");

        Serial.println("Buffer content:");
        Serial.print("HEX  : ");
        for (int i = 0; i < BUFFER_SIZE; ++i) {
            Serial.print(buffer.raw[i]);
            Serial.print(" ");
        }
        Serial.println(";");
        Serial.print("char  : ");
        for (int i = 0; i < BUFFER_SIZE; ++i) {
            Serial.print(char(buffer.raw[i]));
            Serial.print(" ");
        }
        Serial.println(";");

        Serial.println("------------------------------------------");

        Serial.println("DATA content:");

        Serial.print("ASCII: ");
        for (int i = DATA_VERSION_SIZE; i < DATA_SIZE; ++i) {
            Serial.print(char(buffer.raw[i]));
            Serial.print(" ");
        }
        Serial.println("; char()");

        Serial.print("ASCII: ");
        for (int i = 0; i < DATA_SIZE; ++i) {
            Serial.print(char(buffer.data.raw[i]));
            Serial.print(".");
        }
        Serial.println("; char()");

        Serial.println("------------------------------------------");
        // Serial.print("hexCStrToString: ");
        // Serial.print(hexCStrToString(buffer));

        Serial.println("Message (HEX): ");

        // Serial.print("  head    : ");
        // Serial.print(char(buffer.head));
        // Serial.println("");

        Serial.print("  version : ");
        for (int i = 0; i < DATA_VERSION_SIZE; ++i) {
            Serial.print(char(buffer.data.version[i]));
            Serial.print(" ");
        }
        Serial.println("");

        Serial.print("  tag     : ");
        for (int i = 0; i < DATA_TAG_SIZE; ++i) {
            Serial.print(char(buffer.data.tag[i]));
            Serial.print(" ");
        }
        Serial.println("");

        Serial.print("  checksum: ");
        for (int i = 0; i < CHECKSUM_SIZE; ++i) {
            Serial.print(char(buffer.checksum[i]));
        }
        Serial.println("");

        // Serial.print("  tail    : ");
        // Serial.print(char(buffer.tail));
        // Serial.println("");

        Serial.println("------------------------------------------");

        Serial.print("Extracted Tag: ");
        Serial.println(tagDecimal);

        Serial.println(tagDecimalToString(tagDecimal));

        Serial.println("checksum: ");
        Serial.print("  ");
        // compare calculated checksum to retrieved checksum
        if (checksumDecimalCalculated == checksumDecimal) {
            // checksum matches.
            Serial.print("OK");
        } else {
            // checksums mismatch
            Serial.print("mismatch");
            Serial.println();
            Serial.print("  checksumDecimal: ");
            Serial.println(checksumDecimal);
            Serial.print("  checksumDecimalCalculated: ");
            Serial.println(checksumDecimalCalculated);
        }
        Serial.println();

        Serial.println("------------------------------------------");
    }

    if (checksumDecimalCalculated != checksumDecimal) {
        // checksum mismatch
        // so we return 0.
        tagDecimal = 0;
    }
    return tagDecimal;
}

uint32_t hexstr_to_value(char *str, unsigned int length) {
    // converts a hexadecimal value (encoded as ASCII string) to a numeric value
    char *copy = malloc((sizeof(char) * length) + 1);
    // the variable "copy" is a copy of the parameter "str".
    memcpy(copy, str, sizeof(char) * length);
    // "copy" has an additional '\0' element to make sure that "str" is
    // null-terminated.
    copy[length] = '\0';
    // strtol converts a null-terminated string to a long value
    uint32_t value = strtol(copy, NULL, 16);
    // clean up
    free(copy);
    return value;
}

String tagDecimalToString(uint32_t decimal) {
    String decimalStr = String(decimal);
    while (decimalStr.length() < 10) {
        decimalStr = "0" + decimalStr;
    }
    return decimalStr;
}
