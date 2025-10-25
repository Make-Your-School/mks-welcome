<template>
    <div>
        <div class="jsondata" ref="content-json-ref"><slot name="contentJSON"></slot></div>
        <!-- {{ basePath }} -->
        <MDExample
            v-for="(content_obj, example_name) in content"
            :key="example_name"
            :example_name="example_name"
            :content_obj="content_obj"
            :expanded="Object.keys(content).indexOf(example_name) == 0 ? true : false"
        />
        <!-- expanded: make first one expanded by default. -->
    </div>
</template>

<script setup>
import { shallowRef, useTemplateRef, onMounted } from 'vue'

import MDExample from './MDExample.vue'

const contentJSONRef = useTemplateRef('content-json-ref')
// let contentJSON = {}
const content = shallowRef({})

onMounted(() => {
    // console.log('contentJSONRef', contentJSONRef.value)
    try {
        const raw = contentJSONRef.value.textContent
        // console.log('raw', raw)
        const parsed = JSON.parse(raw)
        // console.log('parsed', parsed)
        // contentJSON = parsed
        content.value = parsed
        // console.log('content', content)
    } catch (error) {
        console.log(error)
    }
})

// const props = defineProps({
defineProps({
    basePath: String,
})
// console.log("---");
// console.log("props.codeLanguage", props.codeLanguage);
// console.log("props.content", props.content);
// console.log("props.codeFilePath", props.codeFilePath);
// console.log("props.includePath", props.includePath);
// const basePath = ref(props.basePath)
</script>

<style lang="sass" scoped>
.jsondata
    display: none
</style>
