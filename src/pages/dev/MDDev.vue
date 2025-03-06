<template>
    <q-page class="flex column" style="align-items: center">
        <section style="overflow: scroll">
            <h2>Markdown DEV</h2>
            <MDContent></MDContent>
        </section>
    </q-page>
</template>

<script setup>

import * as md_obj from "../../../public/mks/parts/mks-Endschalter/readme.md"
const MDContent = md_obj.default
console.log('md_obj', md_obj)
</script>
