"use client";

import { useEffect, useState } from "react";

export function Navigation() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      <div className="reading-progress" style={{ width: `${progress}%` }} />
      <header className="nav-shell">
        <a className="nav-mark" href="#top" aria-label="返回顶部">
          M<span>/</span>M
        </a>
        <span className="nav-status">ARCHIVE INTERFACE / READY</span>
        <span className="nav-issue">ISSUE 07 · 1984—2010</span>
      </header>
    </>
  );
}
