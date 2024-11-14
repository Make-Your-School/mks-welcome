<template>
    <!-- <q-page class="flex flex-center content-stretch"> -->
    <!-- class="col" style="min-height: 0" -->
    <q-page class="my-page">
        <my-markdown :source="mks_welcome.readme.content" :file-path="mks_welcome.path_base" />
        <!-- class="col-auto" -->
        <!-- -->
        <!-- <div class="scroll-wrapper col"> -->
        <div>
            <q-input rounded outlined v-model="searchText" label="Suche:"> </q-input>
        </div>
        <ul class="card-wrapper row items-stretch">
            <li
                v-for="(fn_item, fn_name) in mks_items_filtered"
                :key="fn_name"
                class="my-card q-pa-md"
            >
                <FunctionOverview
                    :fn_item="fn_item"
                    :mks_parts="mks_parts"
                    @click="fn_item.showDetails = true"
                    class="clickable"
                />
                <q-dialog v-model="fn_item.showDetails" full-height full-width>
                    <FunctionDetails :fn_item="fn_item" :mks_parts="mks_parts" />
                </q-dialog>
            </li>
        </ul>
        <!-- </div> -->
    </q-page>
</template>

<script setup>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";

import MyMarkdown from "src/components/MyMarkdown.vue";
import FunctionOverview from "src/components/FunctionOverview.vue";
import FunctionDetails from "src/components/FunctionDetails.vue";

import mksContent from "../../public/mks/";
// console.log("mksContent", mksContent);
console.log("mksContent", mksContent);
const mks_welcome = ref(mksContent.welcome);
// console.log(`mksContent['welcome']['./readme.md']['content']`, mksContent['welcome']['./readme.md']['content']);
// console.log(`mksContent.welcome`, mksContent.welcome);
// console.log(`mksContent.welcome['./readme.md'].content`, mksContent.welcome['./readme.md'].content);
// console.log(`mksContent.welcome['./readme.md'].path_base`, mksContent.welcome['./readme.md'].path_base);
const mks_tags = ref(mksContent.tags);
const mks_parts = ref(mksContent.parts);

const check_searchTextInReadme = (readme, item_name) => {
    return (
        item_name?.toLowerCase().includes(searchText.value.toLowerCase()) ||
        readme.content.toLowerCase().includes(searchText.value.toLowerCase()) ||
        readme.data?.tags?.join(", ").toLowerCase().includes(searchText.value.toLowerCase())
    );
};

const getObjItemsWithSearchTextInReadme = (obj) => {
    const result = {};
    for (const [item_name, item] of Object.entries(obj)) {
        // console.log(`item_name`, item_name, `item`, item);
        if (check_searchTextInReadme(item.readme, item_name)) {
            result[item_name] = item;
        }
    }
    return result;
};

const mks_items_filtered = computed(() => {
    // const result = {};
    // for (const [fn_name, fn_item] of Object.entries(mks_tags.value)) {
    //     console.log(`fn_name`, fn_name, `fn_item`, fn_item);
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
        ...getObjItemsWithSearchTextInReadme(mks_parts.value),
    };
    return result;
});

const searchText = ref("");

// $q.notify('Message')

const $q = useQuasar();
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
</style>

<style lang="sass">
.my-card
    img
        max-width: 100%
        max-height: 20vh
        display: block
        margin: auto
        background-color: white
    h1
        color: white
        display: flex
        justify-content: center
        align-items: center
        width: 100%
        text-align: center
</style>
