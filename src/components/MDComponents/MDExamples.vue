<template>
    <div>
        <div id="data" style="display: none;"><slot name="contentJSON"></slot></div>
        <h1>include examples</h1>
        {{ basePath }}
    </div>
</template>

<script setup>
// import { ref } from 'vue'

// const tab = ref('')

// const props = defineProps({
defineProps({
    basePath: String,
    contentJSON: String,
})
// console.log("---");
// console.log("props.codeLanguage", props.codeLanguage);
// console.log("props.content", props.content);
// console.log("props.codeFilePath", props.codeFilePath);
// console.log("props.includePath", props.includePath);
// const basePath = ref(props.basePath)
</script>

<style lang="sass" scoped></style>
