<template>
    <!-- <q-page class="flex flex-center content-stretch"> -->
    <!-- class="col" style="min-height: 0" -->
    <q-page class="">
        <!-- TODO: convert to table -->
        <ul class="">
            <li
                v-for="(mks_item, mks_item_name) in mks_parts"
                :key="mks_item_name"
            >
                <router-link :to="`/part/${mks_item_name}`">
                    {{ mks_item.name }}
                </router-link>
            </li>
        </ul>

        <!-- </div> -->
    </q-page>
</template>

<script setup>
import { ref } from 'vue'
// import { useQuasar } from "quasar";

import { useMDContentStore } from 'src/stores/mdContent'
const mdContent = useMDContentStore()
console.log('mdContent', mdContent)
const mks_parts = ref(mdContent.mks.parts)

// $q.notify('Message')

// const $q = useQuasar();
</script>
