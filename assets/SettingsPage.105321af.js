import { Q as QPage } from "./QPage.7761124f.js";
import { g as grayMatter, _ as _sfc_main$1 } from "./index.4ad9f1b7.js";
import { r as ref, R as openBlock, S as createBlock, U as withCtx, W as createBaseVNode, Y as toDisplayString, a9 as unref, ae as createTextVNode, j as createVNode } from "./index.cb623f96.js";
import "./use-quasar.203ad343.js";
const preProcessingMD = (source, path_base) => {
  console.group("preProcessingMD");
  const processedObj = grayMatter(source, {
    eval: false,
    excerpt_separator: "<!-- more_details -->"
  });
  console.log("path_base:", path_base);
  console.log("processedObj:", processedObj);
  console.groupEnd();
  return processedObj;
};
const mksGetContent = () => {
  console.group("mksContent");
  let mksContent2 = {
    welcome: {},
    funktionen: {}
  };
  let temp = { "./readme.md": "---\ntitel: MD Test\ntags: [test, mock]\n---\n\n# Test MD features\n\ndemo Text..\n\n:tada:\n\nlink:\n[mks](https://makeyourschool.de/maker-ecke/material/)\n\n```c++ :./nothinghere.cpp\nfails to import.\ncheck that 404  file not found is handled smoothly\n```\n\n```c++ :./example.ino\n//this should be replaced..\n```\n\n![test](./test_image.png)\n\n## heading2\n\n-   list element\n-   list element\n-   list element\n-   list element\n" };
  const path_base = "./";
  mksContent2["welcome"].readme = preProcessingMD(temp["./readme.md"], path_base);
  mksContent2["welcome"].path_readme = path_base;
  mksContent2["welcome"].path_base = path_base.replace("./", "test_md_files/").replace("/readme.md", "/");
  console.groupEnd();
  return mksContent2;
};
var mksContent = mksGetContent();
const _sfc_main = {
  __name: "SettingsPage",
  setup(__props) {
    console.log("mksContent", mksContent);
    const mks_welcome = ref(mksContent["welcome"]);
    const appinfo = { "name": "mks-welcome", "version": "0.0.1", "productName": "MYS MKS", "description": "evolution of the material-website" };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, {
        class: "flex column",
        style: { "align-items": "center" }
      }, {
        default: withCtx(() => [
          createBaseVNode("section", null, [
            createBaseVNode("h4", null, toDisplayString(unref(appinfo).productName), 1)
          ]),
          createBaseVNode("section", null, [
            _cache[0] || (_cache[0] = createTextVNode(" Markdown Test Page ")),
            createVNode(_sfc_main$1, {
              source: mks_welcome.value.readme.content,
              "file-path": mks_welcome.value.path_base
            }, null, 8, ["source", "file-path"])
          ])
        ]),
        _: 1
      });
    };
  }
};
export { _sfc_main as default };
