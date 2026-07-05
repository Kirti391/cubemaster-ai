"use client";

import { useRef, useState } from "react";
import Webcam from "react-webcam";
import { Button } from "@/src/components/ui/button";
import ScannerOverlay from "./scanner-overlay";

type Props = {
  currentFace: string;
  captureFace: (image: string) => void;
  isComplete: boolean;
};

export default function CameraPreview({
  currentFace,
  captureFace,
  isComplete,
}: Props) {
  const webcamRef = useRef<Webcam>(null);

  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleCapture = async () => {
    const imageSrc = webcamRef.current?.getScreenshot();

    if (!imageSrc) return;

    // Show preview
    setCapturedImage(imageSrc);

    // Start AI analysis
    setIsAnalyzing(true);

    // Fake AI processing (replace later with real API)
    await new Promise((resolve) => setTimeout(resolve, 1800));

    setIsAnalyzing(false);

    // Save captured face
    captureFace(imageSrc);
  };

  return (
    <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">

      {/* Current Face */}
      <h2 className="text-center text-2xl font-bold">
        Scan the{" "}
        <span className="text-cyan-400">{currentFace}</span> Face
      </h2>

      {/* Webcam */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10">
        <Webcam
          ref={webcamRef}
          audio={false}
          mirrored
          screenshotFormat="image/jpeg"
          className="aspect-video w-full object-cover"
          videoConstraints={{
            facingMode: "environment",
            width: 1280,
            height: 720,
          }}
        />

        <ScannerOverlay />
      </div>

      {/* Capture Button */}
      <Button
        onClick={handleCapture}
        disabled={isComplete || isAnalyzing}
        className="w-full"
      >
        {isComplete
          ? "All Faces Captured"
          : isAnalyzing
          ? "Analyzing..."
          : "Capture Face"}
      </Button>

      {/* AI Loader */}
      {isAnalyzing && (
        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5 text-center">

          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />

          <h3 className="font-semibold text-cyan-400">
            AI Processing Image
          </h3>

          <p className="mt-2 text-sm text-zinc-400">
            Detecting cube stickers...
          </p>

          <p className="text-sm text-zinc-500">
            Validating colors and cube orientation...
          </p>
        </div>
      )}

      {/* Last Captured Preview */}
      {capturedImage && (
        <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
          <h3 className="mb-3 text-sm font-semibold text-zinc-300">
            Last Captured Face
          </h3>

          <img
            src={capturedImage}
            alt="Captured cube face"
            className="w-full rounded-xl border border-white/10"
          />
        </div>
      )}

    </div>
  );
}