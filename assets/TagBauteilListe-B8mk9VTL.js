import { F as renderList, L as resolveComponent, N as openBlock, U as withCtx, a as Fragment, ct as toDisplayString, f as createCommentVNode, g as createVNode, h as createTextVNode, p as createElementBlock, u as createBaseVNode } from "./vue.esm-bundler-DdwSdRj_.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-CdNuS8Yy.js";
//#region src/components/TagBauteilListe.vue
var _hoisted_1 = { key: 0 };
var TagBauteilListe_default = /* @__PURE__ */ _plugin_vue_export_helper_default({
	__name: "TagBauteilListe",
	props: { tag: Object },
	setup(__props) {
		return (_ctx, _cache) => {
			const _component_router_link = resolveComponent("router-link");
			return __props.tag.parts ? (openBlock(), createElementBlock("div", _hoisted_1, [_cache[0] || (_cache[0] = createBaseVNode("h2", null, "Bauteile", -1)), createBaseVNode("ul", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.tag.parts, (part_item, part_name) => {
				return openBlock(), createElementBlock("li", { key: part_name }, [createVNode(_component_router_link, {
					to: `/part/${part_name}`,
					class: "clickable"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(part_name) + " " + toDisplayString(part_item.meta?.id), 1)]),
					_: 2
				}, 1032, ["to"])]);
			}), 128))])])) : createCommentVNode("", true);
		};
	}
}, [["__scopeId", "data-v-a5e82f41"]]);
//#endregion
export { TagBauteilListe_default as t };
