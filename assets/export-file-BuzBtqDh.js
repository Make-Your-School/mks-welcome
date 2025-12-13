import { I as createComponent, h, c as computed, W as QIcon } from "./index-B87bzjT6.js";
import { j as useCheckboxEmits, k as useCheckboxProps, l as useCheckbox } from "./use-checkbox-JMJrj8RY.js";
const createBgNode = () => h("div", {
  key: "svg",
  class: "q-checkbox__bg absolute"
}, [
  h("svg", {
    class: "q-checkbox__svg fit absolute-full",
    viewBox: "0 0 24 24"
  }, [
    h("path", {
      class: "q-checkbox__truthy",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    }),
    h("path", {
      class: "q-checkbox__indet",
      d: "M4,14H20V10H4"
    })
  ])
]);
const QCheckbox = createComponent({
  name: "QCheckbox",
  props: useCheckboxProps,
  emits: useCheckboxEmits,
  setup(props) {
    const bgNode = createBgNode();
    function getInner(isTrue, isIndeterminate) {
      const icon = computed(
        () => (isTrue.value === true ? props.checkedIcon : isIndeterminate.value === true ? props.indeterminateIcon : props.uncheckedIcon) || null
      );
      return () => icon.value !== null ? [
        h("div", {
          key: "icon",
          class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap"
        }, [
          h(QIcon, {
            class: "q-checkbox__icon",
            name: icon.value
          })
        ])
      ] : [bgNode];
    }
    return useCheckbox("checkbox", getInner);
  }
});
function clean(link) {
  setTimeout(() => {
    window.URL.revokeObjectURL(link.href);
  }, 1e4);
  link.remove();
}
function exportFile(fileName, rawData, opts = {}) {
  const { mimeType, byteOrderMark, encoding } = typeof opts === "string" ? { mimeType: opts } : opts;
  const data = encoding !== void 0 ? new TextEncoder(encoding).encode([rawData]) : rawData;
  const blobData = byteOrderMark !== void 0 ? [byteOrderMark, data] : [data];
  const blob = new Blob(blobData, { type: mimeType || "application/octet-stream" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", fileName);
  if (typeof link.download === "undefined") {
    link.setAttribute("target", "_blank");
  }
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
export {
  QCheckbox as Q,
  exportFile as e
};
