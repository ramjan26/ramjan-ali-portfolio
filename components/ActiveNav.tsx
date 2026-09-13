"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  ["Home", "#top", "top"],
  ["What I do", "#capabilities", "capabilities"],
  ["Education", "#education", "education"],
  ["Proficiency", "#range", "range"],
  ["Selected Work", "#projects", "projects"],
  ["How I work", "#process", "process"],
  ["Contact", "#contact", "contact"],
] as const;

export default function ActiveNav() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const ids = links.map(([, , id]) => id).filter((id) => id !== "top");
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -52% 0px", threshold: [0.1, 0.25, 0.5, 0.75] },
    );
    elements.forEach((element) => observer.observe(element));

    const onScroll = () => {
      if (window.scrollY < 220) setActive("top");
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120) setActive("contact");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <nav className="nav" aria-label="Primary navigation">
      {links.map(([label, href, id]) => (
        <Link key={id} href={href} className={active === id ? "is-active" : ""} aria-current={active === id ? "page" : undefined}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
