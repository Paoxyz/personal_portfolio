export default function LiquidGlassBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute right-[-5%] top-[-10%] h-[520px] w-[520px] rounded-full bg-signal/12 blur-[160px]" />
    </div>
  );
}
