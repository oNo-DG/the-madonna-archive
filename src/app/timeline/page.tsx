import { ModuleHeader } from "@/components/layout/ModuleHeader";
import { CaseDeck } from "@/components/sections/CaseDeck";

export default function TimelinePage() {
  return (
    <>
      <ModuleHeader current="/timeline" />
      <CaseDeck />
    </>
  );
}
