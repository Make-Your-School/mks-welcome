import { Q as QPage } from "./QPage-DIZSsvCg.js";
import { p as preProcessingMD, _ as _sfc_main$1 } from "./MyMarkdown-B369TzTk.js";
import { r as ref, L as createBlock, M as openBlock, N as withCtx, R as createBaseVNode, Z as createTextVNode, j as createVNode } from "./index-DWioU3IM.js";
import "./_plugin-vue_export-helper-D82cFZQa.js";
import "./QTooltip-Blo8Z8hE.js";
import "./selection-Do1_eA2L.js";
import "./index-C2YOMUFB.js";
const readme = "---\ntitel: MD Test\ntags: [test, mock]\n---\n\n# Test MD features\n\ndemo Text..\nsome more text here.. :tada:\n\nlink: [mks](https://makeyourschool.de/maker-ecke/material/) working?!\nand another paragraph\n\n## Abbr\n\nHere we have a Text with some Abbreviations - here should be no line-break! just a Abbr now: HTML for example. or the good known W3C.\nand more in the topic of MYS we have UART in most of the uC's.\nand often Sensors are using I2C for there communication interface.\n\n## Info Boxes...\n\n### @mdit/plugin-alert\n\n> [!note]\n> This is a note\n\n> [!tip]\n> This is a tip\n\n> [!important]\n> Important Information...\n\n> [!caution]\n> be careful with this....\n\n> [!warning]\n> This is warning text\n\n### markdown-it-container\n\n::: info\njust some Information...\n:::\n\n::: warning\n*here be dragons*\n:::\n\n\n## code\nthis code block should be filled with a good example.ino code..\n```c++ :./example.ino\n//this should be replaced..\n```\n\n1 something\n\n2 here\n\n3 is\n\n4 missing?!\n\n\n5 missing?!\n\n6 missing?!\n\n7 missing?!\n\n\nand now some other things..\nand some description for the code\nmore text\nand more\n\nand more..\n\nand now some other things..\n\nsomehow this does not work correctly...\n\nthis code block does not find it's linked file..\n```c++ :./does_not_exist.ino\nthis does fail.. so we can check a 404 is handled smoothly.\n```\n\n1 something\n\n2 here\n\n3 is\n\n4 missing?!\n\nsome more text here..\n\nand another paragraph\n\n\ninclude an image:\n![test](./test_image.png)\n\n## heading2\n\n-   list element\n-   list element\n-   list element\n-   list element\n";
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: readme
}, Symbol.toStringTag, { value: "Module" }));
const demo = () => {
  console.group("demo.js - loading content");
  let content = {};
  const path_base = "../../public/demo/";
  const fileURL = "../../public/demo/readme.md";
  let temp = /* @__PURE__ */ Object.assign({
    "../../public/demo/readme.md": __vite_glob_0_0
  });
  if (temp[fileURL].default) {
    content.readme = preProcessingMD(temp[fileURL].default);
    content.path_base = path_base;
    console.log("demo done.");
    console.log("content:", content);
  } else {
    console.error(
      `something with the import failed.. 
 temp `,
      temp,
      ` does not contain file '${fileURL}'`
    );
  }
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
