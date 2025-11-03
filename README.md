# Make Your School - Material

dieses repository beinhaltet die Dokumentation zu allen Make Your School Materialien.

es gibt eine gerenderte version unter:
https://Make-Your-School.github.io/mks-welcome/

ansonsten stöbere gerne in den verschiedenen Unterordnern bzw. Sub-Repositories -
für jedes Bauteil gibt es hier ein repository:
https://github.com/orgs/Make-Your-School/repositories?q=mks-

## Struktur

die Übersichts-seite liegt im Ordner [`public/mks/`](./public/mks/readme.md)
Darunter findest du die verschiedenen bauteile im Ordner [`public/mks/parts/`](./public/mks/parts/).
Jedes Bauteil liegt in einem eigenen Repository welches hier als git submodule eingebunden ist.

Im Ordner [`public/mks/abbr/`](./public/mks/abbr/) findest du die Tool-Tip-Wörter (abbreviations / Abkürzungen).
Alle diese hier verfügbaren Abkürzungen werden automatisch auf der gerenderten Seite mit den Tool-Tips ergänzt.
Der Inhalt der Tooltips ist dann der gerenderte Inhalt aus dem jeweils entsprechenden File.

Im Ordner [`public/mks/tags/`](./public/mks/tags/) findest du die Erklärungen für alle _Funktions-Gruppen_ / tags
(momentan noch ungenutzt.)

- [`public/`](./public/)
    - [`mks/`](./public/mks/)
        - [`parts/`](./public/mks/parts/)
            - [`mks-SeeedStudio-Grove_Ultrasonic_Ranger`](./public/mks/parts/mks-SeeedStudio-Grove_Ultrasonic_Ranger/)
                - [`readme.md`](./public/mks/parts/mks-SeeedStudio-Grove_Ultrasonic_Ranger/readme.md)
            - [`mks-generic-Endschalter`](./public/mks/parts/mks-generic-Endschalter/)
                - [`readme.md`](./public/mks/parts/mks-generic-Endschalter/readme.md)
            - [`mks-generic-Taster`](./public/mks/parts/mks-generic-Taster/)
                - [`readme.md`](./public/mks/parts/mks-generic-Taster/readme.md)
            - ...
        - [`tags/`](./public/mks/tags/)
            - [`Entfernung/`](./public/mks/tags/Entfernung)
                - [`readme.md`](./public/mks/tags/Entfernung/readme.md)
            - [`Schalter/`](./public/mks/tags/Schalter)
                - [`readme.md`](./public/mks/tags/Schalter/readme.md)
            - ...
        - [`abbr/`](./public/mks/abbr/)
            - [`UART.md`](./public/mks/abbr/UART.md)
            - ...


## contributions

### mks-welcome Struktur & Inhalt

du hast eine Idee zu einer Verbesserung der Struktur/Inhalt hier?
dann schreibe uns bitte im [issues-tracker](https://github.com/Make-Your-School/mks-welcome/issues)

### Bauteil Spezifisch Inhalt/Code

wenn es ein spezifisches Bauteil betrifft, bitte im Bauteil-eigenen Repository ein issue erstellen:

in der gerenderten Seite ist das jeweilige Bauteil-Repository ganz am Ende der Seite mit dem Text `edit source` verlinkt.

mehr infos zu diesem Prozess in [docu/contributions.md](./docu/contributions.md)

### Bauteil Hinzufügen

[docu/neues_bauteil_hinzufuegen.md](./docu/neues_bauteil_hinzufuegen.md)

## DEV

für development des renderings an-sich siehe [./docu/dev.md](./docu/dev.md)
