import { l as computed, v as getCurrentInstance, y as h } from "./vue.esm-bundler-DkjeOeAQ.js";
import { o as createComponent } from "./render-AG-3FfQy.js";
import { n as useDarkProps, t as useDark } from "./use-dark-D7HPSSY-.js";
//#region node_modules/quasar/src/components/separator/QSeparator.js
var insetMap = {
	true: "inset",
	item: "item-inset",
	"item-thumbnail": "item-thumbnail-inset"
};
var margins = {
	xs: 2,
	sm: 4,
	md: 8,
	lg: 16,
	xl: 24
};
var QSeparator_default = createComponent({
	name: "QSeparator",
	props: {
		...useDarkProps,
		spaced: [Boolean, String],
		inset: [Boolean, String],
		vertical: Boolean,
		color: String,
		size: String
	},
	setup(props) {
		const isDark = useDark(props, getCurrentInstance().proxy.$q);
		const orientation = computed(() => props.vertical === true ? "vertical" : "horizontal");
		const orientClass = computed(() => ` q-separator--${orientation.value}`);
		const insetClass = computed(() => props.inset !== false ? `${orientClass.value}-${insetMap[props.inset]}` : "");
		const classes = computed(() => `q-separator${orientClass.value}${insetClass.value}` + (props.color !== void 0 ? ` bg-${props.color}` : "") + (isDark.value === true ? " q-separator--dark" : ""));
		const style = computed(() => {
			const acc = {};
			if (props.size !== void 0) acc[props.vertical === true ? "width" : "height"] = props.size;
			if (props.spaced !== false) {
				const size = props.spaced === true ? `${margins.md}px` : props.spaced in margins ? `${margins[props.spaced]}px` : props.spaced;
				const dir = props.vertical === true ? ["Left", "Right"] : ["Top", "Bottom"];
				acc[`margin${dir[0]}`] = acc[`margin${dir[1]}`] = size;
			}
			return acc;
		});
		return () => h("hr", {
			class: classes.value,
			style: style.value,
			"aria-orientation": orientation.value
		});
	}
});
//#endregion
export { QSeparator_default as t };
