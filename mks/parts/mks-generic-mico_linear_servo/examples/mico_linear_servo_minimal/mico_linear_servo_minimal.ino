
#include <Servo.h>

Servo myservo; // erstellt ein Servo-Objekt, um einen Servomotor zu steuern

int potpin = 0; // Analog Pin, an dem das Potentiometer angeschlossen ist
int val; // Variable um den Wert des Analogen Pin zwischenzuspeichern

void setup() {
  myservo.attach(9); // verknüpft den Servomotor an Pin 9 mit dem Servo-Objekt
}

void loop() {
  val = analogRead(potpin); // liest das Potentiometer aus (Wert zwischen 0 und 1023)
  val = map(val, 0, 1023, 0, 180); // rechnet den Wert in den Wertebereich des Servomotors (zwischen 0 und180)
  myservo.write(val); // überträgt die Zielposition an den Servomotors
  delay(15); // lässt dem Servomotor Zeit, die Zielposition zu erreichen
}
