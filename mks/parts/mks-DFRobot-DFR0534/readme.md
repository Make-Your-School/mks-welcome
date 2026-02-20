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
repo_name: 'mks-DFRobot-DFR0534'
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

Das MP3-Modul ermöglicht das Abspielen von Musik oder abgespeicherten Tönen.

<!-- more_details -->

Es integriert einen Speicherplatz von 8 MB, auf dem Musikdateien im mp3- oder wav-Format über einen Mikro-USB-Anschluss gespeichert werden können.
Um die Musik auszugeben, lässt sich ein Lautsprecher an den dafür vorgesehenen Steckplatz anschließen.

Das Modul wird über die serielle Schnittstelle UART direkt oder mithilfe des Grove Shields an einen Mikrocontroller angeschlossen.

## Anschlüsse

### Eingang

- UART
- USB

### Ausgang

- Audio über Lautsprecher

## Kurz-Datenblatt

- Signal Eingang: 3.3V
- Betriebsspannung: 5V
- Modul-Bezeichnung `DFR0534`
- Main Chip `JQ8400`

## Benutzung / Erste Schritte

### Anschließen

> [!achtung]
> die Pin-Belegung des Steckers im Modul sind anders als im Grove System:
> Plus und Minus sind vertauscht!

#### Adapter Kabel

schnell zusammen gesteckt..

![zusammen gesteckt](./adapter/20240503_123257.jpg)

Bitte genau auf die Farb-Zuordnung Achten!!

##### Benötigtest Material

- beim Modul ist ein Kabel mitgeliefert. (Rot Schwarz Blau Grün)
- Kabel Grove auf Female-Pin-Header (Schwarz Rot Weiß Gelb)
- 10K Widerstand
- Draht-Stücke oder _Pin-Header_ die gut in die Buchsen reinpassen..

##### Vorgehen

die Kabel einfach nach dieser Zuordnung (siehe auch das Foto) zusammen stecken:

##### Zuordnung

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
    - der Serien-Widerstand limitiert den möglichen Strom und schützt so das Modul
- Grove Gelb mit Modul Grün

![Adapterkabel - Lautsprecher1](./adapter/20240503_123257.jpg)

#### Adapter Kabel löten

[AdapterLoeten.md](./AdapterLoeten.md)

### Musik aufspielen

Das Modul wird über eine Micro-USB Kabel mit dem Laptop verbunden.
Dann erscheint es als _Massenspeicher_ (_USB-Stick_) im Datei-Explorer.
Über diesen können dann die Sounds im MP3 oder WAV Format auf das Modul kopiert werden.

Bei den Dateien bitte darauf achten das diese

- maximal 8 Zeichen
- keine Sonderzeichen
- mit einer Nummer beginnen

zum Beispiel:

- `01BELL.mp3`
- `02DOOR.wav`
- `03DOOR.mp3`

es stehen maximal 8MB Speicherplatz zu Verfügung.

![Datei Manager](<datei manager.png>)

du findest [hier im Ordner DFR0534](https://github.com/Make-Your-School/mks-DFRobot-DFR0534/tree/main/sounds) ein paar Beispiel Sounds die auch im Beispiel-Code verwendet wurden.

eine große Auswahl an frei verfügbaren Sound-Effekten findest du auf
[freesound.org](https://freesound.org)

z.B.

- [allgemeine suche nach _Tür-Glocke_](https://freesound.org/search/?q=door+bell&f=license%3A%22creative+commons+0%22)
- [Klassische Tür-Klingel](https://freesound.org/people/Lynx_5969/sounds/422668/) (beispiel bell.mp3)

### Programmieren

bitte die Library `DFR0534` via library manager installieren.

## Beispiele

!!!show-examples:./examples/

<!-- infolist -->

## Weiterführende Hintergrundinformationen

- [DFRobot Wiki](https://wiki.dfrobot.com/Voice_Module_SKU__DFR0534#target_0)
- [library repository](https://github.com/codingABI/DFR0534)
  hier findest du die Dokumentation zur Library
  und auch viele weitere Informationen und Möglichkeiten...
- [Datenblatt (grobe übersetzung ins Englische) ](https://sparks.gogo.co.nz/assets/_site_/downloads/JQ8400_English.pdf)
- [UART – Wikipedia Artikel](https://de.wikipedia.org/wiki/Universal_Asynchronous_Receiver_Transmitter)

<style>
img {
    max-height: 45vh;
    max-width: 60vw;
}
</style>
