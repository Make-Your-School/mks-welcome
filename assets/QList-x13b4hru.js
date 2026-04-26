import { l as computed, v as getCurrentInstance, y as h } from "./vue.esm-bundler-DdwSdRj_.js";
import { i as hSlot, o as createComponent } from "./render-BO3Z2Al6.js";
import { n as useDarkProps, t as useDark } from "./use-dark-CUwkXsYa.js";
//#region node_modules/quasar/src/components/item/QList.js
var roleAttrExceptions = ["ul", "ol"];
var QList_default = createComponent({
	name: "QList",
	props: {
		...useDarkProps,
		bordered: Boolean,
		dense: Boolean,
		separator: Boolean,
		padding: Boolean,
		tag: {
			type: String,
			default: "div"
		}
	},
	setup(props, { slots }) {
		const isDark = useDark(props, getCurrentInstance().proxy.$q);
		const role = computed(() => roleAttrExceptions.includes(props.tag) ? null : "list");
		const classes = computed(() => "q-list" + (props.bordered === true ? " q-list--bordered" : "") + (props.dense === true ? " q-list--dense" : "") + (props.separator === true ? " q-list--separator" : "") + (isDark.value === true ? " q-list--dark" : "") + (props.padding === true ? " q-list--padding" : ""));
		return () => h(props.tag, {
			class: classes.value,
			role: role.value
		}, hSlot(slots.default));
	}
});
//#endregion
export { QList_default as t };
