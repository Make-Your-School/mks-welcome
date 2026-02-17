<template>
    <q-card class="md-example">
        <q-expansion-item
            expand-separator
            switch-toggle-side
            :label="example_name"
            :modelValue="expanded"
        >
            <q-card>
                <!-- <q-card-section>
                </q-card-section> -->
                <!-- <pre>
                    {{ JSON.stringify(content_obj, null, 4) }}
                </pre> -->

                <q-toolbar class="">
                    <!-- notice shrink property since we are placing it as child of QToolbar -->
                    <q-tabs v-model="tab" dense align="left" narrow-indicator shrink stretch>
                        <q-tab
                            v-for="(file_obj, file_name) in files"
                            :key="file_name"
                            :name="file_name"
                            :label="file_name"
                        />
                    </q-tabs>
                    <q-space />
                    <q-btn
                        flat
                        round
                        icon="archive"
                        aria-label="download Beispiel"
                        @click="handleDownload"
                    />
                </q-toolbar>

                <q-separator />

                <q-tab-panels v-model="tab" animated transition-prev="fade" transition-next="fade">
                    <q-tab-panel
                        v-for="(file_obj, file_name) in files"
                        :key="file_name"
                        :name="file_name"
                        :label="file_name"
                        class="q-pa-none"
                    >
                        <!-- {{ file_obj }}
                <pre>
                    {{ JSON.stringify(file_obj, null, 4) }}
                </pre> -->
                        <MDCode
                            v-if="file_obj.content != 'image' && file_obj.file_ext != 'md'"
                            :content="file_obj.content"
                            :codeLanguage="file_obj.file_ext.replace('.', '')"
                            :codeWebPath="file_obj.file_url"
                        />
                        <MyMarkdown
                            v-if="file_obj.file_ext == 'md'"
                            :source="file_obj.content"
                            :filePath="content_obj.example_path_app"
                        />
                        <img
                            v-else-if="file_obj.content == 'image'"
                            :src="file_obj.file_path_web"
                        />
                        <!-- <div v-else-if="file_obj.file_ext == 'md'" />  todo: // data = md2html(data)-->
                        <!-- :codeFilePath="file_obj.file_path" -->
                    </q-tab-panel>
                </q-tab-panels>
            </q-card>
        </q-expansion-item>
    </q-card>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { exportFile } from 'quasar'
import { downloadZip } from 'client-zip'
import MyMarkdown from './MyMarkdown.vue'

// import md2html from './markdown-rendering.js'

const props = defineProps({
    example_name: String,
    content_obj: Object,
    expanded: Boolean,
})

const tab = ref('')
const files = ref([])

watchEffect(() => {
    tab.value = Object.keys(files.value)[0]
})

watchEffect(() => {
    const checkKeyReadme = (key) => key.includes('readme')
    const checkKeyCode = (key) => key.includes('.ino') || key.includes('main')

    const entries = Object.entries(props.content_obj.files)
    // console.log('entries', entries)

    const readmeEntries = entries.filter(([key]) => checkKeyReadme(key))
    const notReadme = entries.filter(([key]) => !checkKeyReadme(key))
    // console.log('readmeEntries', readmeEntries)
    // console.log('notReadme', notReadme)

    const codeEntries = notReadme.filter(([key]) => checkKeyCode(key))
    codeEntries.sort(([a], [b]) => a.localeCompare(b))
    // console.log('codeEntries', codeEntries)

    const otherEntries = notReadme.filter(([key]) => !checkKeyCode(key))
    otherEntries.sort(([a], [b]) => a.localeCompare(b))
    // console.log('otherEntries', otherEntries)

    const sortedEntries = [...readmeEntries, ...codeEntries, ...otherEntries]
    // console.log('sortedEntries', sortedEntries)
    files.value = Object.fromEntries(sortedEntries)
})

async function handleDownload() {
    // build files:
    const zip_files = []
    for (const [file_name, file_obj] of Object.entries(files.value)) {
        console.log('file_name', file_name)
        console.log('file_obj', file_obj)
        const file = {
            name: `${props.example_name}/${file_name}`,
            lastModified: new Date(),
            input: file_obj.content,
        }
        zip_files.push(file)
    }
    // get the ZIP stream in a Blob
    const blob = await downloadZip(zip_files).blob()
    // console.log(blob);
    const status = exportFile(`${props.example_name}.zip`, blob)
    console.log('exportFile status:', status)
}
</script>

<style lang="sass" scoped></style>
