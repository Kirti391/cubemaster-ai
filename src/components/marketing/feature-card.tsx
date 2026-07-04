import { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-8
      backdrop-blur-xl
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-cyan-400/40
      hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      {/* Icon */}
      <div
        className="
        mb-6
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        bg-gradient-to-br
        from-cyan-500
        to-violet-600
        shadow-lg
        "
      >
        <Icon className="h-7 w-7 text-white" />
      </div>

      {/* Title */}
      <h3 className="mb-3 text-2xl font-semibold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="leading-7 text-zinc-400">
        {description}
      </p>
    </div>
  );
}