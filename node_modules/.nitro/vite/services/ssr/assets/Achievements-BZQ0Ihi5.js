import { c as hackathons, i as achievements, t as Reveal } from "./Reveal-rwHvY0UL.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Award, Trophy, Zap } from "lucide-react";
//#region src/components/sections/Achievements.tsx
function Achievements() {
	return /* @__PURE__ */ jsx("section", {
		id: "achievements",
		className: "relative mx-auto max-w-7xl px-6 py-24 md:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid gap-16 lg:grid-cols-2",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("p", {
					className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground",
					children: "— 05 / Achievements"
				}) }),
				/* @__PURE__ */ jsx(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ jsx("h2", {
						className: "mt-6 font-display text-4xl leading-tight md:text-6xl text-gradient",
						children: "Recognition & certifications."
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-10 space-y-3",
					children: achievements.map((a, i) => /* @__PURE__ */ jsx(Reveal, {
						delay: i * .06,
						children: /* @__PURE__ */ jsxs("div", {
							className: "group flex items-center gap-5 rounded-2xl glass px-5 py-4 hover:bg-white/5 transition-colors",
							children: [
								/* @__PURE__ */ jsx(Award, { className: "h-5 w-5 text-accent shrink-0" }),
								/* @__PURE__ */ jsxs("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ jsx("p", {
										className: "truncate font-display text-lg",
										children: a.title
									}), /* @__PURE__ */ jsx("p", {
										className: "font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground",
										children: a.org
									})]
								}),
								/* @__PURE__ */ jsx("span", {
									className: "font-mono text-xs text-muted-foreground",
									children: a.year
								})
							]
						})
					}, a.title))
				})
			] }), /* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("p", {
					className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground",
					children: "— Hackathons"
				}) }),
				/* @__PURE__ */ jsx(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ jsxs("h2", {
						className: "mt-6 font-display text-4xl leading-tight md:text-6xl text-gradient",
						children: [
							"48-hour ",
							/* @__PURE__ */ jsx("span", {
								className: "italic text-accent-gradient",
								children: "sprints"
							}),
							"."
						]
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2",
					children: hackathons.map((h, i) => /* @__PURE__ */ jsx(Reveal, {
						delay: i * .06,
						children: /* @__PURE__ */ jsxs("div", {
							className: "group relative overflow-hidden rounded-2xl glass-strong p-6 hover:bg-white/5 transition-colors",
							children: [
								/* @__PURE__ */ jsx(Zap, { className: "h-5 w-5 text-accent" }),
								/* @__PURE__ */ jsx("p", {
									className: "mt-6 font-display text-2xl",
									children: h.name
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: h.result
								}),
								/* @__PURE__ */ jsx("span", {
									className: "absolute right-5 top-5 font-mono text-xs text-muted-foreground",
									children: h.year
								}),
								/* @__PURE__ */ jsx(Trophy, { className: "absolute -bottom-4 -right-4 h-24 w-24 text-white/[0.03] group-hover:text-accent/10 transition-colors" })
							]
						})
					}, h.name))
				})
			] })]
		})
	});
}
//#endregion
export { Achievements };
