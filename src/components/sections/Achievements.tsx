import { Trophy, Award, Zap, ExternalLink } from "lucide-react";
import { achievements, hackathons } from "@/data/portfolio";
import { Reveal } from "../Reveal";

export function Achievements() {
  return (
    <section id="achievements" className="relative mx-auto max-w-7xl px-6 py-12 md:py-20">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">— 05 / Achievements</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-6xl text-gradient">
              Recognition &amp; certifications.
            </h2>
          </Reveal>
          <div className="mt-10 space-y-3">
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06}>
                <div className="group flex items-center gap-4 rounded-2xl glass px-5 py-4 hover:bg-white/5 transition-colors">
                  <Award className="h-5 w-5 text-accent shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-base leading-snug md:text-lg">{a.title}</p>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{a.org}</p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-1.5">
                    <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">{a.year}</span>
                    {a.certUrl ? (
                      <a
                        href={a.certUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-accent/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="h-2.5 w-2.5" />
                        Cert
                      </a>
                    ) : (
                      <span className="inline-flex items-center rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                        In Progress
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">— Hackathons</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-6xl text-gradient">
              48-hour <span className="italic text-accent-gradient">sprints</span>.
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {hackathons.map((h, i) => (
              <Reveal key={h.name} delay={i * 0.06}>
                <div className="group relative overflow-hidden rounded-2xl glass-strong p-6 hover:bg-white/5 transition-colors">
                  <Zap className="h-5 w-5 text-accent" />
                  <p className="mt-6 font-display text-2xl">{h.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{h.result}</p>
                  <span className="absolute right-5 top-5 font-mono text-xs text-muted-foreground">{h.year}</span>
                  <Trophy className="absolute -bottom-4 -right-4 h-24 w-24 text-white/[0.03] group-hover:text-accent/10 transition-colors" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
