"use client";

import { useEffect, useRef } from "react";

export default function DesktopCursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fine = window.matchMedia("(pointer:fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const node = ref.current;
    if (!node || !fine || reduce) return;

    let raf = 0;
    let x = -50;
    let y = -50;
    let tx = -50;
    let ty = -50;
    const move = (event: MouseEvent) => { tx = event.clientX; ty = event.clientY; };
    const tick = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", move, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);
  return <div ref={ref} className="desktop-cursor" aria-hidden="true"><span /></div>;
}
