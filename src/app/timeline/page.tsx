import { ModuleHeader } from "@/components/layout/ModuleHeader";
import { Footer } from "@/components/layout/Footer";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ModuleHero } from "@/components/layout/ModuleHero";

export default function TimelinePage() {
  return (
    <>
      <ModuleHeader current="/timeline" />
      <main className="module-page archive-module-page">
        <ModuleHero index="02" eyebrow="RELATED PRACTICES / 案例研究" title="MEMORY" titleAccent="IN PRACTICE" summary="六个设计与互动媒体案例，观察个人记忆如何被参与、组织、可视化与公共化。" code="06 VERIFIED CASES / OFFICIAL SOURCES" />
        <CaseStudies />
      </main>
      <Footer />
    </>
  );
}
