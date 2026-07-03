globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
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
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/Achievements-Desaa7CO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cef-n7QCCiRr6oUB+w3G1zM3FoaP0us\"",
		"mtime": "2026-07-03T11:40:57.380Z",
		"size": 3311,
		"path": "../public/assets/Achievements-Desaa7CO.js"
	},
	"/assets/Contact-BD3649Ve.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8af-yWLDyA2XQaafQ0FCJL1DELU9lF8\"",
		"mtime": "2026-07-03T11:40:57.380Z",
		"size": 2223,
		"path": "../public/assets/Contact-BD3649Ve.js"
	},
	"/assets/Education-DLze6FR2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"87f-MSf1bHFsBk569jvUuh7dQNAJ1hg\"",
		"mtime": "2026-07-03T11:40:57.380Z",
		"size": 2175,
		"path": "../public/assets/Education-DLze6FR2.js"
	},
	"/assets/Experience-D2MIiLTt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b2-AVfwmaen6h4ySxuQRKFM/Dxf6Q4\"",
		"mtime": "2026-07-03T11:40:57.380Z",
		"size": 1714,
		"path": "../public/assets/Experience-D2MIiLTt.js"
	},
	"/assets/Magnetic-BvuRwdYk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"38f-x64YoSEE5yWMkp1IcmZILnCl6eo\"",
		"mtime": "2026-07-03T11:40:57.380Z",
		"size": 911,
		"path": "../public/assets/Magnetic-BvuRwdYk.js"
	},
	"/assets/Projects-BOTVN7oc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10b5-u19tSYpn8VS/fGpioEDtL+jga3k\"",
		"mtime": "2026-07-03T11:40:57.380Z",
		"size": 4277,
		"path": "../public/assets/Projects-BOTVN7oc.js"
	},
	"/assets/createLucideIcon-CJP9CUwt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"386-x8I1CdnGXFRIgRu2HiW5c2+ApqY\"",
		"mtime": "2026-07-03T11:40:57.380Z",
		"size": 902,
		"path": "../public/assets/createLucideIcon-CJP9CUwt.js"
	},
	"/assets/Reveal-CXLeUiLE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f510-z8ZRk1XhDGZXCKoQxB4iyry88J0\"",
		"mtime": "2026-07-03T11:40:57.380Z",
		"size": 128272,
		"path": "../public/assets/Reveal-CXLeUiLE.js"
	},
	"/assets/use-spring-DSKUj19w.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9da-kWAmUnONR/XwTbNE4hmVgzOPTtA\"",
		"mtime": "2026-07-03T11:40:57.380Z",
		"size": 2522,
		"path": "../public/assets/use-spring-DSKUj19w.js"
	},
	"/assets/styles-BuYCYK5h.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"182da-Sr3fegSGkBhiT+C7q6JuecUYvi0\"",
		"mtime": "2026-07-03T11:40:57.380Z",
		"size": 99034,
		"path": "../public/assets/styles-BuYCYK5h.css"
	},
	"/assets/index-D1UHXtly.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54574-9TXUgrRby0w5GvnsmGsqJxPZ43E\"",
		"mtime": "2026-07-03T11:40:57.379Z",
		"size": 345460,
		"path": "../public/assets/index-D1UHXtly.js"
	},
	"/assets/routes-DhbuTPdm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e3183-3fspIPnEW42cg6nWilSzMIIXsbI\"",
		"mtime": "2026-07-03T11:40:57.380Z",
		"size": 930179,
		"path": "../public/assets/routes-DhbuTPdm.js"
	},
	"/creator-portrait.png": {
		"type": "image/png",
		"etag": "\"1dcb8d-hAt3tf48lnAkqYvCSYHYu+KQXd4\"",
		"mtime": "2026-07-03T11:40:57.649Z",
		"size": 1952653,
		"path": "../public/creator-portrait.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
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
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
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
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
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
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
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
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
