import { F as renderList, L as resolveComponent, N as openBlock, Q as ref, R as resolveDynamicComponent, U as withCtx, a as Fragment, ct as toDisplayString, d as createBlock, et as shallowRef, g as createVNode, it as unref, l as computed, p as createElementBlock, u as createBaseVNode, y as h } from "./vue.esm-bundler-DdwSdRj_.js";
import { i as hSlot, n as hMergeSlot, o as createComponent } from "./render-BO3Z2Al6.js";
import { c as useRouter, s as useRoute } from "./vue-router-rzPnJs0_.js";
import { n as getBtnDesignAttr, t as QBtn_default } from "./QBtn-BspsLx-t.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-CdNuS8Yy.js";
import { r as useFormProps, t as useFormInject } from "./private.use-form-Dsd0VQu5.js";
import { t as QCard_default } from "./QCard-CpXLxroZ.js";
import { t as QPage_default } from "./QPage-BDr_fs7R.js";
import { t as QCardSection_default } from "./QCardSection-CQ6zCG9z.js";
import { t as useMDContentStore } from "./mdContent-BL71FE5Y.js";
import { t as QInput_default } from "./QInput-vomb-1gl.js";
//#region node_modules/quasar/src/components/btn-group/QBtnGroup.js
var QBtnGroup_default = createComponent({
	name: "QBtnGroup",
	props: {
		unelevated: Boolean,
		outline: Boolean,
		flat: Boolean,
		rounded: Boolean,
		square: Boolean,
		push: Boolean,
		stretch: Boolean,
		glossy: Boolean,
		spread: Boolean
	},
	setup(props, { slots }) {
		const classes = computed(() => {
			const cls = [
				"unelevated",
				"outline",
				"flat",
				"rounded",
				"square",
				"push",
				"stretch",
				"glossy"
			].filter((t) => props[t] === true).map((t) => `q-btn-group--${t}`).join(" ");
			return `q-btn-group row no-wrap${cls.length !== 0 ? " " + cls : ""}` + (props.spread === true ? " q-btn-group--spread" : " inline");
		});
		return () => h("div", { class: classes.value }, hSlot(slots.default));
	}
});
//#endregion
//#region node_modules/quasar/src/components/btn-toggle/QBtnToggle.js
var QBtnToggle_default = createComponent({
	name: "QBtnToggle",
	props: {
		...useFormProps,
		modelValue: { required: true },
		options: {
			type: Array,
			required: true,
			validator: (v) => v.every((opt) => ("label" in opt || "icon" in opt || "slot" in opt) && "value" in opt)
		},
		color: String,
		textColor: String,
		toggleColor: {
			type: String,
			default: "primary"
		},
		toggleTextColor: String,
		outline: Boolean,
		flat: Boolean,
		unelevated: Boolean,
		rounded: Boolean,
		push: Boolean,
		glossy: Boolean,
		size: String,
		padding: String,
		noCaps: Boolean,
		noWrap: Boolean,
		dense: Boolean,
		readonly: Boolean,
		disable: Boolean,
		stack: Boolean,
		stretch: Boolean,
		spread: Boolean,
		clearable: Boolean,
		ripple: {
			type: [Boolean, Object],
			default: true
		}
	},
	emits: [
		"update:modelValue",
		"clear",
		"click"
	],
	setup(props, { slots, emit }) {
		const hasActiveValue = computed(() => props.options.find((opt) => opt.value === props.modelValue) !== void 0);
		const injectFormInput = useFormInject(computed(() => ({
			type: "hidden",
			name: props.name,
			value: props.modelValue
		})));
		const btnDesignAttr = computed(() => getBtnDesignAttr(props));
		const btnOptionDesign = computed(() => ({
			rounded: props.rounded,
			dense: props.dense,
			...btnDesignAttr.value
		}));
		const btnOptions = computed(() => props.options.map((item, i) => {
			const { attrs, value, slot, ...opt } = item;
			return {
				slot,
				props: {
					key: i,
					"aria-pressed": value === props.modelValue ? "true" : "false",
					...attrs,
					...opt,
					...btnOptionDesign.value,
					disable: props.disable === true || opt.disable === true,
					color: value === props.modelValue ? mergeOpt(opt, "toggleColor") : mergeOpt(opt, "color"),
					textColor: value === props.modelValue ? mergeOpt(opt, "toggleTextColor") : mergeOpt(opt, "textColor"),
					noCaps: mergeOpt(opt, "noCaps") === true,
					noWrap: mergeOpt(opt, "noWrap") === true,
					size: mergeOpt(opt, "size"),
					padding: mergeOpt(opt, "padding"),
					ripple: mergeOpt(opt, "ripple"),
					stack: mergeOpt(opt, "stack") === true,
					stretch: mergeOpt(opt, "stretch") === true,
					onClick(e) {
						set(value, item, e);
					}
				}
			};
		}));
		function set(value, opt, e) {
			if (props.readonly !== true) {
				if (props.modelValue === value) {
					if (props.clearable === true) {
						emit("update:modelValue", null, null);
						emit("clear");
					}
				} else emit("update:modelValue", value, opt);
				emit("click", e);
			}
		}
		function mergeOpt(opt, key) {
			return opt[key] === void 0 ? props[key] : opt[key];
		}
		function getContent() {
			const child = btnOptions.value.map((opt) => h(QBtn_default, opt.props, opt.slot !== void 0 ? slots[opt.slot] : void 0));
			if (props.name !== void 0 && props.disable !== true && hasActiveValue.value === true) injectFormInput(child, "push");
			return hMergeSlot(slots.default, child);
		}
		return () => h(QBtnGroup_default, {
			class: "q-btn-toggle",
			...btnDesignAttr.value,
			rounded: props.rounded,
			stretch: props.stretch,
			glossy: props.glossy,
			spread: props.spread
		}, getContent);
	}
});
//#endregion
//#region src/components/PartOverview.vue
var _hoisted_1$1 = ["src", "alt"];
var _hoisted_2$1 = { class: "material_number" };
var _hoisted_3 = { class: "title" };
var _hoisted_4 = { class: "type" };
var PartOverview_default = /* @__PURE__ */ _plugin_vue_export_helper_default({
	__name: "PartOverview",
	props: { mks_item: Object },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(QCard_default, { class: "part-overview" }, {
				default: withCtx(() => [createVNode(QCardSection_default, null, {
					default: withCtx(() => [createBaseVNode("img", {
						src: __props.mks_item.path_base + `/` + __props.mks_item.meta.coverImage,
						alt: __props.mks_item.meta.title
					}, null, 8, _hoisted_1$1)]),
					_: 1
				}), createVNode(QCardSection_default, { class: "info" }, {
					default: withCtx(() => [
						createBaseVNode("h2", _hoisted_2$1, toDisplayString(__props.mks_item.meta.material_number), 1),
						createBaseVNode("h1", _hoisted_3, toDisplayString(__props.mks_item.meta.title), 1),
						createBaseVNode("h2", _hoisted_4, toDisplayString(__props.mks_item.meta.material_type), 1)
					]),
					_: 1
				})]),
				_: 1
			});
		};
	}
}, [["__scopeId", "data-v-ae3c618c"]]);
//#endregion
//#region src/pages/MKS_Parts.vue
var _hoisted_1 = { class: "row wrap justify-start items-stretch content-start" };
var _hoisted_2 = { class: "card-wrapper row" };
var MKS_Parts_default = /* @__PURE__ */ _plugin_vue_export_helper_default({
	__name: "MKS_Parts",
	setup(__props) {
		const router = useRouter();
		const route = useRoute();
		const mdContent = useMDContentStore();
		console.log("mdContent", mdContent);
		const mks_welcome = mdContent.mks.welcome;
		const mks_parts = shallowRef(mdContent.mks.parts);
		const mks_parts_sorted = shallowRef(mdContent.mks.parts_sorted);
		console.log("mks_parts_sorted", mks_parts_sorted);
		const search_in_content = ref(false);
		const filter_by_type = computed({
			get() {
				return route.query.filter_by_type;
			},
			set(newValue) {
				router.replace({ query: {
					...route.query,
					filter_by_type: newValue
				} });
			}
		});
		const searchText = computed({
			get() {
				return route.query.searchText;
			},
			set(newValue) {
				router.replace({ query: {
					...route.query,
					searchText: newValue
				} });
			}
		});
		const mks_items_filtered = computed(() => {
			return mdContent.parts_filtered({
				by_searchText: searchText.value,
				by_material_type: filter_by_type.value,
				in_content: search_in_content.value
			});
		});
		return (_ctx, _cache) => {
			const _component_router_link = resolveComponent("router-link");
			return openBlock(), createBlock(QPage_default, { class: "my-page" }, {
				default: withCtx(() => [
					(openBlock(), createBlock(resolveDynamicComponent(unref(mks_welcome).content))),
					createBaseVNode("div", _hoisted_1, [createVNode(QInput_default, {
						class: "col-grow",
						rounded: "",
						outlined: "",
						modelValue: searchText.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchText.value = $event),
						label: "Suche:"
					}, null, 8, ["modelValue"]), createVNode(QBtnToggle_default, {
						rounded: "",
						outlined: "",
						modelValue: filter_by_type.value,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => filter_by_type.value = $event),
						clearable: "",
						options: [
							{
								label: "Controller",
								value: "controller"
							},
							{
								label: "input",
								value: "input"
							},
							{
								label: "output",
								value: "output"
							},
							{
								label: "shield",
								value: "shield"
							}
						]
					}, null, 8, ["modelValue"])]),
					createBaseVNode("ul", _hoisted_2, [(openBlock(true), createElementBlock(Fragment, null, renderList(mks_items_filtered.value, (mks_item, mks_item_name) => {
						return openBlock(), createElementBlock("li", {
							key: mks_item_name,
							class: "my-card q-pa-md"
						}, [createVNode(_component_router_link, {
							to: `/part/${mks_item_name}/`,
							class: "clickable"
						}, {
							default: withCtx(() => [createVNode(PartOverview_default, {
								mks_item,
								mks_parts: mks_parts.value
							}, null, 8, ["mks_item", "mks_parts"])]),
							_: 2
						}, 1032, ["to"])]);
					}), 128))])
				]),
				_: 1
			});
		};
	}
}, [["__scopeId", "data-v-49cd14ae"]]);
//#endregion
export { MKS_Parts_default as default };
