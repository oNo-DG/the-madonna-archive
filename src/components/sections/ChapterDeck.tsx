"use client";

import { ImmersiveDeck, type DeckSlide } from "@/components/layout/ImmersiveDeck";

const argumentsList = [
  ["01", "PERSONAL EXPERIENCE", "个人经验", "作者重看 1984 年的作品，也在重看过去那个观看作品的自己。"],
  ["02", "AUDIENCE PARTICIPATION", "观众参与", "评论、收藏与再解释把私人记忆转化为可见的文化材料。"],
  ["03", "CELEBRITY & AGEING", "名人与衰老", "稳定的旧影像与变化中的真实身体发生冲突，并暴露性别化的年龄判断。"],
  ["04", "FAN NOSTALGIA", "粉丝怀旧", "怀旧维持个人连续感，也能被文化产业重新包装和销售。"],
];

const readingPath = [
  ["01", "ENCOUNTER", "相遇", "从作者对 1984 年电视表演的矛盾记忆进入问题。", "120–122"],
  ["02", "COLLECTION", "收藏", "粉丝收藏让商品在使用、磨损和叙述中成为记忆档案。", "122–129"],
  ["03", "AGEING", "衰老", "旧影像与变化中的身体发生冲突，暴露性别化年龄判断。", "129–132"],
  ["04", "NOSTALGIA", "怀旧", "精选、重制和平台再传播把怀旧转化为文化资源。", "132–134"],
];

export function ChapterDeck() {
  const slides: DeckSlide[] = [
    {
      id: "opening", label: "CHAPTER READING / 章节研究", title: "READING", titleAccent: "THE CHAPTER",
      description: "简介、论证结构、分析与批判性评论：把第七章转译成一组可以逐页抽取的研究档案。",
      className: "deck-opening",
      content: <div className="deck-opening-object" aria-hidden="true"><div className="deck-paper"><b>MEDIA &amp; MEMORY</b><span>FILE 007 / CHAPTER READING</span><i>01</i></div><div className="deck-record"><span>01</span></div></div>,
    },
    {
      id: "thesis", label: "INTRODUCTION / 简介", title: "WHO OWNS", titleAccent: "A MEMORY?",
      description: "章节不是麦当娜传记，而是以她为对象的一项媒介记忆研究。",
      content: <div className="deck-paper-panel thesis-panel"><span className="deck-stamp">CENTRAL QUESTION</span><p className="deck-lead">流行文化记忆不是固定的历史档案。</p><p>它在名人、粉丝、媒介平台与文化产业之间持续被保存、选择、再解释和重组。</p><small>SOURCE / CHAPTER 7 · PP. 120–135</small></div>,
    },
    {
      id: "arguments", label: "ARGUMENT / 核心论点", title: "FOUR FORCES", titleAccent: "SHAPE MEMORY",
      content: <div className="deck-card-grid">{argumentsList.map(([id, en, zh, copy]) => <article key={id}><span>{id}</span><h2>{en}<small>{zh}</small></h2><p>{copy}</p></article>)}</div>,
    },
    {
      id: "structure", label: "STRUCTURE / 章节结构", title: "A PATH THROUGH", titleAccent: "THE CHAPTER",
      content: <div className="deck-path">{readingPath.map(([id, en, zh, copy, page]) => <article key={id}><span>{id}</span><h2>{en}<small>{zh}</small></h2><p>{copy}</p><b>PP. {page}</b></article>)}</div>,
    },
    {
      id: "analysis", label: "ANALYSIS / 分析", title: "THREE MODES", titleAccent: "ONE ARCHIVE",
      description: "章节将三种通常被分开讨论的对象放进同一套记忆关系。",
      content: <div className="deck-three-modes"><article><span>MODE 01</span><h2>CELEBRITY</h2><p>名人形象成为由媒体、产业与公众共同维护的文化档案。</p></article><article><span>MODE 02</span><h2>AGEING</h2><p>身体时间与不断循环的年轻影像之间形成不对称。</p></article><article><span>MODE 03</span><h2>NOSTALGIA</h2><p>私人情感既形成身份连续性，也进入商业再生产。</p></article></div>,
    },
    {
      id: "commentary", label: "COMMENTARY / 评论", title: "READ WITH", titleAccent: "A CRITICAL EYE",
      content: <div className="deck-commentary"><div><span>VALUE / 价值</span><p>把个人回忆、粉丝实践、明星身体与文化产业放进同一套媒介记忆关系，而不是把怀旧理解为单纯情绪。</p></div><div><span>LIMIT / 限制</span><p>个人经验不能代表所有粉丝；平台保存也不等于中立档案。能够持续流通的版本往往由版权、算法与商业资源共同决定。</p></div></div>,
    },
  ];

  return <ImmersiveDeck module="01" eyebrow="CHAPTER READING / 章节研究" slides={slides} transition="paper" />;
}
