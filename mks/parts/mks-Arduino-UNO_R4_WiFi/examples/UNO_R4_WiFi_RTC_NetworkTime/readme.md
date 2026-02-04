# UNO R4 WiFi - RTC NTP (Network Time Protokoll)

diese Beispiel ist etwas komplexer.
Der Arduino verbindet sich mit dem in `arduino_secrets.h` definierten WiFi.
dann bezieht es über das Internet die aktuell Uhrzeit und setzt die RTC auf diese.

Die Aktuelle Uhrzeit wird dann auf der LED-Matrix angezeigt.

du benötigst keine externen Bauteile.

- installiere die folgenden zwei Libraries via dem Library-Manager
    - `NTPClient`
    - `ArduinoGraphics`
- lade den Sketch hoch
- öffne den Seriellen Monitor
- dort wird angezeigt wann/ob sich der Arduino mit dem WiFi erfolgreiche Verbunden hat.
- auf der LED-Matrix wird solange keine Verbindung zustande gekommen ist auch ein `??` angezeigt.
- sobald die Uhrzeit erfolgreich aus dem Internet bezogen werden konnte wird diese angezeigt.

## weitere Informationen

findest du unter https://docs.arduino.cc/tutorials/uno-r4-wifi/rtc
