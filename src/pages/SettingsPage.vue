<template>
    <q-page class="flex column" style="align-items: center">
        <section>
            <h4>{{ appinfo.productName }}</h4>
        </section>
        <section>
            Markdown Test Page
            <my-markdown :source="mks_welcome.readme.content" :file-path="mks_welcome.path_base" />
        </section>
    </q-page>
</template>

<script setup>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";
import MyMarkdown from "src/components/MyMarkdown.vue";

import mksContent from "../../public/test_md_files/";
// console.log("mksContent", mksContent);
console.log("mksContent", mksContent);
const mks_welcome = ref(mksContent["welcome"]);

const appinfo = process.env.appinfo;
</script>
