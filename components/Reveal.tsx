"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

type Props = { children: ReactNode; delay?: number; direction?: "up" | "left" | "right" };

export default function Reveal({ children, delay = 0, direction = "up" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node?.classList.add("is-revealed");
      return;
    }
    node.style.setProperty("--reveal-delay", `${delay}s`);
    node.dataset.direction = direction;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add("is-revealed");
        observer.disconnect();
      }
    }, { once: true, rootMargin: "0px 0px -8% 0px", threshold: 0.08 } as IntersectionObserverInit);
    observer.observe(node);
    return () => observer.disconnect();
  }, [delay, direction]);

  return <div ref={ref} className="reveal-shell is-revealed-fallback">{children}</div>;
}
