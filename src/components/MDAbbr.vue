<template>
    <span class="MDAbbr">
        {{ item.content
        }}<q-tooltip
            anchor="top middle"
            self="bottom middle"
            class="MDAbbrContent bg-amber text-black shadow-4"
            max-width="30em"
        >
            <div>
                <my-markdown :source="item.abbr.content.content" :file-path="item.abbr.content.content" />
            </div>
        </q-tooltip>
    </span>
</template>

<script setup>
import MyMarkdown from "src/components/MyMarkdown.vue";
defineProps({
    item: Object,
});
</script>

<style lang="sass" scoped>
.MDAbbr
    text-decoration: underline dotted
</style>

<!-- we need unscoped css here! -->
<style lang="sass">
.q-tooltip.MDAbbrContent
    margin: 0
    h1
        font-size: 1.5rem
        line-height: 110%
        margin-top: 0.5rem
        margin-bottom: 0.5rem
    p
        margin-bottom: 0.5rem
</style>
