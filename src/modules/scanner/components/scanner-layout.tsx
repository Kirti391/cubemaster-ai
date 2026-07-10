"use client";

import ScannerHeader from "./scanner-header";
import CameraPreview from "./camera-preview";
import UploadPanel from "./upload-panel";
import ScannerSidebar from "./scanner-sidebar";
import ScannerComplete from "./scanner-complete";

import { Button } from "@/src/components/ui/button";

import { useScanner } from "../hooks/use-scanner";
import {
  CapturedFaces,
  CubeFace,
} from "../types/scanner";

type Props = {
  capturedFaces: CapturedFaces;

  onContinue: () => void;

  onRetake: (face: CubeFace) => void;

  onReset: () => void;
};

export default function ScannerLayout() {
  const scanner = useScanner();

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-10">
      <div className="mx-auto max-w-7xl">

        <ScannerHeader />

        {!scanner.cameraActive &&
          !scanner.isComplete && (

          <div className="mb-8 rounded-3xl border border-white/10 bg-white/5 p-10 text-center">

            <h2 className="mb-4 text-3xl font-bold">
              Cube Scanner
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-zinc-400">
              Scan each face of your Rubik's Cube.
              The camera will open only while
              capturing a face.
            </p>
<Button
  onClick={scanner.startScanner}
  className="px-8 py-6 text-lg"
>
              {scanner.progress === 0
                ? "Start Scan"
                : `Capture ${scanner.currentFace}`}
            </Button>

          </div>
        )}
                <div className="grid gap-8 xl:grid-cols-[2fr_1fr]">

          {/* Camera */}
          {scanner.cameraActive && (
            <CameraPreview
              currentFace={scanner.currentFace}
              captureFace={scanner.captureFace}
              isComplete={scanner.isComplete}
            />
          )}

          {/* Sidebar */}
          <ScannerSidebar
            currentFace={scanner.currentFace}
            progress={scanner.progress}
            capturedFaces={scanner.capturedFaces}
          />

        </div>

        {/* Captured Faces */}
        <div className="mt-8">

          <UploadPanel
            capturedFaces={scanner.capturedFaces}
            progress={scanner.progress}
            retakeFace={scanner.retakeFace}
          />

        </div>

        {/* Review Screen */}
        {scanner.isComplete && (

          <div className="mt-10">

            {/* <ScannerComplete
              capturedFaces={scanner.capturedFaces}
              onRetake={scanner.retakeFace}
              onReset={scanner.resetScanner}
            /> */}
            

          </div>

        )}

      </div>
    </main>
  );
}