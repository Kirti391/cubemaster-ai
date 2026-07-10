"use client";

import { CapturedFaces } from "../types/scanner";

type Props = {
  currentFace: string;
  progress: number;
  capturedFaces: CapturedFaces;
};

export default function ScannerSidebar({
  currentFace,
  progress,
  capturedFaces,
}: Props) {
  return (
    <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">

      <div>
        <h3 className="text-xl font-bold">
          Current Face
        </h3>

        <p className="mt-3 text-3xl font-bold text-cyan-400">
          {currentFace}
        </p>
      </div>

      <div>
        <h3 className="mb-3 font-semibold">
          Progress
        </h3>

        <div className="h-3 rounded-full bg-zinc-800">
          <div
            className="h-full rounded-full bg-cyan-400 transition-all"
            style={{
              width: `${(progress / 6) * 100}%`,
            }}
          />
        </div>

        <p className="mt-2 text-sm text-zinc-400">
          {progress} / 6 Faces Captured
        </p>
      </div>

      <div>
        <h3 className="mb-3 font-semibold">
          Captured Faces
        </h3>

        <div className="grid grid-cols-3 gap-3">
          {["F", "R", "B", "L", "U", "D"].map((face) => (
            <div
              key={face}
              className={`rounded-xl border p-4 text-center font-bold ${
                capturedFaces[face as keyof CapturedFaces]
                  ? "border-green-500 bg-green-500/20"
                  : "border-zinc-700 bg-zinc-900"
              }`}
            >
              {face}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}