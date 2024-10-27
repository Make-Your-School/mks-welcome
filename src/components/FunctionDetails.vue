<template>
    <q-card class="fn-details">
        <q-btn
            flat
            v-close-popup
            class="absolute-top-right q-mt-md q-mr-md"
            icon="close"
            size="xl"
            round
        />
        <q-card-section>
            <my-markdown :source="fn_item.readme.content" :file-path="fn_item.path_base" />
            <q-card
                v-for="(part_item, part_name) in fn_item.bauteile"
                :key="part_name"
                class="q-ma-md q-pa-md card-bauteil"
            >
                <my-markdown :source="part_item.readme.content" :file-path="part_item.path_base" />
            </q-card>
        </q-card-section>
    </q-card>
</template>

<script setup>
// import { computed, h, shallowRef, ref, watch, watchEffect } from "vue";
// import { useQuasar } from "quasar";
import MyMarkdown from "src/components/MyMarkdown.vue";

const props = defineProps({
    fn_item: Object,
});
</script>

<style lang="sass" scoped>
.fn-details
  width: 100%
  height: 100%
  .q-btn
    z-index: 2000
  .q-card__section
    width: 100%
    height: 100%
    overflow: scroll
</style>
