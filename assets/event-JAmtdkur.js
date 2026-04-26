//#region node_modules/quasar/src/utils/event/event.js
var listenOpts = {
	hasPassive: false,
	passiveCapture: true,
	notPassiveCapture: true
};
try {
	const opts = Object.defineProperty({}, "passive", { get() {
		Object.assign(listenOpts, {
			hasPassive: true,
			passive: { passive: true },
			notPassive: { passive: false },
			passiveCapture: {
				passive: true,
				capture: true
			},
			notPassiveCapture: {
				passive: false,
				capture: true
			}
		});
	} });
	window.addEventListener("qtest", null, opts);
	window.removeEventListener("qtest", null, opts);
} catch {}
function noop() {}
function leftClick(e) {
	return e.button === 0;
}
function position(e) {
	if (e.touches && e.touches[0]) e = e.touches[0];
	else if (e.changedTouches && e.changedTouches[0]) e = e.changedTouches[0];
	else if (e.targetTouches && e.targetTouches[0]) e = e.targetTouches[0];
	return {
		top: e.clientY,
		left: e.clientX
	};
}
function getEventPath(e) {
	if (e.path) return e.path;
	if (e.composedPath) return e.composedPath();
	const path = [];
	let el = e.target;
	while (el) {
		path.push(el);
		if (el.tagName === "HTML") {
			path.push(document);
			path.push(window);
			return path;
		}
		el = el.parentElement;
	}
}
function stop(e) {
	e.stopPropagation();
}
function prevent(e) {
	if (e.cancelable !== false) e.preventDefault();
}
function stopAndPrevent(e) {
	if (e.cancelable !== false) e.preventDefault();
	e.stopPropagation();
}
function preventDraggable(el, status) {
	if (el === void 0 || status === true && el.__dragPrevented === true) return;
	const fn = status === true ? (element) => {
		element.__dragPrevented = true;
		element.addEventListener("dragstart", prevent, listenOpts.notPassiveCapture);
	} : (element) => {
		delete element.__dragPrevented;
		element.removeEventListener("dragstart", prevent, listenOpts.notPassiveCapture);
	};
	el.querySelectorAll("a, img").forEach(fn);
}
function addEvt(ctx, targetName, events) {
	const name = `__q_${targetName}_evt`;
	ctx[name] = ctx[name] !== void 0 ? ctx[name].concat(events) : events;
	events.forEach((evt) => {
		evt[0].addEventListener(evt[1], ctx[evt[2]], listenOpts[evt[3]]);
	});
}
function cleanEvt(ctx, targetName) {
	const name = `__q_${targetName}_evt`;
	if (ctx[name] !== void 0) {
		ctx[name].forEach((evt) => {
			evt[0].removeEventListener(evt[1], ctx[evt[2]], listenOpts[evt[3]]);
		});
		ctx[name] = void 0;
	}
}
//#endregion
export { listenOpts as a, prevent as c, stopAndPrevent as d, leftClick as i, preventDraggable as l, cleanEvt as n, noop as o, getEventPath as r, position as s, addEvt as t, stop as u };
