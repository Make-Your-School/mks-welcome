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
Damit das funktioniert, wird auf dem Smartphone ein Terminal benötigt, über das Befehle empfangen und gesendet werden können. 
Ein Beispiel-Link zu einem solchen Terminal findet ihr unter „Wichtige Links“. 
Das Bluetooth-Modul lässt sich direkt oder mithilfe des Grove Shields an einen Arduino oder Raspberry Pi über die serielle Schnittstelle UART anschließen und zusätzlich über bestimmte Befehle programmieren. 
So kann beispielsweise ein Bluetooth-Pin oder der angezeigte Bluetooth-Name eingestellt werden.

Alle weiteren Hintergrundinformationen sowie ein Beispielaufbau und alle notwendigen Programmbibliotheken sind auf dem offiziellen Wiki (bisher nur in englischer Sprache) von Seeed Studio zusammengefasst. Zusätzlich findet man über alle gängigen Suchmaschinen meist nur mit der Eingabe der genauen Komponenten-Bezeichnungen entsprechende Projektbeispiele und Tutorials.

## Anschlüsse

### Eingang

-   UART

### Ausgang

-   Bluetooth

## Kurz-Datenblatt

-   Signal Eingang: 5V
-   Betriebsspannung: 5V
-   Fully Qualified Bluetooth V2.0+EDR

## Siehe Auch

- [Seeed Studio Wiki – Bluetooth](http://wiki.seeedstudio.com/Grove-Serial_Bluetooth_v3.0/)
- [Google Play Store – Serial Bluetooth Terminal](https://play.google.com/store/apps/details?id=de.kai_morich.serial_bluetooth_terminal&hl=de)

## Projektbeispiele

- [Funduino – Bluetooth (nur ein anderes Modul)](https://funduino.de/tutorial-hc-05-und-hc-06-bluetooth)

## Weiterführende Hintergrundinformationen

-    [UART – Wikipedia Artikel](https://de.wikipedia.org/wiki/Universal_Asynchronous_Receiver_Transmitter)
-    [Bluetooth – Wikipedia Artikel](https://de.wikipedia.org/wiki/Bluetooth)
-    [GitHub-Repository: Bluetooth-Modul](https://github.com/Make-Your-School/mks-GroveSerialBluetoothv3.0)


## library
um dieses Bauteil zu benutzen verwende / installiere bitte diese Library: LibraryName
<!-- TODO: CONTENT change library name -->

## Beispiel

schau dir das Minimal-Beispiel an:

```c++:./examples/GroveSerialBluetoothV3.0_minimal/GroveSerialBluetoothV3.0_minimal.ino
// this should be overwritten with the content form the .ino file!
```

## Anleitung

<!-- TODO: CONTENT change guide -->
- nimm Bauteil
- Schließe an Port D2 an
- nehm Beispiel Code 
    - kopiere von hier drüber
    - oder direkt in der Arduino IDE: 
        `Datei-Beispiele-MakeYourSchool-FunktionsNamen-BauteilNamen-Minimal`
- Sketch Hochladen
- Das Sollte nun passieren:
    - die LED Blinkt im 1 Sekunden Takt

