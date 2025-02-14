<template>
    <span class="MDAbbr">
        {{ item.content }}<q-tooltip
            anchor="top middle"
            self="bottom middle"
            class="bg-amber text-black shadow-4"
        >
                {{ item.abbr.content.content }}
        </q-tooltip>
    </span>
</template>

<script setup>
const props = defineProps({
    item: Object,
});

</script>

<style lang="sass" scoped>
.MDAbbr
    display: inline
    text-decoration: underline dotted
</style>
