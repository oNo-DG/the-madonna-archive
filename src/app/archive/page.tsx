import { ModuleHeader } from "@/components/layout/ModuleHeader";
import { ProposalDeck } from "@/components/sections/ProposalDeck";

export default function ArchivePage() {
  return (
    <>
      <ModuleHeader current="/archive" />
      <ProposalDeck />
    </>
  );
}
