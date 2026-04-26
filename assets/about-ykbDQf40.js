import { r as __exportAll } from "./chunk-C0u3WHrm.js";
import { N as openBlock, Y as markRaw, h as createTextVNode, p as createElementBlock, u as createBaseVNode } from "./vue.esm-bundler-DdwSdRj_.js";
//#region public/about.md
var about_exports = /* @__PURE__ */ __exportAll({
	default: () => _sfc_main,
	excerpt: () => ""
});
var _hoisted_1 = { class: "markdown-body" };
var _sfc_main = {
	__name: "about",
	setup(__props, { expose: __expose }) {
		__expose({ frontmatter: {} });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, _cache[0] || (_cache[0] = [
				createBaseVNode("h1", {
					id: "about",
					tabindex: "-1"
				}, [createBaseVNode("a", {
					class: "header-anchor",
					href: "#about"
				}, "About")], -1),
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
//#endregion
//#region src/content_md/helperFn.js
var extractFrontmatterImports = (item) => {
	const exclude = ["default", "excerpt"];
	return Object.keys(item).filter((key) => !exclude.includes(key)).reduce((obj, key) => {
		obj[key] = item[key];
		return obj;
	}, {});
};
var importSingleFile = (importedObj, path_base, path_readme = void 0, name = void 0) => {
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
//#endregion
//#region src/content_md/about.js
var about = () => {
	console.groupCollapsed("about.js - import about.md");
	let mdObj = {};
	const path_base = "../../public/";
	console.log("load about readme");
	const importedObj = Object.assign({ "../../public/about.md": about_exports })["../../public/about.md"];
	mdObj = importSingleFile(importedObj, path_base);
	console.log("about done.", mdObj);
	console.groupEnd();
	return mdObj;
};
var about_default = about();
//#endregion
export { importSingleFile as n, about_default as t };
