# Neues Bauteil Hinzufügen

hier wird kurz beschrieben wie ein neues bauteil hinzugefügt werden kann.

## Voraussetzungen / Benötigte Kenntnisse

- github & account
- local installiertes [git](https://git-scm.com/downloads)
    - commandline

## Hilfreich

[ausführlich docu zu submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules#Starting-with-Submodules)

## Vorgehen

### repo erzeugen

erzeuge neues repo auf grundlage von [mks-BauteilTemplate](https://github.com/Make-Your-School/mks-BauteilTemplate) (fork)

- damit wird sichergestellt das die Struktur kompatibel ist.

#### Name des Repositories

    - prefix
        - Offiziellen (im MYS MKS enthalten): `mks-`
        - _third-party_: `organisationsName-`
    - genaue Hersteller & Bauteil/Modul Bezeichnung
    - inkl. Versionsnummer (falls vorhanden)
    - z.B.
        - `mks-generic-Endschalter`
        - `mks-generic-Taster`
        - `mks-Arduino-UNO_R3   `
        - `kidslab-Adafruit-APDS9960-v1`

### content anpassen

in diesem Repository - passe alle Informationen in der readme.md entsprechend an. - füge beispiel Sketche hinzu - TODO: define style - used language (easy youth friendly german) - code style .... - have a look at the arduino library guide - have a look at the circuit python library guide (its very consistent and beginner friendly too!) - ....

- merke dir die git addresse des neu erstellten repository
    - zb `https://github.com/dgreiser/kidslab-Adafruit-APDS9960-v1`

### füge Bauteil zu mks-welcome hinzu

- github: fork dieses repo ([`mks-welcome`](https://github.com/Make-Your-School/mks-welcome))
- clone deinen fork auf deinen Computer
    - zb `git clone --recurse-submodules git@github.com:DEIN-GITHUB-NAME/mks-welcome.git`
- navigiere in den ordner: `cd mks-welcome`
- erstelle einen branch
    - zb `git checkout -b 'add Part Adafruit-APDS9960`
- füge submodul hinzu
    - zb `git submodule add https://github.com/dgreiser/kidslab-Adafruit-APDS9960-v1`
- commite änderungen
    - zb `git commit -a -m 'added part as submodule kidslab Adafruit-APDS9960'`
- pushe zu github
    - `git push`
- github: gehe zu deinem fork des `mks-welcome`
    - dort gibts dann direkt ein _banner_ um einen Pull-Request (pr) zu stellen..
    - ausfüllen & abschicken
- warten bis das MYS-git-team deinen pullrequest reviewed und dann merged..
    - falls es zu lange dauert >1Woche bitte einmal z.B. Stefan anpingen. (z.B. über MuM Chat)
