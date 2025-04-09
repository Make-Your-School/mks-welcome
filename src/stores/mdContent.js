// import { ref} from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'

// import {mksAbbrLoad} from '../content_md/mksAbbr.js'
import mksContent from '../content_md/mksContent.js'
// import mksAbbr from '../content_md/mksAbbr.js'
import about from '../content_md/about.js'
// import demo from '../content_md/demo.js'
// console.log('mksContent', mksContent)

export const useMDContentStore = defineStore('MDContent', {
    state: () => ({
        mks: {
            welcome: mksContent.welcome,
            parts: mksContent.parts,
            tags: mksContent.tags,
            // abbr: mksAbbr,
        },
        about: about,
        // demo: demo,
        // abbr: {abbr:mksAbbrLoad()},
    }),
    getters: {},
    actions: {},
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useMDContentStore, import.meta.hot))
}
