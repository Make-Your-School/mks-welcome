import { N as openBlock, R as resolveDynamicComponent, U as withCtx, d as createBlock, h as createTextVNode, rt as unref, st as toDisplayString, u as createBaseVNode } from "./vue.esm-bundler-DkjeOeAQ.js";
import { t as QPage_default } from "./QPage-HPiQh4dS.js";
import { t as about_default } from "./about-Bh6u_n79.js";
//#region src/pages/AboutPage.vue
var _hoisted_1 = ["href"];
var _hoisted_2 = ["href"];
var _sfc_main = {
	__name: "AboutPage",
	setup(__props) {
		const appinfo = {
			"name": "mks-welcome",
			"version": "0.1.1",
			"productName": "MYS MKS",
			"description": "evolution of the material-website",
			"projectUrl": "https://github.com/Make-Your-School/mks-welcome/",
			"previewUrl": "https://materialkoffer.makeyourschool.de/"
		};
		console.log("about", about_default);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(QPage_default, {
				class: "flex column",
				style: { "align-items": "center" }
			}, {
				default: withCtx(() => [createBaseVNode("section", null, [
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
				]), createBaseVNode("section", null, [(openBlock(), createBlock(resolveDynamicComponent(unref(about_default).content)))])]),
				_: 1
			});
		};
	}
};
//#endregion
export { _sfc_main as default };
