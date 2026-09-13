"use client";
import { useEffect } from "react";
export default function RefreshToHome() {
  useEffect(() => {
    history.scrollRestoration = "manual";
    if (window.location.hash) window.history.replaceState(null, "", window.location.pathname + window.location.search);
    window.scrollTo(0, 0);
    const timer = window.setTimeout(() => window.scrollTo(0, 0), 60);
    return () => window.clearTimeout(timer);
  }, []);
  return null;
}
