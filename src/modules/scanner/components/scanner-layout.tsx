"use client";

import ScannerHeader from "./scanner-header";
import CameraPreview from "./camera-preview";
import UploadPanel from "./upload-panel";
import { useCamera } from "../hooks/use-camera";

export default function ScannerLayout() {
  const camera = useCamera();

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-10">
      <div className="mx-auto max-w-7xl">

        <ScannerHeader />

      <div className="grid gap-8 xl:grid-cols-[2fr_1fr]">

          {/* <CameraPreview
            currentFace={camera.currentFace}
            captureFace={camera.captureFace}
          /> */}

        <CameraPreview
    currentFace={camera.currentFace}
    captureFace={camera.captureFace}
    isComplete={camera.isComplete}
/>

<UploadPanel
  capturedFaces={camera.capturedFaces}
  progress={camera.progress}
  retakeFace={camera.retakeFace}
/>

        </div>

      </div>
    </main>
  );
}