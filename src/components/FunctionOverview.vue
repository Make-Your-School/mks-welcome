<template>
    <q-card class="fn-overview">
        <q-card-section>
            <my-markdown :source="fn_item.readme.excerpt" :file-path="fn_item.path_base" />
            <h2>Bauteile</h2>
            <ul>
                <li v-for="(part_item, part_name) in fn_item.bauteile" :key="part_name">
                    {{ part_name }} {{ part_item.readme.data?.id }}
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
        </q-card-section>
    </q-card>
</template>

<script setup>
// import { computed, h, shallowRef, ref, watch, watchEffect } from "vue";
// import { useQuasar } from "quasar";
import MyMarkdown from "src/components/MyMarkdown.vue";

const props = defineProps({
    fn_item: Object,
});
</script>

<style lang="sass" scoped>
.fn-overview
  width: 100%
  height: 100%
  overflow: scroll
</style>
