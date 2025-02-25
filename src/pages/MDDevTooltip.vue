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
                        <div v-html="htmlContentTest"></div>
                    </div>
                </q-tooltip>
            </span>
        </section>
    </q-page>
</template>

<script setup>
import { ref } from "vue";
const htmlContentTest = ref(`
<h1>Some h1 Heading..</h1>
<p>
    Ping Pong Text.. <br>
    und ein bisshcen mehr text.. noch damit wir die llänge sprengen brauchen wir sehr sehr viele wörter hin einer Zeile... tja - dann schreiben wir ncoh mehr
</p>
<p>and some more lines...</p>
`);

const showing = ref(false);
</script>

<style lang="sass">
.q-tooltip.MDAbbrContent
    h1
        font-size: 1.5rem
        line-height: 110%
        margin-top: 0.5rem
        margin-bottom: 0.5rem
    p
        margin-bottom: 0.5rem
</style>
