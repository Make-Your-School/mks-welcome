---
title: 'Gleichstrommotor'
date: '2018-10-01T14:21:00.000Z'
tags:
    - 'output'
    - 'motor'
coverImage: '41_gleichstrommotor.png'
material_number: '41'
material_type: 'output'
material_short_descr: 'DC Toy/Hobby Motor – 130 Size'
manufacture: 'Generic'
repo_name: 'mks-generic-DCMotor_130'
repo_prefix: 'mks'
repo_manufacture: 'generic'
repo_part: 'DCMotor_130'
clone_url: 'https://github.com/Make-Your-School/mks-generic-DCMotor_130.git'
embedded_example_file: 'examples/DCMotor_130_minimal/DCMotor_130_minimal.ino'
status: 'active'
difficulty: 'recommend'
---

# Gleichstrommotor

![Gleichstrommotor](./41_gleichstrommotor.png)

## Beschreibung

Ein Gleichstrommotor (auch DC = Direct-Current Motor genannt) dreht solange, wie er an einer Spannungsquelle hängt.

<!-- more_details -->

Die tatsächliche Drehung ist auch von der Kraft abhängig, die er aufbringen muss, um etwas in Bewegung zu bringen.
Eine Positionierung ist daher ohne Sensoren nicht möglich.
Wird ein DC-Motor belastet, dreht er sich deutlich langsamer oder bleibt sogar stehen.

Die Steuerung erfolgt über ein einfaches Relais, einen Transistor, einen manuellen Schalter oder einen Motortreiber.

Falls du den Motor vom Arduino nur Ein und Aus Schalten möchtest, nutze einfach das [Relay](/mks-welcome/part/mks-SeeedStudio-Grove_Relay/).
Wenn eine Steuerung der Geschwindigkeit oder Drehrichtung nötig ist, verwendest du am besten den [Motortreiber](/mks-welcome/part/mks-SeeedStudio-Grove_I2C_Motor_Driver_V1.3/).
Schaue dort nach dem Beispiel für `DC-Motor`.

## Beispiele

!!!show-examples:./examples/

<!-- infolists -->

@[youtube](https://www.youtube.com/watch?v=wVxcmO2YuxA)

## Projektbeispiele:

- [Arduino-Tutorial - DC Motor Steuerung](https://www.arduino-tutorial.de/motorsteuerung-direkt-per-arduino/)

## Weiterführende Hintergrundinformationen:

- [Adafruit Gleichstrommotor](https://www.adafruit.com/product/711)
- [Seeed Studio Wiki – Motortreiber](http://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.3/)
- [GPIO - Wikipedia Artikel](https://de.wikipedia.org/wiki/Allzweckeingabe/-ausgabe)
- [Gleichstrommotor - Wikipedia Artikel](https://de.wikipedia.org/wiki/Gleichstrommaschine)
