<template>
    <q-page class="flex column" style="align-items: center">
        <section>
            Markdown Test Page
            <my-markdown :source="demo_content.readme.content" :file-path="demo_content.path_base" />
        </section>
    </q-page>
</template>

<script setup>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";
import MyMarkdown from "src/components/MyMarkdown.vue";

import demo from "src/content_md/demo";
// console.log("demo", demo);
console.log("demo", demo);
const demo_content = ref(demo);

</script>
