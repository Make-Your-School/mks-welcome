---
title: 'MP3-Modul'
date: '2018-10-01T15:20:08.000Z'
tags:
    - 'output'
    - 'audio'
coverImage: '68_mp3-modul_rz.png'
material_number: '68'
material_type: 'output'
material_short_descr: 'DFR0534'
manufacture: 'DFRobot'
manufacture_url: 'https://dfrobot.com/'
repo_name: 'DFRobot-DFR0534'
repo_prefix: 'mks'
repo_manufacture: 'DFRobot'
repo_part: 'DFR0534'
product_url: 'https://wiki.dfrobot.com/Voice_Module_SKU__DFR0534#target_0'
clone_url: 'https://github.com/Make-Your-School/mks-DFRobot-DFR0534.git'
embedded_example_file: 'examples/DFR0534_minimal/DFR0534_minimal.ino'
status: 'active'
difficulty: 'advanced'
---

# MP3-Modul

![MP3-Modul](./68_mp3-modul_rz.png)

## Beschreibung

Das MP3-Modul ermöglicht das Abspielen von Audiodateien wie Musik oder anderen Tönen. Es ist z.B. möglich etwas mit dem Laptop oder Handy aufzunehmen und dann über das MP3-Modul abzuspielen.

<!-- more_details -->

Es hat einen Speicherplatz von 8 MB, auf dem Musikdateien im mp3- oder wav-Format über einen Mikro-USB-Anschluss gespeichert werden können.
Um die Musik auszugeben, lässt sich ein Lautsprecher an den dafür vorgesehenen Steckplatz anschließen.

Das Modul wird über die serielle Schnittstelle UART direkt oder mithilfe des Grove Shields an einen Mikrocontroller angeschlossen.

## Anschlüsse

Als Eingang ist UART und ein Mikro-USB-Anschluss vorhanden und als Ausgang kann man einen Lautsprecher per zwei Kabel anschließen. 


## Anleitung zum Benutzen

### 1 Verkabeln

> [!achtung]
> Es ist einiges etwas unintuitiv bei dem MP3 Modul. Achte genau auf die folgenden Hinweise.

1. Die Pin-Belegung des Steckers im Modul ist anders als im Grove-System. Plus und Minus sind vertauscht!
2. Es muss unbedingt ein Widerstand vor dem MP3 Modul eingebaut werden (wie unten auf dem Bild), sonst geht der Arduino aus.

Hier eine Übersicht wie man es zusammenschaltet:

<!-- Here is a HTML image tag, as otherwise the picture was way too huge -->
<img src="./adapter/20240503_123257.jpg" width="100%" />

Bitte genau auf die Farbzuordnung achten! Wer es genauer anlöten möchte, findet hier eine 
[Anleitung](./AdapterLoeten.md).

#### Benötigtes Material

- Beim Modul wird ein Kabel mitgeliefert (Rot, Schwarz, Blau, Grün).
- Kabel: Grove auf Female-Pin-Header (Schwarz, Rot, Weiß, Gelb)
- 10K Widerstand
- Drahtstücke oder _Pin-Header_, die gut in die Buchsen passen.


| Grove   | Verbindung     | MP3-Modul |
| :------ | :------------- | :-------- |
| Rot     | Draht          | Rot       |
| Schwarz | Draht          | Schwarz   |
| Weiß    | 10K Widerstand | Blau      |
| Gelb    | Draht          | Grün      |

- Grove Rot mit Modul Rot
- Grove Schwarz mit Modul Schwarz
- Grove Weiß auf 10k Widerstand auf Modul Blau
    - 10k Widerstand in Leitung die zum Modul RX (Receive = Empfangen = Eingang) führt
    - nötig da das Modul nur 3.3V **Signale** _mag_
    - der Serienwiderstand limitiert den möglichen Strom und schützt so das Modul.
- Grove Gelb mit Modul Grün



### 2 Musik aufspielen

Das Modul wird über ein Micro-USB Kabel mit dem Laptop verbunden.
Dann erscheint es wie ein USB-Stick (Massenspeicher) im Datei-Explorer.
Über diesen können dann die Sounds im MP3 oder WAV Format auf das Modul kopiert werden.
Es stehen maximal 8MB Speicherplatz zu Verfügung.


Bei den Datei-Bezeichnungen bitte darauf achten, dass diese:

- maximal 8 Zeichen haben.
- keine Sonderzeichen enthalten.
- mit einer Nummer beginnen

Zum Beispiel:

- `01BELL.mp3`
- `02DOOR.wav`
- `03DOOR.mp3`

Das sieht dann etwa so aus:

![Datei Manager](./datei-manager.png)

Du findest [hier im Ordner DFR0534](https://github.com/Make-Your-School/mks-DFRobot-DFR0534/tree/main/sounds) ein paar Beispiel-Sounds, die auch im Beispiel-Code verwendet wurden.

Eine große Auswahl an frei verfügbaren Sound-Effekten findest du auf:
[freesound.org](https://freesound.org), wie z.B. die [allgemeine suche nach _Tür-Glocke_](https://freesound.org/search/?q=door+bell&f=license%3A%22creative+commons+0%22) oder eine [Klassische Tür-Klingel](https://freesound.org/people/Lynx_5969/sounds/422668/) (Beispiel bell.mp3)

### 3 Programmieren

Bitte die Library `DFR0534` über den Library-Manager installieren. Das macht man in der Arduino IDE links bei dem Büchersymbol. Klicke dort oben auf die Suchleiste und gib dann DFR0534 ein. Dort findest du dann ein Ergebnis mit diesem Namen, welches du installieren kannst.

## Beispiele

!!!show-examples:./examples/

<!-- infolist -->

## Weiterführende Hintergrundinformationen


### Kurz-Datenblatt

- Signal Eingang: `3.3V`
- Betriebsspannung: `5V`
- Modul-Bezeichnung `DFR0534`
- Main Chip `JQ8400`

### Links
- [DFRobot Wiki](https://wiki.dfrobot.com/Voice_Module_SKU__DFR0534#target_0)
- [library repository](https://github.com/codingABI/DFR0534)
  Hier findest du die Dokumentation zur Library
  und auch viele weitere Informationen und Möglichkeiten.
- [Datenblatt (grobe übersetzung ins Englische) ](https://sparks.gogo.co.nz/assets/_site_/downloads/JQ8400_English.pdf)
- [UART – Wikipedia Artikel](https://de.wikipedia.org/wiki/Universal_Asynchronous_Receiver_Transmitter)
