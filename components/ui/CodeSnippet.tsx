import { profile } from "@/data/profile";

export default function CodeSnippet() {
  return (
    <pre className="glass-surface overflow-x-auto rounded-glass p-5 text-[13px] leading-relaxed">
      <code>
        <span className="text-mist/50">const</span>{" "}
        <span className="text-signal2">developer</span>{" "}
        <span className="text-mist/50">=</span> {"{"}
        {"\n"}  name:{" "}
        <span className="text-signal">&quot;{profile.name}&quot;</span>,
        {"\n"}  role:{" "}
        <span className="text-signal">&quot;{profile.title}&quot;</span>,
        {"\n"}  stack: [
        <span className="text-signal">&quot;PHP&quot;</span>,{" "}
        <span className="text-signal">&quot;Python&quot;</span>,{" "}
        <span className="text-signal">&quot;React&quot;</span>
        ],
        {"\n"}  available:{" "}
        <span className="text-signal2">{String(profile.available)}</span>,
        {"\n"}
        {"}"}
        {";"}
      </code>
    </pre>
  );
}