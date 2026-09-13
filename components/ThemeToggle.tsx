"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("ramjan-theme");

    const currentTheme =
      stored === "dark" || stored === "light"
        ? stored
        : document.documentElement.dataset.theme ||
          (window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light");

    const isDark = currentTheme === "dark";

    setDark(isDark);
    setMounted(true);

    // Keep the document theme in sync.
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
  }, []);

  function toggle() {
    const next = !dark;

    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    window.localStorage.setItem(
      "ramjan-theme",
      next ? "dark" : "light"
    );
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={
        mounted
          ? `Switch to ${dark ? "light" : "dark"} theme`
          : "Switch theme"
      }
      aria-pressed={mounted ? dark : false}
    >
      <span className="theme-dot" />
    </button>
  );
}