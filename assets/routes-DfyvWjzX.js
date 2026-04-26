const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MKS_Parts-UnPcTdnc.js","assets/_plugin-vue_export-helper-CdNuS8Yy.js","assets/vue.esm-bundler-DdwSdRj_.js","assets/chunk-C0u3WHrm.js","assets/dist-CQpZV_VD.js","assets/QBtn-BspsLx-t.js","assets/QIcon-DHY_8p3W.js","assets/render-BO3Z2Al6.js","assets/inject-obj-prop-B-maADS4.js","assets/QSpinner-CI-HQPQw.js","assets/use-router-link-sQjPpcic.js","assets/Ripple-C0534Z-N.js","assets/event-JAmtdkur.js","assets/QCard-CpXLxroZ.js","assets/use-dark-CUwkXsYa.js","assets/QCardSection-CQ6zCG9z.js","assets/QInput-vomb-1gl.js","assets/use-key-composition-DdbVKjMc.js","assets/private.use-form-Dsd0VQu5.js","assets/use-id-CMlJV75a.js","assets/Platform-Cr5ll_X8.js","assets/debounce-xC9d6Tps.js","assets/symbols-CTfU4lpL.js","assets/QPage-BDr_fs7R.js","assets/vue-router-rzPnJs0_.js","assets/esm-Bd0DGz8U.js","assets/mdContent-BL71FE5Y.js","assets/pinia-7ePOPY7m.js","assets/about-ykbDQf40.js","assets/readme-DL58Ql-3.js","assets/mdContent-BuYODJz4.css","assets/MKS_Parts-BMTm1jcY.css","assets/MKS_Tags-DdMthDGS.js","assets/TagBauteilListe-B8mk9VTL.js","assets/TagBauteilListe-tn0RQdqM.css","assets/MKS_Tags-Byav8agq.css","assets/MKS_Abbr-COo1xeQv.js","assets/QExpansionItem-DVbIC5Rm.js","assets/QItemLabel-C18zJpfh.js","assets/QSeparator-fAtL9r5V.js","assets/QList-x13b4hru.js","assets/AboutPage-z9l50ftD.js","assets/SettingsPage-B_pQXQY3.js","assets/use-checkbox-e4Wi2w8Q.js","assets/use-timeout-BD5EY5w4.js","assets/nodes-BpIwPEsi.js","assets/QSelect-CcqY_bER.js","assets/format-C1g-4S01.js","assets/History-CXWipx9l.js","assets/MDDemo-DroCdHjd.js","assets/MDDev-lqRSzJC3.js","assets/parts-meta-DsTKL33N.js","assets/QCheckbox-BU4YITKa.js","assets/use-quasar-CtYl_u2C.js","assets/parts-meta-B7HlzVRC.css","assets/MainLayout-BtxnmzHf.js","assets/touch-Cjo0kgwv.js","assets/MainLayout-Bnp2Cdoc.css","assets/MKS_Part_Details-B_fLSAx6.js","assets/MKS_Part_Details-7iw0FdPi.css","assets/MKS_Part_SubMarkdownFile-DYQVk9xO.js","assets/MyMarkdown-pEBs2rnp.js","assets/es-DZyqiENJ.js","assets/MKS_Part_SubMarkdownFile-CjzMJJeF.css","assets/MKS_Tag_Details-CetR1qWd.js","assets/ErrorNotFound--HI6g3H0.js"])))=>i.map(i=>d[i]);
import { t as __vitePreload } from "./preload-helper-BSxhWxzj.js";
//#region src/router/routes.js
var childrenCommon = [
	{
		title: "Parts",
		icon: "precision_manufacturing",
		path: "/",
		component: () => __vitePreload(() => import("./MKS_Parts-UnPcTdnc.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]))
	},
	{
		title: "Tags (WIP)",
		icon: "precision_manufacturing",
		path: "/tags",
		component: () => __vitePreload(() => import("./MKS_Tags-DdMthDGS.js"), __vite__mapDeps([32,1,2,3,4,13,14,7,8,15,16,6,17,9,18,19,20,21,12,22,23,26,27,25,28,29,30,33,34,35])),
		visible: false
	},
	{
		title: "Glossar",
		icon: "precision_manufacturing",
		path: "/abbr/:id?",
		component: () => __vitePreload(() => import("./MKS_Abbr-COo1xeQv.js"), __vite__mapDeps([36,3,2,4,13,14,7,8,15,37,6,38,10,12,39,19,20,40,23,22,24,25])),
		props: true
	},
	{
		title: "About",
		icon: "info",
		path: "about",
		component: () => __vitePreload(() => import("./AboutPage-z9l50ftD.js"), __vite__mapDeps([41,2,3,4,23,7,8,22,28]))
	},
	{
		title: "Settings",
		icon: "settings",
		path: "settings",
		component: () => __vitePreload(() => import("./SettingsPage-B_pQXQY3.js"), __vite__mapDeps([42,2,3,4,43,6,7,8,38,14,10,12,18,44,20,45,46,17,9,19,21,22,47,48,11,23,26,27,25,28,29,30])),
		visible: true
	},
	{
		title: "MD-Demo",
		icon: "brush",
		path: "/md-demo",
		component: () => __vitePreload(() => import("./MDDemo-DroCdHjd.js"), __vite__mapDeps([49,3,2,4,23,7,8,22])),
		visible: false
	},
	{
		title: "MD-Dev",
		icon: "brush",
		path: "/md-dev",
		component: () => __vitePreload(() => import("./MDDev-lqRSzJC3.js"), __vite__mapDeps([50,2,3,4,23,7,8,22,29])),
		visible: false
	},
	{
		title: "Parts Meta-Data Table",
		icon: "brush",
		path: "/tools-parts-meta",
		component: () => __vitePreload(() => import("./parts-meta-DsTKL33N.js"), __vite__mapDeps([51,2,3,4,5,6,7,8,9,10,11,12,52,43,38,14,18,44,20,45,46,17,19,21,22,47,48,16,40,23,39,53,26,27,25,28,29,30,54])),
		visible: false
	}
];
var routes = [{
	path: "/",
	component: () => __vitePreload(() => import("./MainLayout-BtxnmzHf.js"), __vite__mapDeps([55,1,2,3,4,5,6,7,8,9,10,11,12,38,14,40,56,20,47,48,53,44,22,57])),
	children: [
		{
			path: "part/:part_name/",
			component: () => __vitePreload(() => import("./MKS_Part_Details-B_fLSAx6.js"), __vite__mapDeps([58,1,2,3,4,5,6,7,8,9,10,11,12,23,22,24,25,26,27,28,29,30,59])),
			props: true
		},
		{
			path: "part/:part_name/:pathMatch(.*.md)+",
			component: () => __vitePreload(() => import("./MKS_Part_SubMarkdownFile-DYQVk9xO.js"), __vite__mapDeps([60,1,61,3,2,4,62,5,6,7,8,9,10,11,12,23,22,24,25,26,27,28,29,30,63])),
			props: true
		},
		{
			path: "part/",
			redirect: "/"
		},
		{
			path: "tag/:tag_name?",
			component: () => __vitePreload(() => import("./MKS_Tag_Details-CetR1qWd.js"), __vite__mapDeps([64,2,3,4,23,7,8,22,26,27,25,28,29,30,33,1,34])),
			props: true
		},
		...childrenCommon
	]
}, {
	path: "/:catchAll(.*)*",
	component: () => __vitePreload(() => import("./ErrorNotFound--HI6g3H0.js"), __vite__mapDeps([65,2,3,4,5,6,7,8,9,10,11,12]))
}];
//#endregion
export { routes as n, childrenCommon as t };
