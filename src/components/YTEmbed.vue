<template>
    <div class="video-embed">
        <!-- <p>{{ videoid }}</p> -->
        <iframe
            v-if="consent.videoService[service] || consent.videoLoaded[videoid]"
            type="text/html"
            width="560"
            height="315"
            title="YouTube video player"
            :src="src"
            frameborder="0"
            allow="web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
        ></iframe>
        <div v-else class="question">
            <p>
                Diesen {{ service }} content musst du erst erlauben. <br />
                Durch das Erlauben gelten die Bedienungen des {{ service }}. <br />
                Dadurch erlangt dieser Service zugriff auf dein Browser-Verhalten / Nutzer-Daten.
            </p>
            <q-checkbox
                v-model="allowServiceAll"
                :label="`${service} für diese Session erlauben?`"
                checked-icon="task_alt"
                unchecked-icon="highlight_off"
            />
            <br />
            <q-btn :label="`Lade ${service} content`" @click="handleAllow" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useConsentStore } from 'stores/consent'
// import { storeToRefs } from 'pinia';

const consent = useConsentStore()

const allowServiceAll = ref(false)

const props = defineProps({
    service: String,
    videoid: String,
    src: String,
    options: String,
})
// console.log('---')
// console.log('props.options', props.options)

// function handleAllow(event) {
function handleAllow() {
    // console.log('props.service', props.videoid)
    // console.log('props.src', props.src)
    // console.log('props.videoid', props.videoid)
    consent.videoLoaded[props.videoid] = true
    console.log(`allow '${props.service}' globally? `, allowServiceAll.value)
    consent.videoService[props.service] = allowServiceAll.value
}
</script>

<style lang="sass" scoped>
.video-embed
    display: block
    width: 560px
    height: 315px
    background: var(--card-fill)
.question
    display: block
    width: 100%
    height: 100%
    padding: 2em
    font-size: 0.7em
    display: flex
    flex-direction: column
    flex-wrap: nowrap
    justify-content: center
    align-content: center
    align-items: center
</style>
