"use client";

import Image from "next/image";
import { ImmersiveDeck, type DeckSlide } from "@/components/layout/ImmersiveDeck";
import { practiceCases } from "@/content/research";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function CaseDeck() {
  const slides: DeckSlide[] = [
    {
      id: "opening", label: "CONTEMPORARY PRACTICES / 当代案例", title: "MEMORY", titleAccent: "IN PRACTICE",
      description: "五个与本章议题直接相关的项目：四项实践项目与一项设计研究，观察音乐身份、私人记忆与参与式档案如何被重新组织。",
      className: "deck-opening",
      content: <div className="deck-opening-object" aria-hidden="true"><div className="deck-paper"><b>04 PRACTICE PROJECTS</b><span>01 DESIGN RESEARCH · OFFICIAL SOURCES</span><i>02</i></div><div className="deck-record"><span>05</span></div></div>,
    },
    ...practiceCases.map((item, index): DeckSlide => ({
      id: item.id,
      label: `${item.year} / ${item.medium}`,
      title: item.title,
      description: item.maker,
      className: "case-deck-scene",
      content: <div className="case-deck-stage">
        <div className="case-deck-outline-record" aria-hidden="true" />
        <div className="case-deck-file">
          <div className="case-visual-window">
            <Image
              src={`${basePath}${item.image}`}
              alt={item.imageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 48vw"
              style={{ objectPosition: item.imagePosition }}
            />
            <div className="case-image-wash" aria-hidden="true" />
            <div className="case-deck-record" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span></div>
            <div className="case-deck-tonearm" aria-hidden="true" />
            <div className="case-deck-playing" aria-hidden="true"><i /> PLAYING / CASE {String(index + 1).padStart(2, "0")}</div>
            <small className="case-image-credit">IMAGE / OFFICIAL PROJECT PAGE</small>
          </div>
          <div className="case-content-band">
            <div className="case-type-line"><b>{item.category}</b><span>{item.categoryZh}</span><i>{item.id}</i></div>
            <div className="case-copy-grid">
              <div className="case-facts"><span>PROJECT FACT / 项目事实</span><p>{item.fact}</p></div>
              <div className="case-practice"><span>IN PRACTICE / 具体实践</span><p>{item.practice}</p></div>
              <div className="case-relation"><span>CHAPTER LINK / 章节关联</span><p>{item.relation}</p></div>
            </div>
            <footer><a href={item.source} target="_blank" rel="noreferrer">OFFICIAL SOURCE ↗</a><small>事实依据官方项目资料 · 章节关联为课程分析</small></footer>
          </div>
        </div>
      </div>,
    })),
    {
      id: "comparison", label: "SYNTHESIS / 横向观察", title: "FROM ARCHIVE", titleAccent: "TO PRACTICE",
      content: <div className="deck-card-grid comparison-grid"><article><span>01 / RE-STAGE</span><h2>SENSORY<br />RE-ENTRY</h2><p>Björk Digital 把既有作品转为空间体验；记忆通过身体、声音与技术被再次进入。</p></article><article><span>02 / RE-FRAME</span><h2>CURATED<br />ACCESS</h2><p>Bowie 与 McCartney 的档案以轮换陈列和私人镜头重写公众形象，也保留研究入口。</p></article><article><span>03 / CO-AUTHOR</span><h2>PARTICIPATORY<br />MEMORY</h2><p>British Invasion 与 GDAO 让观众记录、标记和贡献材料，使档案成为共同维护的关系。</p></article></div>,
    },
  ];

  return <ImmersiveDeck module="02" eyebrow="RELATED PRACTICES / 案例研究" slides={slides} transition="record" />;
}
