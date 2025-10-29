<template>
    <!-- <q-page class="flex flex-center content-stretch"> -->
    <!-- class="col" style="min-height: 0" -->
    <q-page class="">
        <q-table
            flat
            bordered
            class="my-sticky-header-table"
            ref="tableRef"
            :rows="rows"
            :columns="columns"
            row-key="name"
            :hide-pagination="true"
            :rows-per-page-options="[0]"
            @focusin="activateNavigation"
            @focusout="deactivateNavigation"
        >
            <!-- <template v-slot:body-cell="props">
                <q-td :props="props">
                    <q-input v-model="props.row[props.col.field]" dense borderless />
                </q-td>
            </template> -->
            <!-- @keydown="(event)=>onKey(event, props, 'title')" -->
            <template v-slot:body="props">
                <q-tr :props="props">
                    <q-td key="repo_name" :props="props">
                        <a :href="`${props.row.submodule.urlWeb}`">
                            {{ props.row.name }}
                        </a>
                    </q-td>
                    <q-td key="title" :props="props">
                        <q-input v-model="props.row.meta.title" dense borderless />
                    </q-td>
                    <q-td key="status" :props="props">
                        <q-select v-model="props.row.meta.status" :options="options_status" dense borderless />
                    </q-td>
                    <q-td key="difficulty" :props="props">
                        <q-select v-model="props.row.meta.difficulty" :options="options_difficulty" dense borderless />
                    </q-td>
                    <q-td key="manufacture" :props="props">
                        <q-input v-model="props.row.meta.manufacture" dense borderless />
                    </q-td>
                    <q-td key="manufacture_url" :props="props">
                        <q-input v-model="props.row.meta.manufacture_url" dense borderless />
                    </q-td>
                    <q-td key="product_url" :props="props">
                        <q-input v-model="props.row.meta.product_url" dense borderless />
                    </q-td>
                    <q-td key="coverImage" :props="props">
                        <q-input v-model="props.row.meta.coverImage" dense borderless />
                    </q-td>
                    <q-td key="material_number" :props="props">
                        <q-input v-model="props.row.meta.material_number" dense borderless />
                    </q-td>
                    <q-td key="material_type" :props="props">
                        <q-input v-model="props.row.meta.material_type" dense borderless />
                    </q-td>
                    <q-td key="material_short_descr" :props="props">
                        <q-input
                            v-model="props.row.meta.material_short_descr"
                            dense
                            borderless
                        />
                    </q-td>
                </q-tr>
            </template>

            <template v-slot:top-right>
                <q-btn
                    color="primary"
                    icon-right="archive"
                    label="save"
                    no-caps
                    @click="exportTable"
                />
            </template>
        </q-table>
    </q-page>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
// import { ref, computed } from 'vue'
import { exportFile, useQuasar } from 'quasar'
// import { useQuasar } from "quasar";

import { useMDContentStore } from 'src/stores/mdContent'
const mdContent = useMDContentStore()
// console.log('mdContent', mdContent)
const mks_parts = ref(mdContent.mks.parts)
console.log('mks_parts', mks_parts)

// $q.notify('Message')

const $q = useQuasar()

const tableRef = ref(null)
const navigationActive = ref(false)
const options_status = ref([
    'active',
    'deprecated',
    'EOL',
])
const options_difficulty = ref([
    'recommend',
    'advanced',
    'expert',
    'fairy',
])

const columns = [
    {
        name: 'repo_name',
        key: 'repo_name',
        label: 'repo_name',
        field: (row) => row.meta.repo_name,
    },
    {
        name: 'title',
        key: 'title',
        label: 'title',
        field: (row) => row.meta.title,
        style: 'background-color: rgb(20,0,20)',
    },
    {
        name: 'status',
        key: 'status',
        label: 'status',
        field: (row) => row.meta.status,
    },
    {
        name: 'difficulty',
        key: 'difficulty',
        label: 'difficulty',
        field: (row) => row.meta.difficulty,
        style: 'background-color: rgb(20,0,20)',
    },
    {
        name: 'manufacture',
        key: 'manufacture',
        label: 'manufacture',
        field: (row) => row.meta.manufacture,
    },
    {
        name: 'manufacture_url',
        key: 'manufacture_url',
        label: 'manufacture_url',
        field: (row) => row.meta.manufacture_url,
        style: 'background-color: rgb(20,0,20)',
    },
    {
        name: 'product_url',
        key: 'product_url',
        label: 'product_url',
        field: (row) => row.meta.product_url,
    },
    {
        name: 'coverImage',
        key: 'coverImage',
        label: 'coverImage',
        field: 'coverImage',
        style: 'background-color: rgb(20,0,20)',
    },
    {
        name: 'material_number',
        key: 'material_number',
        label: 'meta.material_number',
        field: (row) => row.meta.material_number,
        style: 'width:2em;',
    },
    {
        name: 'material_type',
        key: 'material_type',
        label: 'meta.material_type',
        field: (row) => row.meta.material_type,
        style: 'background-color: rgb(20,0,20); width:2em;',
    },
    {
        name: 'material_short_descr',
        key: 'material_short_descr',
        label: 'meta.material_short_descr',
        field: (row) => row.meta.material_short_descr,
    },
]
const rows = ref([{}])

watchEffect(async () => {
    rows.value = Object.values(mks_parts.value)
    console.log('rows.value[0]', rows.value[0])
})

function exportTable() {
    console.log('export table data as json')
    console.log('mks_parts.value', mks_parts.value)
    const jsonData = JSON.stringify(mks_parts.value, undefined, 4)

    const status = exportFile('meta.json', jsonData, 'application/json')

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

// function onKey(event, props, colName) {
//     // console.log('event', event)
//     console.log('props', props)
//     if (
//         navigationActive.value !== true ||
//         [33, 34, 35, 36, 38, 40].indexOf(event.keyCode) === -1 ||
//         tableRef.value === null
//     ) {
//         return
//     }

//     event.preventDefault()

//     // const { computedRowsNumber, computedRows } = tableRef.value
//     const { computedRows } = tableRef.value
//     if (computedRows.length === 0) return

//     console.log('tableRef.value', tableRef.value)
//     console.log('rowIndex', props.rowIndex)
//     console.log('colName', colName)
//     console.log('col', props.colsMap[colName])

//     // const currentIndex =
//     //     selected.value.length > 0 ? computedRows.indexOf(toRaw(selected.value[0])) : -1
//     // const currentPage = pagination.value.page
//     // const rowsPerPage =
//     //     pagination.value.rowsPerPage === 0 ? computedRowsNumber : pagination.value.rowsPerPage
//     // const lastIndex = computedRows.length - 1
//     // const lastPage = Math.ceil(computedRowsNumber / rowsPerPage)

//     // let index = currentIndex
//     // let page = currentPage

//     // switch (evt.keyCode) {
//     //     case 36: // Home
//     //         page = 1
//     //         index = 0
//     //         break
//     //     case 35: // End
//     //         page = lastPage
//     //         index = rowsPerPage - 1
//     //         break
//     //     case 33: // PageUp
//     //         page = currentPage <= 1 ? lastPage : currentPage - 1
//     //         if (index < 0) {
//     //             index = 0
//     //         }
//     //         break
//     //     case 34: // PageDown
//     //         page = currentPage >= lastPage ? 1 : currentPage + 1
//     //         if (index < 0) {
//     //             index = rowsPerPage - 1
//     //         }
//     //         break
//     //     case 38: // ArrowUp
//     //         if (currentIndex <= 0) {
//     //             page = currentPage <= 1 ? lastPage : currentPage - 1
//     //             index = rowsPerPage - 1
//     //         } else {
//     //             index = currentIndex - 1
//     //         }
//     //         break
//     //     case 40: // ArrowDown
//     //         if (currentIndex >= lastIndex) {
//     //             page = currentPage >= lastPage ? 1 : currentPage + 1
//     //             index = 0
//     //         } else {
//     //             index = currentIndex + 1
//     //         }
//     //         break
//     // }

//     // computedRows[index].focus()
// }
</script>

<style>
td a {
	color: white;
}</style>
