"use client";

import { ImmersiveDeck, type DeckSlide } from "@/components/layout/ImmersiveDeck";
import { designProposals } from "@/content/research";

export function ProposalDeck() {
  const slides: DeckSlide[] = [
    {
      id: "opening", label: "DIGITAL PROPOSITIONS / 设计延伸", title: "DESIGNING", titleAccent: "LIVING MEMORY",
      description: "三个从名人衰老、粉丝怀旧与活档案延伸出的原创数字媒体实践提案。",
      className: "deck-opening",
      content: <div className="deck-opening-object" aria-hidden="true"><div className="deck-paper"><b>ORIGINAL COURSE PROPOSALS</b><span>INPUT / INTERACTION / OUTPUT / ETHICS</span><i>03</i></div><div className="deck-record"><span>03</span></div></div>,
    },
    ...designProposals.map((item, index): DeckSlide => ({
      id: item.id,
      label: `ORIGINAL PROPOSAL ${item.id.replace("P-", "")}`,
      title: item.title,
      description: item.zh,
      className: "proposal-deck-scene",
      content: <div className="proposal-deck-file">
        <div className="proposal-scan-visual" aria-hidden="true"><div className="proposal-digital-record"><span>{String(index + 1).padStart(2, "0")}</span></div><i /><i /><i /></div>
        <div className="proposal-deck-copy">
          <p className="proposal-deck-question">{item.question}</p>
          <dl><div><dt>INPUT / 输入</dt><dd>{item.input}</dd></div><div><dt>INTERACTION / 交互</dt><dd>{item.interaction}</dd></div><div><dt>OUTPUT / 输出</dt><dd>{item.output}</dd></div><div><dt>ETHICS / 伦理</dt><dd>{item.ethics}</dd></div></dl>
        </div>
      </div>,
    })),
    {
      id: "principles", label: "DESIGN PRINCIPLES / 设计原则", title: "A LIVING ARCHIVE", titleAccent: "NEEDS LIMITS",
      content: <div className="deck-commentary"><div><span>PARTICIPATION</span><p>让记忆拥有者决定如何贡献、修改与撤回，而不是只提供一次性上传入口。</p></div><div><span>TRANSPARENCY</span><p>清楚区分真实材料、策展解释与生成内容，不让技术效果替代来源说明。</p></div><div><span>CARE</span><p>把衰老、失落与怀旧视为需要照护的经验，而不是可以无限提取的数据资源。</p></div></div>,
    },
  ];

  return <ImmersiveDeck module="03" eyebrow="DIGITAL PROPOSITIONS / 设计延伸" slides={slides} transition="scan" />;
}
