import { G as effectScope, J as isRef, K as getCurrentScope, Q as ref, V as watch, X as onScopeDispose, Y as markRaw, Z as reactive, b as hasInjectionContext, it as unref, l as computed, lt as process$1, nt as toRef, q as isReactive, rt as toRefs, tt as toRaw, v as getCurrentInstance, w as nextTick, x as inject } from "./vue.esm-bundler-DdwSdRj_.js";
import { n as init_dist, t as global } from "./dist-CQpZV_VD.js";
import { t as setupDevtoolsPlugin } from "./esm-Bd0DGz8U.js";
//#region node_modules/vue-demi/lib/index.mjs
init_dist();
function set(target, key, val) {
	if (Array.isArray(target)) {
		target.length = Math.max(target.length, key);
		target.splice(key, 1, val);
		return val;
	}
	target[key] = val;
	return val;
}
function del(target, key) {
	if (Array.isArray(target)) {
		target.splice(key, 1);
		return;
	}
	delete target[key];
}
//#endregion
//#region node_modules/pinia/dist/pinia.mjs
/*!
* pinia v2.3.1
* (c) 2025 Eduardo San Martin Morote
* @license MIT
*/
/**
* setActivePinia must be called to handle SSR at the top of functions like
* `fetch`, `setup`, `serverPrefetch` and others
*/
var activePinia;
/**
* Sets or unsets the active pinia. Used in SSR and internally when calling
* actions and getters
*
* @param pinia - Pinia instance
*/
var setActivePinia = (pinia) => activePinia = pinia;
var piniaSymbol = process$1.env.NODE_ENV !== "production" ? Symbol("pinia") : /* istanbul ignore next */ Symbol();
function isPlainObject(o) {
	return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
/**
* Possible types for SubscriptionCallback
*/
var MutationType;
(function(MutationType) {
	/**
	* Direct mutation of the state:
	*
	* - `store.name = 'new name'`
	* - `store.$state.name = 'new name'`
	* - `store.list.push('new item')`
	*/
	MutationType["direct"] = "direct";
	/**
	* Mutated the state with `$patch` and an object
	*
	* - `store.$patch({ name: 'newName' })`
	*/
	MutationType["patchObject"] = "patch object";
	/**
	* Mutated the state with `$patch` and a function
	*
	* - `store.$patch(state => state.name = 'newName')`
	*/
	MutationType["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
var IS_CLIENT = typeof window !== "undefined";
var _global = typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : typeof globalThis === "object" ? globalThis : { HTMLElement: null };
function bom(blob, { autoBom = false } = {}) {
	if (autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) return new Blob([String.fromCharCode(65279), blob], { type: blob.type });
	return blob;
}
function download(url, name, opts) {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", url);
	xhr.responseType = "blob";
	xhr.onload = function() {
		saveAs(xhr.response, name, opts);
	};
	xhr.onerror = function() {
		console.error("could not download file");
	};
	xhr.send();
}
function corsEnabled(url) {
	const xhr = new XMLHttpRequest();
	xhr.open("HEAD", url, false);
	try {
		xhr.send();
	} catch (e) {}
	return xhr.status >= 200 && xhr.status <= 299;
}
function click(node) {
	try {
		node.dispatchEvent(new MouseEvent("click"));
	} catch (e) {
		const evt = document.createEvent("MouseEvents");
		evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
		node.dispatchEvent(evt);
	}
}
var _navigator = typeof navigator === "object" ? navigator : { userAgent: "" };
var isMacOSWebView = /Macintosh/.test(_navigator.userAgent) && /AppleWebKit/.test(_navigator.userAgent) && !/Safari/.test(_navigator.userAgent);
var saveAs = !IS_CLIENT ? () => {} : typeof HTMLAnchorElement !== "undefined" && "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? downloadSaveAs : "msSaveOrOpenBlob" in _navigator ? msSaveAs : fileSaverSaveAs;
function downloadSaveAs(blob, name = "download", opts) {
	const a = document.createElement("a");
	a.download = name;
	a.rel = "noopener";
	if (typeof blob === "string") {
		a.href = blob;
		if (a.origin !== location.origin) if (corsEnabled(a.href)) download(blob, name, opts);
		else {
			a.target = "_blank";
			click(a);
		}
		else click(a);
	} else {
		a.href = URL.createObjectURL(blob);
		setTimeout(function() {
			URL.revokeObjectURL(a.href);
		}, 4e4);
		setTimeout(function() {
			click(a);
		}, 0);
	}
}
function msSaveAs(blob, name = "download", opts) {
	if (typeof blob === "string") if (corsEnabled(blob)) download(blob, name, opts);
	else {
		const a = document.createElement("a");
		a.href = blob;
		a.target = "_blank";
		setTimeout(function() {
			click(a);
		});
	}
	else navigator.msSaveOrOpenBlob(bom(blob, opts), name);
}
function fileSaverSaveAs(blob, name, opts, popup) {
	popup = popup || open("", "_blank");
	if (popup) popup.document.title = popup.document.body.innerText = "downloading...";
	if (typeof blob === "string") return download(blob, name, opts);
	const force = blob.type === "application/octet-stream";
	const isSafari = /constructor/i.test(String(_global.HTMLElement)) || "safari" in _global;
	const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
		const reader = new FileReader();
		reader.onloadend = function() {
			let url = reader.result;
			if (typeof url !== "string") {
				popup = null;
				throw new Error("Wrong reader.result type");
			}
			url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, "data:attachment/file;");
			if (popup) popup.location.href = url;
			else location.assign(url);
			popup = null;
		};
		reader.readAsDataURL(blob);
	} else {
		const url = URL.createObjectURL(blob);
		if (popup) popup.location.assign(url);
		else location.href = url;
		popup = null;
		setTimeout(function() {
			URL.revokeObjectURL(url);
		}, 4e4);
	}
}
/**
* Shows a toast or console.log
*
* @param message - message to log
* @param type - different color of the tooltip
*/
function toastMessage(message, type) {
	const piniaMessage = "🍍 " + message;
	if (typeof __VUE_DEVTOOLS_TOAST__ === "function") __VUE_DEVTOOLS_TOAST__(piniaMessage, type);
	else if (type === "error") console.error(piniaMessage);
	else if (type === "warn") console.warn(piniaMessage);
	else console.log(piniaMessage);
}
function isPinia(o) {
	return "_a" in o && "install" in o;
}
/**
* This file contain devtools actions, they are not Pinia actions.
*/
function checkClipboardAccess() {
	if (!("clipboard" in navigator)) {
		toastMessage(`Your browser doesn't support the Clipboard API`, "error");
		return true;
	}
}
function checkNotFocusedError(error) {
	if (error instanceof Error && error.message.toLowerCase().includes("document is not focused")) {
		toastMessage("You need to activate the \"Emulate a focused page\" setting in the \"Rendering\" panel of devtools.", "warn");
		return true;
	}
	return false;
}
async function actionGlobalCopyState(pinia) {
	if (checkClipboardAccess()) return;
	try {
		await navigator.clipboard.writeText(JSON.stringify(pinia.state.value));
		toastMessage("Global state copied to clipboard.");
	} catch (error) {
		if (checkNotFocusedError(error)) return;
		toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
		console.error(error);
	}
}
async function actionGlobalPasteState(pinia) {
	if (checkClipboardAccess()) return;
	try {
		loadStoresState(pinia, JSON.parse(await navigator.clipboard.readText()));
		toastMessage("Global state pasted from clipboard.");
	} catch (error) {
		if (checkNotFocusedError(error)) return;
		toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
		console.error(error);
	}
}
async function actionGlobalSaveState(pinia) {
	try {
		saveAs(new Blob([JSON.stringify(pinia.state.value)], { type: "text/plain;charset=utf-8" }), "pinia-state.json");
	} catch (error) {
		toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
		console.error(error);
	}
}
var fileInput;
function getFileOpener() {
	if (!fileInput) {
		fileInput = document.createElement("input");
		fileInput.type = "file";
		fileInput.accept = ".json";
	}
	function openFile() {
		return new Promise((resolve, reject) => {
			fileInput.onchange = async () => {
				const files = fileInput.files;
				if (!files) return resolve(null);
				const file = files.item(0);
				if (!file) return resolve(null);
				return resolve({
					text: await file.text(),
					file
				});
			};
			fileInput.oncancel = () => resolve(null);
			fileInput.onerror = reject;
			fileInput.click();
		});
	}
	return openFile;
}
async function actionGlobalOpenStateFile(pinia) {
	try {
		const result = await getFileOpener()();
		if (!result) return;
		const { text, file } = result;
		loadStoresState(pinia, JSON.parse(text));
		toastMessage(`Global state imported from "${file.name}".`);
	} catch (error) {
		toastMessage(`Failed to import the state from JSON. Check the console for more details.`, "error");
		console.error(error);
	}
}
function loadStoresState(pinia, state) {
	for (const key in state) {
		const storeState = pinia.state.value[key];
		if (storeState) Object.assign(storeState, state[key]);
		else pinia.state.value[key] = state[key];
	}
}
function formatDisplay(display) {
	return { _custom: { display } };
}
var PINIA_ROOT_LABEL = "🍍 Pinia (root)";
var PINIA_ROOT_ID = "_root";
function formatStoreForInspectorTree(store) {
	return isPinia(store) ? {
		id: PINIA_ROOT_ID,
		label: PINIA_ROOT_LABEL
	} : {
		id: store.$id,
		label: store.$id
	};
}
function formatStoreForInspectorState(store) {
	if (isPinia(store)) {
		const storeNames = Array.from(store._s.keys());
		const storeMap = store._s;
		return {
			state: storeNames.map((storeId) => ({
				editable: true,
				key: storeId,
				value: store.state.value[storeId]
			})),
			getters: storeNames.filter((id) => storeMap.get(id)._getters).map((id) => {
				const store = storeMap.get(id);
				return {
					editable: false,
					key: id,
					value: store._getters.reduce((getters, key) => {
						getters[key] = store[key];
						return getters;
					}, {})
				};
			})
		};
	}
	const state = { state: Object.keys(store.$state).map((key) => ({
		editable: true,
		key,
		value: store.$state[key]
	})) };
	if (store._getters && store._getters.length) state.getters = store._getters.map((getterName) => ({
		editable: false,
		key: getterName,
		value: store[getterName]
	}));
	if (store._customProperties.size) state.customProperties = Array.from(store._customProperties).map((key) => ({
		editable: true,
		key,
		value: store[key]
	}));
	return state;
}
function formatEventData(events) {
	if (!events) return {};
	if (Array.isArray(events)) return events.reduce((data, event) => {
		data.keys.push(event.key);
		data.operations.push(event.type);
		data.oldValue[event.key] = event.oldValue;
		data.newValue[event.key] = event.newValue;
		return data;
	}, {
		oldValue: {},
		keys: [],
		operations: [],
		newValue: {}
	});
	else return {
		operation: formatDisplay(events.type),
		key: formatDisplay(events.key),
		oldValue: events.oldValue,
		newValue: events.newValue
	};
}
function formatMutationType(type) {
	switch (type) {
		case MutationType.direct: return "mutation";
		case MutationType.patchFunction: return "$patch";
		case MutationType.patchObject: return "$patch";
		default: return "unknown";
	}
}
var isTimelineActive = true;
var componentStateTypes = [];
var MUTATIONS_LAYER_ID = "pinia:mutations";
var INSPECTOR_ID = "pinia";
var { assign: assign$1 } = Object;
/**
* Gets the displayed name of a store in devtools
*
* @param id - id of the store
* @returns a formatted string
*/
var getStoreType = (id) => "🍍 " + id;
/**
* Add the pinia plugin without any store. Allows displaying a Pinia plugin tab
* as soon as it is added to the application.
*
* @param app - Vue application
* @param pinia - pinia instance
*/
function registerPiniaDevtools(app, pinia) {
	setupDevtoolsPlugin({
		id: "dev.esm.pinia",
		label: "Pinia 🍍",
		logo: "https://pinia.vuejs.org/logo.svg",
		packageName: "pinia",
		homepage: "https://pinia.vuejs.org",
		componentStateTypes,
		app
	}, (api) => {
		if (typeof api.now !== "function") toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
		api.addTimelineLayer({
			id: MUTATIONS_LAYER_ID,
			label: `Pinia 🍍`,
			color: 15064968
		});
		api.addInspector({
			id: INSPECTOR_ID,
			label: "Pinia 🍍",
			icon: "storage",
			treeFilterPlaceholder: "Search stores",
			actions: [
				{
					icon: "content_copy",
					action: () => {
						actionGlobalCopyState(pinia);
					},
					tooltip: "Serialize and copy the state"
				},
				{
					icon: "content_paste",
					action: async () => {
						await actionGlobalPasteState(pinia);
						api.sendInspectorTree(INSPECTOR_ID);
						api.sendInspectorState(INSPECTOR_ID);
					},
					tooltip: "Replace the state with the content of your clipboard"
				},
				{
					icon: "save",
					action: () => {
						actionGlobalSaveState(pinia);
					},
					tooltip: "Save the state as a JSON file"
				},
				{
					icon: "folder_open",
					action: async () => {
						await actionGlobalOpenStateFile(pinia);
						api.sendInspectorTree(INSPECTOR_ID);
						api.sendInspectorState(INSPECTOR_ID);
					},
					tooltip: "Import the state from a JSON file"
				}
			],
			nodeActions: [{
				icon: "restore",
				tooltip: "Reset the state (with \"$reset\")",
				action: (nodeId) => {
					const store = pinia._s.get(nodeId);
					if (!store) toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, "warn");
					else if (typeof store.$reset !== "function") toastMessage(`Cannot reset "${nodeId}" store because it doesn't have a "$reset" method implemented.`, "warn");
					else {
						store.$reset();
						toastMessage(`Store "${nodeId}" reset.`);
					}
				}
			}]
		});
		api.on.inspectComponent((payload, ctx) => {
			const proxy = payload.componentInstance && payload.componentInstance.proxy;
			if (proxy && proxy._pStores) {
				const piniaStores = payload.componentInstance.proxy._pStores;
				Object.values(piniaStores).forEach((store) => {
					payload.instanceData.state.push({
						type: getStoreType(store.$id),
						key: "state",
						editable: true,
						value: store._isOptionsAPI ? { _custom: {
							value: toRaw(store.$state),
							actions: [{
								icon: "restore",
								tooltip: "Reset the state of this store",
								action: () => store.$reset()
							}]
						} } : Object.keys(store.$state).reduce((state, key) => {
							state[key] = store.$state[key];
							return state;
						}, {})
					});
					if (store._getters && store._getters.length) payload.instanceData.state.push({
						type: getStoreType(store.$id),
						key: "getters",
						editable: false,
						value: store._getters.reduce((getters, key) => {
							try {
								getters[key] = store[key];
							} catch (error) {
								getters[key] = error;
							}
							return getters;
						}, {})
					});
				});
			}
		});
		api.on.getInspectorTree((payload) => {
			if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
				let stores = [pinia];
				stores = stores.concat(Array.from(pinia._s.values()));
				payload.rootNodes = (payload.filter ? stores.filter((store) => "$id" in store ? store.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree);
			}
		});
		globalThis.$pinia = pinia;
		api.on.getInspectorState((payload) => {
			if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
				const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
				if (!inspectedStore) return;
				if (inspectedStore) {
					if (payload.nodeId !== PINIA_ROOT_ID) globalThis.$store = toRaw(inspectedStore);
					payload.state = formatStoreForInspectorState(inspectedStore);
				}
			}
		});
		api.on.editInspectorState((payload, ctx) => {
			if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
				const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
				if (!inspectedStore) return toastMessage(`store "${payload.nodeId}" not found`, "error");
				const { path } = payload;
				if (!isPinia(inspectedStore)) {
					if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) path.unshift("$state");
				} else path.unshift("state");
				isTimelineActive = false;
				payload.set(inspectedStore, path, payload.state.value);
				isTimelineActive = true;
			}
		});
		api.on.editComponentState((payload) => {
			if (payload.type.startsWith("🍍")) {
				const storeId = payload.type.replace(/^🍍\s*/, "");
				const store = pinia._s.get(storeId);
				if (!store) return toastMessage(`store "${storeId}" not found`, "error");
				const { path } = payload;
				if (path[0] !== "state") return toastMessage(`Invalid path for store "${storeId}":\n${path}\nOnly state can be modified.`);
				path[0] = "$state";
				isTimelineActive = false;
				payload.set(store, path, payload.state.value);
				isTimelineActive = true;
			}
		});
	});
}
function addStoreToDevtools(app, store) {
	if (!componentStateTypes.includes(getStoreType(store.$id))) componentStateTypes.push(getStoreType(store.$id));
	setupDevtoolsPlugin({
		id: "dev.esm.pinia",
		label: "Pinia 🍍",
		logo: "https://pinia.vuejs.org/logo.svg",
		packageName: "pinia",
		homepage: "https://pinia.vuejs.org",
		componentStateTypes,
		app,
		settings: { logStoreChanges: {
			label: "Notify about new/deleted stores",
			type: "boolean",
			defaultValue: true
		} }
	}, (api) => {
		const now = typeof api.now === "function" ? api.now.bind(api) : Date.now;
		store.$onAction(({ after, onError, name, args }) => {
			const groupId = runningActionId++;
			api.addTimelineEvent({
				layerId: MUTATIONS_LAYER_ID,
				event: {
					time: now(),
					title: "🛫 " + name,
					subtitle: "start",
					data: {
						store: formatDisplay(store.$id),
						action: formatDisplay(name),
						args
					},
					groupId
				}
			});
			after((result) => {
				activeAction = void 0;
				api.addTimelineEvent({
					layerId: MUTATIONS_LAYER_ID,
					event: {
						time: now(),
						title: "🛬 " + name,
						subtitle: "end",
						data: {
							store: formatDisplay(store.$id),
							action: formatDisplay(name),
							args,
							result
						},
						groupId
					}
				});
			});
			onError((error) => {
				activeAction = void 0;
				api.addTimelineEvent({
					layerId: MUTATIONS_LAYER_ID,
					event: {
						time: now(),
						logType: "error",
						title: "💥 " + name,
						subtitle: "end",
						data: {
							store: formatDisplay(store.$id),
							action: formatDisplay(name),
							args,
							error
						},
						groupId
					}
				});
			});
		}, true);
		store._customProperties.forEach((name) => {
			watch(() => unref(store[name]), (newValue, oldValue) => {
				api.notifyComponentUpdate();
				api.sendInspectorState(INSPECTOR_ID);
				if (isTimelineActive) api.addTimelineEvent({
					layerId: MUTATIONS_LAYER_ID,
					event: {
						time: now(),
						title: "Change",
						subtitle: name,
						data: {
							newValue,
							oldValue
						},
						groupId: activeAction
					}
				});
			}, { deep: true });
		});
		store.$subscribe(({ events, type }, state) => {
			api.notifyComponentUpdate();
			api.sendInspectorState(INSPECTOR_ID);
			if (!isTimelineActive) return;
			const eventData = {
				time: now(),
				title: formatMutationType(type),
				data: assign$1({ store: formatDisplay(store.$id) }, formatEventData(events)),
				groupId: activeAction
			};
			if (type === MutationType.patchFunction) eventData.subtitle = "⤵️";
			else if (type === MutationType.patchObject) eventData.subtitle = "🧩";
			else if (events && !Array.isArray(events)) eventData.subtitle = events.type;
			if (events) eventData.data["rawEvent(s)"] = { _custom: {
				display: "DebuggerEvent",
				type: "object",
				tooltip: "raw DebuggerEvent[]",
				value: events
			} };
			api.addTimelineEvent({
				layerId: MUTATIONS_LAYER_ID,
				event: eventData
			});
		}, {
			detached: true,
			flush: "sync"
		});
		const hotUpdate = store._hotUpdate;
		store._hotUpdate = markRaw((newStore) => {
			hotUpdate(newStore);
			api.addTimelineEvent({
				layerId: MUTATIONS_LAYER_ID,
				event: {
					time: now(),
					title: "🔥 " + store.$id,
					subtitle: "HMR update",
					data: {
						store: formatDisplay(store.$id),
						info: formatDisplay(`HMR update`)
					}
				}
			});
			api.notifyComponentUpdate();
			api.sendInspectorTree(INSPECTOR_ID);
			api.sendInspectorState(INSPECTOR_ID);
		});
		const { $dispose } = store;
		store.$dispose = () => {
			$dispose();
			api.notifyComponentUpdate();
			api.sendInspectorTree(INSPECTOR_ID);
			api.sendInspectorState(INSPECTOR_ID);
			api.getSettings().logStoreChanges && toastMessage(`Disposed "${store.$id}" store 🗑`);
		};
		api.notifyComponentUpdate();
		api.sendInspectorTree(INSPECTOR_ID);
		api.sendInspectorState(INSPECTOR_ID);
		api.getSettings().logStoreChanges && toastMessage(`"${store.$id}" store installed 🆕`);
	});
}
var runningActionId = 0;
var activeAction;
/**
* Patches a store to enable action grouping in devtools by wrapping the store with a Proxy that is passed as the
* context of all actions, allowing us to set `runningAction` on each access and effectively associating any state
* mutation to the action.
*
* @param store - store to patch
* @param actionNames - list of actionst to patch
*/
function patchActionForGrouping(store, actionNames, wrapWithProxy) {
	const actions = actionNames.reduce((storeActions, actionName) => {
		storeActions[actionName] = toRaw(store)[actionName];
		return storeActions;
	}, {});
	for (const actionName in actions) store[actionName] = function() {
		const _actionId = runningActionId;
		const trackedStore = wrapWithProxy ? new Proxy(store, {
			get(...args) {
				activeAction = _actionId;
				return Reflect.get(...args);
			},
			set(...args) {
				activeAction = _actionId;
				return Reflect.set(...args);
			}
		}) : store;
		activeAction = _actionId;
		const retValue = actions[actionName].apply(trackedStore, arguments);
		activeAction = void 0;
		return retValue;
	};
}
/**
* pinia.use(devtoolsPlugin)
*/
function devtoolsPlugin({ app, store, options }) {
	if (store.$id.startsWith("__hot:")) return;
	store._isOptionsAPI = !!options.state;
	if (!store._p._testing) {
		patchActionForGrouping(store, Object.keys(options.actions), store._isOptionsAPI);
		const originalHotUpdate = store._hotUpdate;
		toRaw(store)._hotUpdate = function(newStore) {
			originalHotUpdate.apply(this, arguments);
			patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions), !!store._isOptionsAPI);
		};
	}
	addStoreToDevtools(app, store);
}
/**
* Creates a Pinia instance to be used by the application
*/
function createPinia() {
	const scope = effectScope(true);
	const state = scope.run(() => ref({}));
	let _p = [];
	let toBeInstalled = [];
	const pinia = markRaw({
		install(app) {
			setActivePinia(pinia);
			pinia._a = app;
			app.provide(piniaSymbol, pinia);
			app.config.globalProperties.$pinia = pinia;
			/* istanbul ignore else */
			if ((process$1.env.NODE_ENV !== "production" || false) && !(process$1.env.NODE_ENV === "test") && IS_CLIENT) registerPiniaDevtools(app, pinia);
			toBeInstalled.forEach((plugin) => _p.push(plugin));
			toBeInstalled = [];
		},
		use(plugin) {
			if (!this._a && true) toBeInstalled.push(plugin);
			else _p.push(plugin);
			return this;
		},
		_p,
		_a: null,
		_e: scope,
		_s: /* @__PURE__ */ new Map(),
		state
	});
	if ((process$1.env.NODE_ENV !== "production" || false) && !(process$1.env.NODE_ENV === "test") && IS_CLIENT && typeof Proxy !== "undefined") pinia.use(devtoolsPlugin);
	return pinia;
}
/**
* Mutates in place `newState` with `oldState` to _hot update_ it. It will
* remove any key not existing in `newState` and recursively merge plain
* objects.
*
* @param newState - new state object to be patched
* @param oldState - old state that should be used to patch newState
* @returns - newState
*/
function patchObject(newState, oldState) {
	for (const key in oldState) {
		const subPatch = oldState[key];
		if (!(key in newState)) continue;
		const targetValue = newState[key];
		if (isPlainObject(targetValue) && isPlainObject(subPatch) && !isRef(subPatch) && !isReactive(subPatch)) newState[key] = patchObject(targetValue, subPatch);
		else newState[key] = subPatch;
	}
	return newState;
}
var noop = () => {};
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
	subscriptions.push(callback);
	const removeSubscription = () => {
		const idx = subscriptions.indexOf(callback);
		if (idx > -1) {
			subscriptions.splice(idx, 1);
			onCleanup();
		}
	};
	if (!detached && getCurrentScope()) onScopeDispose(removeSubscription);
	return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
	subscriptions.slice().forEach((callback) => {
		callback(...args);
	});
}
var fallbackRunWithContext = (fn) => fn();
/**
* Marks a function as an action for `$onAction`
* @internal
*/
var ACTION_MARKER = Symbol();
/**
* Action name symbol. Allows to add a name to an action after defining it
* @internal
*/
var ACTION_NAME = Symbol();
function mergeReactiveObjects(target, patchToApply) {
	if (target instanceof Map && patchToApply instanceof Map) patchToApply.forEach((value, key) => target.set(key, value));
	else if (target instanceof Set && patchToApply instanceof Set) patchToApply.forEach(target.add, target);
	for (const key in patchToApply) {
		if (!patchToApply.hasOwnProperty(key)) continue;
		const subPatch = patchToApply[key];
		const targetValue = target[key];
		if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) target[key] = mergeReactiveObjects(targetValue, subPatch);
		else target[key] = subPatch;
	}
	return target;
}
var skipHydrateSymbol = process$1.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : /* istanbul ignore next */ Symbol();
/**
* Returns whether a value should be hydrated
*
* @param obj - target variable
* @returns true if `obj` should be hydrated
*/
function shouldHydrate(obj) {
	return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
var { assign } = Object;
function isComputed(o) {
	return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
	const { state, actions, getters } = options;
	const initialState = pinia.state.value[id];
	let store;
	function setup() {
		if (!initialState && (!(process$1.env.NODE_ENV !== "production") || !hot)) pinia.state.value[id] = state ? state() : {};
		const localState = process$1.env.NODE_ENV !== "production" && hot ? toRefs(ref(state ? state() : {}).value) : toRefs(pinia.state.value[id]);
		return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
			if (process$1.env.NODE_ENV !== "production" && name in localState) console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`);
			computedGetters[name] = markRaw(computed(() => {
				setActivePinia(pinia);
				const store = pinia._s.get(id);
				return getters[name].call(store, store);
			}));
			return computedGetters;
		}, {}));
	}
	store = createSetupStore(id, setup, options, pinia, hot, true);
	return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
	let scope;
	const optionsForPlugin = assign({ actions: {} }, options);
	/* istanbul ignore if */
	if (process$1.env.NODE_ENV !== "production" && !pinia._e.active) throw new Error("Pinia destroyed");
	const $subscribeOptions = { deep: true };
	/* istanbul ignore else */
	if (process$1.env.NODE_ENV !== "production" && true) $subscribeOptions.onTrigger = (event) => {
		/* istanbul ignore else */
		if (isListening) debuggerEvents = event;
		else if (isListening == false && !store._hotUpdating)
 /* istanbul ignore else */
		if (Array.isArray(debuggerEvents)) debuggerEvents.push(event);
		else console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug.");
	};
	let isListening;
	let isSyncListening;
	let subscriptions = [];
	let actionSubscriptions = [];
	let debuggerEvents;
	const initialState = pinia.state.value[$id];
	if (!isOptionsStore && !initialState && (!(process$1.env.NODE_ENV !== "production") || !hot)) pinia.state.value[$id] = {};
	const hotState = ref({});
	let activeListener;
	function $patch(partialStateOrMutator) {
		let subscriptionMutation;
		isListening = isSyncListening = false;
		/* istanbul ignore else */
		if (process$1.env.NODE_ENV !== "production") debuggerEvents = [];
		if (typeof partialStateOrMutator === "function") {
			partialStateOrMutator(pinia.state.value[$id]);
			subscriptionMutation = {
				type: MutationType.patchFunction,
				storeId: $id,
				events: debuggerEvents
			};
		} else {
			mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
			subscriptionMutation = {
				type: MutationType.patchObject,
				payload: partialStateOrMutator,
				storeId: $id,
				events: debuggerEvents
			};
		}
		const myListenerId = activeListener = Symbol();
		nextTick().then(() => {
			if (activeListener === myListenerId) isListening = true;
		});
		isSyncListening = true;
		triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
	}
	const $reset = isOptionsStore ? function $reset() {
		const { state } = options;
		const newState = state ? state() : {};
		this.$patch(($state) => {
			assign($state, newState);
		});
	} : process$1.env.NODE_ENV !== "production" ? () => {
		throw new Error(`🍍: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
	} : noop;
	function $dispose() {
		scope.stop();
		subscriptions = [];
		actionSubscriptions = [];
		pinia._s.delete($id);
	}
	/**
	* Helper that wraps function so it can be tracked with $onAction
	* @param fn - action to wrap
	* @param name - name of the action
	*/
	const action = (fn, name = "") => {
		if (ACTION_MARKER in fn) {
			fn[ACTION_NAME] = name;
			return fn;
		}
		const wrappedAction = function() {
			setActivePinia(pinia);
			const args = Array.from(arguments);
			const afterCallbackList = [];
			const onErrorCallbackList = [];
			function after(callback) {
				afterCallbackList.push(callback);
			}
			function onError(callback) {
				onErrorCallbackList.push(callback);
			}
			triggerSubscriptions(actionSubscriptions, {
				args,
				name: wrappedAction[ACTION_NAME],
				store,
				after,
				onError
			});
			let ret;
			try {
				ret = fn.apply(this && this.$id === $id ? this : store, args);
			} catch (error) {
				triggerSubscriptions(onErrorCallbackList, error);
				throw error;
			}
			if (ret instanceof Promise) return ret.then((value) => {
				triggerSubscriptions(afterCallbackList, value);
				return value;
			}).catch((error) => {
				triggerSubscriptions(onErrorCallbackList, error);
				return Promise.reject(error);
			});
			triggerSubscriptions(afterCallbackList, ret);
			return ret;
		};
		wrappedAction[ACTION_MARKER] = true;
		wrappedAction[ACTION_NAME] = name;
		return wrappedAction;
	};
	const _hmrPayload = /* @__PURE__ */ markRaw({
		actions: {},
		getters: {},
		state: [],
		hotState
	});
	const partialStore = {
		_p: pinia,
		$id,
		$onAction: addSubscription.bind(null, actionSubscriptions),
		$patch,
		$reset,
		$subscribe(callback, options = {}) {
			const removeSubscription = addSubscription(subscriptions, callback, options.detached, () => stopWatcher());
			const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
				if (options.flush === "sync" ? isSyncListening : isListening) callback({
					storeId: $id,
					type: MutationType.direct,
					events: debuggerEvents
				}, state);
			}, assign({}, $subscribeOptions, options)));
			return removeSubscription;
		},
		$dispose
	};
	const store = reactive(process$1.env.NODE_ENV !== "production" || (process$1.env.NODE_ENV !== "production" || false) && !(process$1.env.NODE_ENV === "test") && IS_CLIENT ? assign({
		_hmrPayload,
		_customProperties: markRaw(/* @__PURE__ */ new Set())
	}, partialStore) : partialStore);
	pinia._s.set($id, store);
	const setupStore = (pinia._a && pinia._a.runWithContext || fallbackRunWithContext)(() => pinia._e.run(() => (scope = effectScope()).run(() => setup({ action }))));
	for (const key in setupStore) {
		const prop = setupStore[key];
		if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
			if (process$1.env.NODE_ENV !== "production" && hot) set(hotState.value, key, toRef(setupStore, key));
			else if (!isOptionsStore) {
				if (initialState && shouldHydrate(prop)) if (isRef(prop)) prop.value = initialState[key];
				else mergeReactiveObjects(prop, initialState[key]);
				pinia.state.value[$id][key] = prop;
			}
			/* istanbul ignore else */
			if (process$1.env.NODE_ENV !== "production") _hmrPayload.state.push(key);
		} else if (typeof prop === "function") {
			setupStore[key] = process$1.env.NODE_ENV !== "production" && hot ? prop : action(prop, key);
			/* istanbul ignore else */
			if (process$1.env.NODE_ENV !== "production") _hmrPayload.actions[key] = prop;
			optionsForPlugin.actions[key] = prop;
		} else if (process$1.env.NODE_ENV !== "production") {
			if (isComputed(prop)) {
				_hmrPayload.getters[key] = isOptionsStore ? options.getters[key] : prop;
				if (IS_CLIENT) (setupStore._getters || (setupStore._getters = markRaw([]))).push(key);
			}
		}
	}
	assign(store, setupStore);
	assign(toRaw(store), setupStore);
	Object.defineProperty(store, "$state", {
		get: () => process$1.env.NODE_ENV !== "production" && hot ? hotState.value : pinia.state.value[$id],
		set: (state) => {
			/* istanbul ignore if */
			if (process$1.env.NODE_ENV !== "production" && hot) throw new Error("cannot set hotState");
			$patch(($state) => {
				assign($state, state);
			});
		}
	});
	/* istanbul ignore else */
	if (process$1.env.NODE_ENV !== "production") store._hotUpdate = markRaw((newStore) => {
		store._hotUpdating = true;
		newStore._hmrPayload.state.forEach((stateKey) => {
			if (stateKey in store.$state) {
				const newStateTarget = newStore.$state[stateKey];
				const oldStateSource = store.$state[stateKey];
				if (typeof newStateTarget === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) patchObject(newStateTarget, oldStateSource);
				else newStore.$state[stateKey] = oldStateSource;
			}
			set(store, stateKey, toRef(newStore.$state, stateKey));
		});
		Object.keys(store.$state).forEach((stateKey) => {
			if (!(stateKey in newStore.$state)) del(store, stateKey);
		});
		isListening = false;
		isSyncListening = false;
		pinia.state.value[$id] = toRef(newStore._hmrPayload, "hotState");
		isSyncListening = true;
		nextTick().then(() => {
			isListening = true;
		});
		for (const actionName in newStore._hmrPayload.actions) {
			const actionFn = newStore[actionName];
			set(store, actionName, action(actionFn, actionName));
		}
		for (const getterName in newStore._hmrPayload.getters) {
			const getter = newStore._hmrPayload.getters[getterName];
			set(store, getterName, isOptionsStore ? computed(() => {
				setActivePinia(pinia);
				return getter.call(store, store);
			}) : getter);
		}
		Object.keys(store._hmrPayload.getters).forEach((key) => {
			if (!(key in newStore._hmrPayload.getters)) del(store, key);
		});
		Object.keys(store._hmrPayload.actions).forEach((key) => {
			if (!(key in newStore._hmrPayload.actions)) del(store, key);
		});
		store._hmrPayload = newStore._hmrPayload;
		store._getters = newStore._getters;
		store._hotUpdating = false;
	});
	if ((process$1.env.NODE_ENV !== "production" || false) && !(process$1.env.NODE_ENV === "test") && IS_CLIENT) {
		const nonEnumerable = {
			writable: true,
			configurable: true,
			enumerable: false
		};
		[
			"_p",
			"_hmrPayload",
			"_getters",
			"_customProperties"
		].forEach((p) => {
			Object.defineProperty(store, p, assign({ value: store[p] }, nonEnumerable));
		});
	}
	pinia._p.forEach((extender) => {
		/* istanbul ignore else */
		if ((process$1.env.NODE_ENV !== "production" || false) && !(process$1.env.NODE_ENV === "test") && IS_CLIENT) {
			const extensions = scope.run(() => extender({
				store,
				app: pinia._a,
				pinia,
				options: optionsForPlugin
			}));
			Object.keys(extensions || {}).forEach((key) => store._customProperties.add(key));
			assign(store, extensions);
		} else assign(store, scope.run(() => extender({
			store,
			app: pinia._a,
			pinia,
			options: optionsForPlugin
		})));
	});
	if (process$1.env.NODE_ENV !== "production" && store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
	if (initialState && isOptionsStore && options.hydrate) options.hydrate(store.$state, initialState);
	isListening = true;
	isSyncListening = true;
	return store;
}
/*! #__NO_SIDE_EFFECTS__ */
function defineStore(idOrOptions, setup, setupOptions) {
	let id;
	let options;
	const isSetupStore = typeof setup === "function";
	if (typeof idOrOptions === "string") {
		id = idOrOptions;
		options = isSetupStore ? setupOptions : setup;
	} else {
		options = idOrOptions;
		id = idOrOptions.id;
		if (process$1.env.NODE_ENV !== "production" && typeof id !== "string") throw new Error(`[🍍]: "defineStore()" must be passed a store id as its first argument.`);
	}
	function useStore(pinia, hot) {
		const hasContext = hasInjectionContext();
		pinia = (process$1.env.NODE_ENV === "test" && activePinia && activePinia._testing ? null : pinia) || (hasContext ? inject(piniaSymbol, null) : null);
		if (pinia) setActivePinia(pinia);
		if (process$1.env.NODE_ENV !== "production" && !activePinia) throw new Error("[🍍]: \"getActivePinia()\" was called but there was no active Pinia. Are you trying to use a store before calling \"app.use(pinia)\"?\nSee https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.\nThis will fail in production.");
		pinia = activePinia;
		if (!pinia._s.has(id)) {
			if (isSetupStore) createSetupStore(id, setup, options, pinia);
			else createOptionsStore(id, options, pinia);
			/* istanbul ignore else */
			if (process$1.env.NODE_ENV !== "production") useStore._pinia = pinia;
		}
		const store = pinia._s.get(id);
		if (process$1.env.NODE_ENV !== "production" && hot) {
			const hotId = "__hot:" + id;
			const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign({}, options), pinia, true);
			hot._hotUpdate(newStore);
			delete pinia.state.value[hotId];
			pinia._s.delete(hotId);
		}
		if (process$1.env.NODE_ENV !== "production" && IS_CLIENT) {
			const currentInstance = getCurrentInstance();
			if (currentInstance && currentInstance.proxy && !hot) {
				const vm = currentInstance.proxy;
				const cache = "_pStores" in vm ? vm._pStores : vm._pStores = {};
				cache[id] = store;
			}
		}
		return store;
	}
	useStore.$id = id;
	return useStore;
}
//#endregion
export { defineStore as n, createPinia as t };
