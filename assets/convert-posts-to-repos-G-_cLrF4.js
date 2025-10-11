import { Q as QInput } from "./QInput-Dq_z0iM_.js";
import { Q as QTable, a as QFile, b as QTr, c as QTd, e as exportFile } from "./export-file-DbkMBUO4.js";
import { r as ref, Z as watchEffect, H as createBlock, v as openBlock, P as withCtx, l as createBaseVNode, j as createVNode, a2 as QBtn } from "./index-BKAcH946.js";
import { Q as QPage } from "./QPage-9StsDHe4.js";
import { u as useQuasar } from "./use-quasar-B6V2c52H.js";
import "./use-id-CfkocSOB.js";
import "./use-dark-Ds1kYCyq.js";
import "./focus-manager-B-vefqia.js";
import "./use-prevent-scroll-CU8na-uo.js";
import "./scroll-C0lBKQne.js";
import "./QSeparator-lIE26sQO.js";
import "./QList-B2Si5NZY.js";
import "./position-engine-EfAv6WyB.js";
const _sfc_main = {
  __name: "convert-posts-to-repos",
  setup(__props) {
    const $q = useQuasar();
    const tableRef = ref(null);
    const navigationActive = ref(false);
    const inputFile = ref();
    const inputJSON = ref([]);
    const columns = [
      {
        name: "repo_name",
        label: "repo_name",
        field: (row) => row.repo_name
      },
      {
        name: "title",
        label: "frontmatter.title",
        field: (row) => row.frontmatter.title,
        style: "background-color: rgb(20,0,20)"
      },
      {
        name: "manufacture",
        label: "manufacture",
        field: (row) => row.manufacture
      },
      {
        name: "manufacture_url",
        label: "manufacture_url",
        field: (row) => row.manufacture_url,
        style: "background-color: rgb(20,0,20)"
      },
      {
        name: "product_url",
        label: "product_url",
        field: (row) => row.product_url
      },
      {
        name: "coverImage",
        label: "coverImage",
        field: "coverImage",
        style: "background-color: rgb(20,0,20)"
      },
      {
        name: "material_number",
        label: "meta.material_number",
        field: (row) => row.meta.material_number,
        style: "width:2em;"
      },
      {
        name: "material_type",
        label: "meta.material_type",
        field: (row) => row.meta.material_type,
        style: "background-color: rgb(20,0,20); width:2em;"
      },
      {
        name: "material_short_description",
        label: "meta.material_short_description",
        field: (row) => row.meta.material_short_description
      },
      {
        name: "content_description",
        label: "content_description",
        field: "content_description",
        style: "background-color: rgb(20,0,20)"
      },
      { name: "example_code", label: "example_code", field: "example_code" },
      {
        name: "content_infolist",
        label: "content_infolist",
        field: "content_infolist",
        style: "background-color: rgb(20,0,20)"
      }
    ];
    watchEffect(async () => {
      const fileList = inputFile.value;
      const file = Array.isArray(fileList) ? fileList[0] : fileList;
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target.result;
          try {
            inputJSON.value = JSON.parse(content);
            rows.value = inputJSON.value;
          } catch (error) {
            console.log("Invalid JSON file:", error);
          }
        };
        reader.readAsText(file);
      }
    });
    function exportTable() {
      console.log("export table data as json");
      console.log("rows.value", rows.value);
      const jsonData = JSON.stringify(rows.value, void 0, 4);
      const status = exportFile("reposData.json", jsonData, "application/json");
      if (status !== true) {
        $q.notify({
          message: "Browser denied file download...",
          color: "negative",
          icon: "warning"
        });
      }
    }
    function activateNavigation() {
      navigationActive.value = true;
    }
    function deactivateNavigation() {
      navigationActive.value = false;
    }
    function onKey(evt) {
      if (navigationActive.value !== true || [33, 34, 35, 36, 38, 40].indexOf(evt.keyCode) === -1 || tableRef.value === null)
        return;
    }
    const rows = ref([
      {
        repo_name: "mks-arduino",
        content_description: " \n\nDer Arduino UNO ist ein Mikrocontroller, der es ermöglicht, prinzipiell jegliche Art von technischen Vorgängen automatisiert miteinander zu koordinieren. Dafür besitzt der Mikrocontroller viele \\[simple\\_tooltip content='Die Mikrocontroller besitzen kleine metallische Kontakte, an die Komponenten, Shields oder andere Platinen angeschlossen werden können. Diese Kontakte werden Pins genannt und können oft als sogenannte GPIO’s (Allzweck Ein- und Ausgabe) eingesetzt werden. Dies bedeutet, dass diese Pins direkt über die Programmierung des Mikrocontrollers angesprochen werden können und hierbei sogar bestimmt werden kann, ob dieser Pin als Eingang (beispielsweise zum Auslesen eines Sensors) oder als Ausgang (beispielsweise zur Steuerung eines Motors) genutzt werden kann. Praktisches Beispiel: Wird am Arduino eine LED an Pin 1 angeschlossen, kann im Programm direkt der Pin 1 als „An” oder „Aus” definiert werden und damit die LED an- oder ausgeschaltet werden. '\\]Ein- und Ausgänge\\[/simple\\_tooltip\\] (Inputs und Outputs). Diese sind elektrische Anschlüsse, an die verschiedene technische Komponenten, wie Sensoren oder auch Aktoren (Motoren, Leuchten etc.), angeschlossen werden können. Wird der Mikrocontroller entsprechend programmiert, können diese Komponenten logisch miteinander verknüpft werden. Dadurch können die Komponenten gemeinsam eine technische Aufgabe erfüllen.\n\nDer Arduino wird über die Arduino IDE (Entwicklungsumgebung) frei nach eigenen Wünschen und Anforderungen programmiert. Dazu wird er an einem PC mit der entsprechenden vorinstallierten Software angeschlossen und das Programm „Arduino IDE” gestartet. Das final erstellte Programm wird schließlich auf den Mikrocontroller geladen.\n\nEin simples Projektbeispiel ist eine Leuchte, die immer dann aufleuchtet, wenn die Umgebung zu dunkel wird. Hierfür wird ein Lichtsensor benötigt, um das Umgebungslicht zu messen. Der Arduino liest den Sensor aus und steuert schließlich die Leuchte, abhängig von der gemessenen Helligkeit.\n\nDurch die große Beliebtheit des Arduino in der wachsenden Community lässt sich fast jedes erdenkliche Projekt mithilfe von im Internet veröffentlichten Erfahrungsberichten umsetzen. Es reicht oftmals nur die Komponenten, die man verbinden möchte, in eine Suchmaschine einzugeben, um entsprechende (Video-)Tutorials zu finden.\n\nDer Arduino UNO ist ein Mikrocontroller, der ursprünglich speziell für Bildungszwecke entwickelt wurde. Durch die einfache Programmierung und den niedrigen Preis hat er allerdings sehr schnell auch in anderen Branchen an Beliebtheit gewonnen. Sowohl Wissenschaftler\\*innen als auch Studierende, Hobby-Bastler\\*innen, DIY-Begeisterte und viele mehr setzen den Mikrocontroller ein, um unterschiedlichste automatisierte Projekte umzusetzen.\n\nhttps://www.youtube.com/watch?v=GQw20v8Qls0\n\n \n\nhttps://www.youtube.com/watch?v=EEa-0fhb2WA\n\n \n\n## Wichtige Links für die ersten Schritte:\n\n- [Arduino Webseite](https://www.arduino.cc/)\n- [Arduino IDE](https://www.arduino.cc/en/Main/Software)\n- [Technische Daten zum Arduino UNO](https://store.arduino.cc/arduino-uno-rev3)\n- [Programmiersprache](https://www.arduino.cc/reference/de/)\n- [Instructables Arduino Class (englisch)](https://www.instructables.com/class/Arduino-Class/)\n\n## Projektbeispiele:\n\n- [Arduino Project HUB (englisch)](https://create.arduino.cc/projecthub)\n- [Hackster (englisch)](https://www.hackster.io/arduino/projects)\n- [Arduino Tutorial (deutsch)](https://www.arduino-tutorial.de/arduino-projekte/)\n\n## Weiterführende Hintergrundinformationen:\n\n- [Arduino - Wikipedia Artikel](https://de.wikipedia.org/wiki/Arduino_\\(Plattform\\))\n- [Mikrocontroller - Wikipedia Artikel](https://de.wikipedia.org/wiki/Mikrocontroller)\n- [DIY - Wikipedia Artikel](https://de.wikipedia.org/wiki/Do_it_yourself)\n- [GPIO - Wikipedia Artikel](https://de.wikipedia.org/wiki/Allzweckeingabe/-ausgabe)\n- [I2C - Wikipedia Artikel](https://de.wikipedia.org/wiki/I%C2%B2C)\n- [SPI - Wikipedia Artikel](https://de.wikipedia.org/wiki/Serial_Peripheral_Interface)\n- [UART - Wikipedia Artikel](https://de.wikipedia.org/wiki/Universal_Asynchronous_Receiver_Transmitter)",
        content_infolist: "\n",
        slug: "arduino",
        meta: {
          material_number: "1",
          material_type: "10",
          material_short_description: "Arduino UNO R3"
        },
        coverImageId: "859",
        coverImage: "1_arduino.jpg",
        frontmatter: {
          title: "Arduino UNO",
          date: "2018-08-16T19:55:36.000Z",
          categories: [],
          tags: [],
          coverImage: "1_arduino.jpg",
          material_number: "1",
          material_type: "10",
          material_short_descr: "Arduino UNO R3"
        }
      }
    ]);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          _cache[1] || (_cache[1] = createBaseVNode("section", { style: { "padding-left": "3em" } }, "Convert `posts.json` to `reposData.json`", -1)),
          createBaseVNode("section", null, [
            createVNode(QTable, {
              flat: "",
              bordered: "",
              class: "my-sticky-header-table",
              ref_key: "tableRef",
              ref: tableRef,
              rows: rows.value,
              columns,
              "row-key": "slug",
              "hide-pagination": true,
              "rows-per-page-options": [0],
              onFocusin: activateNavigation,
              onFocusout: deactivateNavigation,
              onKeydown: onKey
            }, {
              body: withCtx((props) => [
                createVNode(QTr, { props }, {
                  default: withCtx(() => [
                    createVNode(QTd, {
                      key: "repo_name",
                      props
                    }, {
                      default: withCtx(() => [
                        createVNode(QInput, {
                          modelValue: props.row.repo_name,
                          "onUpdate:modelValue": ($event) => props.row.repo_name = $event,
                          dense: "",
                          borderless: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1032, ["props"]),
                    createVNode(QTd, {
                      key: "title",
                      props
                    }, {
                      default: withCtx(() => [
                        createVNode(QInput, {
                          modelValue: props.row.frontmatter.title,
                          "onUpdate:modelValue": ($event) => props.row.frontmatter.title = $event,
                          dense: "",
                          borderless: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1032, ["props"]),
                    createVNode(QTd, {
                      key: "manufacture",
                      props
                    }, {
                      default: withCtx(() => [
                        createVNode(QInput, {
                          modelValue: props.row.manufacture,
                          "onUpdate:modelValue": ($event) => props.row.manufacture = $event,
                          dense: "",
                          borderless: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1032, ["props"]),
                    createVNode(QTd, {
                      key: "manufacture_url",
                      props
                    }, {
                      default: withCtx(() => [
                        createVNode(QInput, {
                          modelValue: props.row.manufacture_url,
                          "onUpdate:modelValue": ($event) => props.row.manufacture_url = $event,
                          dense: "",
                          borderless: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1032, ["props"]),
                    createVNode(QTd, {
                      key: "product_url",
                      props
                    }, {
                      default: withCtx(() => [
                        createVNode(QInput, {
                          modelValue: props.row.product_url,
                          "onUpdate:modelValue": ($event) => props.row.product_url = $event,
                          dense: "",
                          borderless: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1032, ["props"]),
                    createVNode(QTd, {
                      key: "coverImage",
                      props
                    }, {
                      default: withCtx(() => [
                        createVNode(QInput, {
                          modelValue: props.row.coverImage,
                          "onUpdate:modelValue": ($event) => props.row.coverImage = $event,
                          dense: "",
                          borderless: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1032, ["props"]),
                    createVNode(QTd, {
                      key: "material_number",
                      props
                    }, {
                      default: withCtx(() => [
                        createVNode(QInput, {
                          modelValue: props.row.meta.material_number,
                          "onUpdate:modelValue": ($event) => props.row.meta.material_number = $event,
                          dense: "",
                          borderless: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1032, ["props"]),
                    createVNode(QTd, {
                      key: "material_type",
                      props
                    }, {
                      default: withCtx(() => [
                        createVNode(QInput, {
                          modelValue: props.row.meta.material_type,
                          "onUpdate:modelValue": ($event) => props.row.meta.material_type = $event,
                          dense: "",
                          borderless: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1032, ["props"]),
                    createVNode(QTd, {
                      key: "material_short_description",
                      props
                    }, {
                      default: withCtx(() => [
                        createVNode(QInput, {
                          modelValue: props.row.meta.material_short_description,
                          "onUpdate:modelValue": ($event) => props.row.meta.material_short_description = $event,
                          dense: "",
                          borderless: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1032, ["props"]),
                    createVNode(QTd, {
                      key: "content_description",
                      props,
                      style: { "max-width": "3rem", "overflow": "hidden" }
                    }, {
                      default: withCtx(() => [
                        createVNode(QInput, {
                          type: "textarea",
                          modelValue: props.row.content_description,
                          "onUpdate:modelValue": ($event) => props.row.content_description = $event,
                          dense: "",
                          autofocus: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1032, ["props"]),
                    createVNode(QTd, {
                      key: "example_code",
                      props,
                      style: { "max-width": "3rem", "overflow": "hidden" }
                    }, {
                      default: withCtx(() => [
                        createVNode(QInput, {
                          type: "textarea",
                          modelValue: props.row.example_code,
                          "onUpdate:modelValue": ($event) => props.row.example_code = $event,
                          dense: "",
                          autofocus: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1032, ["props"]),
                    createVNode(QTd, {
                      key: "content_infolist",
                      props,
                      style: { "max-width": "3rem", "overflow": "hidden" }
                    }, {
                      default: withCtx(() => [
                        createVNode(QInput, {
                          type: "textarea",
                          modelValue: props.row.content_infolist,
                          "onUpdate:modelValue": ($event) => props.row.content_infolist = $event,
                          dense: "",
                          autofocus: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1032, ["props"])
                  ]),
                  _: 2
                }, 1032, ["props"])
              ]),
              "top-right": withCtx(() => [
                createVNode(QFile, {
                  label: "Import posts.json",
                  modelValue: inputFile.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => inputFile.value = $event)
                }, null, 8, ["modelValue"]),
                createVNode(QBtn, {
                  color: "primary",
                  "icon-right": "archive",
                  label: "save",
                  "no-caps": "",
                  onClick: exportTable
                })
              ]),
              _: 1
            }, 8, ["rows"])
          ])
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
