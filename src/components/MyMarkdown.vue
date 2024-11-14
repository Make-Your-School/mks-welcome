<template>
    <div class="my-markdown-wrapper">
        <div v-for="(item, index) in content" :key="index">
            <div v-if="item.type == 'html'" v-html="item.content" class="my-markdown"></div>
            <div v-if="item.type == 'code'">
                <span>{{ item.include_path }}</span>
                <VCodeBlock
                    :code="item.content"
                    highlightjs
                    label="Hello World"
                    :lang="item.codeLanguage"
                    :theme="theme"
                ></VCodeBlock>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, h, shallowRef, ref, watch, watchEffect } from "vue";
import { useQuasar } from "quasar";

import VCodeBlock from "@wdns/vue-code-block";
import MarkdownIt from "markdown-it";
import anchor from "markdown-it-anchor";
import { full } from "markdown-it-emoji";
import markdownItPluginImgSrcAbs from "./markdown-it-plugin-img-src-abs";
import { runEmbedCode } from "./markdown-it-plugin-embed-code";
import hljs from "highlight.js";

const props = defineProps({
    source: String,
    filePath: String,
});

const md_options = {
    html: true,
    linkify: true,
    typographer: true,
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(str, { language: lang }).value;
            } catch (__) {}
        }
        return ""; // use external default escaping
    },
    eval: false,
};

const md = shallowRef(new MarkdownIt(md_options));

md.value.use(anchor);
md.value.use(full);
md.value.use(markdownItPluginImgSrcAbs);

const content = ref([]);

const addHTMLChunk = (tokens, token_start, token_end, env) => {
    let chunk = {
        type: "html",
        content: "",
    };
    chunk.content = md.value.renderer.render(
        tokens.splice(token_start, token_end),
        md.value.options,
        env
    );
    content.value.push(chunk);
};

const addCodeChunk = (token, env) => {
    let chunk = {
        type: "code",
        content: token.content,
        codeLanguage: token.codeLanguage,
        filePath: token.filePath,
        codeFilePath: token.codeFilePath,
    };
    content.value.push(chunk);
};

const theme = ref("base16/solarized-dark");
const $q = useQuasar();
watch(
    () => $q.dark.isActive,
    (val) => {
        console.log(val ? "On dark mode" : "On light mode");
        if (val) {
            theme.value = "base16/solarized-dark";
        } else {
            theme.value = "base16/solarized-light";
        }
    }
);

watchEffect(async () => {
    const env = {
        filePath: props.filePath,
    };

    let tokens = md.value.parse(props.source, env);
    await runEmbedCode(tokens, {}, env, md.value);

    let chunk_start = 0;
    for (let idx = 0; idx < tokens.length; idx++) {
        const token = tokens[idx];
        if (token.type == "fence") {
            addHTMLChunk(tokens, chunk_start, idx - 1, env);
            addCodeChunk(token, env);

            chunk_start = idx + 1;
        }
    }
    addHTMLChunk(tokens, chunk_start, tokens.length - 1, env);
});
</script>

<style lang="sass">
.my-markdown
    padding: 1rem
    border-radius: 0.5rem
    h1
        font-size: 4.0rem
        margin-top: 0
        font-weight: bold
    h2
        font-size: 3rem
        font-weight: bold
    h3
        font-size: 2rem
        font-weight: bold
    h4
        font-size: 1rem
        font-weight: bold
    h5
        font-size: 1rem
        font-weight: bold
    h6
        font-size: 1rem
        font-weight: bold
    p
        font-size: 1rem
        font-weight: bold
    img
        max-width: 100%
        width: auto
        height: auto

// .my-card .my-markdown h1:nth-child(1)
//        position: sticky
//        top: 1rem
//        text-shadow: 0 0 2px black, 0 0 5px black, 0 0 10px black, 0 0 10px black, 0 0 10px black, 0 0 10px black, 0 0 10px black, 0 0 10px black
//.body--light .my-card .my-markdown h1:nth-child(1)
//        text-shadow: 0 0 2px white, 0 0 5px white, 0 0 10px white, 0 0 10px white, 0 0 10px white, 0 0 10px white, 0 0 10px white, 0 0 10px white
</style>
