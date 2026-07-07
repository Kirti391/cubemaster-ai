"use client";

type DemoProgressProps = {
  progress: number;
};

export default function DemoProgress({
  progress,
}: DemoProgressProps) {
  return (
    <div className="mb-8">
      <div className="mb-2 flex justify-between text-sm text-zinc-400">
        <span>Progress</span>

        <span>{progress}%</span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 transition-all duration-700"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}