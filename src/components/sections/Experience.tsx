import { experience } from "@/data/portfolio";
import { Reveal } from "../Reveal";

export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">— 03 / Experience</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl text-gradient">
          Selected chapters from a long apprenticeship.
        </h2>
      </Reveal>

      <div className="mt-16 divide-y divide-border/60 border-y border-border/60">
        {experience.map((e, i) => (
          <Reveal key={e.company} delay={i * 0.08}>
            <a
              href="#"
              className="group grid grid-cols-1 gap-4 py-8 transition-colors hover:bg-white/[0.02] md:grid-cols-[180px_1fr_auto] md:items-center md:gap-10 md:px-2"
            >
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">{e.period}</span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="font-display text-3xl md:text-4xl group-hover:text-accent-gradient transition-colors">{e.company}</h3>
                  <span className="text-sm text-muted-foreground">— {e.role}</span>
                </div>
                <p className="mt-3 max-w-2xl text-muted-foreground">{e.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 md:justify-end">
                {e.tags.map((t) => (
                  <span key={t} className="rounded-full glass px-3 py-1 text-[11px] text-muted-foreground">{t}</span>
                ))}
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
