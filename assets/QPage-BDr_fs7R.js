import { l as computed, v as getCurrentInstance, x as inject, y as h } from "./vue.esm-bundler-DdwSdRj_.js";
import { i as hSlot, o as createComponent } from "./render-BO3Z2Al6.js";
import { r as layoutKey, t as emptyRenderFn } from "./symbols-CTfU4lpL.js";
//#region node_modules/quasar/src/components/page/QPage.js
var QPage_default = createComponent({
	name: "QPage",
	props: {
		padding: Boolean,
		styleFn: Function
	},
	setup(props, { slots }) {
		const { proxy: { $q } } = getCurrentInstance();
		const $layout = inject(layoutKey, emptyRenderFn);
		if ($layout === emptyRenderFn) {
			console.error("QPage needs to be a deep child of QLayout");
			return emptyRenderFn;
		}
		if (inject("_q_pc_", emptyRenderFn) === emptyRenderFn) {
			console.error("QPage needs to be child of QPageContainer");
			return emptyRenderFn;
		}
		const style = computed(() => {
			const offset = ($layout.header.space === true ? $layout.header.size : 0) + ($layout.footer.space === true ? $layout.footer.size : 0);
			if (typeof props.styleFn === "function") {
				const height = $layout.isContainer.value === true ? $layout.containerHeight.value : $q.screen.height;
				return props.styleFn(offset, height);
			}
			return { minHeight: $layout.isContainer.value === true ? $layout.containerHeight.value - offset + "px" : $q.screen.height === 0 ? offset !== 0 ? `calc(100vh - ${offset}px)` : "100vh" : $q.screen.height - offset + "px" };
		});
		const classes = computed(() => `q-page${props.padding === true ? " q-layout-padding" : ""}`);
		return () => h("main", {
			class: classes.value,
			style: style.value
		}, hSlot(slots.default));
	}
});
//#endregion
export { QPage_default as t };
