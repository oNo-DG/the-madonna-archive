import Image from "next/image";
import { SourceMarker } from "@/components/common/SourceMarker";

export function Hero() {
  return (
    <section id="top" className="hero section-shell">
      <div className="hero-meta">
        <span>ARCHIVE NO. 007</span>
        <span>MEDIA / MEMORY / POP</span>
        <span>STATUS: REVISITED</span>
      </div>

      <div className="hero-collage">
        <div className="hero-title-wrap">
          <p className="hero-kicker">A living archive of pop memory</p>
          <h1>
            <span className="title-the">THE</span>
            <span className="title-madonna">MADONNA</span>
            <span className="title-archive">ARCHIVE.</span>
          </h1>
          <span className="title-echo" aria-hidden="true">M / M / M / M</span>
        </div>

        <div className="hero-vinyl-stage">
          <div className="record-sleeve" aria-hidden="true">
            <span>MEDIA &amp; MEMORY</span>
            <i>07</i>
          </div>
          <div className="vinyl-shadow" aria-hidden="true" />
          <Image
            className="hero-vinyl"
            src="/images/hero-vinyl.png"
            alt="磨损黑胶唱片，中心为八十年代流行文化风格的麦当娜肖像"
            width={1200}
            height={1200}
            priority
          />
          <span className="catalog-tag">CAT. M–1984–07</span>
          <span className="vinyl-caption">OBJECT 01 / VINYL MEMORY</span>
          <span className="stamp">ARCHIVE<br />REVISITED</span>
          <span className="memory-note">remember<br />the girl you were</span>
        </div>

        <div className="hero-intro torn-note">
          <span className="note-pin" aria-hidden="true" />
          <p className="lead">
            当歌手、粉丝与时代一起变老，流行文化记忆如何被保存、重新理解与商业化？
          </p>
          <p>
            一个基于 Joanne Garde-Hansen《Media and Memory》第七章的编辑式交互档案。
            页面把章节论证组织为媒介、时间、身体与粉丝参与之间可探索的关系。
          </p>
          <SourceMarker id="S-001" page="pp. 120–135" />
        </div>

        <div className="hero-index">
          <span>OPEN THE DRAWER</span>
          <ol>
            <li><a href="#media">Media evolution</a></li>
            <li><a href="#chapter">Chapter argument</a></li>
            <li><a href="#timeline">Memory revisited</a></li>
            <li><a href="#archive">Living archive</a></li>
          </ol>
        </div>

        <div className="archive-strip" aria-hidden="true">
          <span>PLAY</span><span>REWIND</span><span>REMEMBER</span><span>REPEAT</span>
        </div>
      </div>

      <a className="scroll-cue" href="#media">SCROLL TO OPEN FILE ↓</a>
    </section>
  );
}
