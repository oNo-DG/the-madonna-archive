export function SourceMarker({ id, page }: { id: string; page?: string }) {
  return (
    <a className="source-marker" href="/archive#references" aria-label={`前往来源 ${id}`}>
      [{id}]{page ? ` · ${page}` : ""}
    </a>
  );
}
