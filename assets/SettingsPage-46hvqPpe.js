import { N as openBlock, U as withCtx, d as createBlock, g as createVNode, l as computed, rt as unref, st as toDisplayString, u as createBaseVNode, y as h } from "./vue.esm-bundler-DkjeOeAQ.js";
import { o as createComponent } from "./render-AG-3FfQy.js";
import { t as QIcon_default } from "./QIcon-BIe_yU5L.js";
import { n as useCheckboxEmits, r as useCheckboxProps, t as useCheckbox } from "./use-checkbox-CqeGl3e8.js";
import { t as QPage_default } from "./QPage-HPiQh4dS.js";
import { t as useMDContentStore } from "./mdContent-B-c5-btF.js";
import { t as QSelect_default } from "./QSelect-Dd9iDzsc.js";
//#region node_modules/quasar/src/components/toggle/QToggle.js
var QToggle_default = createComponent({
	name: "QToggle",
	props: {
		...useCheckboxProps,
		icon: String,
		iconColor: String
	},
	emits: useCheckboxEmits,
	setup(props) {
		function getInner(isTrue, isIndeterminate) {
			const icon = computed(() => (isTrue.value === true ? props.checkedIcon : isIndeterminate.value === true ? props.indeterminateIcon : props.uncheckedIcon) || props.icon);
			const color = computed(() => isTrue.value === true ? props.iconColor : null);
			return () => [h("div", { class: "q-toggle__track" }), h("div", { class: "q-toggle__thumb absolute flex flex-center no-wrap" }, icon.value !== void 0 ? [h(QIcon_default, {
				name: icon.value,
				color: color.value
			})] : void 0)];
		}
		return useCheckbox("toggle", getInner);
	}
});
//#endregion
//#region src/pages/SettingsPage.vue
var _sfc_main = {
	__name: "SettingsPage",
	setup(__props) {
		const mdContent = useMDContentStore();
		console.log("mdContent", mdContent);
		const settings = mdContent.settings;
		const appinfo = {
			"name": "mks-welcome",
			"version": "0.1.1",
			"productName": "MYS MKS",
			"description": "evolution of the material-website",
			"projectUrl": "https://github.com/Make-Your-School/mks-welcome/",
			"previewUrl": "https://materialkoffer.makeyourschool.de/"
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(QPage_default, {
				class: "flex column",
				style: { "align-items": "center" }
			}, {
				default: withCtx(() => [createBaseVNode("section", null, [createBaseVNode("h1", null, toDisplayString(unref(appinfo).productName), 1)]), createBaseVNode("section", null, [_cache[6] || (_cache[6] = createBaseVNode("h2", null, "Deine App-Einstellungen:", -1)), createBaseVNode("div", null, [
					_cache[3] || (_cache[3] = createBaseVNode("h3", null, "Bauteil Übersicht", -1)),
					createVNode(QSelect_default, {
						rounded: "",
						outlined: "",
						modelValue: unref(settings).sorting,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(settings).sorting = $event),
						options: ["recommend", "material_number"],
						label: "Sorting"
					}, null, 8, ["modelValue"]),
					createVNode(QToggle_default, {
						modelValue: unref(settings).hide_EOL,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(settings).hide_EOL = $event),
						icon: "alarm",
						label: "Verberge Bauteile die Nicht mehr verfügbar sind (EOL: End Of Live)"
					}, null, 8, ["modelValue"]),
					_cache[4] || (_cache[4] = createBaseVNode("br", null, null, -1)),
					createVNode(QToggle_default, {
						modelValue: unref(settings).search_in_content,
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(settings).search_in_content = $event),
						icon: "alarm",
						label: "suche auch in Text-Inhalt der Bauteile (anstatt nur in den Meta-Informationen)"
					}, null, 8, ["modelValue"]),
					_cache[5] || (_cache[5] = createBaseVNode("br", null, null, -1))
				])])]),
				_: 1
			});
		};
	}
};
//#endregion
export { _sfc_main as default };
