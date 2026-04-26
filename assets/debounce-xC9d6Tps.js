//#region node_modules/quasar/src/utils/debounce/debounce.js
function debounce(fn, wait = 250, immediate) {
	let timer = null;
	function debounced() {
		const args = arguments;
		const later = () => {
			timer = null;
			if (immediate !== true) fn.apply(this, args);
		};
		if (timer !== null) clearTimeout(timer);
		else if (immediate === true) fn.apply(this, args);
		timer = setTimeout(later, wait);
	}
	debounced.cancel = () => {
		if (timer !== null) clearTimeout(timer);
	};
	return debounced;
}
//#endregion
export { debounce as t };
