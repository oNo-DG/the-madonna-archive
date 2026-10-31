"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/common/SectionLabel";
import { sources } from "@/content/archive";

export function References() {
  const [open, setOpen] = useState(true);

  return (
    <section id="references" className="references-section">
      <div className="section-shell section-pad">
        <SectionLabel index="06">SOURCE REGISTER / 文献索引</SectionLabel>
        <button className="references-toggle" onClick={() => setOpen(!open)} aria-expanded={open}>
          <span>VERIFIED SOURCE FILES</span>
          <span>{open ? "COLLAPSE −" : "EXPAND +"}</span>
        </button>
        {open && (
          <div className="references-list">
            {sources.map((source) => (
              <article key={source.id}>
                <span className="reference-id">[{source.id}]</span>
                <div>
                  <h3>{source.author ? `${source.author}. ` : ""}<em>{source.title}</em>.</h3>
                  <p>{source.detail}</p>
                </div>
                <span className="verified">{source.verified ? "● VERIFIED" : "○ REVIEW"}</span>
              </article>
            ))}
          </div>
        )}
        <div className="source-policy">
          <strong>CONTENT POLICY</strong>
          <p>本网站不使用未经上传材料核对的逐字引语。正文属于课程项目对原章的中文概述与界面化整理；所有原章材料均回指 [S-001] 及页码范围。</p>
        </div>
      </div>
    </section>
  );
}
