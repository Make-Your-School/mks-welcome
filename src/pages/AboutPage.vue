<template>
    <q-page class="flex column" style="align-items: center">
        <section>
            <h1>{{ appinfo.productName }}</h1>
            <p>version: v{{ appinfo.version }}</p>
            <p>
                {{ appinfo.description }}<br />
                find the project repository at <br />
                <a target="_blank" :href="appinfo.projectUrl">
                    {{ appinfo.projectUrl }}
                </a>
            </p>
            <p>
                a live preview version is hosted at<br />
                <a target="_blank" :href="appinfo.previewUrl">
                    {{ appinfo.previewUrl }}
                </a>
            </p>
        </section>
        <!-- <section>
            <h4>How it Works</h4>
        </section> -->
        <section>
            <my-markdown :source="md_content.readme.content" :file-path="md_content.path_base" />
        </section>
    </q-page>
</template>

<script setup>
import { ref, computed } from "vue";
import MyMarkdown from "src/components/MyMarkdown.vue";

const appinfo = process.env.appinfo;
import about from "src/content_md/about";
console.log("about", about);
const md_content = ref(about);
</script>
