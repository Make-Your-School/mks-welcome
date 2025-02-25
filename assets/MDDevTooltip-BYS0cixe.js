import { r as ref, L as createBlock, M as openBlock, N as withCtx, R as createBaseVNode, j as createVNode, X as QBtn, Z as createTextVNode } from "./index-CjbvCaPl.js";
import { Q as QTooltip } from "./QTooltip-DBn3Pwno.js";
import { Q as QPage } from "./QPage-11_fG9Y4.js";
import "./selection-Ca7Y0T0O.js";
const _hoisted_1 = { style: { "overflow": "scroll" } };
const _hoisted_2 = { class: "q-gutter-sm" };
const _hoisted_3 = ["innerHTML"];
const _sfc_main = {
  __name: "MDDevTooltip",
  setup(__props) {
    const htmlContentTest = ref(`
<h1>Some h1 Heading..</h1>
<p>
    Ping Pong Text.. <br>
    und ein bisshcen mehr text.. noch damit wir die llänge sprengen brauchen wir sehr sehr viele wörter hin einer Zeile... tja - dann schreiben wir ncoh mehr
</p>
<p>and some more lines...</p>
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
                    createBaseVNode("div", { innerHTML: htmlContentTest.value }, null, 8, _hoisted_3)
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
