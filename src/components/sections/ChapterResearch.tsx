import { SectionLabel } from "@/components/common/SectionLabel";
import { SourceMarker } from "@/components/common/SourceMarker";

const argumentsList = [
  ["01", "PERSONAL EXPERIENCE", "作者重看 1984 年的作品，也在重看过去那个观看作品的自己。"],
  ["02", "AUDIENCE PARTICIPATION", "评论、收藏与再解释把私人记忆转化为可见的文化材料。"],
  ["03", "CELEBRITY & AGEING", "明星的衰老让稳定的旧影像与变化中的真实身体发生冲突。"],
  ["04", "FAN NOSTALGIA", "怀旧维持个人连续感，也能被文化产业重新包装和销售。"],
];

export function ChapterResearch() {
  return (
    <section id="chapter" className="chapter-section">
      <div className="section-shell section-pad">
        <SectionLabel index="02">CHAPTER RESEARCH / 章节研究</SectionLabel>
        <div className="chapter-intro">
          <div>
            <span className="eyebrow">CENTRAL QUESTION</span>
            <h2>WHO OWNS<br />A MEMORY?</h2>
          </div>
          <div className="chapter-thesis">
            <p className="lead">流行文化记忆不是固定的历史档案。</p>
            <p>
              它在名人、粉丝、媒介平台与文化产业之间持续被保存、选择、再解释和重组。
              章节并非麦当娜传记，而是以她为对象的一项媒介记忆研究。
            </p>
            <SourceMarker id="S-001" page="pp. 120–135" />
          </div>
        </div>

        <div className="argument-flow" aria-label="章节论证路径">
          {argumentsList.map(([num, title, copy]) => (
            <article key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>

        <div className="theory-strip">
          <span className="eyebrow">THREE MODES IN THE CHAPTER</span>
          <div><strong>MODE 1</strong><p>Celebrity & memory<br /><small>名人与文化档案</small></p></div>
          <div><strong>MODE 2</strong><p>Ageing<br /><small>身体、影像与时间</small></p></div>
          <div><strong>MODE 3</strong><p>Fan nostalgia<br /><small>怀旧与文化产业</small></p></div>
        </div>
      </div>
    </section>
  );
}
