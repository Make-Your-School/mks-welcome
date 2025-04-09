<template>
    <!-- <q-page class="flex flex-center content-stretch"> -->
    <!-- class="col" style="min-height: 0" -->
    <q-page class="my-page">
        <div>
            <q-input rounded outlined v-model="searchText" label="Suche:"> </q-input>
        </div>
        <ul class="card-wrapper row items-stretch">
            <li
                v-for="(mks_item, mks_item_name) in mks_items_filtered"
                :key="mks_item_name"
                class="my-card q-pa-md"
            >
                <router-link :to="`/tag/${mks_item_name}`" class="clickable">
                    <!--
                    @click="$router.push({ name: 'parts', params: { 'part_name':mks_item_name } }) "
                -->
                    <TagOverview :tag="mks_item"/>
                </router-link>
            </li>
        </ul>
        <!-- </div> -->
    </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
// import { useQuasar } from "quasar";

import TagOverview from 'src/components/TagOverview.vue'

// import mksContent from "../../public/mks/";
// import mksContent from "../content_md/mksContent";
// console.log("mksContent", mksContent);
// const mks_welcome = ref(mksContent.welcome);
// const mks_parts = ref(mksContent.parts);

import { useMDContentStore } from 'src/stores/mdContent'
const mdContent = useMDContentStore()
console.log('mdContent', mdContent)
const mks_tags = ref(mdContent.mks.tags)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// search
const searchText = ref('')
// const check_searchTextInReadme = (readme, item_name) => {
//     return (
//         item_name?.toLowerCase().includes(searchText.value.toLowerCase()) ||
//         readme.content.toLowerCase().includes(searchText.value.toLowerCase()) ||
//         readme.data?.tags?.join(", ").toLowerCase().includes(searchText.value.toLowerCase())
//     );
// };
const check_searchTextInReadme = (readme, item_name) => {
    return (
        item_name?.toLowerCase().includes(searchText.value.toLowerCase()) ||
        readme.content_text.toLowerCase().includes(searchText.value.toLowerCase()) ||
        // TODO: find a better way to search for text in rendered output..
        readme.data?.tags?.join(', ').toLowerCase().includes(searchText.value.toLowerCase())
    )
}

const getObjItemsWithSearchTextInReadme = (obj) => {
    const result = {}
    for (const [item_name, item] of Object.entries(obj)) {
        // console.log(`item_name`, item_name, `item`, item)
        if (check_searchTextInReadme(item, item_name)) {
            result[item_name] = item
        }
    }
    return result
}

const mks_items_filtered = computed(() => {
    // const result = {};
    // for (const [mks_item_name, mks_item] of Object.entries(mks_tags.value)) {
    //     console.log(`mks_item_name`, mks_item_name, `mks_item`, fn_item);
    //     // only include in result if search text is somewhere in the content..
    //     // check bauteile
    //     // const bauteile_includes = getObjItemsWithSearchTextInReadme(mks_parts.);
    //     // // console.log("bauteile_includes", bauteile_includes);
    //     // console.log("Object.keys(bauteile_includes)", Object.keys(bauteile_includes));

    //     // if (
    //     //     check_searchTextInReadme(fn_item.readme, fn_name) ||
    //     //     Object.keys(bauteile_includes).length > 0
    //     // ) {
    //     if (
    //         check_searchTextInReadme(fn_item.readme, fn_name)
    //     ) {
    //         result[fn_name] = fn_item;
    //     }
    // }
    const result = {
        ...getObjItemsWithSearchTextInReadme(mks_tags.value),
    }
    return result
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
.card-wrapper
    flex-grow: 1
    overflow: auto
    min-height: 0
    list-style: none
    padding: 0
    li
        margin: 0
.q-card
    background-color: #84cbd4
.my-card
    width: 100%
    min-width: 25rem
    max-width: 32.5vw
    max-height: 80vh
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
.clickable
    cursor: pointer
    text-decoration: none
    display: block
    width: 100%
    height: 100%
    overflow: scroll
</style>

<style lang="sass">
.my-card
    img
        max-width: 100%
        max-height: 20vh
        display: block
        margin: auto
        background-color: transparent
    h1
        color: white
        display: flex
        justify-content: center
        align-items: center
        width: 100%
        text-align: center
</style>
useMDContentStoreuseMDContentStore
