import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  padded?: boolean;
}

export default function GlassCard({
  className,
  padded = true,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-surface rounded-glass",
        padded && "p-6 md:p-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
