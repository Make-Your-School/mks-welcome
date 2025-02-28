<template>
    <span class="MDAbbr">
        <slot></slot><q-tooltip
            anchor="top middle"
            self="bottom middle"
            class="MDAbbrDescription bg-amber text-black shadow-4"
            max-width="30em"
            ><div>
                <my-markdown
                    :source="abbrDescription"
                /></div
        ></q-tooltip>
    </span>
</template>

<script setup>
import MyMarkdown from "components/MDComponents/MyMarkdown.vue";
defineProps({
    abbrDescription: String,
});
</script>

<style lang="sass" scoped>
.MDAbbr
    text-decoration: underline dotted
</style>

<!-- we need unscoped css here! -->
<style lang="sass">
.q-tooltip.MDAbbrDescription
    margin: 0
    h1
        font-size: 1.5rem
        line-height: 110%
        margin-top: 0.5rem
        margin-bottom: 0.5rem
    p
        margin-bottom: 0.5rem
</style>
