<template>
    <q-card class="tag-overview">
        <q-card-section>
            <div v-html="mks_item.excerpt"></div>
            <!-- <component :is="mks_item.readme.excerpt" :file-path="mks_item.path_base" /> -->
            <div v-if="mks_item.parts">
                <h2>Bauteile</h2>
                <ul>
                    <li v-for="(part_item, part_name) in mks_item.parts" :key="part_name">
                        {{ part_name }} {{ part_item.meta?.id }}
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
        </q-card-section>
    </q-card>
</template>

<script setup>
// import { computed, h, shallowRef, ref, watch, watchEffect } from "vue";
// import { useQuasar } from "quasar";

// const props = defineProps({
defineProps({
    mks_item: Object,
});
</script>

<style lang="sass" scoped>
.tag-overview
  width: 100%
  height: 100%
  overflow: scroll
</style>
