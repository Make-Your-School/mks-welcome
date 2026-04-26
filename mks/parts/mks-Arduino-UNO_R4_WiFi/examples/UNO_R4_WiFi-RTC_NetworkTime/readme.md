# RTC NTP (Network Time Protokoll)

Dieses Beispiel ist etwas komplexer.
Der Arduino verbindet sich mit dem in `arduino_secrets.h` definierten WLAN.
Anschließend bezieht er über das Internet die aktuelle Uhrzeit und setzt die RTC entsprechend.

Die aktuelle Uhrzeit wird dann auf der LED-Matrix angezeigt.

Du benötigst keine externen Bauteile.

- Installiere die folgenden zwei Libraries über den Library-Manager:
    - `NTPClient`
    - `ArduinoGraphics`
- Lade den Sketch hoch.
- Öffne den seriellen Monitor.
- Dort wird angezeigt, wann bzw. ob sich der Arduino erfolgreich mit dem WLAN verbunden hat.
- Auf der LED-Matrix wird, solange keine Verbindung zustande gekommen ist, `??` angezeigt.
- Sobald die Uhrzeit erfolgreich aus dem Internet bezogen wurde, wird sie angezeigt.

## Weitere Informationen

Findest du unter: 
https://docs.arduino.cc/tutorials/uno-r4-wifi/rtc
