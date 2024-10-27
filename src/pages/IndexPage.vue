<template>
    <!-- <q-page class="flex flex-center content-stretch"> -->
    <!-- class="col" style="min-height: 0" -->
    <q-page class="my-page">
        <my-markdown :source="mks_welcome.readme.content" :file-path="mks_welcome.path_base" />
        <!-- class="col-auto" -->
        <!-- -->
        <!-- <div class="scroll-wrapper col"> -->
        <ul class="card-wrapper row items-stretch">
            <li v-for="(fn_item, fn_name) in mks_funktionen" :key="fn_name" class="my-card q-pa-md">
                <FunctionOverview
                    :fn_item="fn_item"
                    @click="fn_item.showDetails = true"
                    class="clickable"
                />
                <q-dialog v-model="fn_item.showDetails" full-height full-width>
                    <FunctionDetails :fn_item="fn_item" />
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

// import { useTheTimeStore } from "stores/thetime.js";

// import TimerDisplay from "components/TimerDisplay.vue";

import FunctionOverview from "src/components/FunctionOverview.vue";
import FunctionDetails from "src/components/FunctionDetails.vue";

import mksContent from "../../public/mks/";
// console.log("mksContent", mksContent);
console.log("mksContent", mksContent);
const mks_welcome = ref(mksContent["welcome"]);
// console.log(`mksContent['welcome']['./readme.md']['content']`, mksContent['welcome']['./readme.md']['content']);
// console.log(`mksContent.welcome`, mksContent.welcome);
// console.log(`mksContent.welcome['./readme.md'].content`, mksContent.welcome['./readme.md'].content);
// console.log(`mksContent.welcome['./readme.md'].path_base`, mksContent.welcome['./readme.md'].path_base);
const mks_funktionen = ref(mksContent["funktionen"]);

// const thetime = useTheTimeStore();

// $q.notify('Message')

const $q = useQuasar();

const getPageStyle = (offset, height) => {
    return {
        height: `${height - offset}px`,
    };
};
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
.my-card
    width: 100%
    min-width: 25rem
    max-width: 32.5vw
    max-height: 80vh
.clickable
    cursor: pointer
</style>

<style lang="sass">
.my-card
    img
        max-width: 100%
        max-height: 20vh
</style>
