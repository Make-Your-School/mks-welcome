import { l as computed, y as h } from "./vue.esm-bundler-DdwSdRj_.js";
import { i as hSlot, o as createComponent } from "./render-BO3Z2Al6.js";
//#region node_modules/quasar/src/components/card/QCardSection.js
var QCardSection_default = createComponent({
	name: "QCardSection",
	props: {
		tag: {
			type: String,
			default: "div"
		},
		horizontal: Boolean
	},
	setup(props, { slots }) {
		const classes = computed(() => `q-card__section q-card__section--${props.horizontal === true ? "horiz row no-wrap" : "vert"}`);
		return () => h(props.tag, { class: classes.value }, hSlot(slots.default));
	}
});
//#endregion
export { QCardSection_default as t };
