<template>
    <div class="MDCode">
        <!-- <span v-if="includePath!='undefined'">'{{ includePath }}'</span> -->
        <!-- TODO: change span to label -->
        <!-- TODO: or make it clickable to point to source on github... -->
        <VCodeBlock
            :code="content"
            highlightjs
            :lang="codeLanguage"
            :theme="theme"
            :label="codeFilePath!='undefined' ? codeFilePath : ''"
        ></VCodeBlock>
        <!--
            :label="codeFilePath"
         -->
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import VCodeBlock from '@wdns/vue-code-block'
// https://github.com/webdevnerdstuff/vue-code-block

// import hljs from "highlight.js";
import hljs from 'highlight.js/lib/core';
// import "highlight.js/styles/night-owl.css";
// import 'highlight.js/styles/base16/solarized-dark.css';
// import hljs from 'highlight.js/lib/core';

import cpp from "highlight.js/lib/languages/cpp";
// Then register the languages you need
hljs.registerLanguage("cpp", cpp);
hljs.registerLanguage("c++", cpp);


// const props = defineProps({
defineProps({
    content: String,
    codeLanguage: String,
    includePath: String,
    codeFilePath: String,
    fileExists: String,
})
// console.log("---");
// console.log("props.codeLanguage", props.codeLanguage);
// console.log("props.content", props.content);
// console.log("props.codeFilePath", props.codeFilePath);
// console.log("props.includePath", props.includePath);

const theme = ref('base16/solarized-dark')
const $q = useQuasar()
watch(
    () => $q.dark.isActive,
    (val) => {
        console.log(val ? 'On dark mode' : 'On light mode')
        if (val) {
            // dark
            theme.value = 'base16/solarized-dark'
        } else {
            // light
            theme.value = 'base16/solarized-light'
        }
    },
)
</script>

<style lang="sass" scoped></style>
