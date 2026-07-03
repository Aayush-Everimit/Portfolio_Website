import { d as skills, f as techStack, l as profile, n as RevealText, r as about, t as Reveal } from "./Reveal-rwHvY0UL.js";
import { t as Magnetic } from "./Magnetic-BI7i_mLA.js";
import { Suspense, lazy, useEffect, useMemo, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import Lenis from "lenis";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
//#region src/components/SmoothScroll.tsx
function SmoothScroll({ children }) {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.15,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true
		});
		let raf = 0;
		const tick = (time) => {
			lenis.raf(time);
			raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => {
			cancelAnimationFrame(raf);
			lenis.destroy();
		};
	}, []);
	return /* @__PURE__ */ jsx(Fragment, { children });
}
//#endregion
//#region src/components/Cursor.tsx
function Cursor() {
	const dot = useRef(null);
	const ring = useRef(null);
	useEffect(() => {
		if (typeof window === "undefined") return;
		if (window.matchMedia("(pointer: coarse)").matches) return;
		let mx = 0, my = 0, rx = 0, ry = 0;
		const move = (e) => {
			mx = e.clientX;
			my = e.clientY;
			if (dot.current) dot.current.style.transform = `translate3d(${mx - 4}px, ${my - 4}px, 0)`;
		};
		const loop = () => {
			rx += (mx - rx) * .18;
			ry += (my - ry) * .18;
			if (ring.current) ring.current.style.transform = `translate3d(${rx - 20}px, ${ry - 20}px, 0)`;
			raf = requestAnimationFrame(loop);
		};
		let raf = requestAnimationFrame(loop);
		const over = (e) => {
			const interactive = e.target.closest("a, button, [data-cursor='hover']");
			if (!ring.current) return;
			if (interactive) {
				ring.current.style.width = "70px";
				ring.current.style.height = "70px";
				ring.current.style.background = "color-mix(in oklab, var(--glow) 14%, transparent)";
				ring.current.style.borderColor = "transparent";
			} else {
				ring.current.style.width = "40px";
				ring.current.style.height = "40px";
				ring.current.style.background = "transparent";
				ring.current.style.borderColor = "color-mix(in oklab, var(--foreground) 40%, transparent)";
			}
		};
		window.addEventListener("mousemove", move);
		window.addEventListener("mouseover", over);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("mousemove", move);
			window.removeEventListener("mouseover", over);
		};
	}, []);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		ref: dot,
		className: "cursor-dot hidden md:block",
		"aria-hidden": true
	}), /* @__PURE__ */ jsx("div", {
		ref: ring,
		className: "cursor-ring hidden md:block",
		"aria-hidden": true
	})] });
}
//#endregion
//#region src/components/Loader.tsx
function Loader() {
	const [count, setCount] = useState(0);
	const [gone, setGone] = useState(false);
	useEffect(() => {
		const start = performance.now();
		const dur = 1600;
		let raf = 0;
		const tick = (t) => {
			const p = Math.min(1, (t - start) / dur);
			setCount(Math.round(p * 100));
			if (p < 1) raf = requestAnimationFrame(tick);
			else setTimeout(() => setGone(true), 400);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, []);
	return /* @__PURE__ */ jsx(AnimatePresence, { children: !gone && /* @__PURE__ */ jsxs(motion.div, {
		className: "fixed inset-0 z-[200] flex items-end justify-between px-6 py-8 md:px-12 md:py-10 bg-background",
		initial: { y: 0 },
		exit: { y: "-100%" },
		transition: {
			duration: 1,
			ease: [
				.85,
				0,
				.15,
				1
			]
		},
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground",
				children: "Aayush / Folio v2026"
			}),
			/* @__PURE__ */ jsx(motion.span, {
				className: "font-display text-[18vw] leading-none md:text-[10vw] text-gradient",
				initial: {
					opacity: 0,
					y: 12
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { duration: .15 },
				children: String(count).padStart(3, "0")
			}, count),
			/* @__PURE__ */ jsx("span", {
				className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground hidden md:block",
				children: "Booting experience…"
			})
		]
	}) });
}
//#endregion
//#region src/components/Navbar.tsx
var links = [
	{
		label: "Work",
		href: "#work"
	},
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Stack",
		href: "#skills"
	},
	{
		label: "Experience",
		href: "#experience"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 30);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(motion.header, {
		initial: {
			y: -40,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			delay: 2,
			duration: .8,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`,
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-6",
			children: [
				/* @__PURE__ */ jsxs("a", {
					href: "#top",
					className: "group flex items-center gap-2",
					children: [/* @__PURE__ */ jsx("span", {
						className: "grid h-9 w-9 place-items-center rounded-full glass-strong",
						children: /* @__PURE__ */ jsx("span", {
							className: "font-display text-base",
							children: "A"
						})
					}), /* @__PURE__ */ jsx("span", {
						className: "hidden sm:block font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground group-hover:text-foreground transition-colors",
						children: "aayush.dev"
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: `hidden md:flex items-center gap-1 rounded-full px-2 py-2 transition-all ${scrolled ? "glass-strong" : "glass"}`,
					children: links.map((l) => /* @__PURE__ */ jsx("a", {
						href: l.href,
						className: "px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-white/5",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ jsx(Magnetic, { children: /* @__PURE__ */ jsxs("a", {
					href: "#contact",
					className: "hidden md:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-accent transition-colors",
					children: ["Let's talk", /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-background/60" })]
				}) }),
				/* @__PURE__ */ jsx("button", {
					"aria-label": "Open menu",
					className: "md:hidden grid h-10 w-10 place-items-center rounded-full glass",
					onClick: () => setOpen(true),
					children: /* @__PURE__ */ jsx(Menu, { className: "h-4 w-4" })
				})
			]
		})
	}), /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsx(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-[60] md:hidden",
		children: /* @__PURE__ */ jsxs(motion.div, {
			initial: { y: "-100%" },
			animate: { y: 0 },
			exit: { y: "-100%" },
			transition: {
				duration: .6,
				ease: [
					.85,
					0,
					.15,
					1
				]
			},
			className: "absolute inset-0 bg-background/95 backdrop-blur-2xl flex flex-col px-6 pt-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ jsx("span", {
					className: "font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground",
					children: "Menu"
				}), /* @__PURE__ */ jsx("button", {
					"aria-label": "Close",
					onClick: () => setOpen(false),
					className: "grid h-10 w-10 place-items-center rounded-full glass",
					children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
				})]
			}), /* @__PURE__ */ jsx("nav", {
				className: "mt-16 flex flex-col gap-4",
				children: links.map((l, i) => /* @__PURE__ */ jsx(motion.a, {
					href: l.href,
					onClick: () => setOpen(false),
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: .1 + i * .05 },
					className: "font-display text-5xl text-gradient",
					children: l.label
				}, l.href))
			})]
		})
	}) })] });
}
//#endregion
//#region src/components/HeroScene.tsx
function Orb() {
	const mesh = useRef(null);
	const inner = useRef(null);
	useFrame((state) => {
		const t = state.clock.getElapsedTime();
		if (mesh.current) {
			mesh.current.rotation.x = t * .08;
			mesh.current.rotation.y = t * .12;
		}
		if (inner.current) {
			inner.current.rotation.x = -t * .05;
			inner.current.rotation.y = -t * .09;
			const s = 1 + Math.sin(t * .6) * .04;
			inner.current.scale.setScalar(s);
		}
	});
	const geom = useMemo(() => new THREE.IcosahedronGeometry(1.55, 4), []);
	return /* @__PURE__ */ jsxs("group", { children: [/* @__PURE__ */ jsx("mesh", {
		ref: mesh,
		geometry: geom,
		children: /* @__PURE__ */ jsx("meshBasicMaterial", {
			color: "#d9b27a",
			wireframe: true,
			transparent: true,
			opacity: .55
		})
	}), /* @__PURE__ */ jsx("mesh", {
		ref: inner,
		geometry: geom,
		children: /* @__PURE__ */ jsx("meshBasicMaterial", {
			color: "#7c5cff",
			wireframe: true,
			transparent: true,
			opacity: .18
		})
	})] });
}
function Particles({ count = 600 }) {
	const ref = useRef(null);
	const positions = useMemo(() => {
		const arr = new Float32Array(count * 3);
		for (let i = 0; i < count; i++) {
			const r = 3.5 + Math.random() * 4;
			const theta = Math.random() * Math.PI * 2;
			const phi = Math.acos(2 * Math.random() - 1);
			arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
			arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
			arr[i * 3 + 2] = r * Math.cos(phi);
		}
		return arr;
	}, [count]);
	useFrame((s) => {
		if (ref.current) ref.current.rotation.y = s.clock.getElapsedTime() * .03;
	});
	return /* @__PURE__ */ jsxs("points", {
		ref,
		children: [/* @__PURE__ */ jsx("bufferGeometry", { children: /* @__PURE__ */ jsx("bufferAttribute", {
			attach: "attributes-position",
			args: [positions, 3]
		}) }), /* @__PURE__ */ jsx("pointsMaterial", {
			color: "#ffffff",
			size: .012,
			transparent: true,
			opacity: .7,
			sizeAttenuation: true
		})]
	});
}
function HeroScene() {
	return /* @__PURE__ */ jsx(Canvas, {
		dpr: [1, 1.6],
		camera: {
			position: [
				0,
				0,
				5
			],
			fov: 45
		},
		gl: {
			antialias: true,
			alpha: true
		},
		className: "!absolute inset-0",
		children: /* @__PURE__ */ jsxs(Suspense, {
			fallback: null,
			children: [/* @__PURE__ */ jsx(Orb, {}), /* @__PURE__ */ jsx(Particles, {})]
		})
	});
}
//#endregion
//#region src/components/sections/Hero.tsx
function HeroPortrait() {
	const cardRef = useRef(null);
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
	return /* @__PURE__ */ jsxs(motion.div, {
		initial: {
			opacity: 0,
			y: 30,
			scale: .95
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		transition: {
			delay: 2.4,
			duration: 1,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		ref: cardRef,
		onMouseMove: (e) => {
			const el = cardRef.current;
			if (!el) return;
			const r = el.getBoundingClientRect();
			const px = (e.clientX - r.left) / r.width - .5;
			const py = (e.clientY - r.top) / r.height - .5;
			ry.set(px * 10);
			rx.set(-py * 10);
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
		className: "group relative aspect-[4/5] w-full max-w-[320px] md:max-w-none overflow-hidden rounded-3xl glass-strong p-1 mx-auto",
		"data-cursor": "hover",
		children: [
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-accent/30 to-foreground/10 opacity-60 blur-2xl transition-opacity duration-700 group-hover:opacity-100" }),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent" }),
			/* @__PURE__ */ jsx("div", { className: "noise-overlay" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative h-full w-full overflow-hidden rounded-[22px]",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: "/creator-portrait.png",
						alt: "Aayush Gautam",
						className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
					}),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" }),
					/* @__PURE__ */ jsxs("div", {
						className: "absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-3 text-center transition-all duration-300 group-hover:bg-black/60",
						children: [/* @__PURE__ */ jsx("p", {
							className: "font-display text-sm tracking-wide text-foreground",
							children: "Aayush Gautam"
						}), /* @__PURE__ */ jsx("p", {
							className: "font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground mt-0.5",
							children: "Full-Stack Developer & Backend Engineer"
						})]
					})
				]
			})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		id: "top",
		className: "relative min-h-screen w-full overflow-hidden",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "absolute inset-0 -z-10",
			children: [
				/* @__PURE__ */ jsx(HeroScene, {}),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" }),
				/* @__PURE__ */ jsx("div", { className: "noise-overlay" })
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 pt-32 pb-16",
			children: [
				/* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: -8
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						delay: 2.1,
						duration: .8
					},
					className: "grid grid-cols-2 gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:grid-cols-4",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
							className: "text-foreground",
							children: "01 "
						}), "/ Engineer"] }),
						/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-foreground",
								children: "02 "
							}),
							"/ ",
							profile.location
						] }),
						/* @__PURE__ */ jsxs("div", {
							className: "hidden md:block",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-foreground",
								children: "03 "
							}), "/ EST. 2024"]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "hidden md:block text-right",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "text-accent",
									children: "●"
								}),
								" ",
								profile.availability
							]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "my-10 grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.4fr] md:items-center",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "md:order-2",
						children: [/* @__PURE__ */ jsx(motion.p, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: { delay: 2.3 },
							className: "ml-10 mb-2 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground",
							children: "— Portfolio / 2026 Edition"
						}), /* @__PURE__ */ jsx("h1", {
							className: "pl-6 md:pl-10 lg:pl-16 font-display text-[12vw] leading-[0.8] tracking-[-0.04em] md:text-[8vw] lg:text-[7vw]",
							children: [
								"Building",
								"Intelligent",
								"Systems."
							].map((line, li) => /* @__PURE__ */ jsx("span", {
								className: "block overflow-hidden",
								children: /* @__PURE__ */ jsx(motion.span, {
									initial: { y: "110%" },
									animate: { y: 0 },
									transition: {
										delay: 2 + li * .12,
										duration: 1,
										ease: [
											.22,
											1,
											.36,
											1
										]
									},
									className: "block pb-1",
									children: li === 1 ? /* @__PURE__ */ jsx("span", {
										className: "text-accent-gradient italic",
										children: line
									}) : /* @__PURE__ */ jsx("span", {
										className: "text-gradient",
										children: line
									})
								})
							}, li))
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "md:order-1",
						children: /* @__PURE__ */ jsx(HeroPortrait, {})
					})]
				}),
				/* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						delay: 2.6,
						duration: .8
					},
					className: "grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 sm:flex sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ jsx("p", {
						className: "max-w-md text-base text-muted-foreground sm:text-lg",
						children: profile.tagline
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex shrink-0 items-center gap-3",
						children: [/* @__PURE__ */ jsx(Magnetic, {
							strength: .25,
							children: /* @__PURE__ */ jsxs("a", {
								href: "#work",
								className: "group inline-flex items-center gap-3 rounded-full glass-strong px-5 py-3 text-sm",
								children: ["View work", /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
							})
						}), /* @__PURE__ */ jsx(Magnetic, {
							strength: .25,
							children: /* @__PURE__ */ jsx("a", {
								href: "#contact",
								className: "hidden sm:inline-flex items-center gap-3 rounded-full bg-accent text-accent-foreground px-5 py-3 text-sm font-medium",
								children: "Start a project"
							})
						})]
					})]
				}),
				/* @__PURE__ */ jsxs(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: { delay: 3 },
					className: "pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground",
					children: [/* @__PURE__ */ jsx("span", {
						className: "font-mono text-[10px] uppercase tracking-[0.3em]",
						children: "Scroll"
					}), /* @__PURE__ */ jsx(ArrowDown, { className: "h-4 w-4 animate-float" })]
				})
			]
		})]
	});
}
//#endregion
//#region src/components/sections/About.tsx
function About() {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
	return /* @__PURE__ */ jsxs("section", {
		id: "about",
		ref,
		className: "relative mx-auto max-w-7xl px-6 py-32 md:py-44",
		children: [
			/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("p", {
				className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground",
				children: "— 01 / About"
			}) }),
			/* @__PURE__ */ jsx(motion.h2, {
				style: { y },
				className: "mt-8 max-w-5xl font-display text-5xl leading-[1.05] md:text-7xl",
				children: /* @__PURE__ */ jsx(RevealText, {
					text: about.heading,
					className: "text-gradient"
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr]",
				children: [/* @__PURE__ */ jsx("div", {
					className: "space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg",
					children: about.paragraphs.map((p, i) => /* @__PURE__ */ jsx(Reveal, {
						delay: i * .1,
						children: /* @__PURE__ */ jsx("p", { children: p })
					}, i))
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-2 gap-3",
					children: about.stats.map((s, i) => /* @__PURE__ */ jsx(Reveal, {
						delay: .15 + i * .08,
						children: /* @__PURE__ */ jsxs("div", {
							className: "glass rounded-2xl p-5 hover:bg-white/5 transition-colors",
							children: [/* @__PURE__ */ jsx("div", {
								className: "font-display text-4xl text-gradient md:text-5xl",
								children: s.value
							}), /* @__PURE__ */ jsx("div", {
								className: "mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
								children: s.label
							})]
						})
					}, s.label))
				})]
			})
		]
	});
}
//#endregion
//#region src/components/sections/Skills.tsx
function Skills() {
	return /* @__PURE__ */ jsxs("section", {
		id: "skills",
		className: "relative mx-auto max-w-7xl px-6 py-24 md:py-32",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.4fr]",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("p", {
						className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground",
						children: "— 02 / Skills"
					}) }),
					/* @__PURE__ */ jsx(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ jsxs("h2", {
							className: "mt-6 font-display text-4xl leading-tight md:text-6xl text-gradient",
							children: [
								"A toolkit for ",
								/* @__PURE__ */ jsx("span", {
									className: "italic text-accent-gradient",
									children: "premium"
								}),
								" products."
							]
						})
					}),
					/* @__PURE__ */ jsx(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ jsx("p", {
							className: "mt-6 max-w-md text-muted-foreground",
							children: "Years of compounding craft across backend architectures, full-stack systems, and AI integrations — calibrated for building software that scales."
						})
					})
				] }), /* @__PURE__ */ jsx("div", {
					className: "space-y-5",
					children: skills.map((s, i) => /* @__PURE__ */ jsx(Reveal, {
						delay: i * .06,
						children: /* @__PURE__ */ jsxs("div", {
							className: "group",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-baseline justify-between",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-baseline gap-3",
									children: [/* @__PURE__ */ jsx("span", {
										className: "font-display text-xl md:text-2xl",
										children: s.name
									}), /* @__PURE__ */ jsx("span", {
										className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
										children: s.category
									})]
								}), /* @__PURE__ */ jsx("span", {
									className: "font-mono text-xs text-muted-foreground",
									children: s.level
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "mt-3 h-px w-full bg-border/60 overflow-hidden",
								children: /* @__PURE__ */ jsx(motion.div, {
									initial: { scaleX: 0 },
									whileInView: { scaleX: s.level / 100 },
									viewport: { once: true },
									transition: {
										duration: 1.4,
										ease: [
											.22,
											1,
											.36,
											1
										],
										delay: .1
									},
									style: { transformOrigin: "left" },
									className: "h-[2px] -mt-px bg-gradient-to-r from-accent via-accent to-foreground/30"
								})
							})]
						})
					}, s.name))
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				id: "stack",
				className: "relative mt-28",
				children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("p", {
					className: "font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground",
					children: "— Tech stack"
				}) }), /* @__PURE__ */ jsx("div", {
					className: "mt-8 overflow-hidden mask-fade",
					children: /* @__PURE__ */ jsx("div", {
						className: "flex w-max gap-12 animate-marquee",
						children: [...techStack, ...techStack].map((t, i) => /* @__PURE__ */ jsxs("span", {
							className: "font-display text-5xl md:text-7xl text-muted-foreground/40 hover:text-foreground transition-colors",
							children: [t, /* @__PURE__ */ jsx("span", {
								className: "mx-6 text-accent",
								children: "✦"
							})]
						}, i))
					})
				})]
			}),
			/* @__PURE__ */ jsx("style", { children: `
        .mask-fade {
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
                  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }
      ` })
		]
	});
}
//#endregion
//#region src/components/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "relative border-t border-border/60 px-6 py-12",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-end",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "font-display text-4xl text-gradient md:text-5xl",
					children: profile.name
				}), /* @__PURE__ */ jsxs("p", {
					className: "mt-2 max-w-md text-sm text-muted-foreground",
					children: [
						profile.role,
						" — based in ",
						profile.location,
						"."
					]
				})] }), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ jsx(SocialLink, {
							href: profile.social.github,
							label: "GitHub",
							children: /* @__PURE__ */ jsx(Github, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ jsx(SocialLink, {
							href: profile.social.linkedin,
							label: "LinkedIn",
							children: /* @__PURE__ */ jsx(Linkedin, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ jsx(SocialLink, {
							href: profile.social.instagram,
							label: "Instagram",
							children: /* @__PURE__ */ jsxs("svg", {
								className: "h-4 w-4",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								children: [
									/* @__PURE__ */ jsx("rect", {
										x: "2",
										y: "2",
										width: "20",
										height: "20",
										rx: "5",
										ry: "5"
									}),
									/* @__PURE__ */ jsx("circle", {
										cx: "12",
										cy: "12",
										r: "4"
									}),
									/* @__PURE__ */ jsx("circle", {
										cx: "17.5",
										cy: "6.5",
										r: "0.5",
										fill: "currentColor",
										stroke: "none"
									})
								]
							})
						})
					]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground md:flex-row md:items-center",
				children: [/* @__PURE__ */ jsxs("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					profile.name,
					". All rights reserved."
				] }), /* @__PURE__ */ jsx("span", { children: "Designed & built with intention." })]
			})]
		})
	});
}
function SocialLink({ href, label, children }) {
	return /* @__PURE__ */ jsx("a", {
		href,
		target: "_blank",
		rel: "noreferrer",
		"aria-label": label,
		className: "grid h-10 w-10 place-items-center rounded-full glass hover:bg-accent hover:text-accent-foreground transition-colors",
		children
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var Projects = lazy(() => import("./Projects-qzAsjj5O.js").then((m) => ({ default: m.Projects })));
var Experience = lazy(() => import("./Experience-un8QLXPd.js").then((m) => ({ default: m.Experience })));
var Achievements = lazy(() => import("./Achievements-BZQ0Ihi5.js").then((m) => ({ default: m.Achievements })));
var Education = lazy(() => import("./Education-r7HuORH5.js").then((m) => ({ default: m.Education })));
var Contact = lazy(() => import("./Contact-CtvdbDkN.js").then((m) => ({ default: m.Contact })));
function Index() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Loader, {}),
		/* @__PURE__ */ jsx(Cursor, {}),
		/* @__PURE__ */ jsxs(SmoothScroll, { children: [
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsxs("main", {
				className: "relative",
				children: [
					/* @__PURE__ */ jsx(Hero, {}),
					/* @__PURE__ */ jsx(About, {}),
					/* @__PURE__ */ jsx(Skills, {}),
					/* @__PURE__ */ jsxs(Suspense, {
						fallback: /* @__PURE__ */ jsx("div", { className: "h-screen" }),
						children: [
							/* @__PURE__ */ jsx(Projects, {}),
							/* @__PURE__ */ jsx(Experience, {}),
							/* @__PURE__ */ jsx(Achievements, {}),
							/* @__PURE__ */ jsx(Education, {}),
							/* @__PURE__ */ jsx(Contact, {})
						]
					})
				]
			}),
			/* @__PURE__ */ jsx(Footer, {})
		] })
	] });
}
//#endregion
export { Index as component };
