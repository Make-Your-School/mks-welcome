<template>
    <q-card class="tag-overview">
        <q-card-section>
            <div v-html="tag.excerpt"></div>
            <!-- <component :is="tag.readme.excerpt" :file-path="tag.path_base" /> -->
            <TagBauteilListe :tag="tag"></TagBauteilListe>
        </q-card-section>
    </q-card>
</template>

<script setup>
// import { computed, h, shallowRef, ref, watch, watchEffect } from "vue";
// import { useQuasar } from "quasar";

import TagBauteilListe from './TagBauteilListe.vue'

// const props = defineProps({
defineProps({
    tag: Object,
});
</script>

<style lang="sass" scoped>
.tag-overview
  width: 100%
  height: 100%
  overflow: scroll
</style>
