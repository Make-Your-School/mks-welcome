import { U as Un, Q as QTooltip } from "./QTooltip-DTDg5YEK.js";
import { Q as QPage } from "./QPage-WNflYAs7.js";
import { L as createBlock, M as openBlock, N as withCtx, R as createBaseVNode, j as createVNode, Y as unref, Z as createTextVNode } from "./index-BeRvWUUD.js";
import "./selection-CoNXnmd1.js";
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
            createVNode(unref(Un), {
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
                class: "bg-amber text-black shadow-4",
                maxWidth: "10em"
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
export {
  _sfc_main as default
};
