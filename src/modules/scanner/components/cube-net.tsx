import { CapturedFaces, CubeFace } from "../types/scanner";
import clsx from "clsx";

type Props = {
  capturedFaces: CapturedFaces;
};

const layout: CubeFace[] = [
  "Top",
  "Left",
  "Front",
  "Right",
  "Back",
  "Bottom",
];

export default function CubeNet({
  capturedFaces,
}: Props) {
  return (
    <div className="mt-10">

      <h3 className="mb-6 text-lg font-semibold text-white">
        Cube Scan Progress
      </h3>

      <div className="grid grid-cols-4 gap-3">

        <div />

        <Face face="Top" captured={capturedFaces.Top} />

        <div />
        <div />

        <Face face="Left" captured={capturedFaces.Left} />

        <Face face="Front" captured={capturedFaces.Front} />

        <Face face="Right" captured={capturedFaces.Right} />

        <Face face="Back" captured={capturedFaces.Back} />

        <div />

        <Face
          face="Bottom"
          captured={capturedFaces.Bottom}
        />

      </div>

    </div>
  );
}

function Face({
  face,
  captured,
}: {
  face: CubeFace;
  captured: CapturedFaces[CubeFace];
}) {
  return (
    <div
      className={clsx(
        "aspect-square rounded-xl border transition-all duration-300 overflow-hidden",
        captured
          ? "border-cyan-400 bg-cyan-500/10"
          : "border-white/10 bg-white/5"
      )}
    >
      {captured ? (
        <img
          src={captured.image}
          alt={face}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full items-center justify-center text-xs text-zinc-500">
          {face}
        </div>
      )}
    </div>
  );
}