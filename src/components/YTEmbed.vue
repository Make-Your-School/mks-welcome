<template>
    <div>
        <iframe
            class="embed-responsive-item"
            type="text/html"
            width="640"
            height="390"
            :src="src"
            frameborder="0"
        />
    </div>
</template>

<script setup>
// const props = defineProps({
defineProps({
    videoId: String,
    src: String,
    options: Object,
})
// console.log("---");
// console.log("props.codeLanguage", props.codeLanguage);
// console.log("props.content", props.content);
// console.log("props.codeFilePath", props.codeFilePath);
// console.log("props.includePath", props.includePath);
</script>
