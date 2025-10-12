<template>
    <q-card class="part-overview">
        <q-card-section>
            <img
                :src="mks_item.path_base + `/` + mks_item.meta.coverImage"
                :alt="mks_item.meta.title"
            />
        </q-card-section>
        <q-card-section class="info">
            <h2 class="material_number">{{ mks_item.meta.material_number }}</h2>
            <h1 class="title">{{ mks_item.meta.title }}</h1>
            <h2 class="type">{{ mks_item.meta.material_type }}</h2>
            <!-- <div v-html="mks_item.excerpt"></div> -->
            <!-- <component :is="mks_item.readme.excerpt" :file-path="mks_item.path_base" /> -->
        </q-card-section>
    </q-card>
</template>

<script setup>
// import { computed, h, shallowRef, ref, watch, watchEffect } from "vue";
// import { useQuasar } from "quasar";

const props = defineProps({
    // defineProps({
    mks_item: Object,
})
console.log('props.mks_item', props.mks_item)
</script>

<style lang="sass" scoped>
.part-overview
.q-card
    border-radius: var(--corner-radius-medium);
    border: 2px solid var(--card-stroke);
    box-shadow: var(--box-shadow-default);
    background-color: transparent
    color: var(--text-primary);
    width: 100%
    overflow: hidden
    // background-color: hsl(187.5, 8.7%, 18%);
    .q-card__section
        padding: 0
    img
        display: block
        width: 100%
        aspect-ratio : 1 / 1
    .q-card__section.info
        position: relative
        padding: var(--padding-m, 32px) var(--padding-m, 32px) var(--padding-l, 40px)
        padding-top: 3em;
        background: var(--card-fill);
        border-radius: 0;
        transition: all .2s ease-in-out;
        .material_number
            border-radius: 60px;
            border: 1px solid var(--card-stroke);
            box-shadow: var(--box-shadow-default);
            // padding: var(--padding-xs) var(--padding-xs);
            padding: 0.5em;
            position: absolute;
            min-width: 1.5em;
            aspect-ratio: 1/1;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            top: 0;
            transform: translateY(-55%);
            margin: 0
            background: var(--card-fill-accent);
            color: var(--text-primary);
            font-size: 36px
            font-weight: bold
            // dark mode color overwrites
            // background-color: rgb(35, 47, 49);
            // border-color: rgb(46, 158, 204);
            // box-shadow: rgb(14, 48, 62) 4px 4px 0px 0px;
            // color: rgb(116, 240, 255) !important;
        .title
            margin: 0
            font-size: 36px
            line-height: 120%
            font-weight: bold
        .type
            font-size: 32px
            margin: 0
            text-transform: capitalize
.part-overview:hover
    .q-card__section.info
        background-color: var(--card-fill-hover)
        color: var(--card-text-hover)
</style>
