import { ModuleHeader } from "@/components/layout/ModuleHeader";
import { Footer } from "@/components/layout/Footer";
import { ArchiveExplorer } from "@/components/sections/ArchiveExplorer";
import { References } from "@/components/sections/References";

export default function ArchivePage() {
  return (
    <>
      <ModuleHeader current="/archive" />
      <main className="module-page">
        <ArchiveExplorer />
        <References />
      </main>
      <Footer />
    </>
  );
}
