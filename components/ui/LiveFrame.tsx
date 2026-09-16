export default function LiveFrame({ url, title }: { url?: string; title: string }) {
  const domain = url ? new URL(url).hostname : null;

  return (
    <div className="glass-surface overflow-hidden rounded-glass">
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#0d0d0d] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <div className="ml-3 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-xs text-mist/50">
          {domain ?? "No live URL added yet"}
        </div>
      </div>

      {url ? (
        <iframe
          src={url}
          title={`Live preview of ${title}`}
          loading="lazy"
          className="h-[480px] w-full bg-white"
        />
      ) : (
        <div className="flex h-[280px] items-center justify-center px-6 text-center text-sm text-mist/45">
          Add a <code className="text-mist/70">liveUrl</code> in{" "}
          <code className="text-mist/70">data/projects.ts</code> for this project to see a live preview here.
        </div>
      )}
    </div>
  );
}