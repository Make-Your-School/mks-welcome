<template>
    <q-page>
        <section style="padding-left: 3em;">Convert `posts.json` to `reposData.json`</section>
        <section>
            <q-table
                flat
                bordered
                class="my-sticky-header-table"
                ref="tableRef"
                :rows="rows"
                :columns="columns"
                row-key="slug"
                :hide-pagination="true"
                :rows-per-page-options="[0]"
                @focusin="activateNavigation"
                @focusout="deactivateNavigation"
                @keydown="onKey"
            >
                <!-- <template v-slot:body-cell="props">
                    <q-td :props="props">
                        <q-input v-model="props.row[props.col.field]" dense borderless />
                    </q-td>
                </template> -->

                <template v-slot:body="props">
                    <q-tr :props="props">
                        <q-td key="repo_name" :props="props">
                            <q-input v-model="props.row.repo_name" dense borderless />
                        </q-td>
                        <q-td key="title" :props="props">
                            <q-input v-model="props.row.frontmatter.title" dense borderless />
                            <!-- {{ props.row.frontmatter.title }} -->
                        </q-td>
                        <q-td key="manufacture" :props="props">
                            <q-input v-model="props.row.manufacture" dense borderless />
                        </q-td>
                        <q-td key="manufacture_url" :props="props">
                            <q-input v-model="props.row.manufacture_url" dense borderless />
                        </q-td>
                        <q-td key="product_url" :props="props">
                            <q-input v-model="props.row.product_url" dense borderless />
                        </q-td>
                        <q-td key="coverImage" :props="props">
                            <q-input v-model="props.row.coverImage" dense borderless />
                        </q-td>
                        <q-td key="material_number" :props="props">
                            <q-input v-model="props.row.meta.material_number" dense borderless />
                        </q-td>
                        <q-td key="material_type" :props="props">
                            <q-input v-model="props.row.meta.material_type" dense borderless />
                        </q-td>
                        <q-td key="material_short_description" :props="props">
                            <q-input
                                v-model="props.row.meta.material_short_description"
                                dense
                                borderless
                            />
                        </q-td>
                        <q-td
                            key="content_description"
                            :props="props"
                            style="max-width: 3rem; overflow: hidden"
                        >
                            <q-input
                                type="textarea"
                                v-model="props.row.content_description"
                                dense
                                autofocus
                            />
                        </q-td>
                        <q-td
                            key="example_code"
                            :props="props"
                            style="max-width: 3rem; overflow: hidden"
                        >
                            <q-input
                                type="textarea"
                                v-model="props.row.example_code"
                                dense
                                autofocus
                            />
                        </q-td>
                        <q-td
                            key="content_infolist"
                            :props="props"
                            style="max-width: 3rem; overflow: hidden"
                        >
                            <q-input
                                type="textarea"
                                v-model="props.row.content_infolist"
                                dense
                                autofocus
                            />
                        </q-td>
                        <!-- <q-td key="calories" :props="props">
                            {{ props.row.calories }}
                            <q-popup-edit
                                v-model="props.row.calories"
                                title="Update calories"
                                buttons
                                v-slot="scope"
                            >
                                <q-input type="number" v-model="scope.value" dense autofocus />
                            </q-popup-edit>
                        </q-td>
                        <q-td key="fat" :props="props">
                            <div class="text-pre-wrap">{{ props.row.fat }}</div>
                            <q-popup-edit v-model="props.row.fat" v-slot="scope">
                                <q-input type="textarea" v-model="scope.value" dense autofocus />
                            </q-popup-edit>
                        </q-td>
                        <q-td key="carbs" :props="props">
                            {{ props.row.carbs }}
                            <q-popup-edit
                                v-model="props.row.carbs"
                                title="Update carbs"
                                buttons
                                persistent
                                v-slot="scope"
                            >
                                <q-input
                                    type="number"
                                    v-model="scope.value"
                                    dense
                                    autofocus
                                    hint="Use buttons to close"
                                />
                            </q-popup-edit>
                        </q-td> -->
                        <!-- <q-td key="protein" :props="props">{{ props.row.protein }}</q-td>
                        <q-td key="sodium" :props="props">{{ props.row.sodium }}</q-td>
                        <q-td key="calcium" :props="props">{{ props.row.calcium }}</q-td>
                        <q-td key="iron" :props="props">{{ props.row.iron }}</q-td> -->
                    </q-tr>
                </template>

                <template v-slot:top-right>
                    <q-file label="Import posts.json" v-model="inputFile" />
                    <!-- @click="importData" -->
                    <q-btn
                        color="primary"
                        icon-right="archive"
                        label="save"
                        no-caps
                        @click="exportTable"
                    />
                </template>
            </q-table>
        </section>
    </q-page>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { exportFile, useQuasar } from 'quasar'

const $q = useQuasar()

const tableRef = ref(null)
const navigationActive = ref(false)

const inputFile = ref()
const inputJSON = ref([])

const columns = [
    {
        name: 'repo_name',
        label: 'repo_name',
        field: (row) => row.repo_name,
    },
    {
        name: 'title',
        label: 'frontmatter.title',
        field: (row) => row.frontmatter.title,
        style: 'background-color: rgb(20,0,20)',
    },
    {
        name: 'manufacture',
        label: 'manufacture',
        field: (row) => row.manufacture,
    },
    {
        name: 'manufacture_url',
        label: 'manufacture_url',
        field: (row) => row.manufacture_url,
        style: 'background-color: rgb(20,0,20)',
    },
    {
        name: 'product_url',
        label: 'product_url',
        field: (row) => row.product_url,
    },
    {
        name: 'coverImage',
        label: 'coverImage',
        field: 'coverImage',
        style: 'background-color: rgb(20,0,20)',
    },
    {
        name: 'material_number',
        label: 'meta.material_number',
        field: (row) => row.meta.material_number,
        style: 'width:2em;',
    },
    {
        name: 'material_type',
        label: 'meta.material_type',
        field: (row) => row.meta.material_type,
        style: 'background-color: rgb(20,0,20); width:2em;',
    },
    {
        name: 'material_short_description',
        label: 'meta.material_short_description',
        field: (row) => row.meta.material_short_description,
    },
    {
        name: 'content_description',
        label: 'content_description',
        field: 'content_description',
        style: 'background-color: rgb(20,0,20)',
    },
    { name: 'example_code', label: 'example_code', field: 'example_code' },
    {
        name: 'content_infolist',
        label: 'content_infolist',
        field: 'content_infolist',
        style: 'background-color: rgb(20,0,20)',
    },
]

watchEffect(async () => {
    //unwrap ref
    const fileList = inputFile.value
    // check if array (shouldn't be necessary)
    const file = Array.isArray(fileList) ? fileList[0] : fileList
    // console.log(file)
    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            // console.log(e.target.result)
            const content = e.target.result
            try {
                inputJSON.value = JSON.parse(content)
                // console.log('inputJSON', inputJSON.value)
                rows.value = inputJSON.value
            } catch (error) {
                console.log('Invalid JSON file:', error)
            }
        }
        // pass in extracted file
        reader.readAsText(file)
    }
})

function exportTable() {
    console.log('export table data as json')
    console.log('rows.value', rows.value)
    const jsonData = JSON.stringify(rows.value, undefined, 4)

    const status = exportFile('reposData.json', jsonData, 'application/json')

    if (status !== true) {
        $q.notify({
            message: 'Browser denied file download...',
            color: 'negative',
            icon: 'warning',
        })
    }
}

function activateNavigation() {
    navigationActive.value = true
}

function deactivateNavigation() {
    navigationActive.value = false
}

function onKey(evt) {
    if (
        navigationActive.value !== true ||
        [33, 34, 35, 36, 38, 40].indexOf(evt.keyCode) === -1 ||
        tableRef.value === null
    )
        return

    // evt.preventDefault()

    // const { computedRowsNumber, computedRows } = tableRef.value

    // if (computedRows.length === 0) return

    // const currentIndex =
    //     selected.value.length > 0 ? computedRows.indexOf(toRaw(selected.value[0])) : -1
    // const currentPage = pagination.value.page
    // const rowsPerPage =
    //     pagination.value.rowsPerPage === 0 ? computedRowsNumber : pagination.value.rowsPerPage
    // const lastIndex = computedRows.length - 1
    // const lastPage = Math.ceil(computedRowsNumber / rowsPerPage)

    // let index = currentIndex
    // let page = currentPage

    // switch (evt.keyCode) {
    //     case 36: // Home
    //         page = 1
    //         index = 0
    //         break
    //     case 35: // End
    //         page = lastPage
    //         index = rowsPerPage - 1
    //         break
    //     case 33: // PageUp
    //         page = currentPage <= 1 ? lastPage : currentPage - 1
    //         if (index < 0) {
    //             index = 0
    //         }
    //         break
    //     case 34: // PageDown
    //         page = currentPage >= lastPage ? 1 : currentPage + 1
    //         if (index < 0) {
    //             index = rowsPerPage - 1
    //         }
    //         break
    //     case 38: // ArrowUp
    //         if (currentIndex <= 0) {
    //             page = currentPage <= 1 ? lastPage : currentPage - 1
    //             index = rowsPerPage - 1
    //         } else {
    //             index = currentIndex - 1
    //         }
    //         break
    //     case 40: // ArrowDown
    //         if (currentIndex >= lastIndex) {
    //             page = currentPage >= lastPage ? 1 : currentPage + 1
    //             index = 0
    //         } else {
    //             index = currentIndex + 1
    //         }
    //         break
    // }

    // computedRows[index].focus()
}

const rows = ref([
    {
        repo_name:"mks-arduino",
        content_description:
            " \n\nDer Arduino UNO ist ein Mikrocontroller, der es ermöglicht, prinzipiell jegliche Art von technischen Vorgängen automatisiert miteinander zu koordinieren. Dafür besitzt der Mikrocontroller viele \\[simple\\_tooltip content='Die Mikrocontroller besitzen kleine metallische Kontakte, an die Komponenten, Shields oder andere Platinen angeschlossen werden können. Diese Kontakte werden Pins genannt und können oft als sogenannte GPIO’s (Allzweck Ein- und Ausgabe) eingesetzt werden. Dies bedeutet, dass diese Pins direkt über die Programmierung des Mikrocontrollers angesprochen werden können und hierbei sogar bestimmt werden kann, ob dieser Pin als Eingang (beispielsweise zum Auslesen eines Sensors) oder als Ausgang (beispielsweise zur Steuerung eines Motors) genutzt werden kann. Praktisches Beispiel: Wird am Arduino eine LED an Pin 1 angeschlossen, kann im Programm direkt der Pin 1 als „An” oder „Aus” definiert werden und damit die LED an- oder ausgeschaltet werden. '\\]Ein- und Ausgänge\\[/simple\\_tooltip\\] (Inputs und Outputs). Diese sind elektrische Anschlüsse, an die verschiedene technische Komponenten, wie Sensoren oder auch Aktoren (Motoren, Leuchten etc.), angeschlossen werden können. Wird der Mikrocontroller entsprechend programmiert, können diese Komponenten logisch miteinander verknüpft werden. Dadurch können die Komponenten gemeinsam eine technische Aufgabe erfüllen.\n\nDer Arduino wird über die Arduino IDE (Entwicklungsumgebung) frei nach eigenen Wünschen und Anforderungen programmiert. Dazu wird er an einem PC mit der entsprechenden vorinstallierten Software angeschlossen und das Programm „Arduino IDE” gestartet. Das final erstellte Programm wird schließlich auf den Mikrocontroller geladen.\n\nEin simples Projektbeispiel ist eine Leuchte, die immer dann aufleuchtet, wenn die Umgebung zu dunkel wird. Hierfür wird ein Lichtsensor benötigt, um das Umgebungslicht zu messen. Der Arduino liest den Sensor aus und steuert schließlich die Leuchte, abhängig von der gemessenen Helligkeit.\n\nDurch die große Beliebtheit des Arduino in der wachsenden Community lässt sich fast jedes erdenkliche Projekt mithilfe von im Internet veröffentlichten Erfahrungsberichten umsetzen. Es reicht oftmals nur die Komponenten, die man verbinden möchte, in eine Suchmaschine einzugeben, um entsprechende (Video-)Tutorials zu finden.\n\nDer Arduino UNO ist ein Mikrocontroller, der ursprünglich speziell für Bildungszwecke entwickelt wurde. Durch die einfache Programmierung und den niedrigen Preis hat er allerdings sehr schnell auch in anderen Branchen an Beliebtheit gewonnen. Sowohl Wissenschaftler\\*innen als auch Studierende, Hobby-Bastler\\*innen, DIY-Begeisterte und viele mehr setzen den Mikrocontroller ein, um unterschiedlichste automatisierte Projekte umzusetzen.\n\nhttps://www.youtube.com/watch?v=GQw20v8Qls0\n\n \n\nhttps://www.youtube.com/watch?v=EEa-0fhb2WA\n\n \n\n## Wichtige Links für die ersten Schritte:\n\n- [Arduino Webseite](https://www.arduino.cc/)\n- [Arduino IDE](https://www.arduino.cc/en/Main/Software)\n- [Technische Daten zum Arduino UNO](https://store.arduino.cc/arduino-uno-rev3)\n- [Programmiersprache](https://www.arduino.cc/reference/de/)\n- [Instructables Arduino Class (englisch)](https://www.instructables.com/class/Arduino-Class/)\n\n## Projektbeispiele:\n\n- [Arduino Project HUB (englisch)](https://create.arduino.cc/projecthub)\n- [Hackster (englisch)](https://www.hackster.io/arduino/projects)\n- [Arduino Tutorial (deutsch)](https://www.arduino-tutorial.de/arduino-projekte/)\n\n## Weiterführende Hintergrundinformationen:\n\n- [Arduino - Wikipedia Artikel](https://de.wikipedia.org/wiki/Arduino_\\(Plattform\\))\n- [Mikrocontroller - Wikipedia Artikel](https://de.wikipedia.org/wiki/Mikrocontroller)\n- [DIY - Wikipedia Artikel](https://de.wikipedia.org/wiki/Do_it_yourself)\n- [GPIO - Wikipedia Artikel](https://de.wikipedia.org/wiki/Allzweckeingabe/-ausgabe)\n- [I2C - Wikipedia Artikel](https://de.wikipedia.org/wiki/I%C2%B2C)\n- [SPI - Wikipedia Artikel](https://de.wikipedia.org/wiki/Serial_Peripheral_Interface)\n- [UART - Wikipedia Artikel](https://de.wikipedia.org/wiki/Universal_Asynchronous_Receiver_Transmitter)",
        content_infolist: '\n',
        slug: 'arduino',
        meta: {
            material_number: '1',
            material_type: '10',
            material_short_description: 'Arduino UNO R3',
        },
        coverImageId: '859',
        coverImage: '1_arduino.jpg',
        frontmatter: {
            title: 'Arduino UNO',
            date: '2018-08-16T19:55:36.000Z',
            categories: [],
            tags: [],
            coverImage: '1_arduino.jpg',
            material_number: '1',
            material_type: '10',
            material_short_descr: 'Arduino UNO R3',
        },
    },
])
</script>


<style lang="sass">
q-page
    margin: 0
    padding: 0
    min-height: 0
    height: 100%

.my-sticky-header-table
    /* height or max-height is important */
    // height: 1200px
    height: 97vh
    margin: 0
    padding: 0

    .q-table__top,
    .q-table__bottom,
    thead tr:first-child th
        /* bg color is important for th; just specify one */
        background-color: var(--q-dark)

    thead tr th
        position: sticky
        z-index: 1
    thead tr:first-child th
        top: 0

    /* this is when the loading indicator appears */
    &.q-table--loading thead tr:last-child th
        /* height of all previous header rows */
        top: 48px

    /* prevent scrolling behind sticky top row on focus */
    tbody
        /* height of all previous header rows */
        scroll-margin-top: 48px
</style>
