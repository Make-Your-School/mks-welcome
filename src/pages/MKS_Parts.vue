<template>
    <!-- <q-page class="flex flex-center content-stretch"> -->
    <!-- class="col" style="min-height: 0" -->
    <q-page class="my-page">
        <component :is="mks_welcome.content" />
        <!-- class="col-auto" -->
        <!-- -->
        <!-- <div class="scroll-wrapper col"> -->
        <div class="row wrap justify-start items-stretch content-start">
            <q-input class="col-grow" rounded outlined v-model="searchText" label="Suche:">
            </q-input>
            <q-btn-toggle
                rounded
                outlined
                v-model="filter_by_type"
                clearable
                :options="[
                    { label: 'Controller', value: 'controller' },
                    { label: 'input', value: 'input' },
                    { label: 'output', value: 'output' },
                    { label: 'shield', value: 'shield' },
                ]"
            />
        </div>
        <ul class="card-wrapper row">
            <li
                v-for="(mks_item, mks_item_name) in mks_items_filtered"
                :key="mks_item_name"
                class="my-card q-pa-md"
            >
                <router-link :to="`/part/${mks_item_name}`" class="clickable">
                    <!--
                        <router-link :to="{ name: 'part', params: { 'part_name':mks_item_name } }" class="clickable">
                    @click="$router.push({ name: 'parts', params: { 'part_name':mks_item_name } }) "
                -->
                    <PartOverview :mks_item="mks_item" :mks_parts="mks_parts" />
                </router-link>
            </li>
        </ul>
        <!-- </div> -->
    </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import { shallowRef } from 'vue'
// import { useQuasar } from "quasar";

import PartOverview from 'src/components/PartOverview.vue'
// import PartDetails from "src/components/PartDetails.vue";

// import mksContent from "../../public/mks/";
// import mksContent from "../content_md/mksContent";
// console.log("mksContent", mksContent);
// const mks_welcome = ref(mksContent.welcome);
// const mks_parts = ref(mksContent.parts);

import { useMDContentStore } from 'src/stores/mdContent'

const mdContent = useMDContentStore()
console.log('mdContent', mdContent)
const mks_welcome = mdContent.mks.welcome
const mks_parts = shallowRef(mdContent.mks.parts)
const mks_parts_sorted = shallowRef(mdContent.mks.parts_sorted)
console.log('mks_parts_sorted', mks_parts_sorted)

const filter_by_type = ref('')
const searchText = ref('')
const search_in_content = ref(false)

const mks_items_filtered = computed(() => {
    return mdContent.parts_filtered({
        by_searchText: searchText.value,
        by_material_type: filter_by_type.value,
        in_content: search_in_content.value,
    })
})

// $q.notify('Message')

// const $q = useQuasar();
</script>

<style lang="sass" scoped>
.my-page
    display: flex
    flex-direction: column
    min-height: 0
    height: 100%
    // max-width: 80em
    margin: 0 auto
    @media (width >= 2280px)
        --container-spacing: 0;
        max-width: 1700px;
    .card-wrapper
        flex-grow: 1
        overflow: visible
        min-height: 80vh
        list-style: none
        padding: 0
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: flex-start;
        align-items: stretch;
        li
            margin: 0
        .my-card
            width: 100%
            // min-width: min(39rem, 200px)
            max-width: 32.5%
            overflow: visible
            display: flex
            flex-direction: column
            justify-content: center
            align-items: stretch
            @media (width <= 900px)
                max-width: 50%
            @media (width <= 560px)
                max-width: 100%
            @media (width >= 2000px)
                max-width: 25%
            .clickable
                cursor: pointer
                text-decoration: none
                display: block
                width: 100%
                height: 100%
                overflow: visible

        body.body--light .my-card
            color: var(--mys-blue-950)
        body.body--dark .my-card
            color: $text-on-dark
</style>

<style lang="sass">
.my-page
    .markdown-body
        h1:first-child
            margin-left: 2.5em
</style>
