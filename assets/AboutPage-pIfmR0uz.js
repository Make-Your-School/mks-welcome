import { Q as QPage } from "./QPage-CrJqOd1M.js";
import { r as ref, O as createBlock, m as openBlock, p as withCtx, P as createBaseVNode, X as toDisplayString, u as unref, U as createTextVNode, j as createVNode } from "./index-DJGcSM7w.js";
import { m as matter, _ as _sfc_main$1 } from "./MyMarkdown-DiUVk8GS.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-DXipyAWe.js";
import "./core-CUVoAmL3.js";
import "./cpp-DxF16jcj.js";
const about$2 = "# About\n\ndies ist die neuauflage der Material Koffer Set Hilfe-Seite.\n\nschau mal bei\nhttps://makeyourschool.de/maker-ecke/material/\nvorbei..\n\n";
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: about$2
}, Symbol.toStringTag, { value: "Module" }));
const preProcessingMD = (source) => {
  const processedObj = matter(source, {
    eval: false,
    excerpt_separator: "<!-- more_details -->"
  });
  return processedObj;
};
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
