<template>
    <q-page>
        <component :is="tag.content" />
        <TagBauteilListe :tag="tag"></TagBauteilListe>
    </q-page>
</template>

<script setup>
// import { ref } from 'vue'
// import { useRoute } from 'vue-router'
// import { useQuasar } from "quasar";

import TagBauteilListe from 'src/components/TagBauteilListe.vue'

const props = defineProps({
    tag_name: String,
})

import { useMDContentStore } from 'src/stores/mdContent'
const mdContent = useMDContentStore()
console.log('mdContent', mdContent)
const tag = mdContent.mks.tags[props.tag_name]
console.log('tag', tag)
</script>
