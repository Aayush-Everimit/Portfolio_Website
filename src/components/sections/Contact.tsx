import { ArrowUpRight, Mail, Linkedin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Magnetic } from "../Magnetic";
import { Reveal } from "../Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-24 md:py-40">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">— 07 / Contact</p>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="mt-6 font-display text-[12vw] leading-[0.95] md:text-[8vw]">
          <span className="text-gradient">Let's build</span><br />
          <span className="italic text-accent-gradient">something</span><br />
          <span className="text-gradient">unforgettable.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Magnetic>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background px-6 py-4 text-sm font-medium transition-opacity hover:opacity-80"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Magnetic>

          <Magnetic>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-border px-6 py-4 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Magnetic>

          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="text-accent">●</span> {profile.availability}
          </span>
        </div>
      </Reveal>
    </section>
  );
}
