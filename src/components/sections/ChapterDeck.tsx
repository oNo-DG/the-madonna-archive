"use client";

import { ImmersiveDeck, type DeckSlide } from "@/components/layout/ImmersiveDeck";

const researchQuestions = [
  ["01", "FAN MEMORY", "粉丝如何用评论、收藏与模仿，把流行文化连接到自己的生命史？"],
  ["02", "ARCHIVE POWER", "官方产业与草根粉丝，分别在选择哪些材料进入“麦当娜档案”？"],
  ["03", "AGEING", "当年轻影像持续循环，真实衰老的女性身体为何成为冲突现场？"],
  ["04", "NOSTALGIA", "怀旧何时是身份与情感实践，何时又被转化为可销售的遗产？"],
];

const chapterPath = [
  ["01", "ENTRY", "问题进入", "从作者重看 1984 年《Like a Virgin》的个人记忆与 YouTube 评论进入研究。", "120–122"],
  ["02", "FRAME", "理论框架", "以流行记忆、文化工业与粉丝研究，说明消费并不排除主动意义生产。", "122–125"],
  ["03", "MODE 1", "名人与记忆", "粉丝记忆把名人锚定在时间中，并参与建构其文化遗产与“身后价值”。", "125–129"],
  ["04", "MODE 2", "衰老", "年轻旧影像与衰老身体并置，显露性别化年龄规范与数字记忆的残酷。", "129–132"],
  ["05", "MODE 3", "粉丝怀旧", "怀旧连接个人与集体传记，也让明星及其旧作成为可经营的遗产产业。", "132–135"],
];

const archiveEvidence = [
  ["A", "LIKE A VIRGIN", "旧视频下的回忆、技术分析与身份叙述，使观看行为成为公开的记忆劳动。", "PP. 120–122"],
  ["B", "PICTURE PROJECT", "官方项目收集两千余张粉丝藏品照片，模糊企业策展与草根收藏的边界。", "PP. 122–125"],
  ["C", "AGEING IMAGES", "新闻、广告与未修图影像围绕她的身体争论，暴露女性衰老受到的双重标准。", "PP. 129–132"],
  ["D", "CELEBRATION", "精选辑与波普化封面重新包装旧作，把档案、怀旧与未来市场连接起来。", "PP. 132–134"],
];

const furtherReading = [
  ["01", "BIJSTERVELD & VAN DIJCK", "Sound Souvenirs: Audio Technologies, Memory and Cultural Practices", "2009"],
  ["02", "BRABAZON", "From Revolution to Revelation: Generation X, Popular Memory and Cultural Studies", "2005"],
  ["03", "FRITH", "Taking Popular Music Seriously: Selected Essays", "2007"],
  ["04", "KALOSKI NAYLOR", "Michael Jackson’s Post-Self", "2010"],
  ["05", "PICKERING & KEIGHTLEY", "The Modalities of Nostalgia", "2006"],
  ["06", "SNYDER", "Music and Memory: An Introduction", "2000"],
];

export function ChapterDeck() {
  const slides: DeckSlide[] = [
    {
      id: "opening",
      label: "CHAPTER INTRODUCTION / 章节介绍",
      title: "INTRODUCING",
      titleAccent: "CHAPTER 07",
      description: "简介、论点、结构、分析、评论与书目：以十组档案画面完整梳理《The Madonna Archive》。",
      className: "deck-opening",
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
      title: "NOT A",
      titleAccent: "BIOGRAPHY",
      description: "第七章从“媒介如何再现过去”转向“受众如何参与制造记忆”。研究对象不是麦当娜个人生平，而是围绕她形成的媒介档案、粉丝实践与文化产业。",
      content: (
        <div className="deck-paper-panel chapter-overview-panel">
          <span className="deck-stamp">CHAPTER 07 · PP. 120–135</span>
          <p className="deck-lead">谁在建构麦当娜将如何被记住？</p>
          <p>作者以自身记忆为入口，观察粉丝如何通过观看、评论、收藏、模仿和再叙述，把流行音乐材料变成个人与集体记忆。</p>
          <small>CASE STUDY / CELEBRITY · AGEING · FAN NOSTALGIA</small>
        </div>
      ),
    },
    {
      id: "questions",
      label: "QUESTIONS / 研究问题",
      title: "FOUR QUESTIONS",
      titleAccent: "OPEN THE FILE",
      description: "这些问题来自章节开篇与后续三种分析模式，构成整章的阅读线索。",
      content: (
        <div className="deck-card-grid chapter-question-grid">
          {researchQuestions.map(([id, title, copy]) => (
            <article key={id}><span>{id}</span><h2>{title}</h2><p>{copy}</p></article>
          ))}
        </div>
      ),
    },
    {
      id: "thesis",
      label: "ARGUMENT / 核心论点",
      title: "FANS MAKE",
      titleAccent: "THE ARCHIVE",
      description: "章节的关键转向：粉丝不是档案之外的被动消费者，而是流行文化记忆的生产者、分类者与传播者。",
      content: (
        <div className="chapter-thesis-map" aria-label="章节核心论证关系图">
          <div><span>CELEBRITY / 名人</span><p>提供不断重塑的形象、作品与官方档案</p></div>
          <b>↔</b>
          <div className="active"><span>FANS / 粉丝</span><p>以情感、收藏、评论和身体实践赋予材料意义</p></div>
          <b>↔</b>
          <div><span>INDUSTRY / 产业</span><p>把关注、怀旧与文化遗产重新组织为商品</p></div>
          <small>媒体平台让三者持续相遇；档案因此是一种协商关系，而不是静止仓库。</small>
        </div>
      ),
    },
    {
      id: "structure",
      label: "STRUCTURE / 章节结构",
      title: "FIVE STEPS",
      titleAccent: "THROUGH THE CHAPTER",
      content: (
        <div className="deck-path chapter-five-path">
          {chapterPath.map(([id, en, zh, copy, page]) => (
            <article key={id}><span>{id}</span><h2>{en}<small>{zh}</small></h2><p>{copy}</p><b>PP. {page}</b></article>
          ))}
        </div>
      ),
    },
    {
      id: "framework",
      label: "ANALYSIS I / 理论框架",
      title: "CONSUMING",
      titleAccent: "IS ALSO MAKING",
      description: "作者把文化工业批判与粉丝研究并置：商品由产业生产，但意义并不完全由产业决定。",
      content: (
        <div className="deck-commentary chapter-framework">
          <div><span>CULTURE INDUSTRY / 文化工业</span><p>唱片、演出与纪念品首先是可购买的商品；官方也能将粉丝贡献重新纳入品牌档案。</p></div>
          <div><span>POPULAR MEMORY / 流行记忆</span><p>被历史与博物馆忽略的日常流行文化，可以通过收藏和讲述成为理解一代人生活的材料。</p></div>
          <div><span>FANDOM / 粉丝实践</span><p>粉丝通过使用、热爱与再解释留下“被爱过的痕迹”，有时顺从商品逻辑，有时也会挑战它。</p></div>
        </div>
      ),
    },
    {
      id: "modes",
      label: "ANALYSIS II / 三种模式",
      title: "THREE MODES",
      titleAccent: "ONE LIVING ARCHIVE",
      content: (
        <div className="deck-three-modes chapter-mode-detail">
          <article><span>MODE 01 · PP. 125–129</span><h2>CELEBRITY<br />&amp; MEMORY</h2><p>共同记忆确认“老粉丝”的身份，也把名人固定为跨世代文化坐标；粉丝与产业共同生产她的象征性永生。</p></article>
          <article><span>MODE 02 · PP. 129–132</span><h2>AGEING</h2><p>媒体反复保存年轻形象，却要求现实身体“不显老”。身体与面孔因此成为记录、修饰和主动遗忘发生的档案界面。</p></article>
          <article><span>MODE 03 · PP. 132–135</span><h2>FAN<br />NOSTALGIA</h2><p>怀旧让人借旧歌重建个人生命史，也把旧作品转化为复刻、精选、巡演与品牌遗产的商业资源。</p></article>
        </div>
      ),
    },
    {
      id: "evidence",
      label: "ANALYSIS III / 文本与材料",
      title: "HOW THE CLAIM",
      titleAccent: "IS BUILT",
      description: "章节并非只提出概念，而是让不同媒介材料互相印证。以下四组材料支撑整章论证。",
      content: (
        <div className="chapter-evidence-grid">
          {archiveEvidence.map(([id, title, copy, page]) => (
            <article key={id}><span>{id}</span><div><h2>{title}</h2><p>{copy}</p></div><small>{page}</small></article>
          ))}
        </div>
      ),
    },
    {
      id: "commentary",
      label: "COMMENTARY / 评论",
      title: "READ WITH",
      titleAccent: "A CRITICAL EYE",
      description: "以下为本项目基于原章所作的评论，不作为作者原话。",
      content: (
        <div className="deck-commentary chapter-final-commentary">
          <div><span>VALUE / 价值</span><p>把私人回忆、粉丝实践、女性身体和文化工业放进同一套关系，说明“档案”不是物品集合，而是持续发生的权力与情感实践。</p></div>
          <div><span>LIMIT / 方法限制</span><p>材料多来自公开评论、新闻与作者自身经验，缺少系统的受访者样本；因此更适合作为探索性案例，而不是代表全部粉丝。</p></div>
          <div><span>UPDATE / 当代补充</span><p>本章写于 2011 年。今天还需追问算法推荐、平台下架、版权封锁与生成式影像，如何重新决定哪些版本可见、可信并被记住。</p></div>
        </div>
      ),
    },
    {
      id: "references",
      label: "REFERENCES / 参考与延伸阅读",
      title: "KEEP READING",
      titleAccent: "BEYOND THE FILE",
      description: "主文献与作者在第七章末尾推荐的延伸阅读。以下书目均来自原章第 135 页。",
      content: (
        <div className="chapter-reference-list">
          <article className="primary"><span>PRIMARY SOURCE / 主文献</span><h2>GARDE-HANSEN, JOANNE</h2><p><i>Media and Memory</i>, Chapter 7: “The Madonna Archive: Celebrity, Ageing and Fan Nostalgia.” Edinburgh University Press, 2011, pp. 120–135.</p></article>
          {furtherReading.map(([id, author, title, year]) => (
            <article key={id}><span>{id} / {year}</span><h2>{author}</h2><p>{title}</p></article>
          ))}
        </div>
      ),
    },
  ];

  return <ImmersiveDeck module="01" eyebrow="CHAPTER INTRODUCTION / 章节介绍" slides={slides} transition="paper" />;
}
