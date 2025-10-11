---
title: "Endschalter/Anschlag"
date: "2018-10-01T13:43:35.000Z"
tags: 
  - "sensor"
coverImage: "mys_mk_25.jpg"
material_number: "25"
material_type: "sensor"
manufacture: "Generic"
repo_name: "mks-generic-Endschalter"
product_url: "https://www.reichelt.de/de/de/shop/kategorie/schnappschalter_endschalter-7599"
clone_url: "https://github.com/Make-Your-School/mks-generic-Endschalter.git"
repo_prefix: "mks"
repo_part: "Endschalter"
embedded_example_file: "examples/Endschalter_minimal/Endschalter_minimal.ino"
---


# Endschalter/Anschlag

![Endschalter/Anschlag](./mys_mk_25.jpg)

## Beschreibung
Der Endschalter funktioniert wie ein normaler Schalter und kann als Eingabe für einen Mikrocontroller verwendet werden. Der Schalter besitzt einen elastischen Schaltarm, der einen elektrischen Kontakt zwischen den Anschlusspins herstellt, wenn der Arm gedrückt wird.

Um den Schaltvorgang mit einem Mikrocontroller zu erfassen, wird ein digitaler Pin des Controllers über den Schalter auf Masse gelegt. Sobald der Schalter betätigt wird, wird damit ein digitaler Anschlusspin auf Masse gelegt, was vom Controller erfasst werden kann.

Der Schalter kann an einen Arduino oder Raspberry Pi angeschlossen werden und benötigt nur einen digitalen Pin.

Der Endschalter kommt vor allem bei Robotern oder anderen bewegten Maschinen zum Einsatz, um Kollisionen zu erkennen und zu vermeiden. Dafür wird beispielsweise ein Endschalter am Ende einer Schiene platziert, auf der ein Laufwagen läuft. Kommt der Laufwagen zu nah an das Ende der Schiene, kollidiert er mit dem Schaltarm des Endschalters und betätigt ihn somit. So wird die bevorstehende Kollision erkannt und kann vermieden werden.

Man findet über alle gängigen Suchmaschinen durch die Eingabe der genauen Komponentenbezeichnung entsprechende Projektbeispiele und Tutorials.

<!-- infolist -->

<!-- infolists -->
## Wichtige Links für die ersten Schritte:

- [Datenblatt](https://asset.conrad.com/media10/add/160267/c1/-/de/000707243DS01/datenblatt-707243-hartmann-mikroschalter-mbb1-01-a-01-c-09-a-250-vac-5-a-1-x-einein-tastend-1-st.pdf)

## Projektbeispiele:

- [Kameraslider mit Endschalter](http://hmr-video.de/slider.html)

## Weiterführende Hintergrundinformationen:

- [Schalter](https://de.wikipedia.org/wiki/Schalter_\(Elektrotechnik\)) [(Elektrotechnik)](https://de.wikipedia.org/wiki/Schalter_\(Elektrotechnik\)) [- Wikipedia Artikel](https://de.wikipedia.org/wiki/Schalter_\(Elektrotechnik\))
- [Positionsschalter - Wikipedia Artikel](https://de.wikipedia.org/wiki/Positionsschalter)
- [GPIO - Wikipedia Artikel](https://de.wikipedia.org/wiki/Allzweckeingabe/-ausgabe)



