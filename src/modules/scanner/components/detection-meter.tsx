"use client";

type Props = {
  stableFrames: number;
  requiredFrames: number;
};

export default function DetectionMeter({
  stableFrames,
  requiredFrames,
}: Props) {
  const percent =
    (stableFrames / requiredFrames) * 100;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

      <div className="mb-3 flex justify-between">

        <span className="font-medium">
          Detection Quality
        </span>

        <span className="text-cyan-400">
          {Math.round(percent)}%
        </span>

      </div>

      <div className="h-3 overflow-hidden rounded-full bg-white/10">

        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all"
          style={{
            width: `${percent}%`,
          }}
        />

      </div>

    </div>
  );
}