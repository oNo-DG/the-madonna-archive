"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { MouseEvent } from "react";

export type ArchiveModule = {
  number: string;
  href: string;
  eyebrow: string;
  title: string;
  theme: "media" | "memory" | "archive";
  marker: string;
};

export const archiveModules: ArchiveModule[] = [
  {
    number: "01",
    href: "/media",
    eyebrow: "CHAPTER READING",
    title: "章节研究",
    theme: "media",
    marker: "READ / MAP",
  },
  {
    number: "02",
    href: "/timeline",
    eyebrow: "RELATED PRACTICES",
    title: "案例研究",
    theme: "memory",
    marker: "06 / CASES",
  },
  {
    number: "03",
    href: "/archive",
    eyebrow: "DIGITAL PROPOSITIONS",
    title: "设计延伸",
    theme: "archive",
    marker: "03 / IDEAS",
  },
];

type RecordSleeveNavigationProps = {
  selectedTrack: string | null;
  isNavigating: boolean;
  onPreview: (href: string | null) => void;
  onChoose: (event: MouseEvent<HTMLAnchorElement>, href: string) => void;
};

type RecordSleeveCardProps = {
  module: ArchiveModule;
  fanRotation: number;
  fanOffset: number;
  isActive: boolean;
  isNavigating: boolean;
  reduceMotion: boolean;
  onPreview: (href: string | null) => void;
  onChoose: (event: MouseEvent<HTMLAnchorElement>, href: string) => void;
};

function RecordSleeveCard({
  module,
  fanRotation,
  fanOffset,
  isActive,
  isNavigating,
  reduceMotion,
  onPreview,
  onChoose,
}: RecordSleeveCardProps) {
  const isLeaving = isNavigating && isActive;

  return (
    <motion.article
      className={`module-sleeve-card sleeve-theme-${module.theme}`}
      animate={{
        opacity: isNavigating && !isActive ? 0.24 : 1,
        scale: isLeaving && !reduceMotion ? 1.12 : 1,
        rotate: reduceMotion ? fanRotation : isLeaving ? 0 : isActive ? fanRotation * 0.25 : fanRotation,
        y: reduceMotion ? fanOffset : isLeaving ? -38 : isActive ? fanOffset - 18 : fanOffset,
      }}
      transition={{ duration: isLeaving ? 0.68 : 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        className="module-sleeve-link"
        href={module.href}
        onMouseEnter={() => !isNavigating && onPreview(module.href)}
        onFocus={() => !isNavigating && onPreview(module.href)}
        onBlur={() => !isNavigating && onPreview(null)}
        onClick={(event) => onChoose(event, module.href)}
        aria-label={`${module.number} ${module.title} ${module.eyebrow}`}
      >
        <span className="module-sleeve-back" aria-hidden="true" />

        <motion.span
          className="module-mini-vinyl"
          aria-hidden="true"
          animate={{
            rotate: isLeaving && !reduceMotion ? 38 : isActive && !reduceMotion ? 9 : -4,
            scale: isLeaving && !reduceMotion ? 1.55 : 1,
            x: isLeaving && !reduceMotion ? "12%" : isActive && !reduceMotion ? "6%" : "0%",
            y: isLeaving && !reduceMotion ? "-84%" : isActive && !reduceMotion ? "-34%" : "4%",
          }}
          transition={{ duration: isLeaving ? 0.72 : 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          <i>{module.number}</i>
        </motion.span>

        <motion.span
          className="module-sleeve-front"
          animate={{
            opacity: isLeaving && !reduceMotion ? 0.38 : 1,
            y: isLeaving && !reduceMotion ? 16 : 0,
          }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="module-sleeve-number">{module.number}</span>
          <span className="module-sleeve-art" aria-hidden="true" />
          <span className="module-sleeve-copy">
            <strong>{module.title}</strong>
            <small>{module.eyebrow}</small>
          </span>
          <span className="module-sleeve-marker">{module.marker}</span>
        </motion.span>
      </Link>
    </motion.article>
  );
}

export function RecordSleeveNavigation({
  selectedTrack,
  isNavigating,
  onPreview,
  onChoose,
}: RecordSleeveNavigationProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <nav
      className="record-sleeve-menu"
      aria-label="选择互动模块"
      onMouseLeave={() => !isNavigating && onPreview(null)}
    >
      <span className="entry-menu-label">SELECT AN ARCHIVE RECORD / 选择档案唱片</span>
      <div className="record-sleeve-track">
        {archiveModules.map((module, index) => (
          <RecordSleeveCard
            key={module.href}
            module={module}
            fanRotation={[-10, 0, 10][index]}
            fanOffset={[18, 0, 18][index]}
            isActive={selectedTrack === module.href}
            isNavigating={isNavigating}
            reduceMotion={Boolean(shouldReduceMotion)}
            onPreview={onPreview}
            onChoose={onChoose}
          />
        ))}
      </div>
    </nav>
  );
}
