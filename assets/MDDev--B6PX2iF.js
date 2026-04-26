import { N as openBlock, U as withCtx, d as createBlock, g as createVNode, rt as unref, u as createBaseVNode } from "./vue.esm-bundler-DkjeOeAQ.js";
import { t as QPage_default } from "./QPage-HPiQh4dS.js";
import { n as readme_exports, t as _sfc_main$1 } from "./readme-DJ5bbZji.js";
//#region src/pages/dev/MDDev.vue
var _hoisted_1 = { style: { "overflow": "scroll" } };
var _sfc_main = {
	__name: "MDDev",
	setup(__props) {
		const MDContent = _sfc_main$1;
		console.log("md_obj", readme_exports);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(QPage_default, {
				class: "flex column",
				style: { "align-items": "center" }
			}, {
				default: withCtx(() => [createBaseVNode("section", _hoisted_1, [_cache[0] || (_cache[0] = createBaseVNode("h2", null, "Markdown DEV", -1)), createVNode(unref(MDContent))])]),
				_: 1
			});
		};
	}
};
//#endregion
export { _sfc_main as default };
