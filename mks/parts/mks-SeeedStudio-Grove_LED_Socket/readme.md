
---
title: "LED-Sockel"
date: "2018-10-01T15:01:56.000Z"
tags: 
  - "output"
coverImage: "64_led-sockel.jpg"
material_number: "64"
material_type: "output"
material_short_descr: "Seeed Studio Grove – White LED"
manufacture: "Seeed Studio"
manufacture_url: "https://www.seeedstudio.com/"
repo_name: "mks-SeeedStudio-Grove_LED_Socket"
product_url: "http://wiki.seeedstudio.com/Grove-LED_Socket_Kit/)"
clone_url: "https://github.com/Make-Your-School/mks-SeeedStudio-Grove_LED_Socket.git"
repo_prefix: "mks"
repo_part: "Grove_LED_Socket"
embedded_example_file: "examples/Grove_LED_Socket_minimal/Grove_LED_Socket_minimal.ino"
---


# LED-Sockel

![LED-Sockel](64_led-sockel.jpg)

## Beschreibung
LEDs (Leuchtdioden) dienen zur Beleuchtung aber auch zur Darstellung eines Zustandes. Viele Geräte sind mit LEDs ausgestattet. Diese zeigen dabei ausschließlich an, ob das Gerät eingeschaltet ist oder beispielsweise ein Fehler vorliegt. Bei Elektronik-Projekten kommen LEDs meistens zum Einsatz, um die Funktion von Sensoren zu testen. LEDs lassen sich auch direkt (mit zwischengeschaltetem Widerstand) an einen Mikrocontroller über einen \[simple\_tooltip content='Digital vs Analog:

- Analoge Signale können beliebige, kontinuierliche Werte annehmen. Sie verändern sich stufenlos. Dadurch können theoretisch unendlich kleine Änderungen (und damit ein unendlicher Informationsinhalt) übertragen werden. Einschränkend wirkt die Genauigkeit, mit der das analoge Signal ausgelesen/erfasst wird.
- Das digitale Signal nimmt nur diskrete Werte an und springt bei einer etwaigen Änderung von einem Wert zum nächsten. Es kann nur eine definierte Anzahl an Informationsinhalten übertragen werden. Vorteilhaft ist dagegen die damit verbundene Fehlerfreiheit bei minimalsten, ungewollten Schwankungen. Oftmals werden nur zwei Werte HIGH und LOW (Ein/Aus oder 1/0) übermittelt.

'\]digitalen\[/simple\_tooltip\] \[simple\_tooltip content='Die Mikrocontroller besitzen kleine metallische Kontakte, an die Komponenten, Shields oder andere Platinen angeschlossen werden können. Diese Kontakte werden Pins genannt und können oft als sogenannte GPIOs (Allzweck-Ein- und Ausgabe) eingesetzt werden. Dies bedeutet, dass diese Pins direkt über die Programmierung des Mikrocontrollers angesprochen werden können und hierbei sogar bestimmt werden kann, ob dieser Pin ein Eingang (bspw. zum Auslesen eines Sensors) oder als Ausgang (bspw. zur Steuerung eines Motors) genutzt werden kann. Praktisches vereinfachtes Beispiel: Wird am Arduino eine LED an Pin 1 angeschlossen, kann im Programm direkt der Pin 1 als „An“ oder „Aus“ definiert werden und damit die LED an- oder ausgeschaltet werden. '\]Pin\[/simple\_tooltip\] anschließen.

Die hier abgebildete LED ist direkt auf einer Platine mit einstellbarem Widerstand montiert, sodass sie mit Standard-Grove-Verbindungskabel und mithilfe eines Grove Shields an den entsprechenden Mikrocontroller angeschlossen werden kann. Um eine andere Farbe zu erhalten, lässt sich die Leuchtdiode auf der Platine auch austauschen. Hierbei muss man allerdings auf die richtige Polung der LED achten.

Das integrierte Potentiometer ist auch nützlich, um den richtigen Vorwiderstand für die entsprechende LED einzustellen. Darüberhinaus kann man so auch deren Helligkeit verändern.

Alle weiteren Hintergrundinformationen sowie ein Beispielaufbau und alle notwendigen Programmbibliotheken sind auf dem offiziellen Wiki (bisher nur in englischer Sprache) von Seeed Studio zusammengefasst. Zusätzlich findet man über alle gängigen Suchmaschinen meist nur mit der Eingabe der genauen Komponenten-Bezeichnungen entsprechende Projektbeispiele und Tutorials.

https://www.youtube.com/watch?v=ITsk6dPSsqA


<!-- infolist -->

<!-- infolists -->

## Wichtige Links für die ersten Schritte:

- [Seeed Studio Wiki](http://wiki.seeedstudio.com/Grove-LED_Socket_Kit/) [- LED Sockel](http://wiki.seeedstudio.com/Grove-LED_Socket_Kit/)

## Weiterführende Hintergrundinformationen:

- [GPIO - Wikipedia Artikel](https://de.wikipedia.org/wiki/Allzweckeingabe/-ausgabe)
- [LED - Wikipedia Artikel](https://de.wikipedia.org/wiki/Leuchtdiode)
- [Vorwiderstand - Wikipedia Artikel](https://de.wikipedia.org/wiki/Vorwiderstand)
- [Potentiometer - Wikipedia Artikel](https://de.wikipedia.org/wiki/Potentiometer)
- [GitHub-Repository: LED-Sockel](https://github.com/MakeYourSchool/64-LED-Sockel)



