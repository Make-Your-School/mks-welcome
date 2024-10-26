import { Q as QPage } from "./QPage.39696ad9.js";
import { p as openBlock, J as createBlock, M as withCtx, n as createBaseVNode, H as toDisplayString, z as unref } from "./index.14bd400a.js";
const _sfc_main = {
  __name: "SettingsPage",
  setup(__props) {
    const appinfo = { "name": "mks-welcome", "version": "0.0.1", "productName": "MYS MKS", "description": "evolution of the material-website" };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, {
        class: "flex column",
        style: { "align-items": "center" }
      }, {
        default: withCtx(() => [
          createBaseVNode("section", null, [
            createBaseVNode("h4", null, toDisplayString(unref(appinfo).productName), 1)
          ])
        ]),
        _: 1
      });
    };
  }
};
export { _sfc_main as default };
