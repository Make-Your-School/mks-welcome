// ein einfaches Beispiel für einen Endschalter
// verbinde den Anschluss `C` des Schalters mit dem GND Anschluss des Arduino
// verbinde den Anschluss `NO` des Schalters mit dem PIN 2 des Arduino


const int endschalterPin = 2;
bool endschalterStatus = false;

void setup() {
    // wir warten 1 sekunde bis der Computer so weit ist..
    delay(1000);
    // initialiseiren die Seriale schnittstelle (die Text-Ausgabe-Verbindung zum Computer)
    Serial.begin(115200);
    // und zeigen was gerade auf dem Arduino *läuft*..
    Serial.println("Make Your School Beispiel Sketch: Endschalter_minimal.ino");

    // wir nutzen den im Arduino eingebauten PULLUP wiederstand.
    // dadurch invertiert sich die abfrage logic unten.
    pinMode(inputPin, INPUT_PULLUP);
}

void loop() {
    // lese endschalter ein und speichere den Status in einer Variable.
    bool endschalterStatusNeu = digitalRead(endschalterPin);
    // prüfe oder der Status sich verändert hat
    if (endschalterStatus != endschalterStatusNeu) {
        // status hat sich verändert!!
        // wir warten nun 30ms. damit *entprellen* wir den taster
        endschalterStatus != endschalterStatusNeu
        delay(30);
        // update unsere  globale Status Variable
        endschalterStatus = endschalterStatusNeu;
        
        // reagiere nun auf die Status Veränderung
        // Wenn der Status == LOW ist, ist der Endschalter gedrückt worden.
        if (endschalterStatus == LOW) {
            Serial.println("Endschalter wurde gerade gedrückt!");
        } else {
            Serial.println("Endschalter wurde wieder geöffnet.");
        }
    }
}
