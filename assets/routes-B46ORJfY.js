const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MKS_Parts-BdFtjKmv.js","assets/_plugin-vue_export-helper-Dl-_tC7C.js","assets/vue.esm-bundler-DkjeOeAQ.js","assets/chunk-C0u3WHrm.js","assets/dist-u9SxfPhV.js","assets/QBtn-DZW7z61w.js","assets/QIcon-BIe_yU5L.js","assets/render-AG-3FfQy.js","assets/inject-obj-prop-B-maADS4.js","assets/QSpinner-C9TaWt0d.js","assets/use-router-link-CkuTaxqL.js","assets/Ripple-cZik0Z5F.js","assets/event-JAmtdkur.js","assets/QCard-BrwQdTtb.js","assets/use-dark-D7HPSSY-.js","assets/QCardSection-BpCocpXo.js","assets/QInput-BG03k-Fb.js","assets/use-key-composition-Czd8xtjr.js","assets/private.use-form-DoNiTCW_.js","assets/use-id-DWrbHNzg.js","assets/Platform-Hxr0V5Kb.js","assets/debounce-xC9d6Tps.js","assets/symbols-CTfU4lpL.js","assets/QPage-HPiQh4dS.js","assets/vue-router-C1WeEvMh.js","assets/mdContent-Bl-UT33K.js","assets/pinia-BNAaAcy4.js","assets/about-Bh6u_n79.js","assets/readme-DJ5bbZji.js","assets/mdContent-BuYODJz4.css","assets/MKS_Parts-BMTm1jcY.css","assets/MKS_Tags-Bek6laO8.js","assets/TagBauteilListe-3-tWFmyW.js","assets/TagBauteilListe-tn0RQdqM.css","assets/MKS_Tags-Byav8agq.css","assets/MKS_Abbr-Durh_uop.js","assets/QExpansionItem-CY57Wo8b.js","assets/QItemLabel-D9M7YRL7.js","assets/QSeparator-Bf3NzGLA.js","assets/QList-DdZIs395.js","assets/AboutPage-Dck5od3K.js","assets/SettingsPage-1wS28QxS.js","assets/use-checkbox-CqeGl3e8.js","assets/use-timeout-B36y8WMi.js","assets/nodes-BpIwPEsi.js","assets/QSelect-Dd9iDzsc.js","assets/format-DLB5G-Pz.js","assets/History-dJyuw0sM.js","assets/MDDemo-eGcpdCCQ.js","assets/MDDev--B6PX2iF.js","assets/parts-meta-DnNBruko.js","assets/QCheckbox-Cngqk9Fj.js","assets/use-quasar-DjkpUp09.js","assets/parts-meta-B7HlzVRC.css","assets/MainLayout-DlSdRf32.js","assets/touch-DSqVpVWs.js","assets/MainLayout-Bnp2Cdoc.css","assets/MKS_Part_Details-CV3gOTYG.js","assets/MKS_Part_Details-7iw0FdPi.css","assets/MKS_Part_SubMarkdownFile-oSnauumw.js","assets/MyMarkdown-CI4JPIWU.js","assets/es-rhvVhq1b.js","assets/MKS_Part_SubMarkdownFile-CjzMJJeF.css","assets/MKS_Tag_Details-B3pe79AL.js","assets/ErrorNotFound-DtIIzC5t.js"])))=>i.map(i=>d[i]);
import { t as __vitePreload } from "./preload-helper-Chyirnlg.js";
//#region src/router/routes.js
var childrenCommon = [
	{
		title: "Parts",
		icon: "precision_manufacturing",
		path: "/",
		component: () => __vitePreload(() => import("./MKS_Parts-BdFtjKmv.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]))
	},
	{
		title: "Tags (WIP)",
		icon: "precision_manufacturing",
		path: "/tags",
		component: () => __vitePreload(() => import("./MKS_Tags-Bek6laO8.js"), __vite__mapDeps([31,1,2,3,4,13,14,7,8,15,16,6,17,9,18,19,20,21,12,22,23,25,26,27,28,29,32,33,34])),
		visible: false
	},
	{
		title: "Glossar",
		icon: "precision_manufacturing",
		path: "/abbr/:id?",
		component: () => __vitePreload(() => import("./MKS_Abbr-Durh_uop.js"), __vite__mapDeps([35,3,2,4,13,14,7,8,15,36,6,37,10,12,38,19,20,39,23,22,24])),
		props: true
	},
	{
		title: "About",
		icon: "info",
		path: "about",
		component: () => __vitePreload(() => import("./AboutPage-Dck5od3K.js"), __vite__mapDeps([40,2,3,4,23,7,8,22,27]))
	},
	{
		title: "Settings",
		icon: "settings",
		path: "settings",
		component: () => __vitePreload(() => import("./SettingsPage-1wS28QxS.js"), __vite__mapDeps([41,2,3,4,42,6,7,8,37,14,10,12,18,43,20,44,45,17,9,19,21,22,46,47,11,23,25,26,27,28,29])),
		visible: true
	},
	{
		title: "MD-Demo",
		icon: "brush",
		path: "/md-demo",
		component: () => __vitePreload(() => import("./MDDemo-eGcpdCCQ.js"), __vite__mapDeps([48,3,2,4,23,7,8,22])),
		visible: false
	},
	{
		title: "MD-Dev",
		icon: "brush",
		path: "/md-dev",
		component: () => __vitePreload(() => import("./MDDev--B6PX2iF.js"), __vite__mapDeps([49,2,3,4,23,7,8,22,28])),
		visible: false
	},
	{
		title: "Parts Meta-Data Table",
		icon: "brush",
		path: "/tools-parts-meta",
		component: () => __vitePreload(() => import("./parts-meta-DnNBruko.js"), __vite__mapDeps([50,2,3,4,5,6,7,8,9,10,11,12,51,42,37,14,18,43,20,44,45,17,19,21,22,46,47,16,39,23,38,52,25,26,27,28,29,53])),
		visible: false
	}
];
var routes = [{
	path: "/",
	component: () => __vitePreload(() => import("./MainLayout-DlSdRf32.js"), __vite__mapDeps([54,1,2,3,4,5,6,7,8,9,10,11,12,37,14,39,55,20,46,47,52,43,22,56])),
	children: [
		{
			path: "part/:part_name/",
			component: () => __vitePreload(() => import("./MKS_Part_Details-CV3gOTYG.js"), __vite__mapDeps([57,1,2,3,4,5,6,7,8,9,10,11,12,23,22,24,25,26,27,28,29,58])),
			props: true
		},
		{
			path: "part/:part_name/:pathMatch(.*.md)+",
			component: () => __vitePreload(() => import("./MKS_Part_SubMarkdownFile-oSnauumw.js"), __vite__mapDeps([59,1,60,3,2,4,61,5,6,7,8,9,10,11,12,23,22,24,25,26,27,28,29,62])),
			props: true
		},
		{
			path: "part/",
			redirect: "/"
		},
		{
			path: "tag/:tag_name?",
			component: () => __vitePreload(() => import("./MKS_Tag_Details-B3pe79AL.js"), __vite__mapDeps([63,2,3,4,23,7,8,22,25,26,27,28,29,32,1,33])),
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
	component: () => __vitePreload(() => import("./ErrorNotFound-DtIIzC5t.js"), __vite__mapDeps([64,2,3,4,5,6,7,8,9,10,11,12]))
}];
//#endregion
export { routes as n, childrenCommon as t };
