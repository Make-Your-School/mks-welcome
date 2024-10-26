<template>
    <q-page class="flex column" style="align-items: center">
        <section>
            <h4>{{ appinfo.productName }}</h4>
        </section>
    </q-page>
</template>

<script setup>
const appinfo = process.env.appinfo;
</script>
