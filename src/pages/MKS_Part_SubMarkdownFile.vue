<template>
    <!-- <q-page class="flex flex-center content-stretch"> -->
    <!-- class="col" style="min-height: 0" -->
    <q-page class="part-detail-page">
        <q-btn
            flat
            dense
            round
            icon="arrow_back"
            aria-label="zurück"
            @click="backHandler()"
            class="fixed-top-left q-ma-sm back"
        >
            <!-- @click="$router.go(-1)" -->
        </q-btn>
        <!-- <component class="part-content" :is="part.content" /> -->
        <MyMarkdown :source="mdFileContent" :filePath="mdFile"></MyMarkdown>
        <hr />
        <a :href="mysLink">{{ props.part_name + '/' + props.pathMatch.join('/') }}</a> - (<a
            :href="urlWebSource"
            target="_blank"
            >edit source</a
        >)
    </q-page>
</template>

<script setup>
import { watchEffect, ref } from 'vue'
// import { shallowRef } from 'vue'
// import { useRoute } from 'vue-router'
// import { useQuasar } from "quasar";

// import PartDetails from 'src/components/PartDetails.vue'
import MyMarkdown from 'src/components/MDComponents/MyMarkdown.vue'

const props = defineProps({
    part_name: String,
    pathMatch: Array,
})

console.log('props.part_name', props.part_name)
console.log('props.pathMatch', props.pathMatch)

import { useMDContentStore } from 'src/stores/mdContent'
const mdContent = useMDContentStore()
console.log('mdContent', mdContent)
const part = mdContent.mks.parts[props.part_name]
console.log('part', part)

const mysLink = location.href
const urlWebSource = part.submodule.urlWeb + '/blob/main/' + props.pathMatch.join('/')

const appPartURL = ref(`/part/${props.part_name}`)
const mdFile = ref(`/mks-welcome/${part.path_base}${props.pathMatch.join('/')}`)
const mdFileContent = ref('')

// const route = useRoute()
// console.log('route', route);
import { useRouter } from 'vue-router'
const router = useRouter()
async function backHandler() {
    if (navigation.canGoBack) {
        await router.back()
        // Handle any required clean-up after
        // navigation has finished
    } else {
        console.log('appPartURL', appPartURL.value)
        router.push(appPartURL.value)
    }
}

watchEffect(async () => {
    mdFile.value = `/mks-welcome/${part.path_base}${props.pathMatch.join('/')}`
    // console.log('mdFile.value', mdFile.value)
    // mks-welcome/mks/parts/mks-DFRobot-DFR0534/AdapterLoeten.md
    const response = await fetch(mdFile.value)
    // console.log(response)
    mdFileContent.value = await response.text()
    // console.log('mdFileContent.value', mdFileContent.value)
})
</script>

<style lang="sass" scoped>
.part-detail-page
    padding: 1em
.back
    display: block
    // margin-left: 3em
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
.part-content > h1:first-of-type
    display: none

.part-content > p:first-of-type > img
    display: none
</style>
