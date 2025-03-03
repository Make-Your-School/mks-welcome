<template>
    <q-page class="flex column" style="align-items: center">
        <section style="overflow: scroll">
            <h2>tooltip test</h2>
            <div class="q-gutter-sm">
                <q-btn color="primary" @click="showing = true" label="Show" />
                <q-btn color="primary" @click="showing = false" label="Hide" />
            </div>
            <span>
                PING<q-tooltip
                    anchor="center middle"
                    self="center middle"
                    class="MDAbbrContent bg-amber text-black shadow-4"
                    max-width="30em"
                    v-model="showing"
                >
                    <div>
                        <my-markdown :source="mdcontent" file-path="" />
                    </div>
                </q-tooltip>
            </span>
        </section>
    </q-page>
</template>

<script setup>
import { ref } from "vue";
import MyMarkdown from "src/components/MDComponents/MyMarkdown.vue";

const mdcontent = ref(`
# Hello
Ping Pong Text..
und ein bisshcen mehr text.. noch damit wir die llänge sprengen brauchen wir sehr sehr viele wörter hin einer Zeile... tja - dann schreiben wir ncoh mehr

and some more lines...
`);

const showing = ref(false);
</script>

<style lang="sass">
.q-tooltip
    .my-markdown-wrapper
        margin: 0
        padding: 0
    .MDAbbrContent
        h1
            font-size: 1.5rem
            line-height: 110%
            margin-top: 0.5rem
            margin-bottom: 0.5rem
        p
            margin-bottom: 0.5rem
</style>
