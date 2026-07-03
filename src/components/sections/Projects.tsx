import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, experiments } from "@/data/portfolio";
import { Reveal } from "../Reveal";

function TiltCard({ p, index }: { p: (typeof projects)[number]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 120, damping: 16 });
  const sry = useSpring(ry, { stiffness: 120, damping: 16 });
  const trX = useTransform(srx, (v) => `${v}deg`);
  const trY = useTransform(sry, (v) => `${v}deg`);

  return (
    <Reveal delay={index * 0.05}>
      <motion.a
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        ref={ref}
        onMouseMove={(e) => {
          const el = ref.current; if (!el) return;
          const r = el.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          ry.set(px * 8);
          rx.set(-py * 8);
        }}
        onMouseLeave={() => { rx.set(0); ry.set(0); }}
        style={{ rotateX: trX, rotateY: trY, transformPerspective: 1200 }}
        className="group relative block overflow-hidden rounded-3xl glass-strong p-6 sm:p-8 h-full min-h-[320px]"
        data-cursor="hover"
      >
        {/* Accent glow */}
        <div className={`pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br ${p.accent} opacity-60 blur-2xl transition-opacity duration-700 group-hover:opacity-100`} />
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent" />
        <div className="noise-overlay" />

        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{p.category}</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">{p.year}</p>
            </div>
            <span className="grid h-10 w-10 place-items-center rounded-full glass transition-transform duration-500 group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>

          <div>
            <h3 className="font-display text-3xl md:text-4xl text-gradient">{p.title}</h3>
            <p className="mt-4 max-w-md text-sm text-muted-foreground md:text-base">{p.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.a>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">— 04 / Selected work</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[1.02] md:text-7xl text-gradient">
              Things I've built<br />with care.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <a href="#" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground">
            See archive <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <TiltCard key={p.title} p={p} index={i} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Reveal delay={0.4}>
          <div className="relative overflow-hidden rounded-3xl glass p-8 md:p-10 w-full max-w-2xl border border-white/5 group">
             <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />
             <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8 text-center">
               — Experiments & Minor Projects
             </h3>
             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center sm:text-left">
               {experiments.map((exp, i) => (
                 <li key={i} className="font-display text-lg md:text-xl text-foreground/80 hover:text-foreground transition-colors flex items-center justify-center sm:justify-start gap-3">
                   <span className="text-accent text-sm">●</span> {exp}
                 </li>
               ))}
             </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
