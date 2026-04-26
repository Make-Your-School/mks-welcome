import { N as openBlock, g as createVNode, p as createElementBlock, u as createBaseVNode } from "./vue.esm-bundler-DkjeOeAQ.js";
import { t as QBtn_default } from "./QBtn-DZW7z61w.js";
//#region src/pages/ErrorNotFound.vue
var _hoisted_1 = { class: "fullscreen bg-blue text-white text-center q-pa-md flex flex-center" };
var _sfc_main = /* @__PURE__ */ Object.assign({ name: "ErrorNotFound" }, {
	__name: "ErrorNotFound",
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", null, [
				_cache[0] || (_cache[0] = createBaseVNode("div", { style: { "font-size": "30vh" } }, " 404 ", -1)),
				_cache[1] || (_cache[1] = createBaseVNode("div", {
					class: "text-h2",
					style: { "opacity": ".4" }
				}, " Oops. Nothing here... ", -1)),
				createVNode(QBtn_default, {
					class: "q-mt-xl",
					color: "white",
					"text-color": "blue",
					unelevated: "",
					to: "/",
					label: "Go Home",
					"no-caps": ""
				})
			])]);
		};
	}
});
//#endregion
export { _sfc_main as default };
