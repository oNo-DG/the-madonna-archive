type ModuleHeroProps = {
  index: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  summary: string;
  code: string;
};

export function ModuleHero({ index, eyebrow, title, titleAccent, summary, code }: ModuleHeroProps) {
  return (
    <section className="module-hero">
      <div className="module-hero-paper" aria-hidden="true">
        <span>MEDIA &amp; MEMORY</span>
        <b>FILE 007 / MODULE {index}</b>
        <i>{index}</i>
      </div>
      <div className="module-hero-record" aria-hidden="true"><span>{index}</span></div>
      <div className="module-hero-copy">
        <span>{eyebrow}</span>
        <h1>{title}<br /><em>{titleAccent}</em></h1>
        <p>{summary}</p>
        <small>{code}</small>
      </div>
    </section>
  );
}
