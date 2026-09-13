"use client";

import { Command as CommandIcon, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const destinations = [
  ["Home", "#top"],
  ["What I Do", "#capabilities"],
  ["Education", "#education"],
  ["Proficiency", "#range"],
  ["Selected Work", "#projects"],
  ["How I Work", "#process"],
  ["Contact", "#contact"],
] as const;

export default function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.type === "ramjan:command") setOpen((value) => !value);
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", listener);
    window.addEventListener("ramjan:command", listener as EventListener);
    return () => {
      window.removeEventListener("keydown", listener);
      window.removeEventListener("ramjan:command", listener as EventListener);
    };
  }, []);

  if (!open) return null;

  return (
    <div className="command-backdrop" role="presentation" onMouseDown={() => setOpen(false)}>
      <div className="command-panel" role="dialog" aria-modal="true" aria-label="Site navigation" onMouseDown={(event) => event.stopPropagation()}>
        <div className="command-head"><span><CommandIcon size={15} /> NAVIGATE</span><kbd>ESC</kbd></div>
        <div className="command-options">
          {destinations.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}><span>{label}</span><ArrowUpRight size={16} /></a>
          ))}
        </div>
      </div>
    </div>
  );
}
