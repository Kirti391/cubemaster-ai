"use client";

type Props = {
  cameraReady: boolean;
  cubeDetected: boolean;
  stableFrames: number;
  requiredFrames: number;
};

export default function ScannerStatus({
  cameraReady,
  cubeDetected,
  stableFrames,
  requiredFrames,
}: Props) {
  const ready =
    cubeDetected &&
    stableFrames >= requiredFrames;

  const Row = ({
    label,
    status,
  }: {
    label: string;
    status: boolean;
  }) => (
    <div className="flex items-center justify-between">

      <span>{label}</span>

      <span
        className={
          status
            ? "text-green-400"
            : "text-red-400"
        }
      >
        {status ? "✓" : "•"}
      </span>

    </div>
  );

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

      <h3 className="mb-4 font-semibold">
        Scanner Status
      </h3>

      <div className="space-y-3 text-sm">

        <Row
          label="Camera"
          status={cameraReady}
        />

        <Row
          label="Cube Found"
          status={cubeDetected}
        />

        <Row
          label="Stable"
          status={
            stableFrames >= requiredFrames
          }
        />

        <Row
          label="Ready"
          status={ready}
        />

      </div>

    </div>
  );
}