<template>
    <q-item
        v-for="item in childrenCommon"
        :key="item.title"
        :to="item.path"
        exact
    >
        <q-item-section avatar>
            <q-icon :name="item.icon" />
        </q-item-section>

        <q-item-section>
            <q-item-label>{{ item.title }}</q-item-label>
            <q-item-label caption>{{ item.caption }}</q-item-label>
        </q-item-section>
    </q-item>
</template>

<script>
import { childrenCommon } from '../router/routes'

export default {
    name: 'EssentialNavigation',
    data () {
        return {
            childrenCommon: childrenCommon
        }
    }
}
</script>
