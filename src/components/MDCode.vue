<template>
    <div class="MDCode">
        <span>{{ item.include_path }}</span>
        <VCodeBlock
            :code="item.content"
            highlightjs
            :label="item.codeFilePath"
            :lang="item.codeLanguage"
            :theme="theme"
        ></VCodeBlock>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useQuasar } from "quasar";
import VCodeBlock from "@wdns/vue-code-block";

const props = defineProps({
    item: Object,
});

const theme = ref("base16/solarized-dark");
const $q = useQuasar();
watch(
    () => $q.dark.isActive,
    (val) => {
        console.log(val ? "On dark mode" : "On light mode");
        if (val) {
            // dark
            theme.value = "base16/solarized-dark";
        } else {
            // light
            theme.value = "base16/solarized-light";
        }
    }
);

</script>

<style lang="sass" scoped>

</style>
