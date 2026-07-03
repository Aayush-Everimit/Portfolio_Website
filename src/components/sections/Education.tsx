import { education } from "@/data/portfolio";
import { Reveal } from "../Reveal";

export function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">— 06 / Education</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl text-gradient">
          Where the <span className="italic text-accent-gradient">curiosity</span> began.
        </h2>
      </Reveal>

      <div className="relative mt-20">
        <div className="absolute left-3 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="space-y-12">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 0.1}>
              <div className={`relative grid grid-cols-[24px_1fr] gap-6 md:grid-cols-2 md:gap-16 ${i % 2 ? "md:[&>div:first-of-type]:order-2" : ""}`}>
                <div className="relative md:hidden">
                  <span className="absolute left-1.5 top-2 h-3 w-3 rounded-full bg-accent shadow-[0_0_20px_var(--glow)]" />
                </div>
                <div className={`hidden md:block ${i % 2 ? "text-left" : "text-right"}`}>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">{e.period}</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[34px] top-2 hidden md:block h-3 w-3 rounded-full bg-accent shadow-[0_0_20px_var(--glow)] md:left-auto md:-ml-[7px]" style={i % 2 ? { right: "calc(100% + 16px)" } : { left: "-34px" }} />
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground md:hidden">{e.period}</p>
                  <h3 className="mt-2 font-display text-3xl md:text-4xl text-gradient">{e.school}</h3>
                  <p className="mt-2 text-muted-foreground">{e.degree}</p>
                  <p className="mt-3 max-w-md text-sm text-muted-foreground/80">{e.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
