globalThis.__nitro_main__ = import.meta.url;
import { a as toEventHandler, i as defineLazyEventHandler, n as HTTPError, r as defineHandler, s as NodeResponse, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/Achievements-CC7Vb4o5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cef-cOsqr0vQS8WGD/aVRGQTgGWxIF8\"",
		"mtime": "2026-07-03T16:25:43.011Z",
		"size": 3311,
		"path": "../../static/assets/Achievements-CC7Vb4o5.js"
	},
	"/assets/Education-BfdHkUvO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"87f-kh8Ex/dRTtIkgn+4I8s8hq1a76g\"",
		"mtime": "2026-07-03T16:25:43.011Z",
		"size": 2175,
		"path": "../../static/assets/Education-BfdHkUvO.js"
	},
	"/assets/Contact-asy7uMDg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8af-tTa3a0a1yr5uFT5flwLO76MRIhg\"",
		"mtime": "2026-07-03T16:25:43.011Z",
		"size": 2223,
		"path": "../../static/assets/Contact-asy7uMDg.js"
	},
	"/assets/Experience-DgSYWoX5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b2-hafaaledf1RYCWqlj5Ksl+COuao\"",
		"mtime": "2026-07-03T16:25:43.011Z",
		"size": 1714,
		"path": "../../static/assets/Experience-DgSYWoX5.js"
	},
	"/assets/Magnetic-D6l_fpUq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"38f-NlomsLIPvNRK93thOHo1aB8Cglg\"",
		"mtime": "2026-07-03T16:25:43.011Z",
		"size": 911,
		"path": "../../static/assets/Magnetic-D6l_fpUq.js"
	},
	"/assets/Projects-Cr7TB84n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10b5-8XMGr3ckraBLPr/AEsmFHyE5+zY\"",
		"mtime": "2026-07-03T16:25:43.011Z",
		"size": 4277,
		"path": "../../static/assets/Projects-Cr7TB84n.js"
	},
	"/assets/createLucideIcon-CLDvw0WB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"386-GhzXH8g976LXwnlO/BM4aQwbM2M\"",
		"mtime": "2026-07-03T16:25:43.011Z",
		"size": 902,
		"path": "../../static/assets/createLucideIcon-CLDvw0WB.js"
	},
	"/assets/Reveal-Bmv_po1Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f510-k600MvUkK7CI/OlCcRS1w8EhaME\"",
		"mtime": "2026-07-03T16:25:43.011Z",
		"size": 128272,
		"path": "../../static/assets/Reveal-Bmv_po1Z.js"
	},
	"/assets/use-spring-iLUXm6vu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9da-4vDkIkmKjhA0i03bwzpDB2vDdV8\"",
		"mtime": "2026-07-03T16:25:43.012Z",
		"size": 2522,
		"path": "../../static/assets/use-spring-iLUXm6vu.js"
	},
	"/assets/styles-DPb1z7YZ.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"18287-C4mc16g+I2ANRq7ssy1DjG3Yp3Y\"",
		"mtime": "2026-07-03T16:25:43.012Z",
		"size": 98951,
		"path": "../../static/assets/styles-DPb1z7YZ.css"
	},
	"/assets/index-TDaA76u5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54574-xpRA5Xd4mIcqP3VKjK1Gah7XYcE\"",
		"mtime": "2026-07-03T16:25:43.011Z",
		"size": 345460,
		"path": "../../static/assets/index-TDaA76u5.js"
	},
	"/assets/routes-DasboZA4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e3183-DGk/gp5gCJbYaaTn2tDzEppbF6g\"",
		"mtime": "2026-07-03T16:25:43.011Z",
		"size": 930179,
		"path": "../../static/assets/routes-DasboZA4.js"
	},
	"/creator-portrait.png": {
		"type": "image/png",
		"etag": "\"1dcb8d-hAt3tf48lnAkqYvCSYHYu+KQXd4\"",
		"mtime": "2026-07-03T16:25:43.281Z",
		"size": 1952653,
		"path": "../../static/creator-portrait.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_FRn1nj = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_FRn1nj
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/vercel/runtime/isr.mjs
var ISR_URL_PARAM = "__isr_route";
function isrRouteRewrite(reqUrl, xNowRouteMatches) {
	if (xNowRouteMatches) {
		const isrURL = new URLSearchParams(xNowRouteMatches).get(ISR_URL_PARAM);
		if (isrURL) return [decodeURIComponent(isrURL), ""];
	} else {
		const queryIndex = reqUrl.indexOf("?");
		if (queryIndex !== -1) {
			const params = new URLSearchParams(reqUrl.slice(queryIndex + 1));
			const isrURL = params.get(ISR_URL_PARAM);
			if (isrURL) {
				params.delete(ISR_URL_PARAM);
				return [decodeURIComponent(isrURL), params.toString()];
			}
		}
	}
}
//#endregion
//#region node_modules/nitro/dist/presets/vercel/runtime/vercel.web.mjs
var nitroApp = useNitroApp();
var vercel_web_default = { fetch(req, context) {
	const isrURL = isrRouteRewrite(req.url, req.headers.get("x-now-route-matches"));
	if (isrURL) {
		const { routeRules } = getRouteRules("", isrURL[0]);
		if (routeRules?.isr) req = new Request(new URL(isrURL[0] + (isrURL[1] ? `?${isrURL[1]}` : ""), req.url).href, req);
	}
	req.runtime ??= { name: "vercel" };
	req.runtime.vercel = { context };
	let ip;
	Object.defineProperty(req, "ip", { get() {
		const h = req.headers.get("x-forwarded-for");
		return ip ??= h?.split(",").shift()?.trim();
	} });
	req.waitUntil = context?.waitUntil;
	return nitroApp.fetch(req);
} };
//#endregion
export { vercel_web_default as default };
