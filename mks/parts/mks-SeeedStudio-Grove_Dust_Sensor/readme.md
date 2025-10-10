
---
title: "Feinstaubsensor"
date: "2018-10-01T12:55:53.000Z"
tags: 
  - "sensor"
coverImage: "8_feinstaubsensor.jpg"
material_number: "8"
material_type: "sensor"
material_short_descr: "Seeed Studio Grove – Dust sensor"
manufacture: "Seeed Studio"
manufacture_url: "https://www.seeedstudio.com/"
repo_name: "mks-SeeedStudio-Grove_Dust_Sensor"
product_url: "https://wiki.seeedstudio.com/Grove-Dust_Sensor/"
clone_url: "https://github.com/Make-Your-School/mks-SeeedStudio-Grove_Dust_Sensor.git"
repo_prefix: "mks"
repo_part: "Grove_Dust_Sensor"
embedded_example_file: "examples/Grove_Dust_Sensor_minimal/Grove_Dust_Sensor_minimal.ino"
---


# Feinstaubsensor

![Feinstaubsensor](8_feinstaubsensor.jpg)

## Beschreibung
Der Feinstaubsensor wertet die umgebende Luftqualität über die Feinstaubkonzentration aus. Die Feinstaubkonzentration wird dabei durch die Anzahl an erfassten Partikeln pro Zeiteinheit bestimmt. Der Sensor erfasst Feinstaubpartikel ab einer Größe von 1 µm und gibt einen Impuls bei jeder Erfassung eines Partikels aus. Er kann direkt oder mithilfe des Grove Shields an einen \[simple\_tooltip content=' Digital vs. analog:

- Analoge Signale können beliebige kontinuierliche Werte annehmen. Sie verändern sich stufenlos. Dadurch können theoretisch unendlich viele kleine Änderungen (und damit ein unendlicher Informationsinhalt) übertragen werden. Einschränkend wirkt die Genauigkeit, mit der das analoge Signal ausgelesen/erfasst wird.
- Das digitale Signal nimmt nur diskrete Werte an und springt bei einer etwaigen Änderung von einem Wert zum nächsten. Es kann nur eine definierte Anzahl an Informationsinhalten übertragen werden. Vorteilhaft ist dagegen die damit verbundene Fehlerfreiheit bei minimalsten, ungewollten Schwankungen. Oftmals werden nur zwei Werte HIGH und LOW (Ein/Aus oder 1/0) übermittelt.

'\]digitalen\[/simple\_tooltip\] \[simple\_tooltip content='Die Mikrocontroller besitzen kleine metallische Kontakte, an die Komponenten, Shields oder andere Platinen angeschlossen werden können. Diese Kontakte werden Pins genannt und können oft als sogenannte GPIO’s (Allzweck Ein- und Ausgabe) eingesetzt werden. Dies bedeutet, dass diese Pins direkt über die Programmierung des Mikrocontrollers angesprochen werden können und hierbei sogar bestimmt werden kann, ob dieser Pin als Eingang (beispielsweise zum Auslesen eines Sensors) oder als Ausgang (beispielsweise zur Steuerung eines Motors) genutzt werden kann. Praktisches Beispiel: Wird am Arduino eine LED an Pin 1 angeschlossen, kann im Programm direkt der Pin 1 als „An” oder „Aus” definiert werden und damit die LED an- oder ausgeschaltet werden.'\]Pin\[/simple\_tooltip\] eines Arduinos angeschlossen werden. Die Anzahl der Impulse kann schließlich mithilfe des Arduinos in die Feinstaubkonzentration umgerechnet werden.

Alle weiteren Hintergrundinformationen sowie ein Beispielaufbau und notwendigen Programmbibliotheken sind auf dem offiziellen Wiki (bisher nur in englischer Sprache) von Seeed Studio zusammengefasst. Zusätzlich findet man über alle gängigen Suchmaschinen durch die Eingabe der genauen Komponentenbezeichnung entsprechende Projektbeispiele und Tutorials.

<!-- infolist -->

<!-- infolists -->
## Wichtige Links für die ersten Schritte:

- [Seeed Studio Wiki](http://wiki.seeedstudio.com/Grove-Dust_Sensor/) [- Feinstaubsensor](http://wiki.seeedstudio.com/Grove-Dust_Sensor/)

## Weiterführende Hintergrundinformationen:

- [GPIO - Wikipedia Artikel](https://de.wikipedia.org/wiki/Allzweckeingabe/-ausgabe)
- [GitHub-Repository: Feinstaubsensor](https://github.com/MakeYourSchool/8-Feinstaubsensor)



