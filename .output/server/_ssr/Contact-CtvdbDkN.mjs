import { o as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { l as profile, t as Reveal } from "./Reveal-rwHvY0UL.mjs";
import { a as Mail, l as ArrowUpRight, o as Linkedin } from "../_libs/lucide-react.mjs";
import { t as Magnetic } from "./Magnetic-BI7i_mLA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Contact-CtvdbDkN.js
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative mx-auto max-w-7xl px-6 py-24 md:py-40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground",
				children: "— 07 / Contact"
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .05,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-6 font-display text-[12vw] leading-[0.95] md:text-[8vw]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Let's build"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-accent-gradient",
							children: "something"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "unforgettable."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .2,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex flex-wrap items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${profile.email}`,
							className: "group inline-flex items-center gap-3 rounded-full bg-foreground text-background px-6 py-4 text-sm font-medium transition-opacity hover:opacity-80",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }),
								profile.email,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
							]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: profile.social.linkedin,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "group inline-flex items-center gap-3 rounded-full border border-border px-6 py-4 text-sm font-medium transition-colors hover:border-accent hover:text-accent",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-4 w-4" }),
								"LinkedIn",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
							]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent",
									children: "●"
								}),
								" ",
								profile.availability
							]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { Contact };
