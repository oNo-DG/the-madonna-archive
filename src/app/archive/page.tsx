import { ModuleHeader } from "@/components/layout/ModuleHeader";
import { Footer } from "@/components/layout/Footer";
import { ArchiveExplorer } from "@/components/sections/ArchiveExplorer";
import { ModuleHero } from "@/components/layout/ModuleHero";
import { References } from "@/components/sections/References";

export default function ArchivePage() {
  return (
    <>
      <ModuleHeader current="/archive" />
      <main className="module-page archive-module-page">
        <ModuleHero index="03" eyebrow="DIGITAL PROPOSITIONS / 设计延伸" title="DESIGNING" titleAccent="LIVING MEMORY" summary="三个从章节内容延伸出的数字媒体实践提案，把研究问题转译为可交互机制。" code="03 ORIGINAL PROPOSALS / COURSE PROJECT" />
        <ArchiveExplorer />
        <References />
      </main>
      <Footer />
    </>
  );
}
