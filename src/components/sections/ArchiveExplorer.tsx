"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SectionLabel } from "@/components/common/SectionLabel";
import { archiveItems, type ArchiveItem } from "@/content/archive";

const filters = [
  ["all", "ALL FILES"],
  ["broadcast", "BROADCAST"],
  ["object", "OBJECTS"],
  ["network", "NETWORK"],
  ["body", "BODY"],
] as const;

function CardGraphic({ item }: { item: ArchiveItem }) {
  return (
    <div className={`card-graphic graphic-${item.medium}`} aria-hidden="true">
      <span>{item.year}</span>
      <div><i /><i /><i /></div>
      <small>{item.medium.toUpperCase()}</small>
    </div>
  );
}

export function ArchiveExplorer() {
  const [filter, setFilter] = useState<(typeof filters)[number][0]>("all");
  const [selected, setSelected] = useState<ArchiveItem | null>(null);
  const visible = archiveItems.filter((item) => filter === "all" || item.medium === filter);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <section id="archive" className="archive-section">
      <div className="section-shell section-pad">
        <SectionLabel index="04">THE LIVING ARCHIVE / 动态档案</SectionLabel>
        <div className="section-heading split-heading">
          <h2>MEMORY IS<br />AN ACTIVE VERB.</h2>
          <p>按媒介类型重组档案。每张卡片区分“章节材料”与“项目解释”，避免把分析误写成史实。</p>
        </div>

        <div className="archive-toolbar" role="tablist" aria-label="筛选档案">
          {filters.map(([id, label]) => (
            <button
              key={id}
              className={filter === id ? "active" : ""}
              onClick={() => setFilter(id)}
              role="tab"
              aria-selected={filter === id}
            >
              {label}
            </button>
          ))}
          <span>{visible.length.toString().padStart(2, "0")} RECORDS</span>
        </div>

        <motion.div layout className="archive-grid">
          <AnimatePresence>
            {visible.map((item) => (
              <motion.button
                layout
                key={item.id}
                className="archive-card"
                onClick={() => setSelected(item)}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
              >
                <div className="archive-card-meta"><span>{item.id}</span><span>{item.label}</span></div>
                <CardGraphic item={item} />
                <div className="archive-card-copy">
                  <span>{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </div>
                <span className="open-file">OPEN FILE ↗</span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <>
            <motion.button
              className="drawer-backdrop"
              aria-label="关闭档案详情"
              onClick={() => setSelected(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.aside
              className="archive-drawer"
              role="dialog"
              aria-modal="true"
              aria-label={selected.title}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 250 }}
            >
              <button className="drawer-close" onClick={() => setSelected(null)}>CLOSE ×</button>
              <span className="eyebrow">FILE {selected.id} / {selected.year}</span>
              <h2>{selected.title}</h2>
              <CardGraphic item={selected} />
              <div className="drawer-block">
                <span>CHAPTER MATERIAL / 章节材料</span>
                <p>{selected.summary}</p>
              </div>
              <div className="drawer-block interpretation">
                <span>INTERPRETATION / 项目解释</span>
                <p>{selected.interpretation}</p>
              </div>
              <a href="#references" onClick={() => setSelected(null)} className="source-marker">
                [{selected.sourceId} · {selected.page}]
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
