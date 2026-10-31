import { ModuleHeader } from "@/components/layout/ModuleHeader";
import { Footer } from "@/components/layout/Footer";
import { MediaArchaeology } from "@/components/sections/MediaArchaeology";
import { ChapterResearch } from "@/components/sections/ChapterResearch";

export default function MediaPage() {
  return (
    <>
      <ModuleHeader current="/media" />
      <main className="module-page">
        <MediaArchaeology />
        <ChapterResearch />
      </main>
      <Footer />
    </>
  );
}
