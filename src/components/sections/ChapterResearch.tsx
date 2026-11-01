import { SectionLabel } from "@/components/common/SectionLabel";
import { SourceMarker } from "@/components/common/SourceMarker";

const argumentsList = [
  ["01", "PERSONAL EXPERIENCE", "作者重看 1984 年的作品，也在重看过去那个观看作品的自己。"],
  ["02", "AUDIENCE PARTICIPATION", "评论、收藏与再解释把私人记忆转化为可见的文化材料。"],
  ["03", "CELEBRITY & AGEING", "明星的衰老让稳定的旧影像与变化中的真实身体发生冲突。"],
  ["04", "FAN NOSTALGIA", "怀旧维持个人连续感，也能被文化产业重新包装和销售。"],
];

const readingPath = [
  ["01", "ENCOUNTER", "从作者对 1984 年电视表演的矛盾记忆进入问题。", "pp. 120–122"],
  ["02", "COLLECTION", "粉丝收藏让商品在使用、磨损和叙述中成为记忆档案。", "pp. 122–129"],
  ["03", "AGEING", "旧影像与变化中的身体发生冲突，暴露性别化年龄判断。", "pp. 129–132"],
  ["04", "NOSTALGIA", "精选、重制和平台再传播把怀旧转化为文化资源。", "pp. 132–134"],
];

export function ChapterResearch() {
  return (
    <section id="chapter" className="chapter-section">
      <div className="section-shell section-pad">
        <SectionLabel index="01-A">CHAPTER CONTENT / 章节内容</SectionLabel>
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

        <div className="chapter-map">
          <span className="eyebrow">PROJECT READING MAP / 本项目的章节阅读结构</span>
          {readingPath.map(([num, title, copy, page]) => (
            <article key={num}><span>{num}</span><strong>{title}</strong><p>{copy}</p><small>{page}</small></article>
          ))}
        </div>

        <div className="theory-strip">
          <span className="eyebrow">THREE MODES IN THE CHAPTER</span>
          <div><strong>MODE 1</strong><p>Celebrity & memory<br /><small>名人与文化档案</small></p></div>
          <div><strong>MODE 2</strong><p>Ageing<br /><small>身体、影像与时间</small></p></div>
          <div><strong>MODE 3</strong><p>Fan nostalgia<br /><small>怀旧与文化产业</small></p></div>
        </div>

        <div className="chapter-commentary">
          <span className="eyebrow">CRITICAL COMMENTARY / 批判性评论</span>
          <div>
            <p>章节的价值在于把个人回忆、粉丝实践、明星身体与文化产业放进同一套媒介记忆关系，而不是把怀旧理解为单纯情绪。</p>
            <p>其限制也需要保留：个人经验不能代表所有粉丝，平台保存不等于中立档案，能够被搜索和持续流通的版本往往由版权、算法与商业资源共同决定。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
