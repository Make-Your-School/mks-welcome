import { Q as QPage } from "./QPage-BDltWyZu.js";
import { H as createBlock, v as openBlock, P as withCtx, l as createBaseVNode, E as toDisplayString, n as unref, D as createTextVNode } from "./index-BwEHSwwy.js";
var define_process_env_appinfo_default = { name: "mks-welcome", version: "0.1.1", productName: "MYS MKS", description: "evolution of the material-website", projectUrl: "https://github.com/Make-Your-School/mks-welcome/", previewUrl: "https://make-your-school.github.io/mks-welcome/" };
const _sfc_main = {
  __name: "SettingsPage",
  setup(__props) {
    const appinfo = define_process_env_appinfo_default;
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
export {
  _sfc_main as default
};
