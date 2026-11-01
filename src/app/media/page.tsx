import { ModuleHeader } from "@/components/layout/ModuleHeader";
import { ChapterDeck } from "@/components/sections/ChapterDeck";

export default function MediaPage() {
  return (
    <>
      <ModuleHeader current="/media" />
      <ChapterDeck />
    </>
  );
}
