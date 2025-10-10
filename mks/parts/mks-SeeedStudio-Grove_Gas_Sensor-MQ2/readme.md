
---
title: "Gassensor"
date: "2018-10-01T13:25:00.000Z"
tags: 
  - "sensor"
coverImage: "11_gassensor.jpg"
material_number: "11"
material_type: "sensor"
material_short_descr: "Seeed Studio Grove – Gas Sensor (MQ2)"
manufacture: "Seeed Studio"
manufacture_url: "https://www.seeedstudio.com/"
repo_name: "mks-SeeedStudio-Grove_Gas_Sensor-MQ2"
repo_prefix: "mks"
repo_manufacture: "SeeedStudio"
repo_part: "Grove_Gas_Sensor-MQ2"
product_url: "https://wiki.seeedstudio.com/Grove-Gas_Sensor-MQ2/"
clone_url: "https://github.com/Make-Your-School/mks-SeeedStudio-Grove_Gas_Sensor-MQ2.git"
embedded_example_file: "examples/Grove_Gas_Sensor-MQ2_minimal/Grove_Gas_Sensor-MQ2_minimal.ino"
---


# Gassensor

![Gassensor](11_gassensor.jpg)

## Beschreibung
Der Grove Gas Sensor MQ2 erfasst Leckströme von Verbrennungsgasen (beispielsweise Rauch). Er besitzt eine hohe Sensitivität und eine schnelle Reaktionszeit. Er benötigt allerdings in vielen Fällen eine längere Kalibrierungsphase vor der ersten Benutzung. Die Sensitivität kann direkt auf dem Sensor mithilfe des Potentiometers eingestellt werden.

Der Sensor kann direkt oder mithilfe des Grove Shields an einen Arduino angeschlossen werden. Er gibt dabei die Konzentration über den \[simple\_tooltip content='Digital vs. analog:

- Analoge Signale können beliebige kontinuierliche Werte annehmen. Sie verändern sich stufenlos. Dadurch können theoretisch unendlich viele kleine Änderungen (und damit ein unendlicher Informationsinhalt) übertragen werden. Einschränkend wirkt die Genauigkeit, mit der das analoge Signal ausgelesen/erfasst wird.
- Das digitale Signal nimmt nur diskrete Werte an und springt bei einer etwaigen Änderung von einem Wert zum nächsten. Es kann nur eine definierte Anzahl an Informationsinhalten übertragen werden. Vorteilhaft ist dagegen die damit verbundene Fehlerfreiheit bei minimalsten, ungewollten Schwankungen. Oftmals werden nur zwei Werte HIGH und LOW (Ein/Aus oder 1/0) übermittelt.

'\]analogen\[/simple\_tooltip\] \[simple\_tooltip content='Die Mikrocontroller besitzen kleine metallische Kontakte, an die Komponenten, Shields oder andere Platinen angeschlossen werden können. Diese Kontakte werden Pins genannt und können oft als sogenannte GPIO’s (Allzweck Ein- und Ausgabe) eingesetzt werden. Dies bedeutet, dass diese Pins direkt über die Programmierung des Mikrocontrollers angesprochen werden können und hierbei sogar bestimmt werden kann, ob dieser Pin als Eingang (beispielsweise zum Auslesen eines Sensors) oder als Ausgang (beispielsweise zur Steuerung eines Motors) genutzt werden kann. Praktisches Beispiel: Wird am Arduino eine LED an Pin 1 angeschlossen, kann im Programm direkt der Pin 1 als „An” oder „Aus” definiert werden und damit die LED an- oder ausgeschaltet werden'\]Pin\[/simple\_tooltip\] aus.

Alle weiteren Hintergrundinformationen sowie ein Beispielaufbau und alle notwendigen Programmbibliotheken sind auf dem offiziellen Wiki (bisher nur in englischer Sprache) von Seeed Studio zusammengefasst. Hier wird man ebenfalls Schritt für Schritt durch die Kalibrierung geführt. Zusätzlich findet man über alle gängigen Suchmaschinen durch die Eingabe der genauen Komponentenbezeichnung entsprechende Projektbeispiele und Tutorials.

<!-- infolist -->

<!-- infolists -->
## Wichtige Links für die ersten Schritte:

- [Seeed Studio Wiki](http://wiki.seeedstudio.com/Grove-Gas_Sensor-MQ2/) [- Gas Sensor](http://wiki.seeedstudio.com/Grove-Gas_Sensor-MQ2/)

## Weiterführende Hintergrundinformationen:

- [GPIO - Wikipedia Artikel](https://de.wikipedia.org/wiki/Allzweckeingabe/-ausgabe)
- [GitHub-Repository: Gassensor](https://github.com/MakeYourSchool/11-Gas-Sensor)



