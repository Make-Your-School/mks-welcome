import { l as computed, v as getCurrentInstance, y as h } from "./vue.esm-bundler-DdwSdRj_.js";
import { i as hSlot, o as createComponent } from "./render-BO3Z2Al6.js";
import { n as useDarkProps, t as useDark } from "./use-dark-CUwkXsYa.js";
//#region node_modules/quasar/src/components/card/QCard.js
var QCard_default = createComponent({
	name: "QCard",
	props: {
		...useDarkProps,
		tag: {
			type: String,
			default: "div"
		},
		square: Boolean,
		flat: Boolean,
		bordered: Boolean
	},
	setup(props, { slots }) {
		const { proxy: { $q } } = getCurrentInstance();
		const isDark = useDark(props, $q);
		const classes = computed(() => "q-card" + (isDark.value === true ? " q-card--dark q-dark" : "") + (props.bordered === true ? " q-card--bordered" : "") + (props.square === true ? " q-card--square no-border-radius" : "") + (props.flat === true ? " q-card--flat no-shadow" : ""));
		return () => h(props.tag, { class: classes.value }, hSlot(slots.default));
	}
});
//#endregion
export { QCard_default as t };
