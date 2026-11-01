import Link from "next/link";

const modules = [
  ["01", "章节介绍", "/media"],
  ["02", "案例研究", "/timeline"],
  ["03", "设计延伸", "/archive"],
];

export function ModuleHeader({ current }: { current: string }) {
  return (
    <header className="module-header">
      <Link className="module-home" href="/" aria-label="返回首页">M<span>/</span>M</Link>
      <nav aria-label="模块导航">
        {modules.map(([number, label, href]) => (
          <Link className={current === href ? "active" : ""} href={href} key={href}>
            <span>{number}</span>{label}
          </Link>
        ))}
      </nav>
      <span className="module-header-status">FILE 007 / OPEN</span>
    </header>
  );
}
