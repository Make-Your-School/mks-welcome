#include <SoftwareSerial.h>
#define RxD 6 // auf diesem Pin empfängt der Arduino Daten vom Bluetooth-Modul (R = receive)
#define TxD 7 // auf diesem Pin sendet der Arduino Daten an das Bluetooth-Modul (T = transmit)

SoftwareSerial Bluetooth(RxD, TxD); // Bluetoothmodul an D6 auf dem Grove Shield anschließen

char command = '0';

void setup() {
  pinMode(RxD, INPUT);
  pinMode(TxD, OUTPUT);
  Serial.begin(9600);
  Bluetooth.begin(9600);
  delay(100);
  Serial.flush();
  Bluetooth.flush();
  Serial.println("Los geht's");
}

void loop() {
  // Daten vom Bluetooth-Modul empfangen und an PC weiterleiten
  if (Bluetooth.available()) {
    command = Bluetooth.read();
    Serial.write(command);
  }

  // Daten vom PC (serieller Monitor) an das Bluetooth-Modul senden
  if (Serial.available()) {
    Bluetooth.write(Serial.read());
  }
}
