import { o as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { o as experience, t as Reveal } from "./Reveal-rwHvY0UL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Experience-un8QLXPd.js
var import_jsx_runtime = require_jsx_runtime();
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "experience",
		className: "relative mx-auto max-w-7xl px-6 py-24 md:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground",
				children: "— 03 / Experience"
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-6 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl text-gradient",
					children: "Selected chapters from a long apprenticeship."
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 divide-y divide-border/60 border-y border-border/60",
				children: experience.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#",
						className: "group grid grid-cols-1 gap-4 py-8 transition-colors hover:bg-white/[0.02] md:grid-cols-[180px_1fr_auto] md:items-center md:gap-10 md:px-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground",
								children: e.period
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-baseline gap-x-4 gap-y-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-3xl md:text-4xl group-hover:text-accent-gradient transition-colors",
										children: e.company
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-sm text-muted-foreground",
										children: ["— ", e.role]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-2xl text-muted-foreground",
									children: e.description
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2 md:justify-end",
								children: e.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full glass px-3 py-1 text-[11px] text-muted-foreground",
									children: t
								}, t))
							})
						]
					})
				}, e.company))
			})
		]
	});
}
//#endregion
export { Experience };
