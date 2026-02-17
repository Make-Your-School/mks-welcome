// Der digitale Pin des Schalters
const int pinTaster = 4;

// Eine Variable um den Zustand des Tasters zu merken
int zustandTaster = 0;

void setup() {
    // Wir sagen dem Arduino, dass der Schalter ein Input ist
    pinMode(pinTaster, INPUT_PULLUP);

    // Starte die serielle Verbindung
    Serial.begin(9600);
}

void loop(){

  // Wir lesen den Schalterzustand aus und speichern ihn ab
  zustandTaster = digitalRead(pinTaster);

  // WENN der Schalter angeschalten ist, dann ...
  if (zustandTaster == LOW) {
      // Und wir schreiben es in die Console
      Serial.println("Taster an!");
  } else {
      // wenn nicht,
      // dann schreiben wir es auch in die Konsole
      Serial.println("Taster aus!");
  }

  // Warte eine halbe Sekunde
  delay(500);
}