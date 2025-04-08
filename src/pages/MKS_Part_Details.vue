<template>
    <!-- <q-page class="flex flex-center content-stretch"> -->
    <!-- class="col" style="min-height: 0" -->
    <q-page>
        <h1>MKS_Parts_Details.vue</h1>
        <!-- <component :is="mks_welcome.readme.default" /> -->
        <!-- <PartDetails :mks_item="mks_item" :mks_parts="mks_parts" /> -->
        <!-- {{ route.params.part_name }} -->
        {{ part_name }}

    </q-page>
</template>

<script setup>
// import { watch } from 'vue'
// import { useRoute } from 'vue-router'
// import { useQuasar } from "quasar";

// import PartDetails from 'src/components/PartDetails.vue'

defineProps({
  part_name: String
})

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
