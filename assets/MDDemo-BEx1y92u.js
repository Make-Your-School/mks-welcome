import { Q as QPage } from "./QPage-wQZcRbzw.js";
import { ac as resolveComponent, p as createElementBlock, v as openBlock, am as createStaticVNode, l as createBaseVNode, j as createVNode, D as createTextVNode, P as withCtx, H as createBlock, n as unref } from "./index-z6ZCC-RU.js";
const _hoisted_1$1 = { class: "markdown-body" };
const titel = "MD Test";
const tags = ["test", "mock"];
const excerpt = '<h1 id="demo" tabindex="-1">Demo</h1>\n<p>Hier ist ein Text / Test um alle verfügbaren Formatierungsoptionen zu testen.\nDies dient auch als Reference 🎉</p>\n<p>den sorce-code dieses <em>readme.md</em> datei findest du unter</p>\n<p><a href="https://github.com/Make-Your-School/mks-welcome/blob/main/public/demo/readme.md?plain=1">https://github.com/Make-Your-School/mks-welcome/blob/main/public/demo/readme.md?plain=1</a></p>\n<p>ein link mit <em>titel</em> geht so: <a href="https://makeyourschool.de/material/">mks</a></p>\n<p>nun der - momentan ungenutzte - more_details link break.</p>\n';
const _sfc_main$1 = {
  __name: "readme",
  setup(__props, { expose: __expose }) {
    const frontmatter = { "titel": "MD Test", "tags": ["test", "mock"] };
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      const _component_MDAbbr = resolveComponent("MDAbbr");
      const _component_MDCode = resolveComponent("MDCode");
      const _component_MDExamples = resolveComponent("MDExamples");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _cache[16] || (_cache[16] = createStaticVNode('<h1 id="demo" tabindex="-1">Demo</h1><p>Hier ist ein Text / Test um alle verfügbaren Formatierungsoptionen zu testen. Dies dient auch als Reference 🎉</p><p>den sorce-code dieses <em>readme.md</em> datei findest du unter</p><p><a href="https://github.com/Make-Your-School/mks-welcome/blob/main/public/demo/readme.md?plain=1">https://github.com/Make-Your-School/mks-welcome/blob/main/public/demo/readme.md?plain=1</a></p><p>ein link mit <em>titel</em> geht so: <a href="https://makeyourschool.de/material/">mks</a></p><p>nun der - momentan ungenutzte - more_details link break.</p><p>dieser Text kommt dann nach dem more_details break…</p><h2 id="abbr" tabindex="-1">Abbr</h2>', 8)),
        createBaseVNode("p", null, [
          _cache[8] || (_cache[8] = createTextVNode("In diesem Text gibt es einige ")),
          _cache[9] || (_cache[9] = createBaseVNode("em", null, "Abbreviations", -1)),
          _cache[10] || (_cache[10] = createTextVNode(" - Abkürzungen. Zum Beispiel ")),
          createVNode(_component_MDAbbr, null, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("HTML")
            ])),
            abbrDescription: withCtx(() => _cache[1] || (_cache[1] = [
              createBaseVNode("p", null, "Hyper Text Markup Language", -1)
            ])),
            _: 1
          }),
          _cache[11] || (_cache[11] = createTextVNode(". Oder das eher unbekannte ")),
          createVNode(_component_MDAbbr, null, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("W3C")
            ])),
            abbrDescription: withCtx(() => _cache[3] || (_cache[3] = [
              createBaseVNode("p", null, "World Wide Web Consortium", -1)
            ])),
            _: 1
          }),
          _cache[12] || (_cache[12] = createTextVNode(". und mehr MYS relevante ")),
          createVNode(_component_MDAbbr, null, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode("UART")
            ])),
            abbrDescription: withCtx(() => _cache[5] || (_cache[5] = [
              createBaseVNode("h1", null, "Serielle Schnittstelle", -1),
              createBaseVNode("p", null, "UART = Universal Asynchronous Receiver Transmitter", -1),
              createBaseVNode("p", null, "Bei einer seriellen Datenübertragung werden die Bits (Informationen/Kommandos) nacheinander (seriell) über eine Leitung übertragen. Die wichtigsten seriellen Standards im Rahmen der Mikrocontroller sind I2C (Inter-Integrated Circuit), SPI (Serial Peripheral Interface) und UART (Universal Asynchronous Receiver Transmitter). Die genaue Funktionsweise ist für die reine Nutzung vorerst irrelevant. Es muss allerdings immer geprüft werden an welchen Pins oder an welchen Steckplätzen der jeweilige serielle Anschluss genutzt werden kann. Dies wird in den Datenblättern der Mikrocontroller normalerweise mit angegeben.", -1)
            ])),
            _: 1
          }),
          _cache[13] || (_cache[13] = createTextVNode(" und natürlich das bei Sensoren sehr häufig genutzte ")),
          createVNode(_component_MDAbbr, null, {
            default: withCtx(() => _cache[6] || (_cache[6] = [
              createTextVNode("I2C")
            ])),
            abbrDescription: withCtx(() => _cache[7] || (_cache[7] = [
              createBaseVNode("h1", null, "I²C", -1),
              createBaseVNode("p", null, "I²C InterInterCircuit", -1),
              createBaseVNode("p", null, "Bei einer seriellen Datenübertragung werden die Bits (Informationen/Kommandos) nacheinander (seriell) über eine Leitung übertragen. Die wichtigsten seriellen Standards im Rahmen der Mikrocontroller sind I2C (Inter-Integrated Circuit), SPI (Serial Peripheral Interface) und UART (Universal Asynchronous Receiver Transmitter). Die genaue Funktionsweise ist für die reine Nutzung vorerst irrelevant. Es muss allerdings immer geprüft werden, an welchen Pins oder an welchen Steckplätzen der jeweilige serielle Anschluss genutzt werden kann. Dies wird in den Datenblättern der Mikrocontroller normalerweise angegeben.", -1)
            ])),
            _: 1
          }),
          _cache[14] || (_cache[14] = createTextVNode(" für deren Kommunikation-Schnittstelle."))
        ]),
        _cache[17] || (_cache[17] = createStaticVNode('<h2 id="info-boxes%E2%80%A6" tabindex="-1">Info Boxes…</h2><p>Diese Box-Typen werden alle unterstützt:</p><div class="markdown-alert markdown-alert-tip"><p class="markdown-alert-title">Tip</p><p>This is a tip</p></div><div class="markdown-alert markdown-alert-notiz"><p class="markdown-alert-title">Notiz</p><p>Eine Notiz</p></div><div class="markdown-alert markdown-alert-wichtig"><p class="markdown-alert-title">Wichtig</p><p>Wichtige Informationen für diese Bauteil!</p></div><div class="markdown-alert markdown-alert-achtung"><p class="markdown-alert-title">Achtung</p><p>Bitte Vorsichtig sein!</p></div><div class="markdown-alert markdown-alert-warnung"><p class="markdown-alert-title">Warnung</p><p>Achtung Achtung!!! ganz wichtig…</p></div><h2 id="code" tabindex="-1">code</h2><p>code kannst du wie folgt einfügen:</p>', 9)),
        createVNode(_component_MDCode, {
          content: 'const hello = "world";\nlet ping = 42;\n',
          codeLanguage: "js",
          includePath: "",
          codeFilePath: "",
          fileExists: "undefined"
        }),
        _cache[18] || (_cache[18] = createBaseVNode("p", null, "und dann gibt es noch zwei Specials:", -1)),
        _cache[19] || (_cache[19] = createBaseVNode("h3", {
          id: "aus-datei-geladen",
          tabindex: "-1"
        }, "aus datei geladen", -1)),
        _cache[20] || (_cache[20] = createBaseVNode("p", null, "Dieser Code-Block sollte aus der Datei example.ino (im gleichen Ordner wie diese readme.md) befüllt sein:", -1)),
        createVNode(_component_MDCode, {
          content: "void setup() {\n  // ping\n}\n\nvoid loop() {\n    delay(1042);\n}\n",
          codeLanguage: "c++",
          includePath: "",
          codeFilePath: "./example.ino",
          fileExists: "true"
        }),
        _cache[21] || (_cache[21] = createBaseVNode("p", null, "bei diesem Code-Block existiert die verlinkte datei nicht…", -1)),
        createVNode(_component_MDCode, {
          content: "this does fail.. so we can check a 404 is handled smoothly.\n",
          codeLanguage: "c++",
          includePath: "",
          codeFilePath: "./does_not_exist.ino",
          fileExists: "undefined"
        }),
        _cache[22] || (_cache[22] = createBaseVNode("p", null, "und noch ein funktionierendes Beispiel example2.ino here:", -1)),
        createVNode(_component_MDCode, {
          content: "pinMode(1, OUTPUT);\n",
          codeLanguage: "c++",
          includePath: "",
          codeFilePath: "./example2.ino",
          fileExists: "true"
        }),
        _cache[23] || (_cache[23] = createBaseVNode("h3", {
          id: "alle-examples-einbinden",
          tabindex: "-1"
        }, "alle examples einbinden", -1)),
        _cache[24] || (_cache[24] = createBaseVNode("p", null, "mit", -1)),
        createVNode(_component_MDCode, {
          content: "!!!show-examples:./examples/\n",
          codeLanguage: "md",
          includePath: "",
          codeFilePath: "",
          fileExists: "undefined"
        }),
        _cache[25] || (_cache[25] = createBaseVNode("p", null, [
          createTextVNode("kannst du den "),
          createBaseVNode("em", null, "automatischen"),
          createTextVNode(" importer einfügen: dieser versucht aus dem verlinkten verzeichniss")
        ], -1)),
        _cache[26] || (_cache[26] = createBaseVNode("p", null, "das Ergebniss solltest du hier sehen:", -1)),
        createVNode(_component_MDExamples, {
          pathRel: "./examples/",
          basePath: "public/demo/examples/"
        }, {
          contentJSON: withCtx(() => _cache[15] || (_cache[15] = [
            createTextVNode('{ "cp_welcome": { "example_path": "public/demo/examples/cp_welcome", "example_url": "https://github.com/Make-Your-School/demo/tree/main/examples/cp_welcome", "files": { "main.py": { "file_url": "https://github.com/Make-Your-School/demo/tree/main/examples/cp_welcome/main.py", "file_path": "public/demo/examples/cp_welcome/main.py", "file_name": "main.py", "name": "main", "file_ext": ".py", "content": "\\"\\"\\"\\nCircuitPython hello world.\\n\\"\\"\\"\\n\\nimport time\\nimport board\\nimport neopixel\\n\\npixels = neopixel.NeoPixel(board.GP18, 2)\\npixels.fill(0)\\n\\nprint(\\"Hello World :-)\\")\\n\\nwhile True:\\n    pixels.fill(0x0000ff)\\n    time.sleep(0.5)\\n    pixels.fill(0x00ff00)\\n    time.sleep(0.5)\\n    pixels.fill(0xff00ff)\\n    time.sleep(0.5)\\n    pixels.fill(0x000100)\\n    time.sleep(1.0)\\n" } } }, "demo1": { "example_path": "public/demo/examples/demo1", "example_url": "https://github.com/Make-Your-School/demo/tree/main/examples/demo1", "files": { "demo1.ino": { "file_url": "https://github.com/Make-Your-School/demo/tree/main/examples/demo1/demo1.ino", "file_path": "public/demo/examples/demo1/demo1.ino", "file_name": "demo1.ino", "name": "demo1", "file_ext": ".ino", "content": "// *Hallo Welt* in Hardware.\\n// Lasse die eingebaute LED Blinken.\\n\\nconst int led_pin = LED_BUILTIN;\\n\\nvoid setup() { pinMode(led_pin, OUTPUT); }\\n\\nvoid loop() {\\n  digitalWrite(led_pin, HIGH);\\n  delay(500);\\n  digitalWrite(led_pin, LOW);\\n  delay(2 * 1000);\\n}\\n" } } }, "pingpong": { "example_path": "public/demo/examples/pingpong", "example_url": "https://github.com/Make-Your-School/demo/tree/main/examples/pingpong", "files": { "pingpong.ino": { "file_url": "https://github.com/Make-Your-School/demo/tree/main/examples/pingpong/pingpong.ino", "file_path": "public/demo/examples/pingpong/pingpong.ino", "file_name": "pingpong.ino", "name": "pingpong", "file_ext": ".ino", "content": "int countdown = 15;\\n\\nvoid setup() { Serial.begin(115200);\\n  Serial.println(\\"pingpong.ino - los gehts!\\");\\n}\\n\\nvoid loop() {\\n  Serial.println(countdown);\\n  countdown = countdown - 1;\\n  if (countdown == 0) {\\n    Serial.println(\\"jetzt piepts...\\");\\n    delay(1000);\\n    Serial.println(\\"hör auf mit dem gepiepe...\\");\\n  }\\n  delay(1000);\\n}\\n" } } } }')
          ])),
          _: 1
        }),
        _cache[27] || (_cache[27] = createBaseVNode("h2", {
          id: "bilder",
          tabindex: "-1"
        }, "Bilder", -1)),
        _cache[28] || (_cache[28] = createBaseVNode("p", null, "Bilder werden mit", -1)),
        _cache[29] || (_cache[29] = createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: "/mks-welcome/demo/test_image.png",
            alt: "test"
          })
        ], -1)),
        _cache[30] || (_cache[30] = createBaseVNode("p", null, "eingebunden.", -1)),
        _cache[31] || (_cache[31] = createBaseVNode("h2", {
          id: "%C3%BCberschriften",
          tabindex: "-1"
        }, "Überschriften", -1)),
        createVNode(_component_MDCode, {
          content: "# Überschrift ersten Grades\n## Überschrift zweiten Grades\n...\n",
          codeLanguage: "md",
          includePath: "",
          codeFilePath: "",
          fileExists: "undefined"
        }),
        _cache[32] || (_cache[32] = createBaseVNode("h2", {
          id: "liste",
          tabindex: "-1"
        }, "Liste", -1)),
        _cache[33] || (_cache[33] = createBaseVNode("ul", null, [
          createBaseVNode("li", null, "list element"),
          createBaseVNode("li", null, "list element"),
          createBaseVNode("li", null, "list element"),
          createBaseVNode("li", null, "list element")
        ], -1))
      ]);
    };
  }
};
const md_obj = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1,
  excerpt,
  tags,
  titel
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1 = { style: { "overflow": "scroll" } };
const _sfc_main = {
  __name: "MDDemo",
  setup(__props) {
    const MDContent = _sfc_main$1;
    console.log("md_obj", md_obj);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, {
        class: "flex column",
        style: { "align-items": "center" }
      }, {
        default: withCtx(() => [
          createBaseVNode("section", _hoisted_1, [
            _cache[0] || (_cache[0] = createTextVNode(" Markdown Test Page ")),
            createVNode(unref(MDContent))
          ])
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
