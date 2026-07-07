"use client";

import ScannerHeader from "./scanner-header";
import CameraPreview from "./camera-preview";
import UploadPanel from "./upload-panel";
import { useCamera } from "../hooks/use-camera";
import ScannerSidebar from "./scanner-sidebar";

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

  cubeDetected={camera.cubeDetected}
  setCubeDetected={camera.setCubeDetected}

  stableFrames={camera.stableFrames}
  setStableFrames={camera.setStableFrames}

  isAnalyzing={camera.isAnalyzing}
  setIsAnalyzing={camera.setIsAnalyzing}

  autoCapturing={camera.autoCapturing}
  setAutoCapturing={camera.setAutoCapturing}
/>

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
    </main>
  );
}