import { o as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { a as education, t as Reveal } from "./Reveal-rwHvY0UL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Education-r7HuORH5.js
var import_jsx_runtime = require_jsx_runtime();
function Education() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "education",
		className: "relative mx-auto max-w-7xl px-6 py-24 md:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground",
				children: "— 06 / Education"
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-6 max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl text-gradient",
					children: [
						"Where the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-accent-gradient",
							children: "curiosity"
						}),
						" began."
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-3 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-12",
					children: education.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `relative grid grid-cols-[24px_1fr] gap-6 md:grid-cols-2 md:gap-16 ${i % 2 ? "md:[&>div:first-of-type]:order-2" : ""}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative md:hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-1.5 top-2 h-3 w-3 rounded-full bg-accent shadow-[0_0_20px_var(--glow)]" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `hidden md:block ${i % 2 ? "text-left" : "text-right"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground",
										children: e.period
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute -left-[34px] top-2 hidden md:block h-3 w-3 rounded-full bg-accent shadow-[0_0_20px_var(--glow)] md:left-auto md:-ml-[7px]",
											style: i % 2 ? { right: "calc(100% + 16px)" } : { left: "-34px" }
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground md:hidden",
											children: e.period
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 font-display text-3xl md:text-4xl text-gradient",
											children: e.school
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-muted-foreground",
											children: e.degree
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 max-w-md text-sm text-muted-foreground/80",
											children: e.note
										})
									]
								})
							]
						})
					}, e.school))
				})]
			})
		]
	});
}
//#endregion
export { Education };
