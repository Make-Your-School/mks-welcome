import { Q as QPage } from "./QPage-DhjHp9nS.js";
import { p as preProcessingMD, _ as _sfc_main$1 } from "./MyMarkdown-CN6rSJ0T.js";
import { r as ref, L as createBlock, M as openBlock, N as withCtx, R as createBaseVNode, U as toDisplayString, Y as unref, Z as createTextVNode, j as createVNode } from "./index-DYxZp72n.js";
import "./_plugin-vue_export-helper-cWe_MhP7.js";
import "./QTooltip-CHSomqtF.js";
import "./selection-CARqgAhl.js";
import "./index-C2HsSMC5.js";
const __vite_glob_0_0 = "# About\n\ndies ist die neuauflage der Material Koffer Set Hilfe-Seite.\n\nschau mal bei\nhttps://makeyourschool.de/maker-ecke/material/\nvorbei..\n\n";
const about = () => {
  console.group("mksContent");
  let content = {};
  const path_base = "../../public/";
  console.log("load about readme");
  let temp = /* @__PURE__ */ Object.assign({
    "../../public/about.md": __vite_glob_0_0
  });
  content.readme = preProcessingMD(temp["../../public/about.md"]);
  content.path_base = path_base;
  console.log("about done.");
  console.log("content:", content);
  console.groupEnd();
  return content;
};
const about$1 = about();
var define_process_env_appinfo_default = { name: "mks-welcome", version: "0.1.1", productName: "MYS MKS", description: "evolution of the material-website", projectUrl: "https://github.com/Make-Your-School/mks-welcome/", previewUrl: "https://make-your-school.github.io/mks-welcome/" };
const _hoisted_1 = ["href"];
const _hoisted_2 = ["href"];
const _sfc_main = {
  __name: "AboutPage",
  setup(__props) {
    const appinfo = define_process_env_appinfo_default;
    console.log("about", about$1);
    const md_content = ref(about$1);
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
            createVNode(_sfc_main$1, {
              source: md_content.value.readme.content,
              "file-path": md_content.value.path_base
            }, null, 8, ["source", "file-path"])
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
