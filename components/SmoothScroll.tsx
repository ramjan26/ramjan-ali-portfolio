"use client";
import { useEffect } from "react";
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let active = true;
    let raf = 0;
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;
    const boot = () => import("lenis").then(({ default: Lenis }) => {
      if (!active) return;
      lenis = new Lenis({ duration: 1.02, smoothWheel: true, syncTouch: false, anchors: true });
      const loop = (time: number) => { lenis?.raf(time); raf = requestAnimationFrame(loop); };
      raf = requestAnimationFrame(loop);
    });
    const idle = window.requestIdleCallback?.(boot) ?? window.setTimeout(boot, 900);
    return () => { active = false; if (typeof idle === "number") window.clearTimeout(idle); if (raf) cancelAnimationFrame(raf); lenis?.destroy(); };
  }, []);
  return null;
}
