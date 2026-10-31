import Link from "next/link";

const modules = [
  ["01", "媒介考古", "/media"],
  ["02", "时间回放", "/timeline"],
  ["03", "动态档案", "/archive"],
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
