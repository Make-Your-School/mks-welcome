<template>
    <q-card class="part-overview">
        <q-card-section>
            <div v-html="mks_item.excerpt"></div>
            <!-- <component :is="mks_item.readme.excerpt" :file-path="mks_item.path_base" /> -->
        </q-card-section>
    </q-card>
</template>

<script setup>
// import { computed, h, shallowRef, ref, watch, watchEffect } from "vue";
// import { useQuasar } from "quasar";

// const props = defineProps({
defineProps({
    mks_item: Object,
})
// console.log("props.mks_item", props.mks_item);
</script>

<style lang="sass" scoped>
.part-overview
    width: 100%
    height: 100%
    overflow: scroll
    border-radius: var(--corner-radius-medium, 24px);
    border: 2px solid var(--surface-stroke--primary, hsl(197.5, 63.2%, 49%));
    box-shadow: 4px 4px 0 0 var(--mys-blue-950, #0E303E);
    background-color: hsl(187.5, 8.7%, 18%);
    // overflow: hidden;
    // display: flex;
    // flex-direction: column;
    // position: relative;
    </style>
