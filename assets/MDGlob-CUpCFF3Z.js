import { S as resolveComponent, l as createElementBlock, m as openBlock, R as createStaticVNode, P as createBaseVNode, U as createTextVNode, j as createVNode, p as withCtx, u as unref, O as createBlock, F as Fragment, W as renderList, X as toDisplayString, V as resolveDynamicComponent } from "./index-j8_ddN6m.js";
import { Q as QTooltip } from "./QTooltip-DaO7tg5S.js";
import { Q as QPage } from "./QPage-BhKAIjD9.js";
import "./scroll-v_GPqoH8.js";
import "./focus-manager-TfMniKh0.js";
const _hoisted_1$5 = { class: "markdown-body" };
const excerpt$4 = "";
const _sfc_main$5 = {
  __name: "abbr_test",
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      const _component_MDAbbr = resolveComponent("MDAbbr");
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        _cache[15] || (_cache[15] = createStaticVNode('<hr><h2 id="title%3A-testing-abbreviationstags%3A-%5Brendering%2C-abbr%2C-style%5Did%3A-1024" tabindex="-1">title: Testing Abbreviations tags: [rendering, abbr, style] id: 1024</h2><h1 id="test-abbreviations" tabindex="-1">Test Abbreviations</h1><p>In this document there are two abbr defined - <code>SUN</code> and <code>pp</code>.</p><p>from the global space should be enabled: <code>HTML</code>, <code>W3C</code>, <code>I2C</code>, <code>UART</code>.</p>', 5)),
        createBaseVNode("p", null, [
          _cache[2] || (_cache[2] = createTextVNode("Mikrocontroller often use ")),
          createVNode(_component_MDAbbr, null, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("I2C")
            ])),
            abbrDescription: withCtx(() => _cache[1] || (_cache[1] = [
              createBaseVNode("h1", null, "I²C", -1),
              createBaseVNode("p", null, "I²C InterInterCircuit", -1),
              createBaseVNode("p", null, [
                createTextVNode("Serielle Schnittstelle 2Pins: SDA, SCL es gibt immer einen "),
                createBaseVNode("em", null, "Controller"),
                createTextVNode(" (z.B. Arduino oder RaspberryPi) und viele "),
                createBaseVNode("em", null, "Geräte"),
                createTextVNode(" (z.B. Sensoren) die Geräte werden über eine Adresse ("),
                createBaseVNode("em", null, "Hausnummer"),
                createTextVNode(") angesprochen. Diese kann Teils auch beim Gerät Eingestellt werden.")
              ], -1)
            ])),
            _: 1
          }),
          _cache[3] || (_cache[3] = createTextVNode(" for communications."))
        ]),
        createBaseVNode("p", null, [
          _cache[6] || (_cache[6] = createTextVNode("The ")),
          createVNode(_component_MDAbbr, null, {
            default: withCtx(() => _cache[4] || (_cache[4] = [
              createTextVNode("SUN")
            ])),
            abbrDescription: withCtx(() => _cache[5] || (_cache[5] = [
              createTextVNode("big bright light")
            ])),
            _: 1
          }),
          _cache[7] || (_cache[7] = createTextVNode(" shines today!"))
        ]),
        createBaseVNode("p", null, [
          _cache[10] || (_cache[10] = createTextVNode("Another older interface is ")),
          createVNode(_component_MDAbbr, null, {
            default: withCtx(() => _cache[8] || (_cache[8] = [
              createTextVNode("UART")
            ])),
            abbrDescription: withCtx(() => _cache[9] || (_cache[9] = [
              createBaseVNode("h1", null, "Serielle Schnittstelle", -1),
              createBaseVNode("p", null, "UART = Universal Asynchronous Receiver Transmitter", -1),
              createBaseVNode("p", null, "meist 2Pins: TX (Senden) und RX (Empfangen) der TX Pin des Sendenden Geräts muss an den RX-Pin des Empfangenen Gerätes angeschlossen werden.", -1)
            ])),
            _: 1
          }),
          _cache[11] || (_cache[11] = createTextVNode(" - most times it is a point to point connection."))
        ]),
        createBaseVNode("p", null, [
          createVNode(_component_MDAbbr, null, {
            default: withCtx(() => _cache[12] || (_cache[12] = [
              createTextVNode("HTML")
            ])),
            abbrDescription: withCtx(() => _cache[13] || (_cache[13] = [
              createBaseVNode("p", null, "Hyper Text Markup Language", -1)
            ])),
            _: 1
          }),
          _cache[14] || (_cache[14] = createTextVNode(" is a nice way to do things?!"))
        ])
      ]);
    };
  }
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$5,
  excerpt: excerpt$4
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$4 = { class: "markdown-body" };
const excerpt$3 = "";
const _sfc_main$4 = {
  __name: "code_test",
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      const _component_MDCode = resolveComponent("MDCode");
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        _cache[0] || (_cache[0] = createBaseVNode("hr", null, null, -1)),
        _cache[1] || (_cache[1] = createBaseVNode("h2", {
          id: "title%3A-testing-code-blockstags%3A-%5Bsw%2C-code%2C-style%5Did%3A-127",
          tabindex: "-1"
        }, "title: Testing Code-Blocks tags: [sw, code, style] id: 127", -1)),
        _cache[2] || (_cache[2] = createBaseVNode("h1", {
          id: "code-test",
          tabindex: "-1"
        }, "Code Test", -1)),
        _cache[3] || (_cache[3] = createBaseVNode("p", null, "some default…", -1)),
        createVNode(_component_MDCode, {
          content: "const xyz = 42\n",
          codeLanguage: "js",
          includePath: "",
          codeFilePath: "",
          fileExists: "undefined"
        }),
        _cache[4] || (_cache[4] = createBaseVNode("p", null, "the following code block should be filled with a good example.ino code…", -1)),
        createVNode(_component_MDCode, {
          content: "html {\n    color: orange;\n    background-color: hsl(219, 100%, 18%);\n    box-shadow: 0 0 10px black;\n}\n",
          codeLanguage: "css",
          includePath: "",
          codeFilePath: "./example.css",
          fileExists: "true"
        }),
        _cache[5] || (_cache[5] = createBaseVNode("p", null, "the end.", -1))
      ]);
    };
  }
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4,
  excerpt: excerpt$3
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$3 = { class: "markdown-body" };
const excerpt$2 = "";
const _sfc_main$3 = {
  __name: "hello",
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, _cache[0] || (_cache[0] = [
        createBaseVNode("hr", null, null, -1),
        createBaseVNode("h2", {
          id: "title%3A-world-hello!!tags%3A-%5Bhello%5Did%3A-12345",
          tabindex: "-1"
        }, "title: World Hello!! tags: [hello] id: 12345", -1),
        createBaseVNode("h1", {
          id: "hello-world",
          tabindex: "-1"
        }, "Hello World", -1),
        createBaseVNode("p", null, "some intro text…", -1),
        createBaseVNode("p", null, "and more details… what ever follows here…", -1),
        createBaseVNode("p", null, "the end.", -1)
      ]));
    };
  }
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3,
  excerpt: excerpt$2
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$2 = { class: "markdown-body" };
const excerpt$1 = "";
const _sfc_main$2 = {
  __name: "readme",
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        _cache[2] || (_cache[2] = createBaseVNode("hr", null, null, -1)),
        _cache[3] || (_cache[3] = createBaseVNode("h2", {
          id: "title%3A-my-special-title%E2%80%A6tags%3A-%5Boutput%2C-aktor%2C-motor%2C-i2c%5Did%3A-70",
          tabindex: "-1"
        }, "title: my special title… tags: [output, aktor, motor, i2c] id: 70", -1)),
        _cache[4] || (_cache[4] = createBaseVNode("h1", {
          id: "readme.md",
          tabindex: "-1"
        }, "Readme.md", -1)),
        _cache[5] || (_cache[5] = createBaseVNode("p", null, "this is a test 😃", -1)),
        createBaseVNode("p", null, [
          _cache[1] || (_cache[1] = createTextVNode("PING")),
          createVNode(unref(QTooltip), null, {
            default: withCtx(() => _cache[0] || (_cache[0] = [
              createTextVNode("Blubber Blubber")
            ])),
            _: 1
          })
        ])
      ]);
    };
  }
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2,
  excerpt: excerpt$1
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$1 = { class: "markdown-body" };
const excerpt = "";
const _sfc_main$1 = {
  __name: "test",
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, _cache[0] || (_cache[0] = [
        createBaseVNode("hr", null, null, -1),
        createBaseVNode("h2", {
          id: "title%3A-ping-pong%E2%80%A6tags%3A-%5Binput%5Did%3A-42",
          tabindex: "-1"
        }, "title: ping pong… tags: [input] id: 42", -1),
        createBaseVNode("h1", {
          id: "some-more-content%E2%80%A6",
          tabindex: "-1"
        }, "some more content…", -1),
        createBaseVNode("p", null, "this is another test 😃", -1),
        createBaseVNode("p", null, [
          createBaseVNode("img", {
            src: "src/md_content/test_image.png",
            alt: "blubber"
          })
        ], -1),
        createBaseVNode("p", null, "and some more text…", -1)
      ]));
    };
  }
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1,
  excerpt
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1 = { for: "" };
const _sfc_main = {
  __name: "MDGlob",
  setup(__props) {
    const mdcontent = /* @__PURE__ */ Object.assign({ "/src/md_content/abbr_test.md": __vite_glob_0_0, "/src/md_content/code_test.md": __vite_glob_0_1, "/src/md_content/hello.md": __vite_glob_0_2, "/src/md_content/readme.md": __vite_glob_0_3, "/src/md_content/test.md": __vite_glob_0_4 });
    console.log("mdcontent", mdcontent);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          _cache[1] || (_cache[1] = createTextVNode(" here are all *.md files rendered one after each other: ")),
          _cache[2] || (_cache[2] = createBaseVNode("hr", null, null, -1)),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(mdcontent), (item, index) => {
            return openBlock(), createElementBlock("div", { key: index }, [
              createBaseVNode("label", _hoisted_1, toDisplayString(index), 1),
              (openBlock(), createBlock(resolveDynamicComponent(item.default))),
              _cache[0] || (_cache[0] = createBaseVNode("hr", null, null, -1))
            ]);
          }), 128))
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
