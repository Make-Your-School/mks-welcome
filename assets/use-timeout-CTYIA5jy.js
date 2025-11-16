import { aX as Platform, $ as onDeactivated, J as onBeforeUnmount, aM as vmIsDestroyed, a as getCurrentInstance } from "./index-BVHsaN44.js";
function clearSelection() {
  if (window.getSelection !== void 0) {
    const selection = window.getSelection();
    if (selection.empty !== void 0) {
      selection.empty();
    } else if (selection.removeAllRanges !== void 0) {
      selection.removeAllRanges();
      Platform.is.mobile !== true && selection.addRange(document.createRange());
    }
  } else if (document.selection !== void 0) {
    document.selection.empty();
  }
}
function useTimeout() {
  let timer = null;
  const vm = getCurrentInstance();
  function removeTimeout() {
    if (timer !== null) {
      clearTimeout(timer);
      timer = null;
    }
  }
  onDeactivated(removeTimeout);
  onBeforeUnmount(removeTimeout);
  return {
    removeTimeout,
    registerTimeout(fn, delay) {
      removeTimeout();
      if (vmIsDestroyed(vm) === false) {
        timer = setTimeout(() => {
          timer = null;
          fn();
        }, delay);
      }
    }
  };
}
export {
  clearSelection as c,
  useTimeout as u
};
