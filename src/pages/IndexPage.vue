<template>
    <!-- <q-page class="flex flex-center content-stretch"> -->
    <q-page class="">
        <section>
            <my-markdown :source="mks_welcome.readme.content" :file-path="mks_welcome.path_base" />
            <ul class="card-wrapper q-ma-md q-pa-md row items-start q-gutter-md">
                <li v-for="(fn_item, fn_name) in mks_funktionen" :key="fn_name">
                    <q-card class="my-card q-ma-md q-pa-md ">
                        <q-card-section>
                            <my-markdown
                                :source="fn_item.readme.content"
                                :file-path="fn_item.path_base"
                            />
                            <q-card
                                v-for="(part_item, part_name) in fn_item.bauteile"
                                :key="part_name"
                                class="q-ma-md q-pa-md card-bauteil"
                            >
                                <my-markdown
                                    :source="part_item.readme.content"
                                    :file-path="part_item.path_base"
                                />
                            </q-card>
                        </q-card-section>
                    </q-card>
                </li>
            </ul>
        </section>
    </q-page>
</template>

<script setup>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";

import MyMarkdown from "src/components/MyMarkdown.vue";
// import LightPaint from "src/components/LightPaint.vue";

// import { useTheTimeStore } from "stores/thetime.js";

// import TimerDisplay from "components/TimerDisplay.vue";

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

</script>

<style lang="sass" scoped>
.card-wrapper
    list-style: none
    padding: 0
    li
        margin: 0
.my-card
  width: 100%
  max-width: 31vw
  max-height: 80vh
  overflow: scroll
</style>

<style lang="sass">
.my-card
  img
    max-width: 100%
    max-height: 20vh
</style>
