<template>
    <q-page class="flex column" style="align-items: center;">
        <section style="overflow: scroll;">
            Markdown Test Page
            <MDContent></MDContent>
        </section>
    </q-page>
</template>

<script setup>

import * as md_obj from "../../../public/demo/readme.md"
const MDContent = md_obj.default
console.log('md_obj', md_obj)
</script>
