<template>
    <q-page class="flex column" style="align-items: center">
        <section>
            <h1>{{ appinfo.productName }}</h1>
        </section>
        <section>
            <h2>
                Deine App-Einstellungen:
            </h2>
            <div>
                ToDo
                <ul>
                    <li>font-size</li>
                    <li>colors</li>
                    <li>?</li>
                    <li>...</li>
                </ul>
            </div>
        </section>
    </q-page>
</template>

<script setup>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";

const appinfo = process.env.appinfo;
</script>
