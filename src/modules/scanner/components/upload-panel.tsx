import { SCANNER_INSTRUCTIONS } from "../constants";
import { CapturedFaces, CubeFace } from "../types/scanner";
import CubeNet from "./cube-net";

type Props = {
  capturedFaces: CapturedFaces;
  progress: number;
  retakeFace: (face: CubeFace) => void;
};

const FACES: CubeFace[] = [
  "Front",
  "Right",
  "Back",
  "Left",
  "Top",
  "Bottom",
];

export default function UploadPanel({
  capturedFaces,
  progress,
  retakeFace,
}: Props) {
  const isComplete = progress === 6;

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

      {/* ========================= */}
      {/* SCANNING STATE */}
      {/* ========================= */}

      {!isComplete && (
        <>
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
        </>
      )}

      {/* ========================= */}
      {/* PROGRESS */}
      {/* ========================= */}

      <div className={isComplete ? "" : "mt-8"}>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-semibold text-white">
            Progress
          </h3>

          <span className="text-sm font-semibold text-cyan-400">
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

      {/* ========================= */}
      {/* COMPLETED STATE */}
      {/* ========================= */}

      {isComplete && (
        <>
          <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4">
            <h3 className="text-lg font-semibold text-emerald-400">
              ✓ Scan Complete
            </h3>

            <p className="mt-2 text-sm text-zinc-400">
              All six faces were captured successfully.
              You can retake any face before continuing.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Cube Scan
            </h3>

            <CubeNet capturedFaces={capturedFaces} />
          </div>

          <div className="mt-8">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Retake Faces
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {FACES.map((face) => (
                <button
                  key={face}
                  onClick={() => retakeFace(face)}
                  className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3 text-sm font-medium text-cyan-400 transition hover:bg-cyan-500/20"
                >
                  ↻ {face}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}