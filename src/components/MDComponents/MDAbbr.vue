<template>
    <span class="MDAbbr">
        <slot></slot><q-tooltip
            anchor="top middle"
            self="bottom middle"
            class="MDAbbrDescription bg-amber text-black shadow-4"
            max-width="40em"
        ><slot name="abbrDescription"></slot></q-tooltip>
    </span>
</template>

<script setup>
{/* <div>
                <!-- <mdrender></mdrender> -->
                <!-- <component :is="{template:abbrDescription}"></component> -->
                <div v-html="abbrDescription"></div>
            </div
        > */}

// import { h } from "vue";
// import MyMarkdown from "components/MDComponents/MyMarkdown.vue";
// const props = defineProps({
// defineProps({
//     abbrDescription: String,
// });

// const mdrender = () => {
//     return h('div', props.abbrDescription);
// };

// teh component template version is not possible -
// it is missing
// [Vue warn]: Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".
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
