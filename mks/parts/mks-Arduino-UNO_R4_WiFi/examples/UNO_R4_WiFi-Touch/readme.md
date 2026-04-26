# Touch Sensor

Einige der Pins des Arduino Uno R4 Wifi können als _Touch-Sensoren_ genutzt werden.
Dieses Beispiel zeigt dir, wie das funktioniert.

- Baue dir aus einem Stück Kabel und etwas Alufolie einen Sensor (etwa wie im Bild).
    - Im einfachsten Fall reicht auch nur ein Stück Kabel aus.
- Verbinde diesen mit Pin A1.
- Installiere die folgende Library über den Library-Manager:
    - `Arduino_CapacitiveTouch`
- Lade den Sketch hoch.
- Öffne den seriellen Monitor.
- Dort wird der aktuell gelesene Wert des Sensors angezeigt.
- Wenn du den Sensor berührst, wird der Wert größer.

## Aufgabe

### Sensor Verhalten 

- Probiere aus, wie sich die verschiedenen Eigenschaften des Sensor auf die folgenden Werte auswirken:
    - Fläche
    - Form
    - Material
    - Abstände

### Mehrere Sensoren

Schließe mehrere Sensorflächen an.

### Mögliche Pins

- `D0`
- `D1`
- `D2`
- `D3`
- `D6`
- `D8`
- `D9`
- `D11`
- `D12`
- `A1` (D15)
- `A2` (D16)
- `LOVE_BUTTON`

## Weitere Informationen

Findest du unter: https://docs.arduino.cc/tutorials/uno-r4-wifi/touch/


