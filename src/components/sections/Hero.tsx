import { SourceMarker } from "@/components/common/SourceMarker";

export function Hero() {
  return (
    <section id="top" className="hero section-shell">
      <div className="hero-meta">
        <span>ARCHIVE NO. 007</span>
        <span>MEDIA / MEMORY / POP</span>
        <span>STATUS: REVISITED</span>
      </div>

      <div className="hero-title-wrap">
        <p className="hero-kicker">A living archive of pop memory</p>
        <h1>
          THE MADONNA
          <span>ARCHIVE.</span>
        </h1>
      </div>

      <div className="hero-grid">
        <div className="hero-intro">
          <p className="lead">
            当歌手、粉丝与时代一起变老，流行文化记忆如何被保存、重新理解与商业化？
          </p>
          <p>
            一个基于 Joanne Garde-Hansen《Media and Memory》第七章的编辑式交互档案。
            页面把章节论证组织为媒介、时间、身体与粉丝参与之间可探索的关系。
          </p>
          <SourceMarker id="S-001" page="pp. 120–135" />
        </div>

        <div className="hero-art" aria-label="抽象档案封面图形">
          <div className="portrait-frame">
            <div className="portrait-figure">
              <span className="portrait-halo" />
              <span className="portrait-head" />
              <span className="portrait-body" />
            </div>
            <div className="scanline" />
          </div>
          <span className="figure-label">FIG. 01 — MEMORY / IMAGE / TIME</span>
          <span className="stamp">REWIND<br />1984</span>
        </div>

        <div className="hero-index">
          <span>FILE CONTENTS</span>
          <ol>
            <li><a href="#media">Media evolution</a></li>
            <li><a href="#chapter">Chapter argument</a></li>
            <li><a href="#timeline">Memory revisited</a></li>
            <li><a href="#archive">Living archive</a></li>
          </ol>
        </div>
      </div>

      <a className="scroll-cue" href="#media">SCROLL TO OPEN FILE ↓</a>
    </section>
  );
}
