# Make Your School - Material

Dieses Repository beinhaltet die Dokumentation zu allen technischen Materialien im Projekt Make Your School.

Eine gerenderte Version gibt es unter:
https://Make-Your-School.github.io/mks-welcome/

Stöbere gern in den verschiedenen Unterordnern bzw. Sub-Repositories - für jedes Bauteil gibt es hier ein Repository:
https://github.com/orgs/Make-Your-School/repositories?q=mks-

## Struktur

Die Übersichtsseite liegt im Ordner [`public/mks/`](./public/mks/readme.md).
Darunter findest du die verschiedenen Bauteile im Ordner [`public/mks/parts/`](./public/mks/parts/).
Jedes Bauteil liegt in einem eigenen Repository, das hier als git submodule eingebunden ist.

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

Du hast eine Idee zu einer Verbesserung der Struktur oder des Inhalts?
Dann schreibe uns bitte im [issues-tracker](https://github.com/Make-Your-School/mks-welcome/issues)

### Bauteilspezifisch Inhalt/Code

Wenn es ein spezifisches Bauteil betrifft, bitte im Bauteil-eigenen Repository ein issue erstellen:
In der gerenderten Seite ist das jeweilige Bauteil-Repository ganz am Ende der Seite mit dem Text `edit source` verlinkt.

Mehr infos zu diesem Prozess findest du in [docu/contributions.md](./docu/contributions.md)

### Bauteil hinzufügen

[docu/neues_bauteil_hinzufuegen.md](./docu/neues_bauteil_hinzufuegen.md)

## DEV

Für development des renderings an sich, siehe [./docu/dev.md](./docu/dev.md)
