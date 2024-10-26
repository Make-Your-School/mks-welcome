# Make Your School - Material

dieses repository beinhaltet die Dokumentation zu allen Make Your School Materialien.

es gibt eine suchbare gerenderte version unter:
https://s-light.github.io/mks-welcome/

ansonsten stöbere gerne in den verschiedenen Unterordnern.

## Struktur

-   [`public/`](./public/)
    -   [`mks/`](./public/mks/)
        -   [`readme.md`](./public/mks/readme.md)
        -   [`funktionen/`](./public/mks/funktionen/)
            -   [`Entfernung/`](./public/mks/funktionen/Entfernung)
                -   [`readme.md`](./public/mks/funktionen/Entfernung/readme.md)
                -   [`bauteile/`](./public/mks/funktionen/Entfernung/bauteile/)
                    -   [`mks-GroveUltraschall`](./public/mks/funktionen/Entfernung/bauteile/mks-GroveUltraschall/)
                        -   [`readme.md`](./public/mks/funktionen/Entfernung/bauteile/mks-GroveUltraschall/readme.md)
            -   [`Schalter/`](./public/mks/funktionen/Schalter)
                -   [`readme.md`](./public/mks/funktionen/Schalter/readme.md)
                -   [`bauteile/`](./public/mks/funktionen/Schalter/bauteile/)
                    -   [`mks-Endschalter`](./public/mks/funktionen/Schalter/bauteile/mks-Endschalter/)
                        -   [`readme.md`](./public/mks/funktionen/Schalter/bauteile/mks-Endschalter/readme.md)
                    -   [`mks-Taster`](./public/mks/funktionen/Schalter/bauteile/mks-Taster/)
                        -   [`readme.md`](./public/mks/funktionen/Schalter/bauteile/mks-Taster/readme.md)
            -   ...

die Übersichts-seite liegt im Ordner [`public/mks/`](./public/mks/readme.md)
Darunter findest du die verschiedenen _Funktionen_ im Ordner [`public/mks/funktionen/`](./public/mks/funktionen/).
je Funktion gibt es weitere Unterordner für jedes Bauteil.
Jedes Bauteil liegt in einem eigenen Repository welches hier als git submodule eingebunden ist.

die Website folgt in etwa diesem layout
![website layout](./layout_concept.svg)

## DEV

für development siehe [./dev.md](./dev.md)
