import { b as inject, aA as quasarKey } from "./index-CjbvCaPl.js";
function useQuasar() {
  return inject(quasarKey);
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
export {
  _export_sfc as _,
  useQuasar as u
};
