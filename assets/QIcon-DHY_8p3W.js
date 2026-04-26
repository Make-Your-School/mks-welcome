import { l as computed, v as getCurrentInstance, y as h } from "./vue.esm-bundler-DdwSdRj_.js";
import { i as hSlot, n as hMergeSlot, o as createComponent } from "./render-BO3Z2Al6.js";
//#region node_modules/quasar/src/utils/private.keyboard/key-composition.js
var lastKeyCompositionStatus = false;
function onKeyDownComposition(evt) {
	lastKeyCompositionStatus = evt.isComposing === true;
}
function shouldIgnoreKey(evt) {
	return lastKeyCompositionStatus === true || evt !== Object(evt) || evt.isComposing === true || evt.qKeyEvent === true;
}
function isKeyCode(evt, keyCodes) {
	return shouldIgnoreKey(evt) === true ? false : [].concat(keyCodes).includes(evt.keyCode);
}
//#endregion
//#region node_modules/quasar/src/composables/private.use-size/use-size.js
var useSizeDefaults = {
	xs: 18,
	sm: 24,
	md: 32,
	lg: 38,
	xl: 46
};
var useSizeProps = { size: String };
function useSize(props, sizes = useSizeDefaults) {
	return computed(() => props.size !== void 0 ? { fontSize: props.size in sizes ? `${sizes[props.size]}px` : props.size } : null);
}
//#endregion
//#region node_modules/quasar/src/components/icon/QIcon.js
var defaultViewBox = "0 0 24 24";
var sameFn = (i) => i;
var ionFn = (i) => `ionicons ${i}`;
var libMap = {
	"mdi-": (i) => `mdi ${i}`,
	"icon-": sameFn,
	"bt-": (i) => `bt ${i}`,
	"eva-": (i) => `eva ${i}`,
	"ion-md": ionFn,
	"ion-ios": ionFn,
	"ion-logo": ionFn,
	"iconfont ": sameFn,
	"ti-": (i) => `themify-icon ${i}`,
	"bi-": (i) => `bootstrap-icons ${i}`,
	"i-": sameFn
};
var matMap = {
	o_: "-outlined",
	r_: "-round",
	s_: "-sharp"
};
var symMap = {
	sym_o_: "-outlined",
	sym_r_: "-rounded",
	sym_s_: "-sharp"
};
var libRE = new RegExp("^(" + Object.keys(libMap).join("|") + ")");
var matRE = new RegExp("^(" + Object.keys(matMap).join("|") + ")");
var symRE = new RegExp("^(" + Object.keys(symMap).join("|") + ")");
var mRE = /^[Mm]\s?[-+]?\.?\d/;
var imgRE = /^img:/;
var svgUseRE = /^svguse:/;
var ionRE = /^ion-/;
var faRE = /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;
var QIcon_default = createComponent({
	name: "QIcon",
	props: {
		...useSizeProps,
		tag: {
			type: String,
			default: "i"
		},
		name: String,
		color: String,
		left: Boolean,
		right: Boolean
	},
	setup(props, { slots }) {
		const { proxy: { $q } } = getCurrentInstance();
		const sizeStyle = useSize(props);
		const classes = computed(() => "q-icon" + (props.left === true ? " on-left" : "") + (props.right === true ? " on-right" : "") + (props.color !== void 0 ? ` text-${props.color}` : ""));
		const type = computed(() => {
			let cls;
			let icon = props.name;
			if (icon === "none" || !icon) return { none: true };
			if ($q.iconMapFn !== null) {
				const res = $q.iconMapFn(icon);
				if (res !== void 0) if (res.icon !== void 0) {
					icon = res.icon;
					if (icon === "none" || !icon) return { none: true };
				} else return {
					cls: res.cls,
					content: res.content !== void 0 ? res.content : " "
				};
			}
			if (mRE.test(icon) === true) {
				const [def, viewBox = defaultViewBox] = icon.split("|");
				return {
					svg: true,
					viewBox,
					nodes: def.split("&&").map((path) => {
						const [d, style, transform] = path.split("@@");
						return h("path", {
							style,
							d,
							transform
						});
					})
				};
			}
			if (imgRE.test(icon) === true) return {
				img: true,
				src: icon.substring(4)
			};
			if (svgUseRE.test(icon) === true) {
				const [def, viewBox = defaultViewBox] = icon.split("|");
				return {
					svguse: true,
					src: def.substring(7),
					viewBox
				};
			}
			let content = " ";
			const matches = icon.match(libRE);
			if (matches !== null) cls = libMap[matches[1]](icon);
			else if (faRE.test(icon) === true) cls = icon;
			else if (ionRE.test(icon) === true) cls = `ionicons ion-${$q.platform.is.ios === true ? "ios" : "md"}${icon.substring(3)}`;
			else if (symRE.test(icon) === true) {
				cls = "notranslate material-symbols";
				const symMatches = icon.match(symRE);
				if (symMatches !== null) {
					icon = icon.substring(6);
					cls += symMap[symMatches[1]];
				}
				content = icon;
			} else {
				cls = "notranslate material-icons";
				const matMatches = icon.match(matRE);
				if (matMatches !== null) {
					icon = icon.substring(2);
					cls += matMap[matMatches[1]];
				}
				content = icon;
			}
			return {
				cls,
				content
			};
		});
		return () => {
			const data = {
				class: classes.value,
				style: sizeStyle.value,
				"aria-hidden": "true"
			};
			if (type.value.none === true) return h(props.tag, data, hSlot(slots.default));
			if (type.value.img === true) return h(props.tag, data, hMergeSlot(slots.default, [h("img", { src: type.value.src })]));
			if (type.value.svg === true) return h(props.tag, data, hMergeSlot(slots.default, [h("svg", { viewBox: type.value.viewBox || "0 0 24 24" }, type.value.nodes)]));
			if (type.value.svguse === true) return h(props.tag, data, hMergeSlot(slots.default, [h("svg", { viewBox: type.value.viewBox }, [h("use", { "xlink:href": type.value.src })])]));
			if (type.value.cls !== void 0) data.class += " " + type.value.cls;
			return h(props.tag, data, hMergeSlot(slots.default, [type.value.content]));
		};
	}
});
//#endregion
export { isKeyCode as a, useSizeProps as i, useSize as n, onKeyDownComposition as o, useSizeDefaults as r, shouldIgnoreKey as s, QIcon_default as t };
