import { Q as QPage } from "./QPage-Xbf2eGKO.js";
import { H as createBlock, v as openBlock, P as withCtx, l as createBaseVNode, E as toDisplayString, n as unref, D as createTextVNode, ac as resolveDynamicComponent } from "./index-DygvSGPQ.js";
import { a as about } from "./about-C8nsraHj.js";
var define_process_env_appinfo_default = { name: "mks-welcome", version: "0.1.1", productName: "MYS MKS", description: "evolution of the material-website", projectUrl: "https://github.com/Make-Your-School/mks-welcome/", previewUrl: "https://make-your-school.github.io/mks-welcome/" };
const _hoisted_1 = ["href"];
const _hoisted_2 = ["href"];
const _sfc_main = {
  __name: "AboutPage",
  setup(__props) {
    const appinfo = define_process_env_appinfo_default;
    console.log("about", about);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, {
        class: "flex column",
        style: { "align-items": "center" }
      }, {
        default: withCtx(() => [
          createBaseVNode("section", null, [
            createBaseVNode("h1", null, toDisplayString(unref(appinfo).productName), 1),
            createBaseVNode("p", null, "version: v" + toDisplayString(unref(appinfo).version), 1),
            createBaseVNode("p", null, [
              createTextVNode(toDisplayString(unref(appinfo).description), 1),
              _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
              _cache[1] || (_cache[1] = createTextVNode(" find the project repository at ")),
              _cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("a", {
                target: "_blank",
                href: unref(appinfo).projectUrl
              }, toDisplayString(unref(appinfo).projectUrl), 9, _hoisted_1)
            ]),
            createBaseVNode("p", null, [
              _cache[3] || (_cache[3] = createTextVNode(" a live preview version is hosted at")),
              _cache[4] || (_cache[4] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("a", {
                target: "_blank",
                href: unref(appinfo).previewUrl
              }, toDisplayString(unref(appinfo).previewUrl), 9, _hoisted_2)
            ])
          ]),
          createBaseVNode("section", null, [
            (openBlock(), createBlock(resolveDynamicComponent(unref(about).content)))
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
