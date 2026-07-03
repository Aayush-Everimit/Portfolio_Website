import { Quote } from "lucide-react";
import { testimonials } from "@/data/portfolio";
import { Reveal } from "../Reveal";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">— 07 / Kind words</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl text-gradient">
          From people I've shipped with.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <figure className="relative h-full rounded-3xl glass-strong p-8 hover:bg-white/[0.06] transition-colors">
              <Quote className="h-6 w-6 text-accent" />
              <blockquote className="mt-6 font-display text-xl leading-snug md:text-2xl">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 border-t border-border/60 pt-4">
                <div className="font-medium">{t.name}</div>
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
