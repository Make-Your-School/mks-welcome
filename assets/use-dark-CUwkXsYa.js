import { l as computed } from "./vue.esm-bundler-DdwSdRj_.js";
//#region node_modules/quasar/src/composables/private.use-dark/use-dark.js
var useDarkProps = { dark: {
	type: Boolean,
	default: null
} };
function useDark(props, $q) {
	return computed(() => props.dark === null ? $q.dark.isActive : props.dark);
}
//#endregion
export { useDarkProps as n, useDark as t };
