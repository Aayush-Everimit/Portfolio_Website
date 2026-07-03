import { Github, Linkedin } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-display text-4xl text-gradient md:text-5xl">{profile.name}</p>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">{profile.role} — based in {profile.location}.</p>
          </div>
          <div className="flex items-center gap-2">
            <SocialLink href={profile.social.github} label="GitHub"><Github className="h-4 w-4" /></SocialLink>
            <SocialLink href={profile.social.linkedin} label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialLink>
            <SocialLink href={profile.social.instagram} label="Instagram">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
            </SocialLink>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
          <span>Designed & built with intention.</span>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href} target="_blank" rel="noreferrer" aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-accent hover:text-accent-foreground transition-colors"
    >
      {children}
    </a>
  );
}
