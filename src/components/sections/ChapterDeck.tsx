"use client";

import { ImmersiveDeck, type DeckSlide } from "@/components/layout/ImmersiveDeck";

const mediaMaterials = [
  ["01", "MUSIC VIDEO", "音乐录像"],
  ["02", "HISTORICAL IMAGE", "历史照片"],
  ["03", "FAN COLLECTION", "粉丝收藏"],
  ["04", "ONLINE COMMENT", "网络评论"],
  ["05", "PERFORMANCE", "演出影像"],
];

const chapterModes = [
  ["01", "CELEBRITY & MEMORY", "名人与记忆", "公众形象如何被保存、讨论和共同创造", "SYMBOLIC IMMORTALITY"],
  ["02", "AGEING", "衰老", "年轻档案影像如何与现实身体发生冲突", "GENDERED EXPECTATION"],
  ["03", "FAN NOSTALGIA", "粉丝怀旧", "旧作品如何连接生命经历并产生新价值", "PERSONAL · COLLECTIVE · COMMERCIAL"],
];

const archiveActions = [
  ["保存", "SAVE", "让音乐、照片与表演持续可见"],
  ["选择", "SELECT", "决定哪些版本进入公共记忆"],
  ["解释", "INTERPRET", "把媒介材料连接到个人经验"],
  ["分享", "SHARE", "让私人回忆进入集体讨论"],
  ["重构", "REMAKE", "在当下重新定义过去的意义"],
];

const criticalReading = [
  ["CONTRIBUTION 01", "受众不是被动消费者", "粉丝通过整理、收藏、讨论与模仿，直接参与集体记忆的形成。"],
  ["CONTRIBUTION 02", "数字档案具有双重作用", "网络既保存文化遗产，也让未经修饰的材料和负面评价持续流通。"],
  ["CONTRIBUTION 03", "记忆与商业权力相互缠绕", "产业可以把怀旧转化为商品，但粉丝仍能生成超出商业意图的意义。"],
  ["LIMIT 01", "明星案例的代表性有限", "麦当娜拥有庞大资源和全球粉丝，其形象控制能力不一定适用于普通音乐人。"],
  ["LIMIT 02", "平台材料带有时代背景", "章节主要讨论二〇〇九至二〇一〇年前后的数字平台与网络实践。"],
];

const summaryIndex = [
  ["CELEBRITY", "名人与记忆", "形象由明星、产业与粉丝共同建构"],
  ["ARCHIVE", "数字档案", "既能保存遗产，也可能暴露形象"],
  ["AGEING", "衰老", "女性名人承受持续的年龄与外貌评判"],
  ["FANDOM", "粉丝文化", "收藏、评论与模仿都是记忆劳动"],
  ["NOSTALGIA", "怀旧", "连接个人与集体经验，也能成为商业资源"],
  ["MEMORY", "媒体与记忆", "过去在当下被不断选择、解释与重构"],
];

export function ChapterDeck() {
  const slides: DeckSlide[] = [
    {
      id: "opening",
      label: "CHAPTER INTRODUCTION / 章节介绍",
      title: "THE MADONNA",
      titleAccent: "ARCHIVE",
      description: "《媒体与记忆》第七章：名人、衰老与粉丝怀旧。",
      className: "deck-opening chapter-opening",
      content: (
        <div className="deck-opening-object" aria-hidden="true">
          <div className="deck-paper"><b>MEDIA &amp; MEMORY</b><span>FILE 007 / CHAPTER INTRODUCTION</span><i>01</i></div>
          <div className="deck-record"><span>07</span></div>
        </div>
      ),
    },
    {
      id: "overview",
      label: "OVERVIEW / 章节简介",
      title: "MEMORY IS",
      titleAccent: "MADE",
      description: "本章以麦当娜为研究对象，但重点不是她的个人传记，而是过去如何通过媒介、产业和粉丝在当下被重新组织。",
      content: (
        <div className="chapter-overview-visual">
          <div className="chapter-overview-copy">
            <span>CHAPTER SCOPE / 研究范围</span>
            <p>流行音乐、数字媒体、名人文化与粉丝群体，共同塑造人们对过去的记忆。</p>
            <small>每一种媒介材料，既记录名人的职业形象，也可能唤起粉丝自己的青春、关系与身份经验。</small>
          </div>
          <div className="chapter-material-orbit" aria-label="本章分析的五类媒介材料">
            <div className="chapter-orbit-core"><b>MEDIA</b><i>×</i><b>MEMORY</b></div>
            {mediaMaterials.map(([id, en, zh]) => (
              <div className={`material-node material-node-${id}`} key={id}><span>{id}</span><b>{en}</b><small>{zh}</small></div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "thesis",
      label: "ARGUMENT / 核心论点",
      title: "NO ONE OWNS",
      titleAccent: "THE PAST",
      description: "名人的文化记忆不是由某一方单独决定，而是在名人、媒体产业与粉丝的互动中共同建构。",
      content: (
        <div className="chapter-coauthor-map" aria-label="名人文化记忆共同建构关系图">
          <div className="coauthor-ring" aria-hidden="true" />
          <article className="coauthor celebrity"><span>01 / CELEBRITY</span><h2>名人</h2><p>通过作品、宣传和经典形象不断重塑自己的过去。</p></article>
          <article className="coauthor industry"><span>02 / INDUSTRY</span><h2>媒体产业</h2><p>选择、包装并重新发行过去，使记忆成为可流通的文化资源。</p></article>
          <article className="coauthor fans"><span>03 / FANS</span><h2>粉丝</h2><p>以收藏、评论、分享和模仿，为档案材料赋予个人与集体意义。</p></article>
          <div className="coauthor-core"><span>THE LIVING ARCHIVE</span><strong>文化记忆</strong><small>持续协商，而非静止仓库</small></div>
          <p className="coauthor-platform">DIGITAL MEDIA / 数字平台让三方持续相遇，也让任何一方都无法完全控制哪些版本会被记住。</p>
        </div>
      ),
    },
    {
      id: "structure",
      label: "STRUCTURE / 章节结构",
      title: "THREE TRACKS",
      titleAccent: "ONE ARGUMENT",
      description: "章节围绕三个相互关联的主题展开，它们共同回答名人如何被记住。",
      content: (
        <div className="chapter-three-tracks" aria-label="章节三部分结构">
          <div className="track-grooves" aria-hidden="true" />
          {chapterModes.map(([id, en, zh, copy, tag]) => (
            <article key={id}>
              <span>{id}</span><div><small>{tag}</small><h2>{en}<i>{zh}</i></h2><p>{copy}</p></div>
            </article>
          ))}
          <b className="track-spindle" aria-hidden="true" />
        </div>
      ),
    },
    {
      id: "celebrity-memory",
      label: "ANALYSIS I / 名人与记忆",
      title: "SYMBOLIC",
      titleAccent: "IMMORTALITY",
      description: "官方影像与粉丝实践共同维持名人的文化存在；影响力并不只取决于现实中的个人，也取决于后来的人如何持续回看与解释。",
      content: (
        <div className="chapter-memory-loop">
          <div className="memory-loop-record"><span>PUBLIC IMAGE</span><b>公众形象</b></div>
          <ol>
            {archiveActions.map(([zh, en, copy], index) => (
              <li key={en}><span>{String(index + 1).padStart(2, "0")}</span><b>{en}<i>{zh}</i></b><p>{copy}</p></li>
            ))}
          </ol>
          <p className="memory-loop-note">粉丝不是档案之外的观众，而是文化记忆的保存者、解释者与传播者。</p>
        </div>
      ),
    },
    {
      id: "ageing",
      label: "ANALYSIS II / 衰老",
      title: "THE IMAGE STAYS",
      titleAccent: "THE BODY AGES",
      description: "数字档案反复循环年轻形象，而现实身体持续变化；两者之间的距离成为社会评判女性名人的冲突现场。",
      content: (
        <div className="chapter-ageing-tension">
          <article className="ageing-side archive-side"><span>ARCHIVE IMAGE / 档案影像</span><h2>可重复<br />可修饰<br />保持年轻</h2><p>经典照片、服装、舞蹈和视觉风格不断在当下重新出现。</p></article>
          <div className="ageing-needle" aria-hidden="true"><i /><b /></div>
          <article className="ageing-side body-side"><span>LIVED BODY / 现实身体</span><h2>会变化<br />会衰老<br />无法冻结</h2><p>未经修饰的照片和网络评论，使名人难以完全控制公众形象。</p></article>
          <div className="ageing-conflict"><span>GENDERED PRESSURE</span><strong>保存形象</strong><i>≠</i><strong>停止衰老</strong><small>档案既维护文化地位，也可能暴露形象与现实之间的差异。</small></div>
        </div>
      ),
    },
    {
      id: "nostalgia",
      label: "ANALYSIS III / 粉丝怀旧",
      title: "NOSTALGIA HAS",
      titleAccent: "THREE SIDES",
      description: "怀旧不是简单返回过去，而是用旧歌、影像、服装和专辑，在当下重新连接个人经历、共同文化与商业价值。",
      content: (
        <div className="chapter-nostalgia-triangle" aria-label="怀旧的个人性、集体性与商业性">
          <svg viewBox="0 0 800 520" role="img" aria-label="三角关系线图"><path d="M400 54 L92 458 L708 458 Z" /><circle cx="400" cy="54" r="9"/><circle cx="92" cy="458" r="9"/><circle cx="708" cy="458" r="9"/></svg>
          <article className="nostalgia-personal"><span>01 / PERSONAL</span><h2>个人性</h2><p>唤起青春、关系与身份变化。</p></article>
          <article className="nostalgia-collective"><span>02 / COLLECTIVE</span><h2>集体性</h2><p>把私人经历连接到共同文化记忆。</p></article>
          <article className="nostalgia-commercial"><span>03 / COMMERCIAL</span><h2>商业性</h2><p>旧作品被重新包装并获得新的市场价值。</p></article>
          <div className="nostalgia-core"><span>FAN NOSTALGIA</span><b>真实情感</b><i>×</i><b>产业利用</b></div>
        </div>
      ),
    },
    {
      id: "archive-duality",
      label: "SYNTHESIS / 数字档案",
      title: "THE ARCHIVE",
      titleAccent: "CUTS BOTH WAYS",
      description: "档案不是中性的储存空间。它在保存文化遗产的同时，也保存未经选择的材料、负面评价和公众争议。",
      content: (
        <div className="chapter-archive-duality">
          <article className="archive-protect"><span>SIDE A / PRESERVE</span><h2>保存</h2><ul><li>让历史作品持续可见</li><li>维持名人的文化影响力</li><li>支持粉丝形成共同记忆</li></ul></article>
          <div className="archive-duality-record" aria-hidden="true"><span>A</span><i /><span>B</span></div>
          <article className="archive-expose"><span>SIDE B / EXPOSE</span><h2>暴露</h2><ul><li>保留未经修饰的影像</li><li>延长负面评价的传播</li><li>削弱名人对形象的控制</li></ul></article>
          <p>数字媒介改变的并不只是“存了多少”，更是<strong>谁能保存、谁能解释、谁决定什么被重新看见</strong>。</p>
        </div>
      ),
    },
    {
      id: "commentary",
      label: "COMMENTARY / 批判性评论",
      title: "READ THE FILE",
      titleAccent: "WITH FRICTION",
      description: "前三项是文档归纳的章节贡献；后两项是阅读本章时需要保留的方法意识。",
      content: (
        <div className="chapter-critical-ledger">
          {criticalReading.map(([type, title, copy], index) => (
            <article className={index < 3 ? "contribution" : "limitation"} key={type}>
              <span>{type}</span><h2>{title}</h2><p>{copy}</p>
            </article>
          ))}
          <div className="critical-key"><span>AUTHOR&apos;S ARGUMENT / 作者论点</span><span>PROJECT COMMENTARY / 项目评论</span></div>
        </div>
      ),
    },
    {
      id: "summary",
      label: "SUMMARY / 章节总结",
      title: "WHAT TO",
      titleAccent: "REMEMBER",
      description: "本章最重要的结论：记忆不是过去的简单复制，而是人们在当下围绕身份、年龄、情感与文化价值持续进行的协商。",
      content: (
        <div className="chapter-summary-index">
          {summaryIndex.map(([en, zh, point], index) => (
            <article key={en}><span>{String(index + 1).padStart(2, "0")}</span><b>{en}<i>{zh}</i></b><p>{point}</p></article>
          ))}
          <footer><span>PRIMARY TEXT</span><p>Joanne Garde-Hansen · <i>Media and Memory</i> · Chapter 7 “The Madonna Archive”</p></footer>
        </div>
      ),
    },
  ];

  return <ImmersiveDeck module="01" eyebrow="CHAPTER INTRODUCTION / 章节介绍" slides={slides} transition="paper" />;
}
