import * as React from "react";
import { cn } from "@/src/lib/utils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost"|"outline";
}

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 text-white shadow-lg shadow-cyan-500/20 hover:scale-105 hover:shadow-cyan-500/40",

    secondary:
      "border border-white/10 bg-white/5 text-white backdrop-blur-md hover:bg-white/10",

    ghost:
      "text-zinc-300 hover:text-white hover:bg-white/5",
    outline:
  "border border-cyan-500/40 bg-white/5 text-cyan-300 backdrop-blur-md hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-200"
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}