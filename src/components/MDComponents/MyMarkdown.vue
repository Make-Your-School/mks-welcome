<template>
    <div class="my-markdown-wrapper">
        <!-- <mdrender></mdrender> -->
        <!-- <component :is="mdrender"></component> -->
        <component v-if="contentHTML" :is="{template:contentHTML}"></component>
        <!-- <div class="my-markdown" v-html="contentHTML"></div> -->
    </div>
</template>

<script setup>
// import { h } from "vue";
// import { toRaw } from "vue";
import { ref, watchEffect } from "vue";
import { md2html } from "components/markdown-it-plugins/markdown-rendering.js";

const props = defineProps({
    source: String,
    filePath: String,
});

// const emit = defineEmits(['change', 'delete'])

// ------------------------------------------
// prepare content
const contentHTML = ref("");

watchEffect(async () => {
    contentHTML.value = await md2html(props.source);
    // console.log("contentHTML.value", contentHTML.value);
});

// const mdrender = () => {
//     return h("div", contentHTML.value);
// };
</script>

<style lang="sass"></style>
