<template>
    <!-- <q-page class="flex flex-center content-stretch"> -->
    <!-- class="col" style="min-height: 0" -->
    <q-page>
        <h1>MKS_Tag_Details.vue</h1>
        <!-- <component :is="mks_welcome.readme.default" /> -->
        <!-- <PartDetails :mks_item="mks_item" :mks_parts="mks_parts" /> -->
        <!-- {{ route.params.tag_name }} -->
        {{ tag_name }}

    </q-page>
</template>

<script setup>
// import { ref } from 'vue'
// import { useRoute } from 'vue-router'
// import { useQuasar } from "quasar";

// import PartDetails from 'src/components/PartDetails.vue'

defineProps({
  tag_name: String
})

// import { useMksContentStore } from 'src/stores/mksContent'
// const mksContent = useMksContentStore();
// console.log("mksContent", mksContent);
// const mks_parts = ref(mksContent.parts);
// const part = ref(mksContent.parts);

// const route = useRoute()
// console.log('route', route);

// watch(
//     () => route.params.tag_name,
//     (newId, oldId) => {
//         // react to route changes...
//         console.log(`newID: '${newId}'; oldId: '${oldId}'`);
//     },
// )
</script>
