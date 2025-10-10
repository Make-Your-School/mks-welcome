
---
title: "Stromsensor"
date: "2018-10-01T13:44:08.000Z"
tags: 
  - "sensor"
coverImage: "26_stromsensor.jpg"
material_number: "26"
material_type: "sensor"
material_short_descr: "Seeed Studio Grove – Electricity Sensor"
manufacture: "Seeed Studio"
manufacture_url: "https://www.seeedstudio.com/"
repo_name: "mks-SeeedStudio-Grove_Electricity_Sensor"
repo_prefix: "mks"
repo_manufacture: "SeeedStudio"
repo_part: "Grove_Electricity_Sensor"
product_url: "https://wiki.seeedstudio.com/Grove-Electricity_Sensor/"
clone_url: "https://github.com/Make-Your-School/mks-SeeedStudio-Grove_Electricity_Sensor.git"
embedded_example_file: "examples/Grove_Electricity_Sensor_minimal/Grove_Electricity_Sensor_minimal.ino"
---


# Stromsensor

![Stromsensor](26_stromsensor.jpg)

## Beschreibung
Der Stromsensor misst die Wechselstromstärke eines Kabels. Ein Stromwandler wandelt eine hohe Wechselstromstärke in eine minimale um. Durch die interne Verschaltung wird schließlich über einen \[simple\_tooltip content='Digital vs. Analog: • Analoge Signale können beliebige kontinuierliche Werte annehmen. Sie verändern sich stufenlos. Dadurch können theoretisch unendlich viele kleine Änderungen (und damit ein unendlicher Informationsinhalt) übertragen werden. Einschränkend wirkt die Genauigkeit, mit der das analoge Signal ausgelesen/erfasst wird. • Das digitale Signal nimmt nur diskrete Werte an und springt bei einer etwaigen Änderung von einem Wert zum nächsten. Es kann nur eine definierte Anzahl an Informationsinhalten übertragen werden. Vorteilhaft ist dagegen die damit verbundene Fehlerfreiheit bei minimalsten, ungewollten Schwankungen. Oftmals werden nur zwei Werte HIGH und LOW (Ein/Aus oder 1/0) übermittelt. '\]analogen Anschluss\[/simple\_tooltip\] eine analoge Spannung ausgegeben, die proportional zur gemessenen Stromstärke ist. Die maximal messbare Stromstärke liegt bei 5 Ampere. Der Sensor kann direkt oder mithilfe des Grove Shields an einen \[simple\_tooltip content='Die Mikrocontroller besitzen kleine metallische Kontakte, an die Komponenten, Shields oder andere Platinen angeschlossen werden können. Diese Kontakte werden Pins genannt und können oft als sogenannte GPIO’s (Allzweck Ein- und Ausgabe) eingesetzt werden. Dies bedeutet, dass diese Pins direkt über die Programmierung des Mikrocontrollers angesprochen werden können und hierbei sogar bestimmt werden kann, ob dieser Pin als Eingang (beispielsweise zum Auslesen eines Sensors) oder als Ausgang (beispielsweise zur Steuerung eines Motors) genutzt werden kann. Praktisches Beispiel: Wird am Arduino eine LED an Pin 1 angeschlossen, kann im Programm direkt der Pin 1 als „An“ oder „Aus“ definiert werden und damit die LED an- oder ausgeschaltet werden. '\]analogen Pin \[/simple\_tooltip\]des Arduinos angeschlossen werden.

Das Modul kann beispielsweise zum Überwachen des Stromverbrauchs eines Geräts eingesetzt werden.

Alle weiteren Hintergrundinformationen sowie ein Beispielaufbau und alle notwendigen Programmbibliotheken sind auf dem offiziellen Wiki (bisher nur in englischer Sprache) von Seeed Studio zusammengefasst. Zusätzlich findet man über alle gängigen Suchmaschinen durch die Eingabe der genauen Komponentenbezeichnung entsprechende Projektbeispiele und Tutorials.

Die genaue Bezeichnung des Stromwandlers, die bei der Suche von Beschreibungen und Anleitungen wichtig sein kann, lautet TA12-200.

<!-- infolist -->

<!-- infolists -->
## Wichtige Links für die ersten Schritte:

- [Seeed Studio Wiki](http://wiki.seeedstudio.com/Grove-Electricity_Sensor/) [- Stromsensor](http://wiki.seeedstudio.com/Grove-Electricity_Sensor/)

## Projektbeispiele:

- [Hackster - AC Stromsensor](https://www.hackster.io/ingo-lohs/ac-current-sensor-182aff)  (Achtung: Hier wurde ein Sensor mit anderem Messverhältnis eingesetzt.)
- [Henry’s Bench - AC Stromsensor](http://henrysbench.capnfatz.com/henrys-bench/arduino-current-measurements/ta12-100-arduino-ac-current-sensor-tutorial/) (Achtung: Hier wurde ein Sensor mit anderem Messverhältnis eingesetzt.)

## Weiterführende Hintergrundinformationen:

- [TA12-200 - Datenblatt](http://www.electronicoscaldas.com/datasheet/TA12-TA12L-Series_YHDC.pdf)
- [Wechselstrom - Wikipedia Artikel](https://de.wikipedia.org/wiki/Wechselstrom)
- [Gleichstrom - Wikipedia Artikel](https://de.wikipedia.org/wiki/Gleichstrom)
- [GPIO - Wikipedia Artikel](https://de.wikipedia.org/wiki/Allzweckeingabe/-ausgabe)
- [GitHub-Repository: Stromsensor](https://github.com/MakeYourSchool/26-Stromsensor)



