<template>
    <div>
        <iframe
            v-if="allowService"
            type="text/html"
            width="560"
            height="315"
            :src="src"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
        ></iframe>
        <div v-else class="question">
            <p>
                Diesen {{ service }} content musst du erst erlauben. Durch das Erlauben gelten die
                Bedinungen von {{ service }}. hiermit erlangt dieser service zugriff auf dein
                Browser-Verhalten.
            </p>
            <q-btn :label="`Lade ${service} content`" @click="allowService = true" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const allowService = ref(false)

// const props = defineProps({
defineProps({
    service: String,
    videoId: String,
    src: String,
    options: String,
})
// console.log('---')
// console.log('props.service', props.videoId)
// console.log('props.videoId', props.videoId)
// console.log('props.src', props.src)
// console.log('props.options', props.options)
</script>

<style lang="sass" scoped>
.question
    display: block
    width: 560px
    height: 315px
    padding: 2em
    background: var(--card-fill)
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: center
    align-content: center
    align-items: center
</style>
