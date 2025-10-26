import { Q as QPage } from "./QPage-CJ3-1z1J.js";
import { ak as resolveComponent, p as createElementBlock, v as openBlock, l as createBaseVNode, aD as createStaticVNode, j as createVNode, D as createTextVNode, a1 as withCtx, H as createBlock, n as unref } from "./index-DjLok1U4.js";
const _hoisted_1$1 = { class: "markdown-body" };
const titel = "MD Test";
const tags = ["test", "mock"];
const excerpt = '<h1 id="test-md-features" tabindex="-1">Test MD features</h1>\n<p>demo Text…\nsome more text here… 🎉</p>\n<p>link: <a href="https://makeyourschool.de/maker-ecke/material/">mks</a> working?!\nand another paragraph</p>\n';
const _sfc_main$1 = {
  __name: "readme",
  setup(__props, { expose: __expose }) {
    const frontmatter = { "titel": "MD Test", "tags": ["test", "mock"] };
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      const _component_MDAbbr = resolveComponent("MDAbbr");
      const _component_MDCode = resolveComponent("MDCode");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _cache[13] || (_cache[13] = createBaseVNode("h1", {
          id: "test-md-features",
          tabindex: "-1"
        }, "Test MD features", -1)),
        _cache[14] || (_cache[14] = createBaseVNode("p", null, "demo Text… some more text here… 🎉", -1)),
        _cache[15] || (_cache[15] = createBaseVNode("p", null, [
          createTextVNode("link: "),
          createBaseVNode("a", { href: "https://makeyourschool.de/maker-ecke/material/" }, "mks"),
          createTextVNode(" working?! and another paragraph")
        ], -1)),
        _cache[16] || (_cache[16] = createBaseVNode("p", null, "this text is after the more_details break…", -1)),
        _cache[17] || (_cache[17] = createBaseVNode("h2", {
          id: "abbr",
          tabindex: "-1"
        }, "Abbr", -1)),
        createBaseVNode("p", null, [
          _cache[8] || (_cache[8] = createTextVNode("Here we have a Text with some Abbreviations - here should be no line-break! just a Abbr now: ")),
          createVNode(_component_MDAbbr, null, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("HTML")
            ])),
            abbrDescription: withCtx(() => _cache[1] || (_cache[1] = [
              createBaseVNode("p", null, "Hyper Text Markup Language", -1)
            ])),
            _: 1
          }),
          _cache[9] || (_cache[9] = createTextVNode(" for example. or the good known ")),
          createVNode(_component_MDAbbr, null, {
            default: withCtx(() => _cache[2] || (_cache[2] = [
              createTextVNode("W3C")
            ])),
            abbrDescription: withCtx(() => _cache[3] || (_cache[3] = [
              createBaseVNode("p", null, "World Wide Web Consortium", -1)
            ])),
            _: 1
          }),
          _cache[10] || (_cache[10] = createTextVNode(". and more in the topic of MYS we have ")),
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
          _cache[11] || (_cache[11] = createTextVNode(" in most of the uC’s. and often Sensors are using ")),
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
          _cache[12] || (_cache[12] = createTextVNode(" for there communication interface."))
        ]),
        _cache[18] || (_cache[18] = createStaticVNode('<h2 id="info-boxes%E2%80%A6" tabindex="-1">Info Boxes…</h2><h3 id="%40mdit%2Fplugin-alert" tabindex="-1">@mdit/plugin-alert</h3><div class="markdown-alert markdown-alert-note"><p class="markdown-alert-title">Note</p><p>This is a note</p></div><div class="markdown-alert markdown-alert-tip"><p class="markdown-alert-title">Tip</p><p>This is a tip</p></div><div class="markdown-alert markdown-alert-important"><p class="markdown-alert-title">Important</p><p>Important Information…</p></div><div class="markdown-alert markdown-alert-caution"><p class="markdown-alert-title">Caution</p><p>be careful with this…</p></div><div class="markdown-alert markdown-alert-warning"><p class="markdown-alert-title">Warning</p><p>This is warning text</p></div><h3 id="markdown-it-container" tabindex="-1">markdown-it-container</h3><p>::: info just some Information… :::</p><p>::: warning <em>here be dragons</em> :::</p><h2 id="code" tabindex="-1">code</h2><p>this code block should be filled with a good example.ino code…</p>', 12)),
        createVNode(_component_MDCode, {
          content: "void setup() {\n  // ping\n}\n\nvoid loop() {\n    delay(1042);\n}\n",
          codeLanguage: "c++",
          includePath: "",
          codeFilePath: "./example.ino",
          fileExists: "true"
        }),
        _cache[19] || (_cache[19] = createBaseVNode("p", null, "this code block does not find it’s linked file…", -1)),
        createVNode(_component_MDCode, {
          content: "this does fail.. so we can check a 404 is handled smoothly.\n",
          codeLanguage: "c++",
          includePath: "",
          codeFilePath: "./does_not_exist.ino",
          fileExists: "undefined"
        }),
        _cache[20] || (_cache[20] = createBaseVNode("p", null, "just some js…", -1)),
        createVNode(_component_MDCode, {
          content: 'const hello = "world";\nlet ping = 42;\n',
          codeLanguage: "js",
          includePath: "",
          codeFilePath: "",
          fileExists: "undefined"
        }),
        _cache[21] || (_cache[21] = createBaseVNode("p", null, "embed example2.ino here:", -1)),
        createVNode(_component_MDCode, {
          content: "pinMode(1, OUTPUT);\n",
          codeLanguage: "c++",
          includePath: "",
          codeFilePath: "./example2.ino",
          fileExists: "true"
        }),
        _cache[22] || (_cache[22] = createBaseVNode("p", null, "code examples done.", -1)),
        _cache[23] || (_cache[23] = createBaseVNode("h2", {
          id: "images",
          tabindex: "-1"
        }, "images", -1)),
        _cache[24] || (_cache[24] = createBaseVNode("p", null, [
          createTextVNode("include an image: "),
          createBaseVNode("img", {
            src: "/mks-welcome/demo/test_image.png",
            alt: "test"
          })
        ], -1)),
        _cache[25] || (_cache[25] = createBaseVNode("h2", {
          id: "heading2",
          tabindex: "-1"
        }, "heading2", -1)),
        _cache[26] || (_cache[26] = createBaseVNode("ul", null, [
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
