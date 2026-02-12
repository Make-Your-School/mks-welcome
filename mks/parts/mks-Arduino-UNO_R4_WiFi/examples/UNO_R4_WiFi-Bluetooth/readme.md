# Bluetooth

Arduino mit Smartphone steuern

eigentlich sollte hier ein Beispiel zeigt wie sich der Arduino R4 über ein Smartphone per Bluetooth steuern lässt.

allerdings ist es aktuell nicht gelungen ein einfaches Funktionsfähiges Beispiel zu erstellen.

Grundsätzlich gibt es einige Fertige Beispiele in der Arduino IDE:

- library `ArduinoBLE` per Library Manager installieren
- und dann in den Beispielen nachschauen.

der R4 hat das Bluetooth Low Energy (kurz Bluetooth LE oder BLE) verfügbar.
durch die hohe Optimierung auf wenig Energieverbrauch ist das Protokoll sehr aufwendig gestaltet.

Fange am besten mit den _LED_ Beispiel an.

das dokument

https://docs.arduino.cc/learn/communication/bluetooth/

gibt eine gute übersicht über den Aufbau. (in englischer Sprache)

Man sollte mindestens 3h Zeit einplanen um das LED-Beispiel dann wirklich auf eigene Bedürfnisse anpassen zu können.

Wenn es darum geht Informationen vom Arduino auf ein Smartphone zu bringen, ist es vielleicht sogar einfacher ein WiFi-Webserver Beispiel als grundlage zu verwenden.
