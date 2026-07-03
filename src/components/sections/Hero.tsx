import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { HeroScene } from "../HeroScene";
import { Magnetic } from "../Magnetic";
import { profile } from "@/data/portfolio";

function HeroPortrait() {
  const cardRef = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 120, damping: 16 });
  const sry = useSpring(ry, { stiffness: 120, damping: 16 });
  const trX = useTransform(srx, (v) => `${v}deg`);
  const trY = useTransform(sry, (v) => `${v}deg`);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 2.4, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      ref={cardRef}
      onMouseMove={(e) => {
        const el = cardRef.current; if (!el) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        ry.set(px * 10);
        rx.set(-py * 10);
      }}
      onMouseLeave={() => { rx.set(0); ry.set(0); }}
      style={{ rotateX: trX, rotateY: trY, transformPerspective: 1200 }}
      className="group relative aspect-[4/5] w-full max-w-[320px] md:max-w-none overflow-hidden rounded-3xl glass-strong p-1 mx-auto"
      data-cursor="hover"
    >
      {/* Accent glows */}
      <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-accent/30 to-foreground/10 opacity-60 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent" />
      <div className="noise-overlay" />

      {/* Main Image */}
      <div className="relative h-full w-full overflow-hidden rounded-[22px]">
        <img
          src="/creator-portrait.png"
          alt="Aayush Gautam"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Caption Overlay */}
        <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md p-3 text-center transition-all duration-300 group-hover:bg-black/60">
          <p className="font-display text-sm tracking-wide text-foreground">Aayush Gautam</p>
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground mt-0.5">Full-Stack Developer & Backend Engineer</p>
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      {/* 3D backdrop */}
      <div className="absolute inset-0 -z-10">
        <HeroScene />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
        <div className="noise-overlay" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-4 sm:px-6 pt-28 pb-12">
        {/* Top meta */}
        <motion.div
          initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.8 }}
          className="grid grid-cols-2 gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:grid-cols-4"
        >
          <div><span className="text-foreground">01 </span>/ Engineer</div>
          <div><span className="text-foreground">02 </span>/ {profile.location}</div>
          <div className="hidden md:block"><span className="text-foreground">03 </span>/ EST. 2024</div>
          <div className="hidden md:block text-right"><span className="text-accent">●</span> {profile.availability}</div>
        </motion.div>

        {/* Center title & portrait layout */}
        <div className="my-8 grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.4fr] md:items-center md:gap-12">
          <div className="md:order-2">
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.3 }}
              className="ml-0 mb-2 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
            >
              — Portfolio / 2026 Edition
            </motion.p>

            <h1 className="font-display text-[14vw] leading-[0.85] tracking-[-0.04em] sm:text-[12vw] md:text-[8vw] lg:text-[7vw]">
              {["Building", "Intelligent", "Systems."].map((line, li) => (
                <span key={li} className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "110%" }} animate={{ y: 0 }}
                    transition={{ delay: 2.0 + li * 0.12, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
                    className="block pb-1"
                  >
                    {li === 1 ? <span className="text-accent-gradient italic">{line}</span> : <span className="text-gradient">{line}</span>}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>

          <div className="md:order-1">
            <HeroPortrait />
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.8 }}
          className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 sm:flex sm:items-end sm:justify-between"
        >
          <p className="max-w-md text-base text-muted-foreground sm:text-lg">
            {profile.tagline}
          </p>
          <div className="flex shrink-0 items-center gap-3">
            <Magnetic strength={0.25}>
              <a href="#work" className="group inline-flex items-center gap-3 rounded-full glass-strong px-5 py-3 text-sm">
                View work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a href="#contact" className="hidden sm:inline-flex items-center gap-3 rounded-full bg-accent text-accent-foreground px-5 py-3 text-sm font-medium">
                Start a project
              </a>
            </Magnetic>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }}
          className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-float" />
        </motion.div>
      </div>
    </section>
  );
}
