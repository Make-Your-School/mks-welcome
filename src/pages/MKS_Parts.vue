<template>
    <!-- <q-page class="flex flex-center content-stretch"> -->
    <!-- class="col" style="min-height: 0" -->
    <q-page class="my-page">
        <component :is="mks_welcome.content" />
        <!-- class="col-auto" -->
        <!-- -->
        <!-- <div class="scroll-wrapper col"> -->
        <div>
            <q-input rounded outlined v-model="searchText" label="Suche:"> </q-input>
        </div>
        <ul class="card-wrapper row items-stretch">
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
import { shallowRef } from 'vue';
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

const sort_difficulty = (entries) => {
    // difficulty
    // - recommend
    // - advanced
    // - expert
    // console.log('entries', entries)
    let difficulty_recommend = entries.filter(([, obj]) => obj.meta.difficulty == 'recommend')
    let difficulty_advanced = entries.filter(([, obj]) => obj.meta.difficulty == 'advanced')
    let difficulty_expert = entries.filter(([, obj]) => obj.meta.difficulty == 'expert')
    let difficulty_rest = entries.filter(
        ([, obj]) => !['recommend', 'advanced', 'expert'].includes(obj.meta.difficulty),
    )

    const sort_local = ([key1], [key2]) => {
        return key1.localeCompare(key2)
    }

    difficulty_recommend.sort(sort_local)
    difficulty_advanced.sort(sort_local)
    difficulty_expert.sort(sort_local)
    difficulty_rest.sort(sort_local)

    console.log('difficulty_recommend', difficulty_recommend)
    console.log('difficulty_advanced', difficulty_advanced)
    console.log('difficulty_expert', difficulty_expert)
    console.log('difficulty_rest', difficulty_rest)
    const result = {
        ...difficulty_recommend,
        ...difficulty_advanced,
        ...difficulty_expert,
        ...difficulty_rest,
    }
    return result
}

const mks_items_sorted = () => {
    // sort:
    // status
    // - active
    // - deprecated
    // - EOL
    // every status group should be sorted by difficulty.
    // difficulty
    // - recommend
    // - advanced
    // - expert

    console.log(mks_parts.value)
    const entries = Object.entries(mks_parts.value)
    // console.log('entries', entries)
    let status_active = entries.filter(([, obj]) => obj.meta.status == 'active')
    let status_deprecated = entries.filter(([, obj]) => obj.meta.status == 'deprecated')
    let status_EOL = entries.filter(([, obj]) => obj.meta.status == 'EOL')
    let status_rest = entries.filter(
        ([, obj]) => !['active', 'deprecated', 'EOL'].includes(obj.meta.status),
    )

    // for every group we sort it again with the difficulty:
    status_active = sort_difficulty(status_active)
    status_deprecated = sort_difficulty(status_deprecated)
    status_EOL = sort_difficulty(status_EOL)
    status_rest = sort_difficulty(status_rest)

    console.log('status_active', status_active)
    console.log('status_deprecated', status_deprecated)
    console.log('status_EOL', status_EOL)
    console.log('status_rest', status_rest)

    const sortedEntries = {
        // ...status_active,
        // ...status_deprecated,
        // ...status_rest,
        // ...status_EOL,
        // ...mks_parts.value,
        ...entries,
    }
    // console.log('sortedEntries', sortedEntries)
    const sortedEntriesObj = Object.fromEntries(sortedEntries)
    console.log('sortedEntriesObj', sortedEntriesObj)
    return sortedEntriesObj
    // return sortedEntries
}

// const mks_items_sorted = computed(() => {
//     // const checkKey = (key) => key.includes('ino') || key.includes('main')
//     console.log(mks_parts.value);
//     // const entries = Object.entries(mks_parts.value)
//     // // console.log('entries', entries)
//     // // const firstEntries = entries.filter(([key]) => checkKey(key))
//     // // // console.log('firstEntries', firstEntries)
//     // // const otherEntries = entries.filter(([key]) => !checkKey(key))
//     // // console.log('otherEntries', otherEntries)
//     // otherEntries.sort(([a], [b]) => a.localeCompare(b))
//     // const sortedEntries = [...firstEntries, ...otherEntries]
//     // // console.log('sortedEntries', sortedEntries)
//     // files.value = Object.fromEntries(sortedEntries)

//     const result = {
//         ...getObjItemsWithSearchTextInReadme(mks_parts.value),
//         // ...mks_parts.value
//     }
//     return result
// })

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
        // ...getObjItemsWithSearchTextInReadme(mks_tags.value),
        ...getObjItemsWithSearchTextInReadme(mks_parts.value),
        // ...getObjItemsWithSearchTextInReadme(mks_items_sorted()),
        // ...mks_items_sorted,
    }
    return result
})

const searchText = ref('')

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
        align-content: stretch;
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
</style>

<style lang="sass">
.my-page
    .markdown-body
        h1:first-child
            margin-left: 2.5em
</style>
