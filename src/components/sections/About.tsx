import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { about } from "@/data/portfolio";
import { Reveal, RevealText } from "../Reveal";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section id="about" ref={ref} className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">— 01 / About</p>
      </Reveal>

      <motion.h2 style={{ y }} className="mt-8 max-w-5xl font-display text-5xl leading-[1.05] md:text-7xl">
        <RevealText text={about.heading} className="text-gradient" />
      </motion.h2>

      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
          {about.stats.map((s, i) => (
            <Reveal key={s.label} delay={0.15 + i * 0.08}>
              <div className="glass rounded-2xl p-5 hover:bg-white/5 transition-colors">
                <div className="font-display text-4xl text-gradient md:text-5xl">{s.value}</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
