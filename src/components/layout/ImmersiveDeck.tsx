"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export type DeckSlide = {
  id: string;
  label: string;
  title: string;
  titleAccent?: string;
  description?: string;
  content?: ReactNode;
  className?: string;
};

type ImmersiveDeckProps = {
  module: string;
  eyebrow: string;
  slides: DeckSlide[];
  transition: "paper" | "record" | "scan";
};

const motionMap = {
  paper: {
    enter: (direction: number) => ({ opacity: 0, y: direction * 80, rotate: direction * 2.4, scale: 0.96 }),
    center: { opacity: 1, y: 0, rotate: 0, scale: 1 },
    exit: (direction: number) => ({ opacity: 0, y: direction * -70, rotate: direction * -1.8, scale: 0.985 }),
  },
  record: {
    enter: (direction: number) => ({ opacity: 0, x: direction * 140, rotate: direction * 5, scale: 0.9 }),
    center: { opacity: 1, x: 0, rotate: 0, scale: 1 },
    exit: (direction: number) => ({ opacity: 0, x: direction * -110, rotate: direction * -4, scale: 0.94 }),
  },
  scan: {
    enter: (direction: number) => ({ opacity: 0, filter: "blur(12px)", clipPath: direction > 0 ? "inset(0 0 100% 0)" : "inset(100% 0 0 0)", scale: 1.025 }),
    center: { opacity: 1, filter: "blur(0px)", clipPath: "inset(0 0 0% 0)", scale: 1 },
    exit: (direction: number) => ({ opacity: 0, filter: "blur(9px)", clipPath: direction > 0 ? "inset(100% 0 0 0)" : "inset(0 0 100% 0)", scale: 0.985 }),
  },
};

export function ImmersiveDeck({ module, eyebrow, slides, transition }: ImmersiveDeckProps) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const locked = useRef(false);
  const touchStart = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();

  const goTo = useCallback((next: number) => {
    const safe = Math.max(0, Math.min(slides.length - 1, next));
    if (safe === active) return;
    setDirection(safe > active ? 1 : -1);
    setActive(safe);
  }, [active, slides.length]);

  const move = useCallback((delta: number) => {
    if (locked.current) return;
    locked.current = true;
    goTo(active + delta);
    window.setTimeout(() => { locked.current = false; }, reduceMotion ? 120 : 760);
  }, [active, goTo, reduceMotion]);

  useEffect(() => {
    document.body.classList.add("deck-open");
    return () => document.body.classList.remove("deck-open");
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(event.key)) {
        event.preventDefault(); move(1);
      }
      if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
        event.preventDefault(); move(-1);
      }
      if (event.key === "Home") goTo(0);
      if (event.key === "End") goTo(slides.length - 1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goTo, move, slides.length]);

  const slide = slides[active];
  const variants = motionMap[transition];

  return (
    <main
      className={`immersive-deck deck-transition-${transition}`}
      onWheel={(event) => {
        if (Math.abs(event.deltaY) < 18) return;
        move(event.deltaY > 0 ? 1 : -1);
      }}
      onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientY ?? null; }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return;
        const distance = touchStart.current - (event.changedTouches[0]?.clientY ?? touchStart.current);
        if (Math.abs(distance) > 45) move(distance > 0 ? 1 : -1);
        touchStart.current = null;
      }}
    >
      <div className="deck-grooves" aria-hidden="true" />
      <div className="deck-meta">
        <span>FILE 007 / MODULE {module}</span>
        <span>{eyebrow}</span>
      </div>

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.section
          key={slide.id}
          className={`deck-scene ${slide.className ?? ""}`}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: reduceMotion ? 0.01 : 0.72, ease: [0.22, 1, 0.36, 1] }}
          aria-live="polite"
        >
          <div className="deck-scene-heading">
            <span>{String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")} · {slide.label}</span>
            <h1>{slide.title}{slide.titleAccent && <><br /><em>{slide.titleAccent}</em></>}</h1>
            {slide.description && <p>{slide.description}</p>}
          </div>
          {slide.content}
        </motion.section>
      </AnimatePresence>

      <AnimatePresence mode="popLayout">
        <motion.div
          key={`${transition}-${active}`}
          className="deck-transition-object"
          initial={transition === "record" ? { x: direction > 0 ? "55vw" : "-55vw", rotate: 0, opacity: 0 } : { opacity: 0 }}
          animate={transition === "record" ? { x: 0, rotate: direction * 210, opacity: [0, .3, 0] } : { opacity: [0, .22, 0] }}
          transition={{ duration: reduceMotion ? 0.01 : .8, ease: "easeInOut" }}
          aria-hidden="true"
        />
      </AnimatePresence>

      <nav className="deck-controls" aria-label="场景导航">
        <button onClick={() => move(-1)} disabled={active === 0} aria-label="上一屏">←</button>
        <div className="deck-progress" aria-label={`第 ${active + 1} 屏，共 ${slides.length} 屏`}>
          {slides.map((item, index) => (
            <button key={item.id} className={index === active ? "active" : ""} onClick={() => goTo(index)} aria-label={`前往 ${item.label}`}><span /></button>
          ))}
        </div>
        <button onClick={() => move(1)} disabled={active === slides.length - 1} aria-label="下一屏">→</button>
      </nav>
      <span className="deck-hint">SCROLL · DRAG · ARROW KEYS / 切换档案</span>
    </main>
  );
}
