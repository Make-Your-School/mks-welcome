<template>
    <q-item v-for="item in itemsFiltered" :key="item.title" :to="item.path" exact>
        <q-item-section avatar>
            <q-icon :name="item.icon" />
        </q-item-section>

        <q-item-section>
            <q-item-label>{{ item.title }}</q-item-label>
            <q-item-label caption>{{ item.caption }}</q-item-label>
        </q-item-section>
    </q-item>
</template>

<script setup>
import { computed } from 'vue'

import { childrenCommon } from '../router/routes'

const props = defineProps({
    showInvisible: { type: Boolean, required: false, default: false },
})

const itemsFiltered = computed(() => {
    console.log('childrenCommon', childrenCommon)
    if (props.showInvisible) {
        return childrenCommon
    } else {
        return childrenCommon.filter((item) => {
            if (item.visible == undefined) {
                return true
            } else if (item.visible) {
                return item.visible
            }
        })
    }
})
</script>
