import { useEffect, useRef } from "react";

// Custom cursor with a fast dot and a lagging ring, expands over interactive elements.
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    const move = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${mx - 4}px, ${my - 4}px, 0)`;
    };
    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate3d(${rx - 20}px, ${ry - 20}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    let raf = requestAnimationFrame(loop);

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest("a, button, [data-cursor='hover']");
      if (!ring.current) return;
      if (interactive) {
        ring.current.style.width = "70px";
        ring.current.style.height = "70px";
        ring.current.style.background = "color-mix(in oklab, var(--glow) 14%, transparent)";
        ring.current.style.borderColor = "transparent";
      } else {
        ring.current.style.width = "40px";
        ring.current.style.height = "40px";
        ring.current.style.background = "transparent";
        ring.current.style.borderColor = "color-mix(in oklab, var(--foreground) 40%, transparent)";
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot hidden md:block" aria-hidden />
      <div ref={ring} className="cursor-ring hidden md:block" aria-hidden />
    </>
  );
}
