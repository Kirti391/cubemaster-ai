import { LucideIcon } from "lucide-react";

type StepCardProps = {
  step: string;
  icon: LucideIcon;
  title: string;
  description: string;
  isLast?: boolean;
};

export default function StepCard({
  step,
  icon: Icon,
  title,
  description,
  isLast,
}: StepCardProps) {
  return (
    <div className="relative flex flex-col items-center text-center">

      {/* Step Number */}
      <span className="mb-6 text-sm font-bold tracking-[0.35em] text-cyan-400">
        {step}
      </span>

      {/* Icon */}
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-cyan-500/30 bg-zinc-900 shadow-lg shadow-cyan-500/10 transition-all duration-300 group-hover:scale-110">

        <Icon className="h-9 w-9 text-cyan-400" />

        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl" />

      </div>

      {/* Line */}
      {!isLast && (
        <div className="absolute left-[65%] top-[66px] hidden h-[2px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent lg:block" />
      )}

      {/* Title */}
      <h3 className="mt-8 text-xl font-semibold">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 max-w-xs text-zinc-400 leading-7">
        {description}
      </p>

    </div>
  );
}