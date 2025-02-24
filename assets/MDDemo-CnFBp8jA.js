import { Q as QPage } from "./QPage-DhjHp9nS.js";
import { p as preProcessingMD, _ as _sfc_main$1 } from "./MyMarkdown-CN6rSJ0T.js";
import { r as ref, L as createBlock, M as openBlock, N as withCtx, R as createBaseVNode, Z as createTextVNode, j as createVNode } from "./index-DYxZp72n.js";
import "./_plugin-vue_export-helper-cWe_MhP7.js";
import "./QTooltip-CHSomqtF.js";
import "./selection-CARqgAhl.js";
import "./index-C2HsSMC5.js";
const __vite_glob_0_0 = "---\ntitel: MD Test\ntags: [test, mock]\n---\n\n# Test MD features\n\ndemo Text..\nsome more text here.. :tada:\n\nlink: [mks](https://makeyourschool.de/maker-ecke/material/) working?!\nand another paragraph\n\n## Info Boxes...\n\n### @mdit/plugin-alert\n\n> [!note]\n> This is a note\n\n> [!tip]\n> This is a tip\n\n> [!important]\n> Important Information...\n\n> [!caution]\n> be careful with this....\n\n> [!warning]\n> This is warning text\n\n### markdown-it-container\n\n::: info\njust some Information...\n:::\n\n::: warning\n*here be dragons*\n:::\n\n\n## code\nthis code block should be filled with a good example.ino code..\n```c++ :./example.ino\n//this should be replaced..\n```\n\n1 something\n\n2 here\n\n3 is\n\n4 missing?!\n\n\n5 missing?!\n\n6 missing?!\n\n7 missing?!\n\n\nand now some other things..\nand some description for the code\nmore text\nand more\n\nand more..\n\nand now some other things..\n\nsomehow this does not work correctly...\n\nthis code block does not find it's linked file..\n```c++ :./does_not_exist.ino\nthis does fail.. so we can check a 404 is handled smoothly.\n```\n\n1 something\n\n2 here\n\n3 is\n\n4 missing?!\n\nsome more text here..\n\nand another paragraph\n\n\ninclude an image:\n![test](./test_image.png)\n\n## heading2\n\n-   list element\n-   list element\n-   list element\n-   list element\n";
const demo = () => {
  console.group("mksContent");
  let content = {};
  const path_base = "../../public/demo/";
  console.log("load demo readme");
  let temp = /* @__PURE__ */ Object.assign({
    "../../public/demo/readme.md": __vite_glob_0_0
  });
  content.readme = preProcessingMD(temp["../../public/demo/readme.md"]);
  content.path_base = path_base;
  console.log("demo done.");
  console.log("content:", content);
  console.groupEnd();
  return content;
};
const demo$1 = demo();
const _hoisted_1 = { style: { "overflow": "scroll" } };
const _sfc_main = {
  __name: "MDDemo",
  setup(__props) {
    console.log("demo", demo$1);
    const demo_content = ref(demo$1);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, {
        class: "flex column",
        style: { "align-items": "center" }
      }, {
        default: withCtx(() => [
          createBaseVNode("section", _hoisted_1, [
            _cache[0] || (_cache[0] = createTextVNode(" Markdown Test Page ")),
            createVNode(_sfc_main$1, {
              source: demo_content.value.readme.content,
              "file-path": demo_content.value.path_base
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
