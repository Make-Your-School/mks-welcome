import { Q as QPage } from "./QPage.07e1241f.js";
import { L as openBlock, M as createBlock, N as withCtx, P as createBaseVNode, S as toDisplayString, a1 as unref, a2 as createTextVNode } from "./index.5210e46b.js";
const _sfc_main = {
  __name: "SettingsPage",
  setup(__props) {
    const appinfo = { "name": "mks-welcome", "version": "0.1.1", "productName": "MYS MKS", "description": "evolution of the material-website", "projectUrl": "https://github.com/Make-Your-School/mks-welcome/", "previewUrl": "https://make-your-school.github.io/mks-welcome/" };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, {
        class: "flex column",
        style: { "align-items": "center" }
      }, {
        default: withCtx(() => [
          createBaseVNode("section", null, [
            createBaseVNode("h1", null, toDisplayString(unref(appinfo).productName), 1)
          ]),
          _cache[0] || (_cache[0] = createBaseVNode("section", null, [
            createBaseVNode("h2", null, " Deine App-Einstellungen: "),
            createBaseVNode("div", null, [
              createTextVNode(" ToDo "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "font-size"),
                createBaseVNode("li", null, "colors"),
                createBaseVNode("li", null, "?"),
                createBaseVNode("li", null, "...")
              ])
            ])
          ], -1))
        ]),
        _: 1
      });
    };
  }
};
export { _sfc_main as default };
