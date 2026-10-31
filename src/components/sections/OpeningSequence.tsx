"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function OpeningSequence() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setVisible(false), reducedMotion ? 500 : 3400);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setVisible(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  if (!visible) return null;

  return (
    <div className="opening-sequence" role="dialog" aria-label="网站开场动画">
      <button className="opening-skip" onClick={() => setVisible(false)}>
        SKIP INTRO ×
      </button>
      <div className="opening-file-meta">
        <span>ARCHIVE NO. 007</span>
        <span>PLAYING / MEMORY</span>
      </div>
      <div className="opening-object" aria-hidden="true">
        <div className="opening-sleeve">
          <span>MEDIA<br />&amp; MEMORY</span>
          <i>07</i>
        </div>
        <Image
          className="opening-vinyl"
          src="/images/hero-vinyl.png"
          alt=""
          width={1200}
          height={1200}
          priority
        />
        <span className="opening-needle" />
      </div>
      <div className="opening-title">
        <span>NOW PLAYING</span>
        <strong>THE MADONNA ARCHIVE</strong>
        <small>CELEBRITY · AGEING · FAN NOSTALGIA</small>
      </div>
    </div>
  );
}
