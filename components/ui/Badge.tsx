export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-mist/80">
      {children}
    </span>
  );
}
