type Props = {
  cubeDetected: boolean;
  stableFrames: number;
  requiredFrames: number;
};

export default function AlignmentStatus({
  cubeDetected,
  stableFrames,
  requiredFrames,
}: Props) {
  return (
    <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center justify-between">
        <span className="font-medium text-white">
          Detection
        </span>

        <span
          className={
            cubeDetected
              ? "text-green-400"
              : "text-red-400"
          }
        >
          {cubeDetected
            ? "Detected"
            : "Searching"}
        </span>
      </div>

      <div>
        <div className="mb-2 flex justify-between text-sm text-zinc-400">
          <span>Stability</span>

          <span>
            {stableFrames}/{requiredFrames}
          </span>
        </div>

        <div className="h-2 rounded-full bg-zinc-700">
          <div
            className="h-full rounded-full bg-cyan-400 transition-all"
            style={{
              width: `${
                (stableFrames / requiredFrames) *
                100
              }%`,
            }}
          />
        </div>
      </div>

      <p className="text-sm text-zinc-500">
        Hold the cube steady until capture.
      </p>
    </div>
  );
}