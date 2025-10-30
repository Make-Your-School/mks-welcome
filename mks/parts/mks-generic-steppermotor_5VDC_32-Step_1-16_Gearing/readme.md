---
title: 'Schrittmotor'
date: "2018-10-02T07:00:52.000Z"
tags: 
  - "output"
coverImage: "40_schrittmotor.png"
material_number: "40"
material_type: "output"
material_short_descr: "Small reduction stepper Motor"
manufacture: "Generic"
repo_name: "mks-generic-steppermotor_5VDC_32-Step_1-16_Gearing"
repo_prefix: "mks"
repo_manufacture: "generic"
repo_part: "steppermotor_5VDC_32-Step_1-16_Gearing"
product_url: "https://www.adafruit.com/product/858"
clone_url: "https://github.com/Make-Your-School/mks-generic-steppermotor_5VDC_32-Step_1-16_Gearing.git"
embedded_example_file: "examples/steppermotor_5VDC_32-Step_1-16_Gearing_minimal/steppermotor_5VDC_32-Step_1-16_Gearing_minimal.ino"
status: 'active'
difficulty: 'advanced'
---


# Schrittmotor

![Schrittmotor](./40_schrittmotor.png)

## Beschreibung
Ein Schrittmotor wird immer mithilfe eines Motortreibers angesteuert. Er kann sehr genau positioniert werden, selbst ohne Sensoren, da er in einzelnen, unabhängig von äußeren Belastungen, immer gleichbleibenden Schritten weiterdreht (innerhalb der angegeben Belastungsgrenze). Praktisch bedeutet das: Der Mikrocontroller sendet an den Motortreiber die Richtung und die Anzahl an Schritten, die weitergedreht werden sollen. Solange man die Anfangsposition kennt und den Überblick der vorwärts und rückwärts gedrehten Schritten behält, ist die Position des Motors bekannt. Der Schrittmotor ist dadurch sehr präzise aber oftmals nicht so schnell wie ein einfacher DC-Motor.

Weitere Informationen bezüglich der Ansteuerung sind beim Motortreiber zusammengefasst.

Ein Schrittmotor kommt durch seine genaue und einfache Positionierbarkeit oftmals in der Bewegung von Maschinen oder Roboters zum Einsatz.

Alle weiteren Hintergrundinformationen, sowie ein Beispielaufbau und alle notwendigen Programmbibliotheken findet man über alle gängigen Suchmaschinen durch die Eingabe der genauen Komponentenbezeichnungen.



## Beispiele

!!!show-examples:./examples/



<!-- infolist -->

 

@[youtube](https://www.youtube.com/watch?v=wVxcmO2YuxA)

 

## Wichtige Links für die ersten Schritte:

- [Adafruit Schrittmotor](https://www.adafruit.com/product/858)
- [Seeed Studio Wiki – Motortreiber](http://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.3/)

## Projektbeispiele:

- [Funduino - Schrittmotor](https://funduino.de/nr-15-schrittmotor)

## Weiterführende Hintergrundinformationen:

- [GPIO - Wikipedia Artikel](https://de.wikipedia.org/wiki/Allzweckeingabe/-ausgabe)
- [Schrittmotor - Wikipedia Artikel](https://de.wikipedia.org/wiki/Schrittmotor)



