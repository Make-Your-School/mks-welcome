<template>
    <q-page class="flex column" style="align-items: center">
        <section>
            <h1>{{ appinfo.productName }}</h1>
        </section>
        <section>
            <h2>Deine App-Einstellungen:</h2>
            <div>
                <h3>Bauteil Übersicht</h3>
                <q-select
                    rounded
                    outlined
                    v-model="settings.sorting"
                    :options="['recommend', 'material_number']"
                    label="Sorting"
                />
                <q-toggle
                    v-model="settings.hide_EOL"
                    icon="alarm"
                    label="Verberge Bauteile die Nicht mehr verfügbar sind (EOL: End Of Live)"
                />
                <br />
                <q-toggle
                    v-model="settings.search_in_content"
                    icon="alarm"
                    label="suche auch in Text-Inhalt der Bauteile (anstatt nur in den Meta-Informationen)"
                />
                <br />
            </div>
            <!-- <div>
                ToDo
                <ul>
                    <li>font-size</li>
                    <li>colors</li>
                    <li>?</li>
                    <li>...</li>
                </ul>
            </div> -->
        </section>
    </q-page>
</template>

<script setup>
// import { ref, computed } from "vue";
// import { useQuasar } from "quasar";
import { useMDContentStore } from 'src/stores/mdContent'

const mdContent = useMDContentStore()
console.log('mdContent', mdContent)
const settings = mdContent.settings

const appinfo = process.env.appinfo
</script>
