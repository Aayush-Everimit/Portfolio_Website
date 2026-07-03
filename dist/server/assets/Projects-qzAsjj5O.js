import { s as experiments, t as Reveal, u as projects } from "./Reveal-rwHvY0UL.js";
import { useRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
//#region src/components/sections/Projects.tsx
function TiltCard({ p, index }) {
	const ref = useRef(null);
	const rx = useMotionValue(0);
	const ry = useMotionValue(0);
	const srx = useSpring(rx, {
		stiffness: 120,
		damping: 16
	});
	const sry = useSpring(ry, {
		stiffness: 120,
		damping: 16
	});
	const trX = useTransform(srx, (v) => `${v}deg`);
	const trY = useTransform(sry, (v) => `${v}deg`);
	return /* @__PURE__ */ jsx(Reveal, {
		delay: index * .05,
		children: /* @__PURE__ */ jsxs(motion.a, {
			href: p.link,
			target: "_blank",
			rel: "noopener noreferrer",
			ref,
			onMouseMove: (e) => {
				const el = ref.current;
				if (!el) return;
				const r = el.getBoundingClientRect();
				const px = (e.clientX - r.left) / r.width - .5;
				const py = (e.clientY - r.top) / r.height - .5;
				ry.set(px * 8);
				rx.set(-py * 8);
			},
			onMouseLeave: () => {
				rx.set(0);
				ry.set(0);
			},
			style: {
				rotateX: trX,
				rotateY: trY,
				transformPerspective: 1200
			},
			className: "group relative block overflow-hidden rounded-3xl glass-strong p-6 sm:p-8 h-full min-h-[320px]",
			"data-cursor": "hover",
			children: [
				/* @__PURE__ */ jsx("div", { className: `pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br ${p.accent} opacity-60 blur-2xl transition-opacity duration-700 group-hover:opacity-100` }),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent" }),
				/* @__PURE__ */ jsx("div", { className: "noise-overlay" }),
				/* @__PURE__ */ jsxs("div", {
					className: "relative flex h-full flex-col justify-between",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-start justify-between",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
							children: p.category
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-1 font-mono text-xs text-muted-foreground",
							children: p.year
						})] }), /* @__PURE__ */ jsx("span", {
							className: "grid h-10 w-10 place-items-center rounded-full glass transition-transform duration-500 group-hover:rotate-45",
							children: /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4" })
						})]
					}), /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("h3", {
							className: "font-display text-3xl md:text-4xl text-gradient",
							children: p.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 max-w-md text-sm text-muted-foreground md:text-base",
							children: p.description
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-5 flex flex-wrap gap-2",
							children: p.tags.map((t) => /* @__PURE__ */ jsx("span", {
								className: "rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground",
								children: t
							}, t))
						})
					] })]
				})
			]
		})
	});
}
function Projects() {
	return /* @__PURE__ */ jsxs("section", {
		id: "work",
		className: "relative mx-auto max-w-7xl px-6 py-24 md:py-32",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("p", {
					className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground",
					children: "— 04 / Selected work"
				}) }), /* @__PURE__ */ jsx(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ jsxs("h2", {
						className: "mt-6 max-w-3xl font-display text-5xl leading-[1.02] md:text-7xl text-gradient",
						children: [
							"Things I've built",
							/* @__PURE__ */ jsx("br", {}),
							"with care."
						]
					})
				})] }), /* @__PURE__ */ jsx(Reveal, {
					delay: .2,
					children: /* @__PURE__ */ jsxs("a", {
						href: "#",
						className: "inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground",
						children: ["See archive ", /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-3.5 w-3.5" })]
					})
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-16 grid grid-cols-1 gap-6 md:grid-cols-2",
				children: projects.map((p, i) => /* @__PURE__ */ jsx(TiltCard, {
					p,
					index: i
				}, p.title))
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-12 flex justify-center",
				children: /* @__PURE__ */ jsx(Reveal, {
					delay: .4,
					children: /* @__PURE__ */ jsxs("div", {
						className: "relative overflow-hidden rounded-3xl glass p-8 md:p-10 w-full max-w-2xl border border-white/5 group",
						children: [
							/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" }),
							/* @__PURE__ */ jsx("h3", {
								className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8 text-center",
								children: "— Experiments & Minor Projects"
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4 text-center sm:text-left",
								children: experiments.map((exp, i) => /* @__PURE__ */ jsxs("li", {
									className: "font-display text-lg md:text-xl text-foreground/80 hover:text-foreground transition-colors flex items-center justify-center sm:justify-start gap-3",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "text-accent text-sm",
											children: "●"
										}),
										" ",
										exp
									]
								}, i))
							})
						]
					})
				})
			})
		]
	});
}
//#endregion
export { Projects };
