---
title: 'Taster/Knopf (Platine)'
date: "2018-10-01T14:49:00.000Z"
tags: 
  - "sensor"
coverImage: "60_taster_knopf_platine.png"
material_number: "60"
material_type: "input"
material_short_descr: "Seeed Studio Grove – Button"
manufacture: "Seeed Studio"
manufacture_url: "https://www.seeedstudio.com/"
repo_name: "mks-SeeedStudio-Grove_Button"
product_url: "http://wiki.seeedstudio.com/Grove-Button/"
clone_url: "https://github.com/Make-Your-School/mks-SeeedStudio-Grove_Button.git"
repo_prefix: "mks"
repo_part: "Grove_Button"
embedded_example_file: "examples/Grove_Button_minimal/Grove_Button_minimal.ino"
status: 'active'
difficulty: 'recommend'
---


# Taster/Knopf (Platine)

![Taster/Knopf (Platine)](./60_taster_knopf_platine.png)

## Beschreibung

Taster oder auch Knöpfe sind eine sehr einfache Eingabemöglichkeit für Elektronik-Projekte und funktionieren ähnlich wie man es zuhause von Knöpfen von der Waschmaschine oder dem Geschirrspüler kennt. Dahinter verbirgt sich nichts Kompliziertes: Der Taster stellt eine elektrische Verbindung her, Strom fließt und der Computer (Arduino in unserem Fall) merkt, dass etwas passiert ist.

Im Gegensatz zu dem anderen [Taster](/mks-welcome/part/mks-generic-Taster/), ist dieser bereits auf einer kleinen Platine vormontiert und lässt sich dadurch mit Standard-Grove-Verbindungskabeln und direkt mithilfe des Grove Shields an einen Arduino oder Raspberry Pi anschließen. Sehr praktisch :) Das Modul muss hierfür an einen digitalen Pin angeschlossen werden.

## Video

@[youtube](https://www.youtube.com/watch?v=ITsk6dPSsqA)

### Anleitung
1. Schließe den Taster mit einem Grove Kabel an Pin `D2` an dem Grove Shield an
1. Nehme den Beispielcode von unten und lade ihn auf den Arduino hoch.
1. Öffne den Serial-Monitor, indem du in der Arduino IDE oben auf Werkzeuge gehst und Serieller Monitor auswählst.
1. Stelle die Geschwindigkeit des Serial-Monitors auf 9600 (falls nicht schon passiert). Das geht ganz rechts in einem kleinem Dropdown.
1. Drücke den Taster 🔘
1. Der serielle Monitor zeigt den aktuellen Status des Tasters durch 0 / 1 an.







## Beispiele

!!!show-examples:./examples/



<!-- infolist -->

## Wichtige Links für die ersten Schritte:

Alle weiteren Hintergrundinformationen sowie ein Beispielaufbau und alle notwendigen Programmbibliotheken sind auf dem offiziellen Wiki (bisher nur in englischer Sprache) von Seeed Studio zusammengefasst. Zusätzlich findet man über alle gängigen Suchmaschinen meist nur mit der Eingabe der genauen Komponenten-Bezeichnungen entsprechende Projektbeispiele und Tutorials.

- [Seeed Studio Wiki - Taster](http://wiki.seeedstudio.com/Grove-Button/)

## Projektbeispiele:

- [Funduino - Taster Tutorial](https://funduino.de/nr-5-taster-am-arduino)

## Weiterführende Hintergrundinformationen:

- [GPIO - Wikipedia Artikel](https://de.wikipedia.org/wiki/Allzweckeingabe/-ausgabe)
- [GitHub-Repository: Taster-Knopf-Platine](https://github.com/MakeYourSchool/60-Taster-Knopf-Platine)



