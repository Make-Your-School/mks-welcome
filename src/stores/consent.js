import { defineStore, acceptHMRUpdate } from 'pinia'

export const useConsentStore = defineStore('consent', {
  state: () => ({
    videoLoaded: {},
    videoService: {}
  }),
  getters: {},
  actions: {}
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useConsentStore, import.meta.hot))
}
