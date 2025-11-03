---
title: 'LED-Streifen'
date: "2018-08-28T23:41:38.000Z"
tags: 
  - "output"
coverImage: "65_led-streifen.png"
material_number: "65"
material_type: "output"
material_short_descr: "Adafruit NeoPixel Digital RGB LED Strip - White 60 LED"
manufacture: "Generic"
repo_name: "mks-generic-Neopixel"
clone_url: "https://github.com/Make-Your-School/mks-generic-Neopixel.git"
repo_prefix: "mks"
repo_part: "Neopixel"
embedded_example_file: "examples/Neopixel_minimal/Neopixel_minimal.ino"
status: 'active'
difficulty: 'advanced'
---


# LED-Streifen

![LED-Streifen](./65_led-streifen.png)

## Beschreibung
Der LED-Streifen kann Lichteffekte und -animationen erzeugen oder kommt auch einfach zur Beleuchtung zum Einsatz. 
Er lässt sich dabei beliebig zuschneiden und wieder zusammenlöten. 
Weiterhin kann jede einzelne LED in Farbe und Helligkeit individuell gesteuert werden. 
Dadurch ist es möglich, komplexe Lichteffekte zu realisieren.

<!-- more_details -->

Der LED-Streifen kann direkt oder mithilfe des Grove Shields an einen Arduino oder Raspberry Pi angeschlossen werden.
Der Streifen wird über ein kombiniertes Zeit & Daten-Signal gesteuert. 
Hierfür wird nur ein digitaler Pin am Mikrocontroller benötigt.

### Power
grob gesagt braucht jeder Pixel bis zu 60mA (wenn du ihn 100% Weiß leuchten lässt).
Ab einer Länge von fünf LEDs wird empfohlen, den LED-Streifen an eine externe Stromquelle anzuschließen. 
(5*0,06A = 300mA; normales USB erlaubt max. 500mA)
Werden längere LED-Streifen in Betracht gezogen, so sollte eine Stromeinspeisung mindestens jeden Meter erfolgen, um alle LEDs gleichmäßig mit Spannung zu versorgen.

Alle weiteren Hintergrundinformationen sowie ein Beispielaufbau sind auf der Produktseite zu finden. 
Auch eine ausführliche Anleitung zu NeoPixel-LED-Streifen ist weiter unten verlinkt. 
Die Anleitung sollte mit größter Sorgfalt Schritt für Schritt abgearbeitet werden, um Schäden am LED-Streifen & Controller zu vermeiden. 
Zusätzliche Informationen findet man über alle gängigen Suchmaschinen, in dem nach „NeoPixel LED-Streifen“ und „Arduino“ gesucht wird.

@[youtube](https://www.youtube.com/watch?v=e0CBo3xn858)
 




## Beispiele

!!!show-examples:./examples/



<!-- infolist -->



## Wichtige Links für die ersten Schritte:

- [Adafruit NeoPixel LED-Streifen - Produktseite](https://www.adafruit.com/product/1138?length=1)
- [Adafruit NeoPixel – Ausführliche Anleitung](https://learn.adafruit.com/adafruit-neopixel-uberguide)
- [FastLED – NeoPixel LED-Streifen Animations-Bibliotheken](http://fastled.io/)

## Projektbeispiele:

- [Hackster – Indoor NeoPixel Thermometer](https://www.hackster.io/hackerEsk/indoor-neopixel-thermometer-64f22e)
- [Adafruit - Neopixel Jewel Necklace](https://learn.adafruit.com/10-minute-neopixel-necklace)
- [Adafruit - NeoPixel LED Sound Reactive Drums](https://learn.adafruit.com/gemma-powered-neopixel-led-sound-reactive-drums)
- [Adafruit - NeoPixel LED Necklace Insert](https://learn.adafruit.com/neopixel-led-necklace-insert-with-usb-charging)
- [Adafruit - NeoPixel Basketball Hoop](https://learn.adafruit.com/neopixel-mini-basketball-hoop)

<!-- 
## Weiterführende Hintergrundinformationen:

- [GitHub-Repository: LED-Streifen](https://github.com/MakeYourSchool/65-LED-Streifen) 
-->

