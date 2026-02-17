
const int ledPin=13; // Nutze digitalen Pin13 um anzuzeigen, ob eine Vibration detektiert wird. 
// Alternativ kann auch über die Serielle Ausgabe der Zustand von Pin13 ausgegeben werden. Somit wird keine LED benötigt.

void setup() {
    Serial.begin(9600);
    pinMode(ledPin,OUTPUT);
}

void loop() {
    int sensorState = digitalRead(2);
    Serial.println(sensorState);
    delay(100);
    if(sensorState == HIGH)
    {
        digitalWrite(ledPin,HIGH);
    }
    else
    {
        digitalWrite(ledPin,LOW);
    }
}
