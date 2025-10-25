<template>
    <div class="MDCode">
        <VCodeBlock
            :code="content"
            highlightjs
            :lang="codeLanguage"
            :theme="theme"
            :label="codeFilePath != 'undefined' ? codeFilePath : ''"
            persistentCopyButton
            style="margin-bottom: 0;"
        ></VCodeBlock>
        <q-btn
            v-if="codeWebPath"
            flat
            dense
            round
            icon="open_in_browser"
            aria-label="öffne Datei im web"
            :href="codeWebPath"
            target="_blank"
            class="codeWeb"
        />
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
import hljs from 'highlight.js/lib/core'
// import "highlight.js/styles/night-owl.css";
// import 'highlight.js/styles/base16/solarized-dark.css';
// import hljs from 'highlight.js/lib/core';

import cpp from 'highlight.js/lib/languages/cpp'
// Then register the languages you need
hljs.registerLanguage('cpp', cpp)
hljs.registerLanguage('c++', cpp)
hljs.registerLanguage('ino', cpp)
import python from 'highlight.js/lib/languages/python'
hljs.registerLanguage('py', python)
import css from 'highlight.js/lib/languages/css'
hljs.registerLanguage('css', css)

// const props = defineProps({
defineProps({
    content: String,
    codeLanguage: String,
    codeFilePath: String,
    codeWebPath: String,
    // includePath: String,
    // fileExists: String,
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

<style lang="sass" scoped>
.MDCode
    position: relative
    .codeWeb
        position: absolute
        top: 3.5em
        right: 1.5em
        z-index: 10
</style>
