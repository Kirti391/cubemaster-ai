"use client";

import ScannerHeader from "./scanner-header";
import CameraPreview from "./camera-preview";
import ScannerSidebar from "./scanner-sidebar";
import UploadPanel from "./upload-panel";

import { useCamera } from "../hooks/use-camera";
import { useScanSolver } from "../hooks/use-scan-solver";

export default function ScannerLayout() {
  const camera = useCamera();

  const solver = useScanSolver(
    camera.cubeState
  );

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-10">
      <div className="mx-auto max-w-7xl">

        <ScannerHeader />

        <div className="mt-8 grid gap-8 xl:grid-cols-[2fr_1fr]">

          {/* Left Column */}
          <div className="space-y-6">

            <CameraPreview
              currentFace={camera.currentFace}
              captureFace={camera.captureFace}
              isComplete={camera.isComplete}

              cubeDetected={camera.cubeDetected}
              setCubeDetected={camera.setCubeDetected}

              stableFrames={camera.stableFrames}
              setStableFrames={camera.setStableFrames}

              isAnalyzing={camera.isAnalyzing}
              setIsAnalyzing={camera.setIsAnalyzing}

              autoCapturing={camera.autoCapturing}
              setAutoCapturing={
                camera.setAutoCapturing
              }
            />

            {solver.loading && (
              <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-8 text-center">

                <div className="mx-auto mb-5 h-10 w-10 animate-spin rounded-full border-4 border-cyan-400 border-t-transparent" />

                <h2 className="text-2xl font-bold text-cyan-300">
                  Solving Cube...
                </h2>

                <p className="mt-3 text-z                inc-400">
                  Building cube state and computing the optimal solution...
                </p>

              </div>
            )}

            {solver.result?.valid && (
              <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-6">

                <h2 className="mb-5 text-2xl font-bold text-green-400">
                  ✅ Solution Found
                </h2>

                <div className="flex flex-wrap gap-2">

                  {solver.result.solution.map(
                    (move, index) => (
                      <span
                        key={index}
                        className="rounded-lg border border-green-500/20 bg-green-500/20 px-3 py-2 font-semibold"
                      >
                        {move}
                      </span>
                    )
                  )}

                </div>

                <p className="mt-5 text-sm text-zinc-400">
                  Total Moves:{" "}
                  {solver.result.solution.length}
                </p>

              </div>
            )}

            {solver.result &&
              !solver.result.valid && (
                <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-6">

                  <h2 className="mb-3 text-xl font-bold text-red-400">
                    ❌ Invalid Cube
                  </h2>

                  <p className="text-zinc-300">
                    {solver.result.error}
                  </p>

                </div>
              )}

          </div>

          {/* Right Column */}
          <div className="space-y-6">

            <ScannerSidebar
              currentFace={camera.currentFace}
              cubeDetected={camera.cubeDetected}
              stableFrames={camera.stableFrames}
              requiredFrames={5}
              autoCapturing={camera.autoCapturing}
              isAnalyzing={camera.isAnalyzing}
            />

            <UploadPanel
              capturedFaces={camera.capturedFaces}
              progress={camera.progress}
              retakeFace={camera.retakeFace}
            />

          </div>

        </div>

      </div>
    </main>
  );
}