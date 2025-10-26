import { c as computed, h } from "./index-DjLok1U4.js";
let queue = [];
let waitFlags = [];
function clearFlag(flag) {
  waitFlags = waitFlags.filter((entry) => entry !== flag);
}
function addFocusWaitFlag(flag) {
  clearFlag(flag);
  waitFlags.push(flag);
}
function removeFocusWaitFlag(flag) {
  clearFlag(flag);
  if (waitFlags.length === 0 && queue.length !== 0) {
    queue[queue.length - 1]();
    queue = [];
  }
}
function addFocusFn(fn) {
  if (waitFlags.length === 0) {
    fn();
  } else {
    queue.push(fn);
  }
}
function removeFocusFn(fn) {
  queue = queue.filter((entry) => entry !== fn);
}
const useFormProps = {
  name: String
};
function useFormInject(formAttrs = {}) {
  return (child, action, className) => {
    child[action](
      h("input", {
        class: "hidden" + (className || ""),
        ...formAttrs.value
      })
    );
  };
}
function useFormInputNameAttr(props) {
  return computed(() => props.name || props.for);
}
export {
  addFocusWaitFlag as a,
  useFormInject as b,
  addFocusFn as c,
  removeFocusFn as d,
  useFormInputNameAttr as e,
  removeFocusWaitFlag as r,
  useFormProps as u
};
