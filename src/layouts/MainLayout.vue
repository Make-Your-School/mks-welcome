<template>
    <q-layout view="lHh Lpr lFf">
        <!-- <q-header elevated>
            <q-toolbar>
                <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

                <q-toolbar-title> Quasar App </q-toolbar-title>

                <div>Quasar v{{ $q.version }}</div>
            </q-toolbar>
        </q-header> -->

        <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
            class="fixed-top-left q-ma-sm"
            style="z-index: 10000"
        >
        </q-btn>
        <q-btn
        class="fixed-top-right q-ma-sm"
                            flat
                            round
                            @click="$q.dark.toggle()"
                            :icon="$q.dark.isActive ? 'brightness_2' : 'brightness_5'"
                        />

        <q-drawer v-model="leftDrawerOpen" bordered elevated persistent>
            <q-list class="q-pt-xl q-pb-xl">
                <EssentialNavigation />

                <q-item>
                    <q-item-section>
                        <q-btn
                            flat
                            round
                            @click="$q.dark.toggle()"
                            :icon="$q.dark.isActive ? 'brightness_2' : 'brightness_5'"
                        />
                    </q-item-section>
                </q-item>
                <q-item>
                    <q-item-section> </q-item-section>
                </q-item>

                <q-item-label header class="fixed-bottom">
                    {{ appinfo.productName }} v{{ appinfo.version }}
                    <br />
                    Quasar v{{ $q.version }}
                </q-item-label>
            </q-list>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { useQuasar } from "quasar";

import EssentialNavigation from "components/EssentialNavigation.vue";

defineOptions({
    name: "MainLayout",
});

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value;
}

const appinfo = process.env.appinfo;

const $q = useQuasar();

// const dark = ref(true);
// watchEffect(() => {
//     $q.dark.set(dark);
// });
// https://quasar.dev/quasar-plugins/addressbar-color
// $q.addressbarColor.set('#a2e3fa')
// dark mode
// get status
// console.log($q.dark.isActive); // true, false
// get configured status
// console.log($q.dark.mode) // "auto", true, false
// set status
// $q.dark.set(true); // or false or "auto"
// toggle
// $q.dark.toggle()
</script>

<style>
.body--light {
  background-color: hsl(0, 0%, 100%);
}
</style>
