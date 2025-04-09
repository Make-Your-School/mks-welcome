<template>
    <!-- <q-page class="flex flex-center content-stretch"> -->
    <!-- class="col" style="min-height: 0" -->
    <q-page>
        <!-- {{ part_name }} -->
        <component :is="part.content" />
    </q-page>
</template>

<script setup>
// import { watch } from 'vue'
import { shallowRef } from 'vue'
// import { useRoute } from 'vue-router'
// import { useQuasar } from "quasar";

// import PartDetails from 'src/components/PartDetails.vue'

const props = defineProps({
  part_name: String
})

console.log("props.part_name", props.part_name);

import { useMksContentStore } from 'src/stores/mksContent'
const mksContent = useMksContentStore();
console.log("mksContent", mksContent);
const part = shallowRef(mksContent.parts[props.part_name]);
console.log("part", part);

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
