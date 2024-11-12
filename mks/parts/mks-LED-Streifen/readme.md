# Pixel LED-Streifen

mks Nr 65

Andere Namen:
- Neopixel
- Dotstar
- WS2811
- APA102

![LED-Streifen](https://makeyourschool.de/wp-content/uploads/2018/08/65_led-streifen-1024x1024.jpg)

## Beschreibung
LED-Streifen sind Flexible Bänder auf denen in bestimmtem Abstand `Adresierbare LED's` aufgelötete sind.
jeder *Pixel* beinhaltet einen kleinen controller chip (meist schwarzen - dem LED-Treiber) und den meist drei eigentlichen LEDs in den Licht-Grundfarben Rot, Grün und Blau.
Jeder *Pixel* kann einzeln *Adressiert* werden (Entspricht einem Haus in einer Straße).
dabei können alle drei Grundfarben einzeln in ihrere Helligkeit (255 Stufen) eingestellt werden -
dadurch können alle Regenbogen Farben + Weiß erzeugt werden.

## Anschlüsse

### Eingang

-   Serielle Daten

### Ausgang

-   Licht

## Kurz-Datenblatt

-   Signal Eingang: 3-5V
-   Betriebsspannung: 3-5V
-   benötigter Strom: 20mA-60mA pro Pixel

Beispiel:
10 Pixel * 60mA = 600mA = 0,6A


## Siehe Auch

-   falls vorhanden link zu anderem Bauteil / zugehörigem part

## library

um dieses Bauteil zu benutzen verwende / installiere bitte diese Library: [fastled](https://fastled.io/)

## Beispiel

schau dir das Minimal-Beispiel an:

```c++:./examples/pixel_minimal/pixel_minimal.ino
// this should be overwritten!
```

## Anleitung

<!-- TODO: CONTENT change guide -->

-   nimm Bauteil
-   Schließe an Port D2 an
-   nehm Beispiel Code
    -   kopiere von hier drüber
    -   oder direkt in der Arduino IDE:
        `Datei-Beispiele-MakeYourSchool-FunktionsNamen-BauteilNamen-Minimal`
-   Sketch Hochladen
-   Das Sollte nun passieren:
    -   die LED Blinkt im 1 Sekunden Takt
