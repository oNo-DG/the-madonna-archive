import Image from "next/image";

const modules = [
  {
    number: "01", id: "media", eyebrow: "MEDIA ARCHAEOLOGY", title: "媒介考古",
    action: "SELECT A MEDIUM", mark: "◉",
  },
  {
    number: "02", id: "timeline", eyebrow: "MEMORY REVISITED", title: "时间回放",
    action: "REWIND MEMORY", mark: "↺",
  },
  {
    number: "03", id: "archive", eyebrow: "THE LIVING ARCHIVE", title: "动态档案",
    action: "OPEN ARCHIVE", mark: "▦",
  },
];

export function Hero() {
  return (
    <section id="top" className="hero-home">
      <div className="hero-home-inner">
        <div className="game-title">
          <span>MEDIA &amp; MEMORY / CHAPTER 07</span>
          <h1>THE<br />MADONNA<br /><em>ARCHIVE.</em></h1>
          <p>CELEBRITY · AGEING · FAN NOSTALGIA</p>
        </div>

        <div className="game-vinyl" aria-hidden="true">
          <div className="game-sleeve"><span>MM / 07</span></div>
          <Image src="/images/hero-vinyl.png" alt="" width={1200} height={1200} priority />
          <span className="game-catalog">OBJECT 01 / MEMORY RECORD</span>
        </div>

        <nav className="game-menu" aria-label="选择互动模块">
          <span className="game-menu-label">SELECT FILE / 选择模块</span>
          {modules.map((module) => (
            <a className="game-menu-item" href={`#${module.id}`} key={module.id}>
              <span>{module.number}</span>
              <div><strong>{module.title}</strong><small>{module.eyebrow}</small></div>
              <i aria-hidden="true">{module.mark}</i>
              <b>{module.action} ↗</b>
            </a>
          ))}
        </nav>

        <div className="game-status" aria-hidden="true">
          <span>PLAYER 01</span><span>● MEMORY ONLINE</span><span>1984—2010</span>
        </div>
      </div>
    </section>
  );
}
