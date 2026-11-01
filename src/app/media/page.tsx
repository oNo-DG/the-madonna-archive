import { ModuleHeader } from "@/components/layout/ModuleHeader";
import { Footer } from "@/components/layout/Footer";
import { MediaArchaeology } from "@/components/sections/MediaArchaeology";
import { ChapterResearch } from "@/components/sections/ChapterResearch";
import { ModuleHero } from "@/components/layout/ModuleHero";

export default function MediaPage() {
  return (
    <>
      <ModuleHeader current="/media" />
      <main className="module-page archive-module-page">
        <ModuleHero index="01" eyebrow="CHAPTER READING / 章节研究" title="READING" titleAccent="THE CHAPTER" summary="简介、论证结构、分析与批判性评论：把第七章转译成一份可交互的阅读档案。" code="CONTENT / ARGUMENT / STRUCTURE / COMMENTARY" />
        <ChapterResearch />
        <MediaArchaeology />
      </main>
      <Footer />
    </>
  );
}
