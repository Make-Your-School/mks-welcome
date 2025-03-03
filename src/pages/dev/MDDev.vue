<template>
    <q-page class="flex column" style="align-items: center;">
        <section style="overflow: scroll;">
            Markdown Test Page
            <!-- <MyMarkdown :source="md_content.readme.content" :file-path="md_content.path_base" /> -->
        </section>
    </q-page>
</template>

<script setup>
// import { ref } from "vue";
// import { useQuasar } from "quasar";
// import MyMarkdown from "src/components/MDComponents/MyMarkdown.vue";

// import contentRaw from "src/content_md/dev";
let temp = import.meta.glob("../../../public/demo/dev.md", {
    query: "?raw",
    eager: true,
});
console.log("temp", temp);

// console.log("contentRaw", contentRaw);
// const md_content = ref(contentRaw);

</script>
