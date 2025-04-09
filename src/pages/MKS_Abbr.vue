<template>
    <!-- <q-page class="flex flex-center content-stretch"> -->
    <!-- class="col" style="min-height: 0" -->
    <q-page class="my-page">
        <q-list bordered class="rounded-borders">
            <q-expansion-item
                v-for="(mks_item, mks_item_name) in mks_abbr"
                :key="mks_item_name"
                class=""
                expand-separator
                v-model="expanded[mks_item_name]"
                :label="mks_item_name"
                :id="mks_item_name"
                @after-show="setHashTo(mks_item_name)"
                >
                <!-- @update:model-value="" -->
                <q-card>
                    <q-card-section>
                        <component :is="mks_item.content"></component>
                    </q-card-section>
                </q-card>
            </q-expansion-item>
        </q-list>
        <!-- <div>
            <h3>dev</h3>
            <button @click="expanded['UART'] = true">expand UART</button> <br />
            <button @click="setHashTo('#W3C')">hash to W3C</button>
            <div>
                {{ expanded }} <br />
                {{ $route.hash }} <br />
                {{ props }}
            </div>
        </div> -->
    </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { watchEffect } from 'vue'
// import { useQuasar } from "quasar";

// defineProps({
const props = defineProps({
    abbr_name: String,
})

// import { useMksContentStore } from 'src/stores/mksContent'
// const mksContent = useMksContentStore()
// console.log('mksContent', mksContent)
// const mks_abbr = mksContent.abbr
// console.log('mks_abbr', mks_abbr)
// this results in ref enclosed components :-(

import { mksAbbrLoad } from '../content_md/mksAbbr.js'
const mks_abbr = mksAbbrLoad()
console.log('mks_abbr', mks_abbr)

const expanded = ref({})
// init..
for (const abbr_name of Object.keys(mks_abbr)) {
    expanded.value[abbr_name] = false
}
// console.log('expanded', expanded)

// watch(
//     expanded,
//     (stateNew, stateOld ) => {
//         // get last changed entry:
//         console.log(stateNew.UART);
//         console.log(stateOld.UART);
//     },
//     { deep: true }
// )



function focusAbbrDescription(abbr_name) {
    // console.log('TODO: implement focusing..', abbr_name)
    if (abbr_name.startsWith("#")) {
        abbr_name = abbr_name.replace("#","")
    }
    const selector = `#${abbr_name}`
    // console.log('selector', selector)
    const abbr_el = document.querySelector(selector)
    scrollToElement(abbr_el)
}

import { scroll } from 'quasar'
const { getScrollTarget, setVerticalScrollPosition } = scroll

// takes an element object
function scrollToElement(el) {
    const target = getScrollTarget(el)
    const offset = el.offsetTop
    const duration = 1000
    setVerticalScrollPosition(target, offset, duration)
}

watchEffect(() => {
    console.log('props.abbr_name changed..', props.abbr_name)
    if (props.abbr_name) {
        focusAbbrDescription(props.abbr_name)
    }
})

import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()

watch(
    () => route.hash,
    (newValue, oldValue) => {
        console.log('route hash changed..', oldValue, newValue)
        focusAbbrDescription(newValue)
    },
)

const router = useRouter()
function setHashTo(hash) {
    if (!hash.startsWith("#")) {
        hash = "#" + hash
    }
    router.push({hash: hash })
}
</script>

<style lang="sass" scoped></style>

<style lang="sass"></style>
