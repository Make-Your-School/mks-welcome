import { r as ref, O as createBlock, m as openBlock, p as withCtx, P as createBaseVNode, j as createVNode, Y as QBtn, U as createTextVNode } from "./index-GdisMny6.js";
import { Q as QTooltip } from "./QTooltip-D_diXs2V.js";
import { Q as QPage } from "./QPage-BWNlXP7Z.js";
import { _ as _sfc_main$1 } from "./MyMarkdown-_ZUDTiLb.js";
import "./scroll-BbtnWxDP.js";
import "./focus-manager-TfMniKh0.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-DXipyAWe.js";
import "./core-CUVoAmL3.js";
import "./cpp-DxF16jcj.js";
const _hoisted_1 = { style: { "overflow": "scroll" } };
const _hoisted_2 = { class: "q-gutter-sm" };
const _sfc_main = {
  __name: "MDDevTooltip",
  setup(__props) {
    const mdcontent = ref(`
# Hello
Ping Pong Text..
und ein bisshcen mehr text.. noch damit wir die llänge sprengen brauchen wir sehr sehr viele wörter hin einer Zeile... tja - dann schreiben wir ncoh mehr

and some more lines...
`);
    const showing = ref(false);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, {
        class: "flex column",
        style: { "align-items": "center" }
      }, {
        default: withCtx(() => [
          createBaseVNode("section", _hoisted_1, [
            _cache[4] || (_cache[4] = createBaseVNode("h2", null, "tooltip test", -1)),
            createBaseVNode("div", _hoisted_2, [
              createVNode(QBtn, {
                color: "primary",
                onClick: _cache[0] || (_cache[0] = ($event) => showing.value = true),
                label: "Show"
              }),
              createVNode(QBtn, {
                color: "primary",
                onClick: _cache[1] || (_cache[1] = ($event) => showing.value = false),
                label: "Hide"
              })
            ]),
            createBaseVNode("span", null, [
              _cache[3] || (_cache[3] = createTextVNode(" PING")),
              createVNode(QTooltip, {
                anchor: "center middle",
                self: "center middle",
                class: "MDAbbrContent bg-amber text-black shadow-4",
                "max-width": "30em",
                modelValue: showing.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => showing.value = $event)
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", null, [
                    createVNode(_sfc_main$1, {
                      source: mdcontent.value,
                      "file-path": ""
                    }, null, 8, ["source"])
                  ])
                ]),
                _: 1
              }, 8, ["modelValue"])
            ])
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
