"use client";

import { LucideIcon } from "lucide-react";
import { Button } from "@/src/components/ui/button";

type Props = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  button: string;
};

export default function LearningCard({
  icon: Icon,
  title,
  subtitle,
  description,
  button,
}: Props) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(34,211,238,.15)]">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600">
        <Icon className="h-8 w-8 text-white" />
      </div>

      <span className="text-sm uppercase tracking-widest text-cyan-300">
        {title}
      </span>

      <h3 className="mt-3 text-2xl font-bold">
        {subtitle}
      </h3>

      <p className="mt-4 text-zinc-400 leading-7">
        {description}
      </p>

      <Button className="mt-8 w-full">
        {button}
      </Button>
    </div>
  );
}