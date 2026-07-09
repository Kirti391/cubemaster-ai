"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

import { Button } from "@/src/components/ui/button";

import ScannerOverlay from "./scanner-overlay";
import ScannerComplete from "./scanner-complete";
import { processFace } from "../../color-recognition/lib";
import { CubeColor } from "../../color-recognition/types/color";
import {
  readImage,
  preprocess,
  matToCanvas,
  detectCube,
} from "../opencv";

import { useOpenCV } from "../hooks/use-opencv";
import { color } from "framer-motion";
import { colors } from "@/src/design-system/tokens";

type Props = {
  currentFace: string;
captureFace: (
  image: string,
  colors: CubeColor[]
) => void;
  isComplete: boolean;

  cubeDetected: boolean;
  setCubeDetected: React.Dispatch<React.SetStateAction<boolean>>;

  stableFrames: number;
  setStableFrames: React.Dispatch<React.SetStateAction<number>>;

  isAnalyzing: boolean;
  setIsAnalyzing: React.Dispatch<React.SetStateAction<boolean>>;

  autoCapturing: boolean;
  setAutoCapturing: React.Dispatch<React.SetStateAction<boolean>>;
};

const REQUIRED_STABLE_FRAMES = 5;

export default function CameraPreview({
  currentFace,
  captureFace,
  isComplete,

  cubeDetected,
  setCubeDetected,

  stableFrames,
  setStableFrames,

  isAnalyzing,
  setIsAnalyzing,

  autoCapturing,
  setAutoCapturing,
}: Props) {
  const webcamRef = useRef<Webcam>(null);

  const detectionInterval = useRef<number | null>(null);

  const detectingRef = useRef(false);
  const captureLockRef = useRef(false);

  const stableFramesRef = useRef(stableFrames);
  const analyzingRef = useRef(isAnalyzing);
  const autoCapturingRef = useRef(autoCapturing);

  const { ready: opencvReady } = useOpenCV();

  const [capturedImage, setCapturedImage] =
    useState<string | null>(null);

  const [processedImage, setProcessedImage] =
    useState<string | null>(null);

  useEffect(() => {
    stableFramesRef.current = stableFrames;
  }, [stableFrames]);

  useEffect(() => {
    analyzingRef.current = isAnalyzing;
  }, [isAnalyzing]);

  useEffect(() => {
    autoCapturingRef.current = autoCapturing;
  }, [autoCapturing]);

  /**
   * Capture current frame
   */
const handleCapture = useCallback(async () => {
  if (!opencvReady) return;

  if (captureLockRef.current) return;

  captureLockRef.current = true;
  setIsAnalyzing(true);

  const imageSrc =
    webcamRef.current?.getScreenshot();

  if (!imageSrc) {
    captureLockRef.current = false;
    setIsAnalyzing(false);
    return;
  }

  setCapturedImage(imageSrc);

 let mat: any;
let edges: any;

  try {
    console.log("Reading image...");

    mat = await readImage(imageSrc);

    console.log("Running preprocessing...");

    edges = preprocess(mat);

    const processed =
      matToCanvas(edges);

    setProcessedImage(processed);

    console.log("Detecting colors...");

    // Use ORIGINAL IMAGE, not edge image
    const colors =
      processFace(mat);

    console.log("Detected colors:", colors);

    captureFace(imageSrc, colors);

  } catch (err) {
    console.error(
      "Capture failed:",
      err
    );
  } finally {
    edges?.delete();
    mat?.delete();

    setIsAnalyzing(false);

    captureLockRef.current = false;
  }
}, [
  opencvReady,
  captureFace,
  setIsAnalyzing,
]);

  /**
   * Automatic capture
   */
  const autoCapture = useCallback(async () => {
    if (autoCapturingRef.current) return;

    setAutoCapturing(true);

    await handleCapture();

    stableFramesRef.current = 0;
    setStableFrames(0);

    setAutoCapturing(false);
  }, [
    handleCapture,
    setAutoCapturing,
    setStableFrames,
  ]);  /**
   * Live Detection
   */
  const analyzeFrame = useCallback(async () => {
    if (!opencvReady) return;

    if (detectingRef.current) return;

    const imageSrc = webcamRef.current?.getScreenshot();

    if (!imageSrc) return;

    detectingRef.current = true;

    let mat: any;
    let edges: any;

    try {
      mat = await readImage(imageSrc);

      edges = preprocess(mat);

      const result = detectCube(edges);

      setCubeDetected(result.detected);

      if (result.detected) {
        const nextStable = Math.min(
          stableFramesRef.current + 1,
          REQUIRED_STABLE_FRAMES
        );

        stableFramesRef.current = nextStable;

        setStableFrames(nextStable);

        if (
          nextStable >= REQUIRED_STABLE_FRAMES &&
          !autoCapturingRef.current &&
          !analyzingRef.current
        ) {
          void autoCapture();
        }
      } else {
        stableFramesRef.current = 0;
        setStableFrames(0);
      }

      result.contour?.delete?.();
    } catch (err) {
      console.error(err);
    } finally {
      edges?.delete();
      mat?.delete();

      detectingRef.current = false;
    }
  }, [
    opencvReady,
    autoCapture,
    setCubeDetected,
    setStableFrames,
  ]);

  /**
   * Start Detection Loop
   */
  useEffect(() => {
    if (!opencvReady) return;

    detectionInterval.current = window.setInterval(() => {
      void analyzeFrame();
    }, 250);

    return () => {
      if (detectionInterval.current !== null) {
        clearInterval(detectionInterval.current);
        detectionInterval.current = null;
      }
    };
  }, [opencvReady, analyzeFrame]);

  if (isComplete) {
    return (
      <ScannerComplete
        onContinue={() => console.log("Continue")}
      />
    );
  }

  return (
    <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">

      <h2 className="text-center text-2xl font-bold">
        Scan the{" "}
        <span className="text-cyan-400">
          {currentFace}
        </span>{" "}
        Face
      </h2>

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

      <div
        className={`rounded-xl border p-4 text-center font-semibold transition ${
          cubeDetected
            ? "border-green-500/30 bg-green-500/10 text-green-400"
            : "border-red-500/30 bg-red-500/10 text-red-400"
        }`}
      >
        {cubeDetected
          ? "🟢 Cube Detected"
          : "🔴 Searching for Cube"}
      </div>

      <div className="space-y-2">

        <div className="flex justify-between text-xs text-zinc-400">
          <span>Alignment Stability</span>

          <span>
            {stableFrames}/{REQUIRED_STABLE_FRAMES}
          </span>
        </div>

        <div className="h-2 rounded-full bg-white/10">

          <div
            className="h-full rounded-full bg-cyan-400 transition-all duration-200"
            style={{
              width: `${
                (stableFrames /
                  REQUIRED_STABLE_FRAMES) *
                100
              }%`,
            }}
          />

        </div>

      </div>

      {autoCapturing && (
        <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-3 text-center text-sm font-medium text-cyan-300">
          📸 Cube aligned. Capturing automatically...
        </div>
      )}

      {!autoCapturing && (
        <Button
          onClick={handleCapture}
          disabled={
            !opencvReady ||
            isAnalyzing
          }
          className="w-full"
        >
          {!opencvReady
            ? "Loading OpenCV..."
            : isAnalyzing
            ? "Analyzing..."
            : "Manual Capture"}
        </Button>
      )}

      {isAnalyzing && (
        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5 text-center">

          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />

          <h3 className="font-semibold text-cyan-400">
            Running OpenCV...
          </h3>

          <p className="mt-2 text-sm text-zinc-400">
            Detecting cube contours...
          </p>

        </div>
      )}

      {capturedImage && (
        <div className="rounded-2xl border border-white/10 bg-black/20 p-4">

          <h3 className="mb-3 text-sm font-semibold text-zinc-300">
            Last Capture
          </h3>

          <img
            src={capturedImage}
            alt="Captured"
            className="rounded-xl"
          />

        </div>
      )}

      {processedImage && (
        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4">

          <h3 className="mb-3 text-sm font-semibold text-cyan-300">
            OpenCV Edge Detection
          </h3>

          <img
            src={processedImage}
            alt="Processed"
            className="rounded-xl"
          />

        </div>
      )}

    </div>
  );
}