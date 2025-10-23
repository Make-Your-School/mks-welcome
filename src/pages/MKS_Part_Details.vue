<template>
    <!-- <q-page class="flex flex-center content-stretch"> -->
    <!-- class="col" style="min-height: 0" -->
    <q-page class="part-detail-page">
        <q-btn
            flat
            dense
            round
            icon="arrow_back"
            aria-label="zurück zur Übersicht"
            @click="$router.go(-1)"
            class="fixed-top-left q-ma-sm back"
        >
        </q-btn>
        <header>
            <div class="info">
                <h2 class="material_number">{{ part.meta.material_number }}</h2>
                <h1 class="title">{{ part.meta.title }}</h1>
                <!-- <h2 class="type">{{ part.meta.material_type }}</h2> -->
            </div>
            <img :src="coverImage" :alt="part.meta.title" />
        </header>
        <component class="part-content" :is="part.content" />
        <hr />
        <a :href="mysLink">{{ props.part_name }}</a> - (<a
            :href="part.submodule.urlWeb"
            target="_blank"
            >edit source</a
        >)
    </q-page>
</template>

<script setup>
// import { watch } from 'vue'
// import { shallowRef } from 'vue'
// import { useRoute } from 'vue-router'
// import { useQuasar } from "quasar";

// import PartDetails from 'src/components/PartDetails.vue'

const props = defineProps({
    part_name: String,
})

console.log('props.part_name', props.part_name)

import { useMDContentStore } from 'src/stores/mdContent'
const mdContent = useMDContentStore()
console.log('mdContent', mdContent)
const part = mdContent.mks.parts[props.part_name]
console.log('part', part)

const mysLink = location.href

const coverImage = `../${part.path_base}/${part.meta.coverImage}`

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

<style lang="sass" scoped>
.part-detail-page
    padding: 1em
.back
    display: block
    margin-left: 3em
    cursor: pointer
header
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: center
    align-content: stretch
    align-items: center
    margin-top: 1em
    .info
        order: 0
        flex: 0 1 auto
        align-self: auto
        display: flex
        flex-direction: column
        flex-wrap: wrap
        justify-content: center
        align-content: center
        align-items: center
        .material_number
            position: relative
            margin-bottom: 1em
        .title
            margin: 0
            text-align: center
            font-size: var(--display-large)
    img
        max-width: 100vw
        max-height: 35rem

</style>

<style lang="sass">
.part-content > h1
    display: none

.part-content > p > img
    display: none
</style>
