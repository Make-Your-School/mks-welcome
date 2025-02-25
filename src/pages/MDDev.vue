<template>
    <q-page class="flex column" style="align-items: center">
        <section style="overflow: scroll">
            <h2>Markdown DEV</h2>
            <my-markdown :source="dev_content.readme.content" :file-path="dev_content.path_base" />
        </section>
    </q-page>
</template>

<script setup>
import { ref } from "vue";
// import { useQuasar } from "quasar";
import MyMarkdown from "src/components/MyMarkdown.vue";

import dev from "src/content_md/dev";
console.log("dev", dev);
const dev_content = ref(dev);

</script>
