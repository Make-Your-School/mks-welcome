
---
title: "Infrarot-Emitter"
date: "2018-10-01T13:29:36.000Z"
tags: 
  - "output"
coverImage: "15_infrarot_emitter.jpg"
material_number: "15"
material_type: "output"
material_short_descr: "Seeed Studio Grove – Infrared Emitter"
manufacture: "Seeed Studio"
manufacture_url: "https://www.seeedstudio.com/"
repo_name: "mks-SeeedStudio-Grove_Infrared_Emitter"
repo_prefix: "mks"
repo_manufacture: "SeeedStudio"
repo_part: "Grove_Infrared_Emitter"
product_url: "https://wiki.seeedstudio.com/Grove-Infrared_Emitter/"
clone_url: "https://github.com/Make-Your-School/mks-SeeedStudio-Grove_Infrared_Emitter.git"
embedded_example_file: "examples/Grove_Infrared_Emitter_minimal/Grove_Infrared_Emitter_minimal.ino"
---


# Infrarot-Emitter

![Infrarot-Emitter](15_infrarot_emitter.jpg)

## Beschreibung
Der Infrarot Emitter wird zur Übertragung von Signalen über infrarotes Licht eingesetzt. Als Partner kommt der Infrarot-Empfänger zum Einsatz, der die Signale empfängt. Die Leuchtdiode strahlt in einer Wellenlänge von 940nm und kann nicht nur zum Bestrahlen des entsprechenden Empfängers genutzt werden, sondern ebenfalls als Infrarot-Fernbedienung von anderen Geräten eingesetzt werden. Die maximale Reichweite beträgt ca. 10m. Der Emitter kann direkt oder mithilfe des Grove Shields an einen Arduino oder Raspberry Pi angeschlossen werden. Er wird hierbei über einen \[simple\_tooltip content='

Digital vs. analog:

- Analoge Signale können beliebige kontinuierliche Werte annehmen. Sie verändern sich stufenlos. Dadurch können theoretisch unendlich viele kleine Änderungen (und damit ein unendlicher Informationsinhalt) übertragen werden. Einschränkend wirkt die Genauigkeit, mit der das analoge Signal ausgelesen/erfasst wird.
- Das digitale Signal nimmt nur diskrete Werte an und springt bei einer etwaigen Änderung von einem Wert zum nächsten. Es kann nur eine definierte Anzahl an Informationsinhalten übertragen werden. Vorteilhaft ist dagegen die damit verbundene Fehlerfreiheit bei minimalsten, ungewollten Schwankungen. Oftmals werden nur zwei Werte HIGH und LOW (Ein/Aus oder 1/0) übermittelt.

'\]digitalen\[/simple\_tooltip\] \[simple\_tooltip content='Die Mikrocontroller besitzen kleine metallische Kontakte, an die Komponenten, Shields oder andere Platinen angeschlossen werden können. Diese Kontakte werden Pins genannt und können oft als sogenannte GPIO’s (Allzweck Ein- und Ausgabe) eingesetzt werden. Dies bedeutet, dass diese Pins direkt über die Programmierung des Mikrocontrollers angesprochen werden können und hierbei sogar bestimmt werden kann, ob dieser Pin als Eingang (beispielsweise zum Auslesen eines Sensors) oder als Ausgang (beispielsweise zur Steuerung eines Motors) genutzt werden kann. Praktisches Beispiel: Wird am Arduino eine LED an Pin 1 angeschlossen, kann im Programm direkt der Pin 1 als „An“ oder „Aus“ definiert werden und damit die LED an- oder ausgeschaltet werden.'\]Pin\[/simple\_tooltip\] angesteuert.

Infrarot-Emitter und Infrarot-Empfänger können kombiniert als Signalübertragung genutzt werden oder auch als Lichtschranke verwendet werden. Der Infrarot-Emitter kann ebenfalls eingesetzt werden, um Fernbedienungen zu simulieren.

Alle weiteren Hintergrundinformationen sowie ein Beispielaufbau und alle notwendigen Programmbibliotheken sind auf dem offiziellen Wiki (bisher nur in englischer Sprache) von Seeed Studio zusammengefasst. Zusätzlich findet man über alle gängigen Suchmaschinen durch die Eingabe der genauen Komponentenbezeichnung entsprechende Projektbeispiele und Tutorials.

<!-- infolist -->

<!-- infolists -->
## Wichtige Links für die ersten Schritte:

- [Seeed Studio Wiki](http://wiki.seeedstudio.com/Grove-Infrared_Emitter/) [- IR Emitter](http://wiki.seeedstudio.com/Grove-Infrared_Emitter/)
- [Sparkfun - Grundlagen IR Übertragung](https://learn.sparkfun.com/tutorials/ir-communication/all) [(englisch)](https://learn.sparkfun.com/tutorials/ir-communication/all)

## Projektbeispiele:

- [Hackster - Infrarot Übertragung](https://www.hackster.io/ctroberts/ir-launchpad-to-launchpad-communication-0dd109)
- [Nikolaus Lueneburg - IR Module](https://www.nikolaus-lueneburg.de/2014/10/arduino-infrarot-sende-und-empfangsmodul-teil-1/)

## Weiterführende Hintergrundinformationen:

- [GPIO - Wikipedia Artikel](https://de.wikipedia.org/wiki/Allzweckeingabe/-ausgabe)
- [GitHub-Repository: Infrarot-Emitter und -Empfänger](https://github.com/MakeYourSchool/15-16-Infrarot-Emitter-und-Empfaenger)



