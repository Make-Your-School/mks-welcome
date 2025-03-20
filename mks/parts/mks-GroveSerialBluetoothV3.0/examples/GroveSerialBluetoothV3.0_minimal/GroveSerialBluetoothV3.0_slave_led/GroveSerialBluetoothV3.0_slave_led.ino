/*
Mit diesem Programm kann man eine LED über Bluetooth an-/ausschalten.
Bevor man dieses Programm nutzt, sollte das Bluetooth-Modul (einmalig) konfiguriert werden.
Wie das funktioniert steht in "Anleitungen - Bluetooth-Modul konfigurieren".
Für einen einfachen Einstieg reicht es aus, das Modul auf Werkseinstellungen zu setzen.
*/

#include <SoftwareSerial.h>
#define RxD 6 // Auf diesem Pin empfängt der Arduino Daten vom Bluetooth-Modul (R = receive)
#define TxD 7 // Auf diesem Pin sendet der Arduino Daten an das Bluetooth-Modul (T = transmit)
#define LED_Pin 13 // auf dem Arduino ist eine LED fest verbaut. Diese ist an Pin 13 angeschlossen.

SoftwareSerial Bluetooth(RxD, TxD); // Bluetoothmodul an D6 auf dem Grove Shield anschließen

char command = '0';

void setup() {
  pinMode(RxD, INPUT);
  pinMode(TxD, OUTPUT);
  pinMode(LED_Pin, OUTPUT);
  Serial.begin(9600);
  Bluetooth.begin(9600);
}

void loop() {
  if (Bluetooth.available())  //wenn neue Daten angekommen sind...
  {
    command = Bluetooth.read();  //Daten lesen und in "command" abspeichern
    Serial.print(command);

    if (command == '1') {digitalWrite(LED_Pin, HIGH);}  // wenn eine "1" empfangen wurde: LED anschalten
    else                {digitalWrite(LED_Pin, LOW);}   // bei jedem anderen empfangenen Zeichen: LED ausschalten
  }
}
