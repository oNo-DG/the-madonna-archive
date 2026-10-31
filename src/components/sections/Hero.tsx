import { SourceMarker } from "@/components/common/SourceMarker";

const modules = [
  {
    number: "01", id: "media", eyebrow: "MEDIA ARCHAEOLOGY", title: "媒介考古",
    copy: "从广播电视、实体收藏到网络平台，探索传播媒介如何改变记忆的形成方式。",
    action: "SELECT A MEDIUM", mark: "◉",
  },
  {
    number: "02", id: "timeline", eyebrow: "MEMORY REVISITED", title: "时间回放",
    copy: "切换年份与观察者，比较同一作品如何在作者、粉丝与文化产业中获得不同意义。",
    action: "REWIND THE MEMORY", mark: "↺",
  },
  {
    number: "03", id: "archive", eyebrow: "THE LIVING ARCHIVE", title: "动态档案",
    copy: "筛选物件、影像与评论，观察粉丝如何参与保存和重组流行文化记忆。",
    action: "OPEN THE ARCHIVE", mark: "▦",
  },
];

export function Hero() {
  return (
    <section id="top" className="hero-home">
      <div className="hero-home-inner">
        <div className="home-heading">
          <div className="home-title-block">
            <p>A living archive of pop memory</p>
            <h1>THE MADONNA<br /><em>ARCHIVE.</em></h1>
          </div>
          <div className="home-intro">
            <span>CHAPTER 07 / 1984—2010</span>
            <p>当歌手、粉丝与时代一起变老，流行文化记忆如何被保存、重新理解与商业化？</p>
            <SourceMarker id="S-001" page="pp. 120–135" />
          </div>
        </div>

        <div className="home-modules" aria-label="三个核心互动模块">
          {modules.map((module) => (
            <a className="home-module" href={`#${module.id}`} key={module.id}>
              <div className="module-topline">
                <span>{module.number}</span><span>{module.eyebrow}</span><i aria-hidden="true">{module.mark}</i>
              </div>
              <div className="module-copy"><h2>{module.title}</h2><p>{module.copy}</p></div>
              <span className="module-action">{module.action} ↗</span>
            </a>
          ))}
        </div>

        <div className="home-footerline" aria-hidden="true">
          <span>PLAY</span><span>REWIND</span><span>REMEMBER</span><span>REPEAT</span>
        </div>
      </div>
    </section>
  );
}
