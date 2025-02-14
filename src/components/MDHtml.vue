<template>
    <div v-if="item.type == 'html'" v-html="item.content" class="my-markdown"></div>
</template>

<script setup>
const props = defineProps({
    item: Object,
});
</script>

<style lang="sass" scoped>

</style>
