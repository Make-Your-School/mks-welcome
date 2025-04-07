/* When using multiple readers, you'll need to call the 'listen' function in order to receive any future readings. */

#include <SoftwareSerial.h>
#include <SeeedRFID.h>

#define RFID_RX_PIN 10
#define RFID_TX_PIN 11

#define RFID2_RX_PIN 12
#define RFID2_TX_PIN 13


SeeedRFID RFID(RFID_RX_PIN, RFID_TX_PIN);
RFIDdata tag;

SeeedRFID RFID2(RFID2_RX_PIN, RFID2_TX_PIN);
RFIDdata tag2;

void setup() {
  Serial.begin(9600);
  RFID.listen(); //first, we listen for data on reader #1
}

void loop() { 

  if(RFID.isAvailable()){
    tag = RFID.data();
    Serial.print("RFID card number: ");
    Serial.println(RFID.cardNumber());
    RFID2.listen(); //now start listening for data on reader #2
  }

  if(RFID2.isAvailable()){
    tag2 = RFID2.data();
    Serial.print("RFID2 card number: ");
    Serial.println(RFID2.cardNumber());
    RFID.listen(); //then we listen to reader #1 again...
  }
}
