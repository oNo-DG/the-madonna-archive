"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SectionLabel } from "@/components/common/SectionLabel";
import { practiceCases } from "@/content/research";

export function CaseStudies() {
  const [activeId, setActiveId] = useState(practiceCases[0].id);
  const active = practiceCases.find((item) => item.id === activeId) ?? practiceCases[0];

  return (
    <section className="section-shell section-pad practice-section">
      <SectionLabel index="02">RELATED PRACTICES / 相关实践案例</SectionLabel>
      <div className="section-heading split-heading">
        <h2>SIX WAYS<br />MEMORY MOVES.</h2>
        <p>六个案例均来自项目作者或机构的官方资料。左侧陈述项目事实，右侧“章节关联”属于本网页基于第七章的分析。</p>
      </div>
      <div className="practice-layout">
        <div className="practice-index" role="tablist" aria-label="设计案例">
          {practiceCases.map((item) => (
            <button key={item.id} className={activeId === item.id ? "active" : ""} onClick={() => setActiveId(item.id)} role="tab" aria-selected={activeId === item.id}>
              <span>{item.id}</span><strong>{item.title}</strong><small>{item.year}</small>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.article key={active.id} className="practice-file" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -14 }} transition={{ duration: 0.3 }}>
            <div className="practice-disc" aria-hidden="true"><span>{active.id}</span></div>
            <span className="eyebrow">{active.year} / {active.medium}</span>
            <h3>{active.title}</h3>
            <p className="practice-maker">{active.maker}</p>
            <dl>
              <div><dt>PROJECT FACT / 项目事实</dt><dd>{active.fact}</dd></div>
              <div><dt>CHAPTER RELATION / 章节关联</dt><dd>{active.relation}</dd></div>
            </dl>
            <a href={active.source} target="_blank" rel="noreferrer">OFFICIAL SOURCE ↗</a>
          </motion.article>
        </AnimatePresence>
      </div>
      <p className="research-boundary">RESEARCH BOUNDARY / 案例描述依据官方项目页面；“章节关联”为课程项目的分析，不代表项目原作者的自我阐释。</p>
    </section>
  );
}
