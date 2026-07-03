import { motion } from "framer-motion";
import { skills, techStack } from "@/data/portfolio";
import { Reveal } from "../Reveal";

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">— 02 / Skills</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-6xl text-gradient">
              A toolkit for <span className="italic text-accent-gradient">premium</span> products.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-muted-foreground">
              Years of compounding craft across backend architectures, full-stack systems, and AI integrations — calibrated for building software that scales.
            </p>
          </Reveal>
        </div>

        <div className="space-y-5">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.06}>
              <div className="group">
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-xl md:text-2xl">{s.name}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{s.category}</span>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{s.level}</span>
                </div>
                <div className="mt-3 h-px w-full bg-border/60 overflow-hidden">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: s.level / 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                    style={{ transformOrigin: "left" }}
                    className="h-[2px] -mt-px bg-gradient-to-r from-accent via-accent to-foreground/30"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Tech stack marquee */}
      <div id="stack" className="relative mt-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">— Tech stack</p>
        </Reveal>
        <div className="mt-8 overflow-hidden mask-fade">
          <div className="flex w-max gap-12 animate-marquee">
            {[...techStack, ...techStack].map((t, i) => (
              <span key={i} className="font-display text-5xl md:text-7xl text-muted-foreground/40 hover:text-foreground transition-colors">
                {t}
                <span className="mx-6 text-accent">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .mask-fade {
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
                  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }
      `}</style>
    </section>
  );
}
