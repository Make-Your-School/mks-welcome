
---
title: "Kippschalter"
date: "2018-10-01T13:42:53.000Z"
tags: 
  - "sensor"
coverImage: "24_kippschalter.jpg"
material_number: "24"
material_type: "sensor"
material_short_descr: "Seeed Studio Grove – Tilt Switch"
manufacture: "Seeed Studio"
manufacture_url: "https://www.seeedstudio.com/"
repo_name: "mks-SeeedStudio-Grove_Tilt_Switch"
repo_prefix: "mks"
repo_manufacture: "SeeedStudio"
repo_part: "Grove_Tilt_Switch"
product_url: "https://wiki.seeedstudio.com/Grove-Tilt_Switch/"
clone_url: "https://github.com/Make-Your-School/mks-SeeedStudio-Grove_Tilt_Switch.git"
embedded_example_file: "examples/Grove_Tilt_Switch_minimal/Grove_Tilt_Switch_minimal.ino"
---


# Kippschalter

![Kippschalter](24_kippschalter.jpg)

## Beschreibung
Der Kippschalter funktioniert wie ein normaler Schalter. Er kann als Eingabe für einen Mikrocontroller verwendet werden. Der Sensor besteht aus mehreren Metallkugeln, die nur dann einen elektrischen Kontakt herstellen, wenn der Sensor hochkant steht. Der Sensor gibt ein digitales Signal aus, sobald er eine gewisse Neigung erreicht. Er kann direkt oder mithilfe des Grove Shields an einen Arduino oder Raspberry Pi angeschlossen werden. Der Schalter benötigt nur einen \[simple\_tooltip content='Digital vs. analog:

- Analoge Signale können beliebige kontinuierliche Werte annehmen. Sie verändern sich stufenlos. Dadurch können theoretisch unendlich viele kleine Änderungen (und damit ein unendlicher Informationsinhalt) übertragen werden. Einschränkend wirkt die Genauigkeit, mit der das analoge Signal ausgelesen/erfasst wird.
- Das digitale Signal nimmt nur diskrete Werte an und springt bei einer etwaigen Änderung von einem Wert zum nächsten. Es kann nur eine definierte Anzahl an Informationsinhalten übertragen werden. Vorteilhaft ist dagegen die damit verbundene Fehlerfreiheit bei minimalsten, ungewollten Schwankungen. Oftmals werden nur zwei Werte HIGH und LOW (Ein/Aus oder 1/0) übermittelt.

'\]digitalen\[/simple\_tooltip\] \[simple\_tooltip content='Die Mikrocontroller besitzen kleine metallische Kontakte, an die Komponenten, Shields oder andere Platinen angeschlossen werden können. Diese Kontakte werden Pins genannt und können oft als sogenannte GPIO’s (Allzweck Ein- und Ausgabe) eingesetzt werden. Dies bedeutet, dass diese Pins direkt über die Programmierung des Mikrocontrollers angesprochen werden können und hierbei sogar bestimmt werden kann, ob dieser Pin als Eingang (beispielsweise zum Auslesen eines Sensors) oder als Ausgang (beispielsweise zur Steuerung eines Motors) genutzt werden kann. Praktisches Beispiel: Wird am Arduino eine LED an Pin 1 angeschlossen, kann im Programm direkt der Pin 1 als „An“ oder „Aus“ definiert werden und damit die LED an- oder ausgeschaltet werden. '\]Pin\[/simple\_tooltip\].

Der Kippschalter kann eingesetzt werden, um einen Grenzwinkel für eine beliebige Neigung zu ermitteln und davor zu warnen.

Alle weiteren Hintergrundinformationen sowie ein Beispielaufbau und alle notwendigen Programmbibliotheken sind auf dem offiziellen Wiki (bisher nur in englischer Sprache) von Seeed Studio zusammengefasst. Zusätzlich findet man über alle gängigen Suchmaschinen durch die Eingabe der genauen Komponentenbezeichnung entsprechende Projektbeispiele und Tutorials.

<!-- infolist -->

<!-- infolists -->
## Wichtige Links für die ersten Schritte:

- [Seeed Studio Wiki](http://wiki.seeedstudio.com/Grove-Tilt_Switch/) [- Kippschalter](http://wiki.seeedstudio.com/Grove-Tilt_Switch/)
- [Adafruit - Kippschalter](https://learn.adafruit.com/tilt-sensor/using-a-tilt-sensor)

## Projektbeispiele:

- [Adafruit - Wecker mit Neigungssensor](https://learn.adafruit.com/tilt-sensor/example-projects)

## Weiterführende Hintergrundinformationen:

- [Schalter](https://de.wikipedia.org/wiki/Schalter_\(Elektrotechnik\)) [(Elektrotechnik)](https://de.wikipedia.org/wiki/Schalter_\(Elektrotechnik\)) [- Wikipedia Artikel](https://de.wikipedia.org/wiki/Schalter_\(Elektrotechnik\))
- [GPIO - Wikipedia Artikel](https://de.wikipedia.org/wiki/Allzweckeingabe/-ausgabe)
- [GitHub-Repository: Kippschalter](https://github.com/MakeYourSchool/24-Kippschalter)



