---
title: 'Gleichstrommotor mit Getriebe'
date: "2018-10-01T14:21:43.000Z"
tags: 
  - "output"
  - "motor"
  - "dc"
  - "getriebe"
  - "gear"
  - "Dagu"
  - "90 degree schaft"
coverImage: "42_gleichstrommotor_mit_getriebe.png"
material_number: "42"
material_type: "output"
material_short_descr: "380:1 Micro Metal Gearmotor HPCB 6V"
manufacture: "Generic"
repo_name: "mks-generic-DCGearMotor"
clone_url: "https://github.com/Make-Your-School/mks-generic-DCGearMotor.git"
repo_prefix: "mks"
repo_part: "DCGearMotor"
embedded_example_file: "examples/DCGearMotor_minimal/DCGearMotor_minimal.ino"
status: 'active'
difficulty: 'recommend'
---

# Gleichstrommotor mit Getriebe

![Gleichstrommotor mit Getriebe](./42_gleichstrommotor_mit_getriebe.png)

## Beschreibung

Ein Gleichstrommotor dreht solange, wie er an einer Spannungsquelle hängt und ist dadurch auf endloses Drehen optimal ausgelegt.
Dagegen ist die genaue Positionierung etwas schwieriger, da die Drehgeschwindigkeit von der Kraft die er aufbringen muss, abhängt.
Die Steuerung erfolgt über ein einfaches Relais, einen Transistor, einen manuellen Schalter oder einen Motortreiber, der als fertiges Modul zwischen Mikrocontroller und Gleichstrommotor geschaltet wird.

<!-- more_details -->

Im Materialkoffer sind Motoren mit zwei Getriebevarianten enthalten. Die Getriebe ermöglichen eine Übersetzung der Drehung der Motoren.
Je höher die Übersetzung gewählt wird, desto langsamer dreht der Motor. Gleichzeitig steigt die Kraft der Dreh-Achse.
Je nach gewähltem Motor, kann dieser von der gezeigten Abbildung abweichen

Alle weiteren Hintergrundinformationen, sowie ein Beispielaufbau und alle notwendigen Programmbibliotheken findet man über alle gängigen Suchmaschinen durch die Eingabe der genauen Komponentenbezeichnungen. 
Das wichtige Stichwort lautet hier „DC Motor“ oder „Gleichstrommotor“.

@[youtube](https://www.youtube.com/watch?v=wVxcmO2YuxA)

## Beispiele

!!!show-examples:./examples/

<!-- infolist -->

## Wichtige Links für die ersten Schritte:

- [Adafruit Gleichstrommotor](https://www.adafruit.com/product/711)
- [Produktseite](https://www.exp-tech.de/4298/dagu-dc-gear-motor-paar-90-degree-shaft-48-1) [- DC Motor mit Getriebe 48:1](https://www.exp-tech.de/4298/dagu-dc-gear-motor-paar-90-degree-shaft-48-1)
- [Produktseite - DC Motor mit Getriebe 380:1](https://www.exp-tech.de/motoren/dc-getriebemotoren/9496/380-1-micro-metal-gearmotor-hpcb-6v-with-extended-motor-shaft?c=1198)

## Projektbeispiele:

- [Arduino-Tutorial - DC Motor Steuerung](https://www.arduino-tutorial.de/motorsteuerung-direkt-per-arduino/)

## Weiterführende Hintergrundinformationen:

- [GPIO - Wikipedia Artikel](https://de.wikipedia.org/wiki/Allzweckeingabe/-ausgabe)
- [Gleichstrommotor - Wikipedia Artikel](https://de.wikipedia.org/wiki/Gleichstrommaschine)
- [Übersetzung - Wikipedia Artikel](<https://de.wikipedia.org/wiki/%C3%9Cbersetzung_(Technik)>)
