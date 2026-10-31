"use client";

import { useEffect, useState } from "react";

const links = [
  ["MEDIA", "media"],
  ["CHAPTER", "chapter"],
  ["TIMELINE", "timeline"],
  ["ARCHIVE", "archive"],
  ["SOURCES", "references"],
];

export function Navigation() {
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

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
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open}>
          {open ? "CLOSE" : "INDEX"}
        </button>
        <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="主要导航">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <span className="nav-issue">ISSUE 07 · 1984—2010</span>
      </header>
    </>
  );
}
