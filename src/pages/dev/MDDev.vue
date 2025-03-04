<template>
    <q-page class="flex column" style="align-items: center;">
        <section style="overflow: scroll;">
            Dev
            <hr>
            <MyMarkdown :source="md_content" :file-path="path_base" />
        </section>
    </q-page>
</template>

<script setup>
import { ref } from "vue";
// import { useQuasar } from "quasar";
import MyMarkdown from "src/components/MDComponents/MyMarkdown.vue";

// import contentRaw from "src/content_md/dev";
const path_base = "../../../public/demo/dev.md"
let contentRaw = import.meta.glob("../../../public/demo/dev.md", {
    query: "?raw",
    eager: true,
})[path_base].default;
// console.log("contentRaw", contentRaw);

const md_content = ref(contentRaw);
// console.log("md_content", md_content);

</script>
