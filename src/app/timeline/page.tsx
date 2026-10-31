import { ModuleHeader } from "@/components/layout/ModuleHeader";
import { Footer } from "@/components/layout/Footer";
import { MemoryTimeline } from "@/components/sections/MemoryTimeline";
import { CaseStudies } from "@/components/sections/CaseStudies";

export default function TimelinePage() {
  return (
    <>
      <ModuleHeader current="/timeline" />
      <main className="module-page">
        <MemoryTimeline />
        <CaseStudies />
      </main>
      <Footer />
    </>
  );
}
