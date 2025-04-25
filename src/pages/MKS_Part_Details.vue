<template>
    <!-- <q-page class="flex flex-center content-stretch"> -->
    <!-- class="col" style="min-height: 0" -->
    <q-page>
        <!-- {{ part_name }} -->
        <component :is="part.content" />
        <hr />
        <a :href="part.submodule.urlWeb" target="_blank">edit source</a>
    </q-page>
</template>

<script setup>
// import { watch } from 'vue'
// import { shallowRef } from 'vue'
// import { useRoute } from 'vue-router'
// import { useQuasar } from "quasar";

// import PartDetails from 'src/components/PartDetails.vue'

const props = defineProps({
    part_name: String,
})

console.log('props.part_name', props.part_name)

import { useMDContentStore } from 'src/stores/mdContent'
const mdContent = useMDContentStore()
console.log('mdContent', mdContent)
const part = mdContent.mks.parts[props.part_name]
console.log('part', part)

// const route = useRoute()
// console.log('route', route);

// watch(
//     () => route.params.part_name,
//     (newId, oldId) => {
//         // react to route changes...
//         console.log(`newID: '${newId}'; oldId: '${oldId}'`);
//     },
// )
</script>
