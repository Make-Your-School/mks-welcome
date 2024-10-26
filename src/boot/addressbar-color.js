// https://quasar.dev/quasar-plugins/addressbar-color

import { boot } from 'quasar/wrappers'

import { AddressbarColor } from 'quasar'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
// export default boot(async (/* { app, router, ... } */) => {
export default boot( (/* { app, router, ... } */) => {
  // something to do
  AddressbarColor.set('#a2e3fa')
})
