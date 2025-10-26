// link between the computer and the RFID Shield
// at 9600 bps 8-N-1
// Computer is connected to Hardware UART
// SoftSerial Shield is connected to the Software UART:D2 & D3

#include <SoftwareSerial.h>

SoftwareSerial RFID(2, 3);
// buffer array for data receive over serial port
unsigned char buffer[64];
// counter for buffer array
int count = 0;

void setup() {
    RFID.begin(9600);

    Serial.begin(9600);
    delay(100);
    Serial.flush();
    Serial.println("RFID Reader - Los geht's");
}

void loop() {
    // if date is coming from software serial port ==> data is coming from
    // RFID shield
    if (RFID.available()) {
        // reading data into char array
        while (RFID.available()) {
            // writing data into array
            buffer[count++] = RFID.read();
            if (count == 64)
                break;
        }
        // if no data transmission ends, write
        // buffer to hardware serial port
        Serial.write(buffer, count);
        // call clearBufferArray function to clear the
        // stored data from the array
        clearBufferArray();
        // set counter of while loop to zero
        count = 0;
    }
    // if data is available on hardware serial port ==>
    // data is coming from PC or notebook
    if (Serial.available()) {
        // write it to the RFID shield
        RFID.write(Serial.read());
    }
}

void clearBufferArray() {
    // function to clear buffer array
    // clear all index of array with command NULL
    for (int i = 0; i < count; i++) {
        buffer[i] = NULL;
    }
}
