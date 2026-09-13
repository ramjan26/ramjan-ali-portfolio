"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  ["Home", "#top"],
  ["What I do", "#capabilities"],
  ["Education", "#education"],
  ["Proficiency", "#range"],
  ["Selected Work", "#projects"],
  ["How I work", "#process"],
  ["Contact", "#contact"],
] as const;

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const sections = links.map(([, href]) => href.slice(1)).filter((id) => id !== "top").map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-28% 0px -56% 0px", threshold: [0.1, 0.4, 0.7] },
    );
    sections.forEach((section) => observer.observe(section));
    const onScroll = () => { if (window.scrollY < 220) setActive("top"); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <div className="mobile-nav">
      <button type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} className="mobile-nav-trigger" onClick={() => setOpen((value) => !value)}>
        {open ? <X size={17} /> : <Menu size={17} />}
      </button>
      {open && (
        <div className="mobile-nav-panel">
          {links.map(([label, href]) => {
            const id = href.slice(1);
            return <a key={href} href={href} className={active === id ? "is-active" : ""} aria-current={active === id ? "page" : undefined} onClick={() => setOpen(false)}>{label}<span>↗</span></a>;
          })}
        </div>
      )}
    </div>
  );
}
