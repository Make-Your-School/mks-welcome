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
                            v-for="(file_obj, file_name) in content_obj.files"
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
                        v-for="(file_obj, file_name) in content_obj.files"
                        :key="file_name"
                        :name="file_name"
                        :label="file_name"
                        class="q-pa-none"
                    >
                        <!-- {{ file_obj }}
                <pre>
                    {{ JSON.stringify(file_obj, null, 4) }}
                </pre> -->
                        <!-- :content="`// ${file_obj.file_name} \n// TODO: activate real content..`" -->
                        <MDCode
                            :content="file_obj.content"
                            :codeLanguage="file_obj.file_ext.replace('.', '')"
                            :codeWebPath="file_obj.file_url"
                        />
                        <!-- :codeFilePath="file_obj.file_path" -->
                    </q-tab-panel>
                </q-tab-panels>
            </q-card>
        </q-expansion-item>
    </q-card>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps({
    example_name: String,
    content_obj: Object,
    expanded: Boolean,
})

const tab = ref('')

watchEffect(() => {
    tab.value = Object.keys(props.content_obj.files)[0]
})

function handleDownload(event) {
    console.log('TODO: implement', event)
    alert('not implemented yet.')
}
</script>

<style lang="sass" scoped></style>
