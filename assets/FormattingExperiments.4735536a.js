import { Q as QTooltip, R as Rn } from "./preprocessMD.c807aab7.js";
import { Q as QPage } from "./QPage.c755eae9.js";
import { d as demo } from "./demo.ee9f8253.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
import { r as ref, L as openBlock, M as createBlock, N as withCtx, P as createBaseVNode, j as createVNode, a0 as unref, a1 as createTextVNode } from "./index.bd970e15.js";
import "./selection.9ddb791c.js";
var FormattingExperiments_vue_vue_type_style_index_0_scoped_true_lang = "";
const code_content = `
void setup() {
  // ping
}

void loop() {
    delay(1042);
}
`;
const _sfc_main = {
  __name: "FormattingExperiments",
  setup(__props) {
    console.log("demo", demo);
    ref(demo);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, {
        class: "flex column",
        style: { "align-items": "center" }
      }, {
        default: withCtx(() => [
          _cache[6] || (_cache[6] = createBaseVNode("section", null, [
            createBaseVNode("h2", null, "Quasar Formatting examples")
          ], -1)),
          createBaseVNode("section", null, [
            _cache[0] || (_cache[0] = createBaseVNode("h3", null, "code", -1)),
            createVNode(unref(Rn), {
              code: code_content,
              highlightjs: "",
              label: "./example.ino",
              lang: "c++",
              theme: "base16/solarized-dark"
            })
          ]),
          createBaseVNode("section", null, [
            _cache[3] || (_cache[3] = createBaseVNode("h3", null, "tooltips / abbr", -1)),
            _cache[4] || (_cache[4] = createTextVNode(" Dieses Bauteil nutzt die ")),
            createBaseVNode("span", null, [
              _cache[2] || (_cache[2] = createTextVNode(" I2C ")),
              createVNode(QTooltip, {
                anchor: "top middle",
                self: "bottom middle",
                class: "bg-amber text-black shadow-4 maxWidth"
              }, {
                default: withCtx(() => _cache[1] || (_cache[1] = [
                  createTextVNode(" InterInterCircuit - ein 2-Drahtiger Bus um zwischen einem *Main* und vielen *Clients* zu kommunizieren. jeder Client hat eine Adresse (*Haus-Nummer*). ")
                ])),
                _: 1
              })
            ]),
            _cache[5] || (_cache[5] = createTextVNode(" Schnittstelle. Dadurch ist es sehr leicht zu verwenden. "))
          ])
        ]),
        _: 1
      });
    };
  }
};
var FormattingExperiments = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9cd8aef2"]]);
export { FormattingExperiments as default };
