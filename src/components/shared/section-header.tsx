type SectionHeaderProps = {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
};

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">
      <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
        {badge}
      </span>

      <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>

      <p className="mt-6 text-lg leading-8 text-zinc-400">
        {description}
      </p>
    </div>
  );
}