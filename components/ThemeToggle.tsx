"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("ramjan-theme");

    // Light mode is the default.
    const isDark = stored === "dark";

    setDark(isDark);
    setMounted(true);

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