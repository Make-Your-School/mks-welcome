<template>
    <div class="my-markdown-wrapper">
        <mdrender></mdrender>
        <div class="my-markdown" v-html="contentHTML"></div>
    </div>
</template>

<script setup>
import { h, ref, watchEffect, toRaw } from "vue";
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
    contentHTML.value = md2html(props.source);
    console.log("contentHTML.value", toRaw(contentHTML.value));
});

const mdrender = () => {
    return h("div", contentHTML.value);
};
</script>

<style lang="sass"></style>
