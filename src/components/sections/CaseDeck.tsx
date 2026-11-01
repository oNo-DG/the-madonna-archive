"use client";

import { ImmersiveDeck, type DeckSlide } from "@/components/layout/ImmersiveDeck";
import { practiceCases } from "@/content/research";

export function CaseDeck() {
  const slides: DeckSlide[] = [
    {
      id: "opening", label: "CONTEMPORARY PRACTICES / 当代案例", title: "MEMORY", titleAccent: "IN PRACTICE",
      description: "六个 2020—2023 年间的设计与媒体实践，聚焦合成记忆、数字替身、名人再演与参与式 AI 档案。",
      className: "deck-opening",
      content: <div className="deck-opening-object" aria-hidden="true"><div className="deck-paper"><b>CASE FILES / 2020—2023</b><span>VERIFIED OFFICIAL SOURCES</span><i>02</i></div><div className="deck-record"><span>06</span></div></div>,
    },
    ...practiceCases.map((item, index): DeckSlide => ({
      id: item.id,
      label: `${item.year} / ${item.medium}`,
      title: item.title,
      description: item.maker,
      className: "case-deck-scene",
      content: <div className="case-deck-file">
        <div className="case-deck-record" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span></div>
        <div className="case-facts"><span>PROJECT FACT / 项目事实</span><p>{item.fact}</p></div>
        <div className="case-relation"><span>CHAPTER RELATION / 章节关联</span><p>{item.relation}</p></div>
        <a href={item.source} target="_blank" rel="noreferrer">OFFICIAL SOURCE ↗</a>
        <small>项目事实依据官方资料；章节关联为本课程项目的分析。</small>
      </div>,
    })),
    {
      id: "comparison", label: "COMPARISON / 横向观察", title: "WHAT CHANGES", titleAccent: "AFTER AI?",
      content: <div className="deck-card-grid comparison-grid"><article><span>01</span><h2>FROM STORAGE<br />TO GENERATION</h2><p>档案不再只保存既有材料，也开始生成从未被拍摄的“记忆影像”。</p></article><article><span>02</span><h2>FROM IMAGE<br />TO PERSONA</h2><p>静态名人形象被转化为能够表演、回应甚至长期更新的数字替身。</p></article><article><span>03</span><h2>FROM NOSTALGIA<br />TO GOVERNANCE</h2><p>怀旧体验越来越依赖训练数据、授权、同意机制与真实性标记。</p></article></div>,
    },
  ];

  return <ImmersiveDeck module="02" eyebrow="RELATED PRACTICES / 案例研究" slides={slides} transition="record" />;
}
