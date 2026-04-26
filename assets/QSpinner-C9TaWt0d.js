import { l as computed, y as h } from "./vue.esm-bundler-DkjeOeAQ.js";
import { o as createComponent } from "./render-AG-3FfQy.js";
import { r as useSizeDefaults } from "./QIcon-BIe_yU5L.js";
//#region node_modules/quasar/src/components/spinner/use-spinner.js
var useSpinnerProps = {
	size: {
		type: [String, Number],
		default: "1em"
	},
	color: String
};
function useSpinner(props) {
	return {
		cSize: computed(() => props.size in useSizeDefaults ? `${useSizeDefaults[props.size]}px` : props.size),
		classes: computed(() => "q-spinner" + (props.color ? ` text-${props.color}` : ""))
	};
}
//#endregion
//#region node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner_default = createComponent({
	name: "QSpinner",
	props: {
		...useSpinnerProps,
		thickness: {
			type: Number,
			default: 5
		}
	},
	setup(props) {
		const { cSize, classes } = useSpinner(props);
		return () => h("svg", {
			class: classes.value + " q-spinner-mat",
			width: cSize.value,
			height: cSize.value,
			viewBox: "25 25 50 50"
		}, [h("circle", {
			class: "path",
			cx: "50",
			cy: "50",
			r: "20",
			fill: "none",
			stroke: "currentColor",
			"stroke-width": props.thickness,
			"stroke-miterlimit": "10"
		})]);
	}
});
//#endregion
export { QSpinner_default as t };
