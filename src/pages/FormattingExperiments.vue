<template>
    <q-page class="flex column" style="align-items: center">
        <section>
            <h2>Quasar Formatting examples</h2>
        </section>
        <section>
            <h3>code</h3>
            <VCodeBlock
                :code="code_content"
                highlightjs
                label="./example.ino"
                lang="c++"
                theme="base16/solarized-dark"
            ></VCodeBlock>
        </section>
        <section>
            <h3>tooltips / abbr</h3>
            <!-- https://quasar.dev/vue-components/tooltip#qtooltip-api -->
            Dieses Bauteil nutzt die
            <span>
                I2C
                <q-tooltip
                    anchor="top middle"
                    self="bottom middle"
                    class="bg-amber text-black shadow-4"
                    maxWidth="10em"
                >
                    InterInterCircuit - ein 2-Drahtiger Bus um zwischen einem *Main* und vielen
                    *Clients* zu kommunizieren. jeder Client hat eine Adresse (*Haus-Nummer*).
                </q-tooltip>
            </span>
            Schnittstelle. Dadurch ist es sehr leicht zu verwenden.
        </section>
    </q-page>
</template>

<script setup>
import VCodeBlock from "@wdns/vue-code-block";

const code_content = `
void setup() {
  // ping
}

void loop() {
    delay(1042);
}
`;
</script>
