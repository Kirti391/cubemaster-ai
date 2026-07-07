"use client";

const faces = [
  "Top",
  "Left",
  "Front",
  "Right",
  "Back",
  "Bottom",
];

type Props = {
  currentFace: string;
};

export default function OrientationCard({
  currentFace,
}: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

      <h3 className="mb-5 font-semibold text-white">
        Cube Orientation
      </h3>

      <div className="grid grid-cols-4 gap-3">

        {faces.map((face) => (
          <div
            key={face}
            className={`rounded-xl border p-3 text-center text-sm transition ${
              face === currentFace
                ? "border-cyan-400 bg-cyan-500/10 text-cyan-400"
                : "border-white/10 bg-black/20 text-zinc-400"
            }`}
          >
            {face}
          </div>
        ))}

      </div>

    </div>
  );
}