import { SCANNER_INSTRUCTIONS } from "../constants";
// import { CapturedFaces } from "../types/scanner";
import { CapturedFaces, CubeFace } from "../types/scanner";

type Props = {
  capturedFaces: CapturedFaces;
  progress: number;
  retakeFace: (face: CubeFace) => void;
};


export default function UploadPanel({
  capturedFaces,
  progress,
  retakeFace,
}: Props) {
    console.log("retakeFace:", retakeFace);
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

      {/* Instructions */}
      <h2 className="text-2xl font-bold text-white">
        Instructions
      </h2>

      <ul className="mt-6 space-y-4 text-sm text-zinc-400">
        {SCANNER_INSTRUCTIONS.map((instruction) => (
          <li
            key={instruction}
            className="flex items-start gap-3"
          >
            <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
            <span>{instruction}</span>
          </li>
        ))}
      </ul>

      {/* AI Status */}
      <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
        <h3 className="font-semibold text-white">
          AI Scanner Status
        </h3>

        <div className="mt-4 space-y-3 text-sm">

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            <span>Camera Connected</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            <span>Lighting Good</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            <span>Detecting Cube Face...</span>
          </div>

        </div>
      </div>

      {/* Progress */}
      <div className="mt-8">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-semibold text-white">
            Progress
          </h3>

          <span className="text-sm text-cyan-400">
            {Math.round((progress / 6) * 100)}%
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-500"
            style={{
              width: `${(progress / 6) * 100}%`,
            }}
          />
        </div>

        <p className="mt-3 text-sm font-medium text-cyan-400">
          {progress} / 6 Faces Captured
        </p>
      </div>

      {/* Captured Faces */}
      <div className="mt-10">
        <h3 className="mb-4 font-semibold text-white">
          Captured Faces
        </h3>

        <div className="grid grid-cols-3 gap-3">

         {["Front", "Right", "Back", "Left", "Top", "Bottom"].map((face) => {
  const capture = capturedFaces[face as keyof CapturedFaces];

  return (
    <div
      key={face}
      className="overflow-hidden rounded-xl border border-white/10 bg-black/20"
    >
      {capture ? (
        <img
          src={capture.image}
          alt={face}
          className="aspect-square w-full object-cover"
        />
      ) : (
        <div className="flex aspect-square items-center justify-center text-xs text-zinc-600">
          Empty
        </div>
      )}

    <div className="border-t border-white/10 p-2">

  <p className="text-center text-xs font-medium">
    {face}
  </p>

  {capture && (
    <button
      onClick={() => retakeFace(face as CubeFace)}
      className="mt-2 w-full rounded-lg bg-cyan-500/10 py-1 text-xs text-cyan-400 transition hover:bg-cyan-500/20"
    >
      ↻ Retake
    </button>
  )}

</div>
    </div>
  );
})}

        </div>
      </div>

    </div>
  );
}