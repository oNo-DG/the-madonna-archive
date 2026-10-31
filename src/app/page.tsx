import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/sections/Hero";
import { OpeningSequence } from "@/components/sections/OpeningSequence";
import { MediaArchaeology } from "@/components/sections/MediaArchaeology";
import { ChapterResearch } from "@/components/sections/ChapterResearch";
import { MemoryTimeline } from "@/components/sections/MemoryTimeline";
import { ArchiveExplorer } from "@/components/sections/ArchiveExplorer";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { References } from "@/components/sections/References";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <OpeningSequence />
      <Navigation />
      <main>
        <Hero />
        <MediaArchaeology />
        <ChapterResearch />
        <MemoryTimeline />
        <ArchiveExplorer />
        <CaseStudies />
        <References />
      </main>
      <Footer />
    </>
  );
}
