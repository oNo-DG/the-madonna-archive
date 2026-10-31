import { SectionLabel } from "@/components/common/SectionLabel";
import { SourceMarker } from "@/components/common/SourceMarker";

const cases = [
  {
    no: "CASE 01",
    year: "1984 → 2010",
    title: "LIKE A VIRGIN / REVISITED",
    question: "同一作品为何会在不同生命阶段产生不同意义？",
    finding: "媒介作品既保存公众形象，也成为个人自传式记忆的入口。",
    pages: "pp. 120–122",
  },
  {
    no: "CASE 02",
    year: "2009",
    title: "THE AGEING IMAGE",
    question: "数字媒介的持续保存，如何改变公众面对衰老的方式？",
    finding: "过去的精修图像与变化中的身体被并置，名人与粉丝都难以从旧日形象中退出。",
    pages: "pp. 129–132",
  },
  {
    no: "CASE 03",
    year: "2009",
    title: "CELEBRATION / NOSTALGIA",
    question: "怀旧何时从私人情感转化为可经营的文化资源？",
    finding: "精选、重制与视觉再包装同时服务于记忆连续性和新的商品流通。",
    pages: "pp. 132–134",
  },
];

export function CaseStudies() {
  return (
    <section id="cases" className="section-shell section-pad case-section">
      <SectionLabel index="05">CASE INDEX / 案例索引</SectionLabel>
      <div className="section-heading split-heading">
        <h2>THREE WAYS<br />TO READ TIME.</h2>
        <p>三个案例不是额外史料，而是对章节叙事的结构化归纳。它们共同指向记忆、身体和商业之间的张力。</p>
      </div>
      <div className="case-list">
        {cases.map((item) => (
          <article key={item.no}>
            <div className="case-id"><span>{item.no}</span><strong>{item.year}</strong></div>
            <h3>{item.title}</h3>
            <dl>
              <div><dt>QUESTION</dt><dd>{item.question}</dd></div>
              <div><dt>READING</dt><dd>{item.finding}</dd></div>
            </dl>
            <SourceMarker id="S-001" page={item.pages} />
          </article>
        ))}
      </div>
      <div className="critical-note">
        <span>CRITICAL REFLECTION / 批判性反思</span>
        <p>粉丝的个人记忆不等于历史事实，文化记忆也不意味着所有人拥有同一种回忆。档案总是在选择：什么被保存、谁有权解释、哪些版本更容易被平台看见。</p>
      </div>
    </section>
  );
}
