import { R as resolveComponent, l as createElementBlock, m as openBlock, X as createStaticVNode, j as createVNode } from "./index-CzSw4iFq.js";
const _hoisted_1 = { class: "markdown-body" };
const title = "Endschalter";
const tags = ["taster_schalter", "schalter", "taster_taster_schalter", "schalter", "taster", "motor", "input"];
const id = 25;
const excerpt = '<h1 id="endschalter" tabindex="-1">Endschalter</h1>\n<p><img src="/mks-welcome/mks/parts/mks-Endschalter/bauteil.png" alt="Endschalter"></p>\n<!-- TODO: CONTENT change image -->\n<!-- TODO: ARCHITECTURE multiple images? -->\n<!-- do we need multiple images per part?-->\n<!-- and if do we need a slider? -->\n<h2 id="beschreibung" tabindex="-1">Beschreibung</h2>\n<p>Der Endschalter funktioniert wie ein normaler Schalter und kann als Eingabe für einen Mikrocontroller verwendet werden.\nDer Schalter besitzt einen elastischen Schaltarm, der einen elektrischen Kontakt zwischen den Anschlusspins herstellt, wenn der Arm gedrückt wird.</p>\n';
const _sfc_main = {
  __name: "readme",
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "Endschalter", "tags": ["taster_schalter", "schalter", "taster_taster_schalter", "schalter", "taster", "motor", "input"], "id": 25 };
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      const _component_MDCode = resolveComponent("MDCode");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[0] || (_cache[0] = createStaticVNode('<h1 id="endschalter" tabindex="-1">Endschalter</h1><p><img src="/mks-welcome/mks/parts/mks-Endschalter/bauteil.png" alt="Endschalter"></p><h2 id="beschreibung" tabindex="-1">Beschreibung</h2><p>Der Endschalter funktioniert wie ein normaler Schalter und kann als Eingabe für einen Mikrocontroller verwendet werden. Der Schalter besitzt einen elastischen Schaltarm, der einen elektrischen Kontakt zwischen den Anschlusspins herstellt, wenn der Arm gedrückt wird.</p><p>Der Endschalter kommt vor allem bei Robotern oder anderen bewegten Maschinen zum Einsatz, um Kollisionen zu erkennen und zu vermeiden. So kann dieser zum Beispiel an einem Roboter angebaut werden - wenn der Roboter dann gegen ein Hindernis fährt, wird der Endschalter betätigt bevor der Roboter das Hindernis wirklich berührt. So wird die bevorstehende Kollision erkannt und kann vermieden werden. (z.B. fährt der Roboter dann Rückwärts vom Hindernis weg.)</p><h2 id="anschl%C3%BCsse" tabindex="-1">Anschlüsse</h2><h3 id="eingang" tabindex="-1">Eingang</h3><ul><li>Mechanische Betätigung</li></ul><h3 id="ausgang" tabindex="-1">Ausgang</h3><ul><li>3 Kontakte (NC-C-NO) <ul><li>C = Common (gemeinsamer Anschluss)</li><li>NC = Normal Closed (im ungedürckten zustand mit C verbunden)</li><li>NO = Normal Open (im gedürckten zustand mit C verbunden)</li></ul></li></ul><h2 id="kurz-datenblatt" tabindex="-1">Kurz-Datenblatt</h2><ul><li>Schaltleistung: 5A 125VAC</li></ul><p><a href="https://asset.conrad.com/media10/add/160267/c1/-/de/000707243DS01/datenblatt-707243-hartmann-mikroschalter-mbb1-01-a-01-c-09-a-250-vac-5-a-1-x-einein-tastend-1-st.pdf">Hersteller Datenblatt</a></p><h2 id="siehe-auch" tabindex="-1">Siehe Auch</h2><ul><li><ul><li></li></ul></li></ul><h2 id="library" tabindex="-1">library</h2><p>keine library nötig.</p><h2 id="beispiel" tabindex="-1">Beispiel</h2><p>schau dir das Minimal-Beispiel an:</p>', 19)),
        createVNode(_component_MDCode, {
          content: '// ein einfaches Beispiel für einen Endschalter\n// verbinde den Anschluss `C` des Schalters mit dem GND Anschluss des Arduino\n// verbinde den Anschluss `NO` des Schalters mit dem PIN 2 des Arduino\n\n\nconst int endschalterPin = 2;\nbool endschalterStatus = false;\n\nvoid setup() {\n    // wir warten 1 sekunde bis der Computer so weit ist..\n    delay(1000);\n    // initialiseiren die Seriale schnittstelle (die Text-Ausgabe-Verbindung zum Computer)\n    Serial.begin(115200);\n    // und zeigen was gerade auf dem Arduino *läuft*..\n    Serial.println("Make Your School Beispiel Sketch: Endschalter_minimal.ino");\n\n    // wir nutzen den im Arduino eingebauten PULLUP wiederstand.\n    // dadurch invertiert sich die abfrage logic unten.\n    pinMode(inputPin, INPUT_PULLUP);\n}\n\nvoid loop() {\n    // lese endschalter ein und speichere den Status in einer Variable.\n    bool endschalterStatusNeu = digitalRead(endschalterPin);\n    // prüfe oder der Status sich verändert hat\n    if (endschalterStatus != endschalterStatusNeu) {\n        // status hat sich verändert!!\n        // wir warten nun 30ms. damit *entprellen* wir den taster\n        endschalterStatus != endschalterStatusNeu\n        delay(30);\n        // update unsere  globale Status Variable\n        endschalterStatus = endschalterStatusNeu;\n        \n        // reagiere nun auf die Status Veränderung\n        // Wenn der Status == LOW ist, ist der Endschalter gedrückt worden.\n        if (endschalterStatus == LOW) {\n            Serial.println("Endschalter wurde gerade gedrückt!");\n        } else {\n            Serial.println("Endschalter wurde wieder geöffnet.");\n        }\n    }\n}\n',
          codeLanguage: "c++",
          includePath: "",
          codeFilePath: "./examples/Endschalter_minimal/Endschalter_minimal.ino",
          fileExists: "true"
        }),
        _cache[1] || (_cache[1] = createStaticVNode('<h2 id="anleitung" tabindex="-1">Anleitung</h2><ul><li>schließe den Endschalter wie folgt an: <ul><li>C an GND</li><li>NO an D2</li></ul></li><li>nehm Beispiel Code <ul><li>kopiere von hier drüber in neuen leeren arduino sketch</li><li>oder direkt über das Menü der Arduino IDE *1: <code>Datei-Beispiele-MakeYourSchool-Taster-Endschalter-Endschalter_Minimal</code></li></ul></li><li>Sketch Hochladen</li><li>Das Sollte nun passieren: <ul><li>Öffne den Serial-Monitor (Symbol ganz rechts oben in der IDE)</li><li>Wenn du nun den Endschalter drückst sollte <code>Endschalter wurde gerade gedrückt!</code> angezeigt werden.</li><li>Wenn du ihn wieder los lässt sollte <code>Endschalter wurde wieder geöffnet</code> angezeigt werden.</li></ul></li></ul><p>*1: dafür musst du einmalig die <code>MakeYourSchool</code> library installiert haben. diese bringt alle hier im system vorhandenen Beispielcodes in die IDE…</p>', 3))
      ]);
    };
  }
};
const md_obj = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main,
  excerpt,
  id,
  tags,
  title
}, Symbol.toStringTag, { value: "Module" }));
export {
  _sfc_main as _,
  md_obj as m
};
