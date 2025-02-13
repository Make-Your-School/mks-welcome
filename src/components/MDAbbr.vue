<template>
    <span class="MDAbbr">
        {{ item.content }}
        <q-tooltip
            anchor="top middle"
            self="bottom middle"
            class="bg-amber text-black shadow-4"
        >
                {{ item.abbr }}
        </q-tooltip>
    </span>
</template>

<script setup>
const props = defineProps({
    item: Object,
});

</script>

<style lang="sass" scoped>

</style>
