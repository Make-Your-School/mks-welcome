# Taster

- Schließe den Taster an den Arduino an
    - ein Pin mit Masse / GND (0V) verbinden
    - den anderen Taster-Pin an den Pin D4 des Arduino
- lade den Beispiel-Code auf den Arduino
- öffne den Seriellen Monitor
- stelle die Geschwindigkeit des Seriellen Monitor auf 115200
- dieser Zeigt nun mit 
    - 0 das der Taster gedrückt ist (der Pin wird auf Masse = LOW = 0 _gezogen_)
    - 1 das der Taster *offen* ist (der Pin wird mit dem internen PullUp auf die Betriebsspannung 5V _gezogen_)

## Aufgabe
finde einen Booleschen Operator in der Arduino Hilfe um den gelesenen Wert zu Invertieren.
dadurch wird die Anzeige im Serial Monitor für uns *Logischer*: 
- `0` ist *aus* 
- `1` ist Taster gedrückt

- [Tipp: Arduino Reference](https://docs.arduino.cc/language-reference/de/#struktur)
