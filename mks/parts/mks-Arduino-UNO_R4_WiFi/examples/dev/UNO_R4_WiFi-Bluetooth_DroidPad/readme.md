# Bluetooth: Arduino mit Smartphone steuern

dieses Beispiel zeigt wie sich der Arduino R4 über ein Smartphone steuern lässt.

dafür brauchst du:
- Smartphone mit der App *DroidPad* installiert 
- Arduino UNO R4 WiFi

du benötigst keine externen Bauteile.

<!-- ![](./demo_connect_analog.avif) -->

DroidPad erzeugt ein **peripheral** (ein *Gerät / Device*), 
das bedeutete das unser Arduino der **central* - also der Haupt-Teil ist.

das ist etwas irritierend - denn normalerweise wäre ja eher das Phone das *central* und unser Arduion das *peripheral*.
doch in diesem Fall ist es halt so aufgebaut..


## Vorbereitung Smartphone

- installiere `DroidPad` auf deinem Android Smartphone
    - die App ist **nicht** auf GooglePlay.
    - du findest sie auf 
        - der [projekt-seite als apk download](https://github.com/UmerCodez/DroidPad/releases/latest)
        - [f-droid](https://f-droid.org/de/packages/com.github.umer0586.droidpad/)
        - [IzzyOnDroid](https://apt.izzysoft.de/fdroid/index/apk/com.github.umer0586.droidpad)
- öffne die App und scanne den QR-Code hier im Ordner
    - dieser beinhaltete eine Beispiel-Konfiguration
- dann auf den *play* button clicken - so das der *No Connection* screen bei DroidPad angezeigt wird.
- darauf ist unten der Bluetooth Name des Phones zu sehen.
-  falls dieser länger als 8 Zeichen ist 
    - bitte in den Geräte-Bluetooth einstellungen ändern auf etwas kurzes.
    - und dann die app noch mal schließen und wieder öffnen..
- dann auf den Play-Button rechts clicken um eine Verbindung herzustellen
- darauf geht ein Screen auf der die `Service UUID` und auch die `characteristic UUID` anzeigt.
- diese braucht unser Arduino um sich mit diesem Service zu verbinden.

## Vorbereitung Arduino

- installiere die Library `ArduinoBLE` mit Hilfe des Library Managers
- lade den Sketch hoch
- öffne den Serial Monitor

## Verbindung

- Bluetooth-Modul und Smartphone verbinden
    - Auf dem Smartphone in die Bluetooth-Einstellungen gehen und nach neuen Geräten suchen. 
    - Nach einigen Sekunden sollte der Arduino als "HackBLE" auftauchen.
    - "HMSoft" auswählen und PIN eingeben (Standard: 1234)
    - In vielen Fällen wird sich das Smartphone zwar koppeln aber keine Verbindung aufbauen können. Das ist normal.
    - Eine der empfohlenen Bluetooth-Apps öffnen (s. Links) und innerhalb der App mit HMSoft verbinden
- Smartphone DroidPad: starte das *Control Pad* in
- eventuell musst du nun noch in der App das Gerät Auswählen / Verbinden.
- nun kannst du auf dem Phone die LED auf dem Arduino An/Ausschalten


## weitere Informationen

findest du unter https://docs.arduino.cc/tutorials/uno-r4-wifi/wifi-examples/
