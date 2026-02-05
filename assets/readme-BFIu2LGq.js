import { ad as resolveComponent, p as createElementBlock, v as openBlock, an as createStaticVNode, l as createBaseVNode, j as createVNode, D as createTextVNode, P as withCtx } from "./index-DDNyF-mq.js";
const _hoisted_1 = { class: "markdown-body" };
const title = "Endschalter/Anschlag";
const date = "2018-10-01T13:43:35.000Z";
const tags = ["sensor", "taster", "schalter", "taster", "motor", "input"];
const coverImage = "./mys_mk_25.png";
const material_number = "25";
const material_type = "sensor";
const manufacture = "generic";
const repo_name = "mks-generic-Endschalter";
const product_url = "https://www.reichelt.de/de/de/shop/kategorie/schnappschalter_endschalter-7599";
const clone_url = "https://github.com/Make-Your-School/mks-generic-Endschalter.git";
const repo_prefix = "mks";
const repo_part = "Endschalter";
const embedded_example_file = "examples/Endschalter_minimal/Endschalter_minimal.ino";
const status = "active";
const difficulty = "advanced";
const excerpt = '<h1 id="endschalter%2Fanschlag" tabindex="-1"><a class="header-anchor" href="#endschalter%2Fanschlag">Endschalter/Anschlag</a></h1>\n<p><img src="/mks-welcome/mks/parts/mks-generic-Endschalter/mys_mk_25.png" alt="Endschalter/Anschlag"></p>\n<h2 id="beschreibung" tabindex="-1"><a class="header-anchor" href="#beschreibung">Beschreibung</a></h2>\n<p>Der Endschalter funktioniert wie ein normaler Schalter und kann als Eingabe für einen Mikrocontroller verwendet werden.\nDer Schalter besitzt einen elastischen Schaltarm, der einen elektrischen Kontakt zwischen den Anschlusspins herstellt, wenn der Arm gedrückt wird.</p>\n';
const _sfc_main = {
  __name: "readme",
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "Endschalter/Anschlag", "date": "2018-10-01T13:43:35.000Z", "tags": ["sensor", "taster", "schalter", "taster", "motor", "input"], "coverImage": "./mys_mk_25.png", "material_number": "25", "material_type": "sensor", "manufacture": "generic", "repo_name": "mks-generic-Endschalter", "product_url": "https://www.reichelt.de/de/de/shop/kategorie/schnappschalter_endschalter-7599", "clone_url": "https://github.com/Make-Your-School/mks-generic-Endschalter.git", "repo_prefix": "mks", "repo_part": "Endschalter", "embedded_example_file": "examples/Endschalter_minimal/Endschalter_minimal.ino", "status": "active", "difficulty": "advanced" };
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      const _component_MDAbbr = resolveComponent("MDAbbr");
      const _component_MDExamples = resolveComponent("MDExamples");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[23] || (_cache[23] = createStaticVNode('<h1 id="endschalter%2Fanschlag" tabindex="-1"><a class="header-anchor" href="#endschalter%2Fanschlag">Endschalter/Anschlag</a></h1><p><img src="/mks-welcome/mks/parts/mks-generic-Endschalter/mys_mk_25.png" alt="Endschalter/Anschlag"></p><h2 id="beschreibung" tabindex="-1"><a class="header-anchor" href="#beschreibung">Beschreibung</a></h2><p>Der Endschalter funktioniert wie ein normaler Schalter und kann als Eingabe für einen Mikrocontroller verwendet werden. Der Schalter besitzt einen elastischen Schaltarm, der einen elektrischen Kontakt zwischen den Anschlusspins herstellt, wenn der Arm gedrückt wird.</p>', 4)),
        createBaseVNode("p", null, [
          _cache[2] || (_cache[2] = createTextVNode("Der Schalter kann an einen Arduino oder Raspberry Pi angeschlossen werden und benötigt nur einen digitalen ")),
          createVNode(_component_MDAbbr, null, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("Pin")
            ])),
            abbrDescription: withCtx(() => _cache[1] || (_cache[1] = [
              createBaseVNode("p", null, "Die Mikrocontroller besitzen kleine metallische Kontakte, an die Komponenten, Shields oder andere Platinen angeschlossen werden können. Diese Kontakte werden Pins genannt und können oft als sogenannte GPIO’s (Allzweck Ein- und Ausgabe) eingesetzt werden. Dies bedeutet, dass diese Pins direkt über die Programmierung des Mikrocontrollers angesprochen werden können und hierbei sogar bestimmt werden kann, ob dieser Pin als Eingang (beispielsweise zum Auslesen eines Sensors) oder als Ausgang (beispielsweise zur Steuerung eines Motors) genutzt werden kann. Praktisches Beispiel: Wird am Arduino eine LED an Pin 1 angeschlossen, kann im Programm direkt der Pin 1 als „An” oder „Aus” definiert werden und damit die LED an- oder ausgeschaltet werden.", -1)
            ])),
            _: 1
          }),
          _cache[3] || (_cache[3] = createTextVNode("."))
        ]),
        createBaseVNode("p", null, [
          _cache[10] || (_cache[10] = createTextVNode("Um den Schaltvorgang mit einem Mikrocontroller zu erfassen, wird ein digitaler ")),
          createVNode(_component_MDAbbr, null, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode("Pin")
            ])),
            abbrDescription: withCtx(() => _cache[5] || (_cache[5] = [
              createBaseVNode("p", null, "Die Mikrocontroller besitzen kleine metallische Kontakte, an die Komponenten, Shields oder andere Platinen angeschlossen werden können. Diese Kontakte werden Pins genannt und können oft als sogenannte GPIO’s (Allzweck Ein- und Ausgabe) eingesetzt werden. Dies bedeutet, dass diese Pins direkt über die Programmierung des Mikrocontrollers angesprochen werden können und hierbei sogar bestimmt werden kann, ob dieser Pin als Eingang (beispielsweise zum Auslesen eines Sensors) oder als Ausgang (beispielsweise zur Steuerung eines Motors) genutzt werden kann. Praktisches Beispiel: Wird am Arduino eine LED an Pin 1 angeschlossen, kann im Programm direkt der Pin 1 als „An” oder „Aus” definiert werden und damit die LED an- oder ausgeschaltet werden.", -1)
            ])),
            _: 1
          }),
          _cache[11] || (_cache[11] = createTextVNode(" des Controllers mit der einen Seite des Schalters verbunden. der zweite Anschluss mit Masse / GND. In ")),
          _cache[12] || (_cache[12] = createBaseVNode("em", null, "ruhe", -1)),
          _cache[13] || (_cache[13] = createTextVNode(" wird er ")),
          createVNode(_component_MDAbbr, null, {
            default: withCtx(() => _cache[6] || (_cache[6] = [
              createTextVNode("Pin")
            ])),
            abbrDescription: withCtx(() => _cache[7] || (_cache[7] = [
              createBaseVNode("p", null, "Die Mikrocontroller besitzen kleine metallische Kontakte, an die Komponenten, Shields oder andere Platinen angeschlossen werden können. Diese Kontakte werden Pins genannt und können oft als sogenannte GPIO’s (Allzweck Ein- und Ausgabe) eingesetzt werden. Dies bedeutet, dass diese Pins direkt über die Programmierung des Mikrocontrollers angesprochen werden können und hierbei sogar bestimmt werden kann, ob dieser Pin als Eingang (beispielsweise zum Auslesen eines Sensors) oder als Ausgang (beispielsweise zur Steuerung eines Motors) genutzt werden kann. Praktisches Beispiel: Wird am Arduino eine LED an Pin 1 angeschlossen, kann im Programm direkt der Pin 1 als „An” oder „Aus” definiert werden und damit die LED an- oder ausgeschaltet werden.", -1)
            ])),
            _: 1
          }),
          _cache[14] || (_cache[14] = createTextVNode(" im inneren des Controllers ")),
          _cache[15] || (_cache[15] = createBaseVNode("em", null, "auf VCC gezogen", -1)),
          _cache[16] || (_cache[16] = createTextVNode(" (beim Arduino +5V). Dies geschieht über einen internen zuschaltbaren hochohmigen Widerstand. ")),
          _cache[17] || (_cache[17] = createBaseVNode("code", null, "Pull-Up", -1)),
          _cache[18] || (_cache[18] = createTextVNode(" genannt. Sobald der Schalter betätigt wird, fließt ein ganz kleiner Strom zu Masse. Damit wird nun der ")),
          createVNode(_component_MDAbbr, null, {
            default: withCtx(() => _cache[8] || (_cache[8] = [
              createTextVNode("Pin")
            ])),
            abbrDescription: withCtx(() => _cache[9] || (_cache[9] = [
              createBaseVNode("p", null, "Die Mikrocontroller besitzen kleine metallische Kontakte, an die Komponenten, Shields oder andere Platinen angeschlossen werden können. Diese Kontakte werden Pins genannt und können oft als sogenannte GPIO’s (Allzweck Ein- und Ausgabe) eingesetzt werden. Dies bedeutet, dass diese Pins direkt über die Programmierung des Mikrocontrollers angesprochen werden können und hierbei sogar bestimmt werden kann, ob dieser Pin als Eingang (beispielsweise zum Auslesen eines Sensors) oder als Ausgang (beispielsweise zur Steuerung eines Motors) genutzt werden kann. Praktisches Beispiel: Wird am Arduino eine LED an Pin 1 angeschlossen, kann im Programm direkt der Pin 1 als „An” oder „Aus” definiert werden und damit die LED an- oder ausgeschaltet werden.", -1)
            ])),
            _: 1
          }),
          _cache[19] || (_cache[19] = createTextVNode(" des Controllers ")),
          _cache[20] || (_cache[20] = createBaseVNode("em", null, "auf Masse gezogen", -1)),
          _cache[21] || (_cache[21] = createTextVNode(". und genau diesen Unterschied kann der Controller erfassen."))
        ]),
        _cache[24] || (_cache[24] = createStaticVNode('<p>Der Endschalter kommt vor allem bei Robotern oder anderen bewegten Maschinen zum Einsatz, um Kollisionen zu erkennen und zu vermeiden. Dafür wird beispielsweise ein Endschalter am Ende einer Schiene platziert, auf der ein Laufwagen läuft. Kommt der Laufwagen zu nah an das Ende der Schiene, kollidiert er mit dem Schaltarm des Endschalters und betätigt ihn somit. So wird die bevorstehende Kollision erkannt und kann vermieden werden.</p><h2 id="anschl%C3%BCsse" tabindex="-1"><a class="header-anchor" href="#anschl%C3%BCsse">Anschlüsse</a></h2><h3 id="eingang" tabindex="-1"><a class="header-anchor" href="#eingang">Eingang</a></h3><ul><li>Mechanische Betätigung</li></ul><h3 id="ausgang" tabindex="-1"><a class="header-anchor" href="#ausgang">Ausgang</a></h3><ul><li>3 Kontakte (NC-C-NO) <ul><li>C = Common (gemeinsamer Anschluss)</li><li>NC = Normal Closed (im ungedürckten zustand mit C verbunden)</li><li>NO = Normal Open (im gedürckten zustand mit C verbunden)</li></ul></li></ul><h2 id="kurz-datenblatt" tabindex="-1"><a class="header-anchor" href="#kurz-datenblatt">Kurz-Datenblatt</a></h2><ul><li>Schaltleistung: 5A 125VAC</li></ul><p><a href="https://asset.conrad.com/media10/add/160267/c1/-/de/000707243DS01/datenblatt-707243-hartmann-mikroschalter-mbb1-01-a-01-c-09-a-250-vac-5-a-1-x-einein-tastend-1-st.pdf">Hersteller Datenblatt</a></p><h2 id="siehe-auch" tabindex="-1"><a class="header-anchor" href="#siehe-auch">Siehe Auch</a></h2><ul><li><ul><li></li></ul></li></ul><h2 id="library" tabindex="-1"><a class="header-anchor" href="#library">library</a></h2><p>keine library nötig.</p><h2 id="beispiele" tabindex="-1"><a class="header-anchor" href="#beispiele">Beispiele</a></h2>', 14)),
        createVNode(_component_MDExamples, {
          pathRel: "./examples/",
          basePath: "public/mks/parts/mks-generic-Endschalter/examples/"
        }, {
          contentJSON: withCtx(() => _cache[22] || (_cache[22] = [
            createTextVNode('{ "Endschalter_minimal": { "example_path": "public/mks/parts/mks-generic-Endschalter/examples/Endschalter_minimal", "example_url": "https://github.com/Make-Your-School/mks-generic-Endschalter/tree/main/examples/Endschalter_minimal", "example_path_app": "/mks-welcome/mks/parts/mks-generic-Endschalter/examples/Endschalter_minimal/", "files": { "Endschalter_minimal.ino": { "file_url": "https://github.com/Make-Your-School/mks-generic-Endschalter/tree/main/examples/Endschalter_minimal/Endschalter_minimal.ino", "file_path": "public/mks/parts/mks-generic-Endschalter/examples/Endschalter_minimal/Endschalter_minimal.ino", "file_path_web": "/mks-welcome/mks/parts/mks-generic-Endschalter/examples/Endschalter_minimal/Endschalter_minimal.ino", "example_path_app": "/mks-welcome/mks/parts/mks-generic-Endschalter/examples/Endschalter_minimal/", "file_name": "Endschalter_minimal.ino", "name": "Endschalter_minimal.", "file_ext": "ino", "content": "// ein einfaches Beispiel für einen Endschalter\\n// verbinde den Anschluss `C` des Schalters mit dem GND Anschluss des Arduino\\n// verbinde den Anschluss `NO` des Schalters mit dem PIN 2 des Arduino\\n\\n\\nconst int endschalterPin = 2;\\nbool endschalterStatus = false;\\n\\nvoid setup() {\\n    // wir warten 1 sekunde bis der Computer so weit ist..\\n    delay(1000);\\n    // initialiseiren die Seriale schnittstelle (die Text-Ausgabe-Verbindung zum Computer)\\n    Serial.begin(115200);\\n    // und zeigen was gerade auf dem Arduino *läuft*..\\n    Serial.println(\\"Make Your School Beispiel Sketch: Endschalter_minimal.ino\\");\\n\\n    // wir nutzen den im Arduino eingebauten PULLUP wiederstand.\\n    // dadurch invertiert sich die abfrage logic unten.\\n    pinMode(inputPin, INPUT_PULLUP);\\n}\\n\\nvoid loop() {\\n    // lese endschalter ein und speichere den Status in einer Variable.\\n    bool endschalterStatusNeu = digitalRead(endschalterPin);\\n    // prüfe oder der Status sich verändert hat\\n    if (endschalterStatus != endschalterStatusNeu) {\\n        // status hat sich verändert!!\\n        // wir warten nun 30ms. damit *entprellen* wir den taster\\n        endschalterStatus != endschalterStatusNeu\\n        delay(30);\\n        // update unsere  globale Status Variable\\n        endschalterStatus = endschalterStatusNeu;\\n        \\n        // reagiere nun auf die Status Veränderung\\n        // Wenn der Status == LOW ist, ist der Endschalter gedrückt worden.\\n        if (endschalterStatus == LOW) {\\n            Serial.println(\\"Endschalter wurde gerade gedrückt!\\");\\n        } else {\\n            Serial.println(\\"Endschalter wurde wieder geöffnet.\\");\\n        }\\n    }\\n}\\n" } } } }')
          ])),
          _: 1
        }),
        _cache[25] || (_cache[25] = createStaticVNode('<h2 id="anleitung" tabindex="-1"><a class="header-anchor" href="#anleitung">Anleitung</a></h2><ul><li>schließe den Endschalter wie folgt an: <ul><li>C an GND</li><li>NO an D2</li></ul></li><li>nehm Beispiel Code <ul><li>kopiere von hier drüber in neuen leeren arduino sketch</li><li>oder direkt über das Menü der Arduino IDE *1: <code>Datei-Beispiele-MakeYourSchool-Taster-Endschalter-Endschalter_Minimal</code></li></ul></li><li>Sketch Hochladen</li><li>Das Sollte nun passieren: <ul><li>Öffne den Serial-Monitor (Symbol ganz rechts oben in der IDE)</li><li>Wenn du nun den Endschalter drückst sollte <code>Endschalter wurde gerade gedrückt!</code> angezeigt werden.</li><li>Wenn du ihn wieder los lässt sollte <code>Endschalter wurde wieder geöffnet</code> angezeigt werden.</li></ul></li></ul><p>*1: dafür musst du einmalig die <code>MakeYourSchool</code> library installiert haben. diese bringt alle hier im system vorhandenen Beispielcodes in die IDE…</p><h2 id="wichtige-links-f%C3%BCr-die-ersten-schritte%3A" tabindex="-1"><a class="header-anchor" href="#wichtige-links-f%C3%BCr-die-ersten-schritte%3A">Wichtige Links für die ersten Schritte:</a></h2><ul><li><a href="https://asset.conrad.com/media10/add/160267/c1/-/de/000707243DS01/datenblatt-707243-hartmann-mikroschalter-mbb1-01-a-01-c-09-a-250-vac-5-a-1-x-einein-tastend-1-st.pdf">Datenblatt</a></li></ul><h2 id="projektbeispiele%3A" tabindex="-1"><a class="header-anchor" href="#projektbeispiele%3A">Projektbeispiele:</a></h2><ul><li><a href="http://hmr-video.de/slider.html">Kameraslider mit Endschalter</a></li></ul><h2 id="weiterf%C3%BChrende-hintergrundinformationen%3A" tabindex="-1"><a class="header-anchor" href="#weiterf%C3%BChrende-hintergrundinformationen%3A">Weiterführende Hintergrundinformationen:</a></h2><ul><li><a href="https://de.wikipedia.org/wiki/Schalter_(Elektrotechnik)">Schalter</a> <a href="https://de.wikipedia.org/wiki/Schalter_(Elektrotechnik)">(Elektrotechnik)</a> <a href="https://de.wikipedia.org/wiki/Schalter_(Elektrotechnik)">- Wikipedia Artikel</a></li><li><a href="https://de.wikipedia.org/wiki/Positionsschalter">Positionsschalter - Wikipedia Artikel</a></li><li><a href="https://de.wikipedia.org/wiki/Allzweckeingabe/-ausgabe">GPIO - Wikipedia Artikel</a></li></ul>', 9))
      ]);
    };
  }
};
const md_obj = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clone_url,
  coverImage,
  date,
  default: _sfc_main,
  difficulty,
  embedded_example_file,
  excerpt,
  manufacture,
  material_number,
  material_type,
  product_url,
  repo_name,
  repo_part,
  repo_prefix,
  status,
  tags,
  title
}, Symbol.toStringTag, { value: "Module" }));
export {
  _sfc_main as _,
  md_obj as m
};
