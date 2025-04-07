import { Q as QPage } from "./QPage-CBXi-rZz.js";
import { S as resolveComponent, l as createElementBlock, m as openBlock, j as createVNode, O as createBlock, p as withCtx, P as createBaseVNode, u as unref } from "./index-DzLZeyMe.js";
const _hoisted_1$1 = { class: "markdown-body" };
const excerpt = "";
const _sfc_main$1 = {
  __name: "dev",
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      const _component_MDCode = resolveComponent("MDCode");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_component_MDCode, {
          content: "void setup() {\n  // ping\n}\n\nvoid loop() {\n    delay(1042);\n}\n",
          codeLanguage: "c++",
          includePath: "",
          codeFilePath: "./example.ino",
          fileExists: "true"
        }),
        createVNode(_component_MDCode, {
          content: 'const hello = "world";\nlet ping = 42;\n',
          codeLanguage: "c++",
          includePath: "",
          codeFilePath: "",
          fileExists: "undefined"
        }),
        createVNode(_component_MDCode, {
          content: "void setup() {\n  // ping\n}\n\nvoid loop() {\n    delay(1042);\n}\n",
          codeLanguage: "c++",
          includePath: "",
          codeFilePath: "./example.ino",
          fileExists: "true"
        })
      ]);
    };
  }
};
const md_obj = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1,
  excerpt
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1 = { style: { "overflow": "scroll" } };
const _sfc_main = {
  __name: "MDDevImported",
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
            _cache[0] || (_cache[0] = createBaseVNode("h2", null, "Markdown DEV", -1)),
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
