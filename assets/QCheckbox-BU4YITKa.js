import { l as computed, y as h } from "./vue.esm-bundler-DdwSdRj_.js";
import { o as createComponent } from "./render-BO3Z2Al6.js";
import { t as QIcon_default } from "./QIcon-DHY_8p3W.js";
import { n as useCheckboxEmits, r as useCheckboxProps, t as useCheckbox } from "./use-checkbox-e4Wi2w8Q.js";
//#region node_modules/quasar/src/utils/export-file/export-file.js
function clean(link) {
	setTimeout(() => {
		window.URL.revokeObjectURL(link.href);
	}, 1e4);
	link.remove();
}
/**
* Forces browser to download file with specified content
*
* @param {*} fileName - String
* @param {*} rawData - String | ArrayBuffer | ArrayBufferView | Blob
* @param {*} opts - String (mimeType) or Object
*                   Object form: { mimeType?: String, byteOrderMark?: String | Uint8Array, encoding?: String }
* @returns Boolean | Error
*
* mimeType       - Examples: 'application/octect-stream' (default), 'text/plain', 'application/json',
*                  'text/plain;charset=UTF-8', 'video/mp4', 'image/png', 'application/pdf'
*                  https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
*
* byteOrderMark  - (BOM) Example: '\uFEFF'
*                  https://en.wikipedia.org/wiki/Byte_order_mark
*
* encoding       - Performs a TextEncoder.encode() over the rawData;
*                  Example: 'windows-1252' (ANSI, a subset of ISO-8859-1)
*                  https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder
*/
function exportFile(fileName, rawData, opts = {}) {
	const { mimeType, byteOrderMark, encoding } = typeof opts === "string" ? { mimeType: opts } : opts;
	const data = encoding !== void 0 ? new TextEncoder(encoding).encode([rawData]) : rawData;
	const blob = new Blob(byteOrderMark !== void 0 ? [byteOrderMark, data] : [data], { type: mimeType || "application/octet-stream" });
	const link = document.createElement("a");
	link.href = window.URL.createObjectURL(blob);
	link.setAttribute("download", fileName);
	if (typeof link.download === "undefined") link.setAttribute("target", "_blank");
	link.classList.add("hidden");
	link.style.position = "fixed";
	document.body.appendChild(link);
	try {
		link.click();
		clean(link);
		return true;
	} catch (err) {
		clean(link);
		return err;
	}
}
//#endregion
//#region node_modules/quasar/src/components/checkbox/QCheckbox.js
var createBgNode = () => h("div", {
	key: "svg",
	class: "q-checkbox__bg absolute"
}, [h("svg", {
	class: "q-checkbox__svg fit absolute-full",
	viewBox: "0 0 24 24"
}, [h("path", {
	class: "q-checkbox__truthy",
	fill: "none",
	d: "M1.73,12.91 8.1,19.28 22.79,4.59"
}), h("path", {
	class: "q-checkbox__indet",
	d: "M4,14H20V10H4"
})])]);
var QCheckbox_default = createComponent({
	name: "QCheckbox",
	props: useCheckboxProps,
	emits: useCheckboxEmits,
	setup(props) {
		const bgNode = createBgNode();
		function getInner(isTrue, isIndeterminate) {
			const icon = computed(() => (isTrue.value === true ? props.checkedIcon : isIndeterminate.value === true ? props.indeterminateIcon : props.uncheckedIcon) || null);
			return () => icon.value !== null ? [h("div", {
				key: "icon",
				class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap"
			}, [h(QIcon_default, {
				class: "q-checkbox__icon",
				name: icon.value
			})])] : [bgNode];
		}
		return useCheckbox("checkbox", getInner);
	}
});
//#endregion
export { exportFile as n, QCheckbox_default as t };
