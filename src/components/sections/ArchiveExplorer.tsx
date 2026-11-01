"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SectionLabel } from "@/components/common/SectionLabel";
import { designProposals } from "@/content/research";

export function ArchiveExplorer() {
  const [activeId, setActiveId] = useState(designProposals[0].id);
  const active = designProposals.find((item) => item.id === activeId) ?? designProposals[0];

  return (
    <section className="section-shell section-pad proposal-section">
      <SectionLabel index="03">DIGITAL PROPOSITIONS / 数字媒体设计延伸</SectionLabel>
      <div className="section-heading split-heading">
        <h2>FROM READING<br />TO PRACTICE.</h2>
        <p>三项原创概念不是原章已有项目，而是从“名人衰老、粉丝记忆与活档案”延伸出的数字媒体实践提案。</p>
      </div>
      <div className="proposal-switcher" role="tablist" aria-label="设计实践提案">
        {designProposals.map((item) => (
          <button key={item.id} className={activeId === item.id ? "active" : ""} onClick={() => setActiveId(item.id)} role="tab" aria-selected={activeId === item.id}>
            <span>{item.id}</span><strong>{item.zh}</strong><small>{item.title}</small>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.article key={active.id} className="proposal-stage" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}>
          <div className="proposal-visual" aria-hidden="true"><div className="proposal-record"><span>{active.id}</span></div><i /><i /><i /></div>
          <div className="proposal-copy">
            <span className="eyebrow">ORIGINAL COURSE PROPOSAL / 原创课程提案</span>
            <h3>{active.title}<small>{active.zh}</small></h3>
            <p className="proposal-question">{active.question}</p>
            <dl>
              <div><dt>INPUT / 输入</dt><dd>{active.input}</dd></div>
              <div><dt>INTERACTION / 交互</dt><dd>{active.interaction}</dd></div>
              <div><dt>OUTPUT / 输出</dt><dd>{active.output}</dd></div>
              <div><dt>ETHICS / 伦理</dt><dd>{active.ethics}</dd></div>
            </dl>
          </div>
        </motion.article>
      </AnimatePresence>
    </section>
  );
}
