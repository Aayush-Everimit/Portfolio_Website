import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Magnetic } from "./Magnetic";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <a href="#top" className="group flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full glass-strong">
              <span className="font-display text-base">A</span>
            </span>
            <span className="hidden sm:block font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground group-hover:text-foreground transition-colors">
              aayush.dev
            </span>
          </a>

          <nav className={`hidden md:flex items-center gap-1 rounded-full px-2 py-2 transition-all ${scrolled ? "glass-strong" : "glass"}`}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <Magnetic>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-accent transition-colors"
            >
              Let's talk
              <span className="h-1.5 w-1.5 rounded-full bg-background/60" />
            </a>
          </Magnetic>

          <button
            aria-label="Open menu"
            className="md:hidden grid h-10 w-10 place-items-center rounded-full glass"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <motion.div
              initial={{ y: "-100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }}
              transition={{ duration: 0.6, ease: [0.85, 0, 0.15, 1] }}
              className="absolute inset-0 bg-background/95 backdrop-blur-2xl flex flex-col px-6 pt-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Menu</span>
                <button aria-label="Close" onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-full glass">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <nav className="mt-16 flex flex-col gap-4">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="font-display text-5xl text-gradient"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
