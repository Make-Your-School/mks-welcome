# Touch Sensor

einige der Pins des R4 können als _Touch-Sensoren_ genutzt werden.
Dieses Beispiel zeigt dir wie das geht.

- baue dir aus einem Stück Kabel und etwas alu-folie einen Sensor (in etwa wie im Bild)
    - im einfachsten Fall reicht schon ein Stück Kabel aus.
- verbinde diesen mit Pin A1
- installiere die folgende Library via dem Library-Manager
    - `Arduino_CapacitiveTouch`
- lade den Sketch hoch
- öffne den Seriellen Monitor
- dort wird der aktuell gelesene Wert des Sensors angezeigt.
- wenn du den Sensor berührst wird der wert größer.

## Aufgabe

### Sensor Verhalten

- probiere aus wie sich die verschiedenen Eigenschaften des Sensor auf die Werte auswirken
    - Fläche
    - Form
    - Materia
    - Abstände

### Mehrere Sensoren

Schließe mehrere Sensor-Flächen an.

## weitere Informationen

findest du unter https://docs.arduino.cc/tutorials/uno-r4-wifi/touch/

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
