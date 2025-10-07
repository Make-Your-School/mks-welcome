import { aW as markRaw, p as createElementBlock, v as openBlock, l as createBaseVNode, D as createTextVNode } from "./index-PNLOzXFG.js";
const extractFrontmatterImports = (item) => {
  const exclude = ["default", "excerpt"];
  const frontmatterKeys = Object.keys(item).filter((key) => !exclude.includes(key));
  return frontmatterKeys.reduce((obj, key) => {
    obj[key] = item[key];
    return obj;
  }, {});
};
const importSingleFile = (importedObj, path_base, path_readme = void 0, name = void 0) => {
  const result = {};
  result.name = name;
  result.path_readme = path_readme;
  result.path_base = path_base;
  result.raw = importedObj;
  result.content = markRaw(importedObj.default);
  result.excerpt = importedObj.excerpt;
  result.meta = extractFrontmatterImports(importedObj);
  return result;
};
const _hoisted_1 = { class: "markdown-body" };
const excerpt = "";
const _sfc_main = {
  __name: "about",
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, _cache[0] || (_cache[0] = [
        createBaseVNode("h1", {
          id: "about",
          tabindex: "-1"
        }, "About", -1),
        createBaseVNode("p", null, "dies ist die neuauflage der Material Koffer Set Hilfe-Seite.", -1),
        createBaseVNode("p", null, [
          createTextVNode("schau mal bei "),
          createBaseVNode("a", { href: "https://makeyourschool.de/maker-ecke/material/" }, "https://makeyourschool.de/maker-ecke/material/"),
          createTextVNode(" vorbei…")
        ], -1)
      ]));
    };
  }
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main,
  excerpt
}, Symbol.toStringTag, { value: "Module" }));
const about = () => {
  console.groupCollapsed("about.js - import about.md");
  let mdObj = {};
  const path_base = "../../public/";
  console.log("load about readme");
  const importedObj = Object.assign({
    "../../public/about.md": __vite_glob_0_0
  })["../../public/about.md"];
  mdObj = importSingleFile(importedObj, path_base);
  console.log("about done.", mdObj);
  console.groupEnd();
  return mdObj;
};
const about$1 = about();
export {
  about$1 as a,
  importSingleFile as i
};
