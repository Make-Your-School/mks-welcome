import { L as openBlock, O as createElementBlock, P as createBaseVNode, j as createVNode, X as QBtn } from "./index.14623120.js";
const _hoisted_1 = { class: "fullscreen bg-blue text-white text-center q-pa-md flex flex-center" };
const _sfc_main = Object.assign({
  name: "ErrorNotFound"
}, {
  __name: "ErrorNotFound",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", null, [
          _cache[0] || (_cache[0] = createBaseVNode("div", { style: { "font-size": "30vh" } }, " 404 ", -1)),
          _cache[1] || (_cache[1] = createBaseVNode("div", {
            class: "text-h2",
            style: { "opacity": ".4" }
          }, " Oops. Nothing here... ", -1)),
          createVNode(QBtn, {
            class: "q-mt-xl",
            color: "white",
            "text-color": "blue",
            unelevated: "",
            to: "/",
            label: "Go Home",
            "no-caps": ""
          })
        ])
      ]);
    };
  }
});
export { _sfc_main as default };
