import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Cinematic intro that counts to 100, then sweeps away.
export function Loader() {
  const [count, setCount] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setCount(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setGone(true), 400);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-end justify-between px-6 py-8 md:px-12 md:py-10 bg-background"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.0, ease: [0.85, 0, 0.15, 1] }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Aayush / Folio v2026</span>
          <motion.span
            key={count}
            className="font-display text-[18vw] leading-none md:text-[10vw] text-gradient"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
          >
            {String(count).padStart(3, "0")}
          </motion.span>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground hidden md:block">
            Booting experience…
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
