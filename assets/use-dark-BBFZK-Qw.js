import { c as computed } from "./index-DDNyF-mq.js";
const useDarkProps = {
  dark: {
    type: Boolean,
    default: null
  }
};
function useDark(props, $q) {
  return computed(() => props.dark === null ? $q.dark.isActive : props.dark);
}
export {
  useDark as a,
  useDarkProps as u
};
