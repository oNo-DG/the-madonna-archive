"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SectionLabel } from "@/components/common/SectionLabel";
import { timelineMoments } from "@/content/archive";

type Perspective = "author" | "fan" | "industry";
const perspectiveLabels: Record<Perspective, string> = {
  author: "作者 / AUTHOR",
  fan: "粉丝 / FAN",
  industry: "文化产业 / INDUSTRY",
};

export function MemoryTimeline() {
  const [momentIndex, setMomentIndex] = useState(0);
  const [perspective, setPerspective] = useState<Perspective>("author");
  const moment = timelineMoments[momentIndex];

  return (
    <section id="timeline" className="section-shell section-pad timeline-section">
      <SectionLabel index="03">MEMORY REVISITED / 时间回放</SectionLabel>
      <div className="section-heading split-heading">
        <h2>ONE WORK.<br />MANY PASTS.</h2>
        <p>同一文化作品在不同生命阶段与不同主体之间获得新的意义。先选择年份，再切换观察位置。</p>
      </div>

      <div className="timeline-control">
        <div className="timeline-track" role="tablist" aria-label="年份">
          {timelineMoments.map((item, index) => (
            <button
              key={item.year}
              onClick={() => setMomentIndex(index)}
              className={momentIndex === index ? "active" : ""}
              role="tab"
              aria-selected={momentIndex === index}
            >
              <i />
              <span>{item.year}</span>
              <small>{item.title}</small>
            </button>
          ))}
        </div>

        <div className="perspective-tabs" role="tablist" aria-label="主体视角">
          {(Object.keys(perspectiveLabels) as Perspective[]).map((item) => (
            <button
              key={item}
              className={perspective === item ? "active" : ""}
              onClick={() => setPerspective(item)}
              role="tab"
              aria-selected={perspective === item}
            >
              {perspectiveLabels[item]}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={`${moment.year}-${perspective}`}
            className="timeline-card"
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.25 }}
          >
            <div className="timeline-year">{moment.year}</div>
            <div>
              <span className="eyebrow">{perspectiveLabels[perspective]}</span>
              <h3>{moment.title}</h3>
              <p>{moment[perspective]}</p>
              <span className="source-marker">[{moment.source}]</span>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}
