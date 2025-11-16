---
title: 'Taster/Knopf'
date: "2018-10-01T14:48:30.000Z"
tags: 
  - "input"
  - "sensor"
  - "button"
  - "momentary"
coverImage: "59_taster_knopf.png"
material_number: "59"
material_type: "input"
manufacture: "Generic"
repo_name: "mks-generic-Taster"
repo_prefix: "mks"
repo_manufacture: "generic"
repo_part: "Taster"
clone_url: "https://github.com/Make-Your-School/mks-generic-Taster.git"
embedded_example_file: "examples/Taster_minimal/Taster_minimal.ino"
status: 'active'
difficulty: 'advanced'
---


# Taster/Knopf

![Taster/Knopf](./59_taster_knopf.png)

## Beschreibung
Taster oder auch Knöpfe sind eine sehr einfache Eingabemöglichkeit für Elektronik-Projekte und können frei nach eigenen Vorstellungen eingesetzt werden.
Mit einem zurückfedernden Schaltmechanismus stellen sie einen elektrischen Kontakt zwischen den Anschlusspins her, solange der Taster gedrückt ist.  
Die Taster müssen allerdings an entsprechende Verlängerungskabel gelötet oder über Breadboards mit dem Mikrocontroller verbunden werden.

<!-- more_details -->

Um den Schaltvorgang mit einem Mikrocontroller zu erfassen, wird ein digitaler Pin des Controllers mit dem Taster verbunden. 
Der andere Anschluss des Tasters wird mit Masse verbunden. 
Der Mikrocontroller wird so programmiert das der Pin, an dem der Taster angeschlossen ist, mit einem PullUp auf einen HIGH Pegel *zieht*.
Sobald der Taster betätigt wird, wird damit ein digitaler Anschlusspin des Mikrocontrollers auf Masse gelegt, diesen wechsel von HIGH auf LOW kann der Controller dann erkennen.


Der Schalter lässt sich an einen Arduino oder Raspberry Pi anschließen. Er benötigt dafür nur einen digitalen Pin.

Für weitere Informationen schaue beim Bauteil [Taster/Knopf (Platine)](/mks-welcome/part/mks-SeeedStudio-Grove_Button) nach.

@[youtube](https://www.youtube.com/watch?v=ITsk6dPSsqA)


## Beispiele

!!!show-examples:./examples/



<!-- infolist -->


## Wichtige Links für die ersten Schritte:

- [Adafruit Button-Sortiment](https://www.adafruit.com/product/1010)

## Projektbeispiele:

- [Funduino - Taster Tutorial](https://funduino.de/nr-5-taster-am-arduino)

## Weiterführende Hintergrundinformationen:

- [GPIO - Wikipedia Artikel](https://de.wikipedia.org/wiki/Allzweckeingabe/-ausgabe)
- [Steckplatine (Breadboard) - Wikipedia Artikel](https://de.wikipedia.org/wiki/Steckplatine)

