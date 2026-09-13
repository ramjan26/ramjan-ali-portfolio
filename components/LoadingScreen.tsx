"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const started = performance.now();
    let hideTimer: number | undefined;
    const finish = () => {
      const remaining = Math.max(0, 700 - (performance.now() - started));
      hideTimer = window.setTimeout(() => setVisible(false), remaining);
    };
    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    hideTimer = window.setTimeout(() => setVisible(false), 1100);
    return () => {
      window.removeEventListener("load", finish);
      if (hideTimer !== undefined) window.clearTimeout(hideTimer);
    };
  }, []);
  if (!visible) return null;
  return (
    <div className="site-loader" role="status" aria-live="polite" aria-label="Loading Ramjan Ali portfolio">
      <div className="site-loader-inner">
        <div className="loader" aria-hidden="true" />
        <div className="site-loader-signature">
          <span className="loader-bracket">&lt;</span>
          <span>Ramjan Ali</span>
          <span className="loader-bracket">/&gt;</span>
        </div>
      </div>
    </div>
  );
}
