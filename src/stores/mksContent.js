// import { ref} from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'

import mksContent from '../content_md/mksContent'
console.log('mksContent', mksContent)

export const useMksContentStore = defineStore('mksContent', {
    state: () => ({
        welcome: mksContent.welcome,
        parts: mksContent.parts,
        tags: mksContent.tags,
    }),
    getters: {},
    actions: {},
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useMksContentStore, import.meta.hot))
}
