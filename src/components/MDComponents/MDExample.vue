<template>
  <q-card class="md-example">
        <q-tabs
          v-model="tab"
          dense
          align="justify"
          narrow-indicator
        >
          <q-tab name="readme.md" label="readme.md" />
          <q-tab name="code.ino" label="code.ino" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="readme.md">
            <MDCode>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </MDCode>
          </q-tab-panel>

          <q-tab-panel name="code.ino">
            <MDCode>
                // some code example..

                void setup() {
                    pinMode(1, INPUTPULLUP);
                }
            </MDCode>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref('');

// const props = defineProps({
defineProps({
    contentJSON: String,
    includePath: String,
    codeFilePath: String,
    fileExists: String,
})
// console.log("---");
// console.log("props.codeLanguage", props.codeLanguage);
// console.log("props.content", props.content);
// console.log("props.codeFilePath", props.codeFilePath);
// console.log("props.includePath", props.includePath);


</script>

<style lang="sass" scoped></style>
