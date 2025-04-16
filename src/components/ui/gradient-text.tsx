
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent inline-block",
        className
      )}
    >
      {children}
    </span>
  );
}
