import Image from "next/image";

const modules = [
  {
    number: "01", href: "/media", eyebrow: "MEDIA ARCHAEOLOGY", title: "媒介考古",
  },
  {
    number: "02", href: "/timeline", eyebrow: "MEMORY REVISITED", title: "时间回放",
  },
  {
    number: "03", href: "/archive", eyebrow: "THE LIVING ARCHIVE", title: "动态档案",
  },
];

export function Hero() {
  return (
    <section id="top" className="record-home">
      <div className="record-home-meta">
        <span>ARCHIVE NO. 007</span>
        <span>PLAYING / MEMORY</span>
      </div>

      <div className="madonna-memory-wall" aria-hidden="true">
        <div className="memory-frame memory-frame-one">
          <Image src="/images/hero-vinyl.png" alt="" width={1200} height={1200} loading="eager" />
        </div>
        <div className="memory-frame memory-frame-two">
          <Image src="/images/hero-vinyl.png" alt="" width={1200} height={1200} loading="eager" />
        </div>
        <div className="memory-frame memory-frame-three">
          <Image src="/images/hero-vinyl.png" alt="" width={1200} height={1200} loading="eager" />
        </div>
      </div>

      <div className="record-object" aria-label="黑胶唱片与档案封套主视觉">
        <div className="record-cover" aria-hidden="true">
          <span className="cover-kicker">MEDIA<br />&amp; MEMORY</span>
          <div className="cover-content">
            <span className="cover-file">FILE 007 / RESEARCH ARCHIVE</span>
            <p className="cover-question">
              当明星、粉丝与时代<br />一起变老，<br />我们究竟在怀念谁？
            </p>
            <dl className="cover-metadata">
              <div><dt>SUBJECT</dt><dd>MADONNA</dd></div>
              <div><dt>PERIOD</dt><dd>1984—2010</dd></div>
              <div><dt>THEMES</dt><dd>CELEBRITY · AGEING<br />FAN NOSTALGIA</dd></div>
            </dl>
          </div>
          <span className="cover-source">MEDIA AND MEMORY · CH. 07 · PP. 120—135</span>
          <span className="cover-stamp">ARCHIVE<br />COPY</span>
          <i>07</i>
        </div>
        <Image
          className="record-disc"
          src="/images/hero-vinyl.png"
          alt="磨损黑胶唱片，唱片中心为八十年代流行文化风格的麦当娜肖像"
          width={1200}
          height={1200}
          priority
        />
        <span className="record-needle" aria-hidden="true" />
      </div>

      <div className="record-home-title">
        <span>NOW PLAYING</span>
        <h1>THE MADONNA ARCHIVE</h1>
        <p>CELEBRITY · AGEING · FAN NOSTALGIA</p>
        <p className="record-home-summary">一座关于名人、衰老与粉丝怀旧的互动记忆档案。</p>
      </div>

      <nav className="record-entry-menu" aria-label="选择互动模块">
          {modules.map((module) => (
            <a className="record-entry" href={module.href} key={module.href}>
              <span>{module.number}</span>
              <strong>{module.title}</strong>
              <small>{module.eyebrow}</small>
            </a>
          ))}
      </nav>
    </section>
  );
}
