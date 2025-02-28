import { defineBoot } from '#q-app/wrappers'

import MDCode from 'src/components/MDComponents/MDCode.vue'
import MDAbbr from 'src/components/MDComponents/MDAbbr.vue'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli-vite/boot-files
export default defineBoot(async ({ app }) => {
  // https://quasar.dev/app-extensions/tips-and-tricks/provide-a-ui-component/
  // register global components
  app.component('MDCode', MDCode)
  app.component('MDAbbr', MDAbbr)
})
