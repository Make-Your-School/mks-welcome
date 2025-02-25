---
title: Grove – Serial Bluetooth V3.0
tags: [input, output, kommunikation, UART, funk, bluetooth]
id: 53
---

# Grove – Serial Bluetooth V3.0

![Seeed Studio Grove – Serial Bluetooth V3.0](https://makeyourschool.de/wp-content/uploads/2018/10/53_bluetooth-modul-1024x1024.jpg)

## Beschreibung

Das Bluetooth-Modul ermöglicht es Informationen, Befehle und Daten kabellos zwischen mehreren Endgeräten oder Mikrocontrollern zu übertragen. 
So können beispielsweise zwei Arduinos untereinander oder auch ein Arduino mit einem Smartphone kommunizieren. 
<!-- more_details -->
Damit das funktioniert, wird auf dem Smartphone eine App benötigt, über die Befehle empfangen und gesendet werden können.  Empfehlungen findet ihr weiter unten.
Das Bluetooth-Modul lässt sich direkt oder mithilfe des Grove Shields an einen Arduino oder Raspberry Pi über die serielle Schnittstelle UART anschließen und zusätzlich über bestimmte Befehle programmieren. So kann beispielsweise eine Pin oder der angezeigte Bluetooth-Name eingestellt werden.

## Anschlüsse

### Eingang

-   UART

### Ausgang

-   Bluetooth

## Kurz-Datenblatt

-   Signal Eingang: 5V
-   Betriebsspannung: 5V
-   Fully Qualified Bluetooth V2.0+EDR

## library
Um dieses Bauteil zu verwenden, wird lediglich die Bibliothek "SoftwareSerial" benötigt.

## Beispiel

Der Beispiel-Code ist (vorerst) im Ordner "examples" zu finden.

```c++:./examples/GroveSerialBluetoothV3.0_minimal/GroveSerialBluetoothV3.0_minimal.ino
// this should be overwritten with the content form the .ino file!
```

## Anleitungen
Grundsätzlich:
- Bluetooth-Modul am Arduino anschließen (am besten über das Grove Shield). Den richtigen Port entnehmt ihr dem Beispiel-Code

Sobald der Arduino mit Strom versorgt wird, sollte das Bluetooth-Modul anfangen zu blinken.

### Bluetooth-Modul konfigurieren
Das BT-Modul kann über sogenannte AT-Befehle konfiguriert werden. Diese können händisch in der Arduino IDE über den seriellen Monitor verschickt werden. Dies muss nur einmalig gemacht werden. Das Modul speichert die Konfiguration dauerhaft.
Damit das BT-Modul AT-Befehle korrekt verarbeitet müssen drei Bedingungen erfüllt sein:
  - Der Beispiel-Code (oder ein vergleichbarer Sketch) muss auf den Arduino aufgespielt sein.
  - Der serielle Monitor auf dem PC muss auf "No line ending" eingestellt sein.
  - Es darf keine aktive Bluetoothverbindung bestehen (LED muss blinken).

Wenn alles korrekt funktioniert, antwortet das Bluetooth-Modul auf jeden AT-Befehl mit "OK". 

Liste der wichtigsten AT-Befehle (Optionen sind in [ ] angegeben (keine Leerzeichen einfügen!)): 

| Befehl            | Funktion     |
|----------         |--------------| 
| AT                | Verbindung testen |
| AT+DEFAULT	    | Auf Werkszustand zurücksetzen |
| AT+ROLE[S/M/?]	| Slave oder Master aktivieren bzw. aktuelle Einstellung abfragen (Standard: Slave) |
| AT+NAME[.../?]	| Name einstellen/abfragen (Standard: HMSoft) |
| AT+PIN[.../?]	    | Pin einstellen/abfragen (Standard: 1234) |
| AT+CLEAR          | Letzte Bluetooth-Verbindung löschen |
| AT+TEMP?	        | Temperatur des BT-Moduls ausgeben |
| AT+AUTH[0/1/?]	| Authentifizierung einstellen bzw. abfragen (Standard: 0) |
| AT+VERSION	    | Firmware-Version ausgeben |
| AT+RESTART	    | BT-Modul neu starten |

### Zwei Bluetooth-Module miteinander verbinden
- Beide Module auf Werkszustand zurücksetzen (oder wie gewünscht konfigurieren. Name, Pin etc. müssen auf beiden Modulen identisch sein!)
- Eines der beiden Module als Master konfigurieren
- Warten. Die beiden Module verbinden sich nun automatisch

### Bluetooth-Modul und Smartphone verbinden
- Bluetooth-Modul auf Werkszustand zurücksetzen (oder wie gewünscht konfigurieren)
- Auf dem Smartphone in die Bluetooth-Einstellungen gehen und nach neuen Geräten suchen. Nach einigen Sekunden sollte das Bluetooth-Modul als "HMSoft" auftauchen.
- "HMSoft" auswählen und PIN eingeben (Standard: 1234)
- In vielen Fällen wird sich das Smartphone zwar koppeln aber keine Verbindung aufbauen können. Das ist nicht schlimm.
- Eine der empfohlenen Bluetooth-Apps öffnen (s. Links zum Google Play Store) und innerhalb der App mit HMSoft verbinden

## Siehe Auch

- [Seeed Studio Wiki – Bluetooth](http://wiki.seeedstudio.com/Grove-Serial_Bluetooth_v3.0/)
- [Google Play Store – Bluetooth Arduino Control](https://play.google.com/store/apps/details?id=com.giristudio.hc05.bluetooth.arduino.control)
- [Google Play Store – Serial Bluetooth Terminal](https://play.google.com/store/apps/details?id=de.kai_morich.serial_bluetooth_terminal&hl=de)

## Projektbeispiele

- [Funduino – Bluetooth (nur ein anderes Modul)](https://funduino.de/tutorial-hc-05-und-hc-06-bluetooth)

## Weiterführende Hintergrundinformationen

-    [UART – Wikipedia Artikel](https://de.wikipedia.org/wiki/Universal_Asynchronous_Receiver_Transmitter)
-    [Bluetooth – Wikipedia Artikel](https://de.wikipedia.org/wiki/Bluetooth)
