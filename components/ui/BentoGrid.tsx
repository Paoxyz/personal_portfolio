import { cn } from "@/lib/utils";

export default function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-5 md:grid-cols-6",
        className
      )}
    >
      {children}
    </div>
  );
}
