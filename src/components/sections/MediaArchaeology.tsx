"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SectionLabel } from "@/components/common/SectionLabel";
import { mediaModes } from "@/content/archive";

function DeviceGraphic({ device }: { device: string }) {
  return (
    <div className={`device device-${device.toLowerCase()}`} aria-hidden="true">
      <div className="device-screen">
        <span>{device}</span>
        <i>ARCHIVE SIGNAL</i>
      </div>
      <div className="device-controls"><i /><i /><i /></div>
    </div>
  );
}

export function MediaArchaeology() {
  const [active, setActive] = useState(mediaModes[0]);

  return (
    <section id="media" className="section-shell section-pad media-section">
      <SectionLabel index="01-B">VISUAL ANALYSIS / 媒介结构可视化</SectionLabel>
      <div className="section-heading split-heading">
        <h2>FROM SIGNAL<br />TO SHARED MEMORY</h2>
        <p>选择媒介形态，观察章节中的记忆如何从观看、收藏走向公开参与；“平台”部分明确标记为本项目的当代延伸。</p>
      </div>

      <div className="media-tabs" role="tablist" aria-label="媒介形态">
        {mediaModes.map((mode, index) => (
          <button
            key={mode.id}
            role="tab"
            aria-selected={active.id === mode.id}
            className={active.id === mode.id ? "active" : ""}
            onClick={() => setActive(mode)}
          >
            <span>0{index + 1}</span>
            <strong>{mode.name}</strong>
            <small>{mode.year}</small>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          className="media-stage"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28 }}
        >
          <DeviceGraphic device={active.device} />
          <div className="media-copy">
            <span className="eyebrow">{active.year} / {active.device}</span>
            <h3>{active.zh}</h3>
            <p>{active.copy}</p>
            <div className="research-note">
              <span>CHAPTER RELATION</span>
              <p>{active.relation}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
