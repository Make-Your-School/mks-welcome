<template>
    <div v-if="tag.parts">
        <h2>Bauteile</h2>
        <ul>
            <li v-for="(part_item, part_name) in tag.parts" :key="part_name">
                <router-link :to="`/part/${part_name}`" class="clickable">
                    {{ part_name }} {{ part_item.meta?.id }}
                </router-link>
            </li>
        </ul>
        <!-- <q-card class="q-ma-md q-pa-md card-bauteil">
            <my-markdown
            v-if="part_item.readme.excerpt"
            :source="part_item.readme.excerpt"
            :file-path="part_item.path_base"
            />
            <my-markdown
            v-else
            :source="part_item.readme.content"
            :file-path="part_item.path_base"
            />
        </q-card> -->
    </div>
</template>

<script setup>
// import { computed, h, shallowRef, ref, watch, watchEffect } from "vue";
// import { useQuasar } from "quasar";

// const props = defineProps({
defineProps({
    tag: Object,
});
</script>

<style lang="sass" scoped>
// .clickable
//     cursor: pointer
//     text-decoration: none
</style>
