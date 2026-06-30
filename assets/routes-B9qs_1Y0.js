const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MKS_Parts-Dka52a87.js","assets/_plugin-vue_export-helper-Dl-_tC7C.js","assets/vue.esm-bundler-DkjeOeAQ.js","assets/chunk-C0u3WHrm.js","assets/dist-u9SxfPhV.js","assets/QBtn-DZW7z61w.js","assets/QIcon-BIe_yU5L.js","assets/render-AG-3FfQy.js","assets/inject-obj-prop-B-maADS4.js","assets/QSpinner-C9TaWt0d.js","assets/use-router-link-CkuTaxqL.js","assets/Ripple-cZik0Z5F.js","assets/event-JAmtdkur.js","assets/QCard-BrwQdTtb.js","assets/use-dark-D7HPSSY-.js","assets/QCardSection-BpCocpXo.js","assets/QInput-BG03k-Fb.js","assets/use-key-composition-Czd8xtjr.js","assets/private.use-form-DoNiTCW_.js","assets/use-id-DWrbHNzg.js","assets/Platform-Hxr0V5Kb.js","assets/debounce-xC9d6Tps.js","assets/symbols-CTfU4lpL.js","assets/QPage-HPiQh4dS.js","assets/vue-router-C1WeEvMh.js","assets/mdContent-B-c5-btF.js","assets/pinia-BNAaAcy4.js","assets/about-Bh6u_n79.js","assets/readme-BfzvKcTW.js","assets/MKS_Parts-BMTm1jcY.css","assets/MKS_Tags-LEE3wd_K.js","assets/TagBauteilListe-3-tWFmyW.js","assets/TagBauteilListe-tn0RQdqM.css","assets/MKS_Tags-Byav8agq.css","assets/MKS_Abbr-Durh_uop.js","assets/QExpansionItem-CY57Wo8b.js","assets/QItemLabel-D9M7YRL7.js","assets/QSeparator-Bf3NzGLA.js","assets/QList-DdZIs395.js","assets/AboutPage-Dck5od3K.js","assets/SettingsPage-46hvqPpe.js","assets/use-checkbox-CqeGl3e8.js","assets/use-timeout-B36y8WMi.js","assets/nodes-BpIwPEsi.js","assets/QSelect-Dd9iDzsc.js","assets/format-DLB5G-Pz.js","assets/History-dJyuw0sM.js","assets/MDDemo-BQSJKCBw.js","assets/MDDev-DsdGstQf.js","assets/parts-meta-BasVMYwe.js","assets/QCheckbox-Cngqk9Fj.js","assets/use-quasar-DjkpUp09.js","assets/parts-meta-B7HlzVRC.css","assets/MainLayout-DU8BKUje.js","assets/touch-DSqVpVWs.js","assets/MainLayout-Bnp2Cdoc.css","assets/MKS_Part_Details-CCGvzX9t.js","assets/MKS_Part_Details-7iw0FdPi.css","assets/MKS_Part_SubMarkdownFile-BsV3EPz_.js","assets/MyMarkdown-CI4JPIWU.js","assets/es-rhvVhq1b.js","assets/MKS_Part_SubMarkdownFile-CJ4xuokP.css","assets/MKS_Tag_Details-B5e_jzyR.js","assets/ErrorNotFound-DtIIzC5t.js"])))=>i.map(i=>d[i]);
import { t as __vitePreload } from "./preload-helper-Chyirnlg.js";
//#region src/router/routes.js
var childrenCommon = [
	{
		title: "Parts",
		icon: "precision_manufacturing",
		path: "/",
		component: () => __vitePreload(() => import("./MKS_Parts-Dka52a87.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]))
	},
	{
		title: "Tags (WIP)",
		icon: "precision_manufacturing",
		path: "/tags",
		component: () => __vitePreload(() => import("./MKS_Tags-LEE3wd_K.js"), __vite__mapDeps([30,1,2,3,4,13,14,7,8,15,16,6,17,9,18,19,20,21,12,22,23,25,26,27,28,31,32,33])),
		visible: false
	},
	{
		title: "Glossar",
		icon: "precision_manufacturing",
		path: "/abbr/:id?",
		component: () => __vitePreload(() => import("./MKS_Abbr-Durh_uop.js"), __vite__mapDeps([34,3,2,4,13,14,7,8,15,35,6,36,10,12,37,19,20,38,23,22,24])),
		props: true
	},
	{
		title: "About",
		icon: "info",
		path: "about",
		component: () => __vitePreload(() => import("./AboutPage-Dck5od3K.js"), __vite__mapDeps([39,2,3,4,23,7,8,22,27]))
	},
	{
		title: "Settings",
		icon: "settings",
		path: "settings",
		component: () => __vitePreload(() => import("./SettingsPage-46hvqPpe.js"), __vite__mapDeps([40,2,3,4,41,6,7,8,36,14,10,12,18,42,20,43,44,17,9,19,21,22,45,46,11,23,25,26,27,28])),
		visible: true
	},
	{
		title: "MD-Demo",
		icon: "brush",
		path: "/md-demo",
		component: () => __vitePreload(() => import("./MDDemo-BQSJKCBw.js"), __vite__mapDeps([47,3,2,4,23,7,8,22])),
		visible: false
	},
	{
		title: "MD-Dev",
		icon: "brush",
		path: "/md-dev",
		component: () => __vitePreload(() => import("./MDDev-DsdGstQf.js"), __vite__mapDeps([48,2,3,4,23,7,8,22,28])),
		visible: false
	},
	{
		title: "Parts Meta-Data Table",
		icon: "brush",
		path: "/tools-parts-meta",
		component: () => __vitePreload(() => import("./parts-meta-BasVMYwe.js"), __vite__mapDeps([49,2,3,4,5,6,7,8,9,10,11,12,50,41,36,14,18,42,20,43,44,17,19,21,22,45,46,16,38,23,37,51,25,26,27,28,52])),
		visible: false
	}
];
var routes = [{
	path: "/",
	component: () => __vitePreload(() => import("./MainLayout-DU8BKUje.js"), __vite__mapDeps([53,1,2,3,4,5,6,7,8,9,10,11,12,36,14,38,54,20,45,46,51,42,22,55])),
	children: [
		{
			path: "part/:part_name/",
			component: () => __vitePreload(() => import("./MKS_Part_Details-CCGvzX9t.js"), __vite__mapDeps([56,1,2,3,4,5,6,7,8,9,10,11,12,23,22,24,25,26,27,28,57])),
			props: true
		},
		{
			path: "part/:part_name/:pathMatch(.*.md)+",
			component: () => __vitePreload(() => import("./MKS_Part_SubMarkdownFile-BsV3EPz_.js"), __vite__mapDeps([58,1,59,3,2,4,60,5,6,7,8,9,10,11,12,23,22,24,25,26,27,28,61])),
			props: true
		},
		{
			path: "part/",
			redirect: "/"
		},
		{
			path: "tag/:tag_name?",
			component: () => __vitePreload(() => import("./MKS_Tag_Details-B5e_jzyR.js"), __vite__mapDeps([62,2,3,4,23,7,8,22,25,26,27,28,31,1,32])),
			props: true
		},
		{
			path: "mks-welcome/:subPath*",
			redirect: (to) => {
				console.log("to", to);
				to.path = to.path.replace("mks-welcome/", "");
				return to;
			}
		},
		...childrenCommon
	]
}, {
	path: "/:catchAll(.*)*",
	component: () => __vitePreload(() => import("./ErrorNotFound-DtIIzC5t.js"), __vite__mapDeps([63,2,3,4,5,6,7,8,9,10,11,12]))
}];
//#endregion
export { routes as n, childrenCommon as t };
