"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import Webcam from "react-webcam";

import { Button } from "@/src/components/ui/button";

import ScannerOverlay from "./scanner-overlay";

import ScannerComplete from "./scanner-complete";

import { CubeColor } from "../../color-recognition/types/color";

import { processFace } from "../../color-recognition/lib";

import {
  readImage,
  preprocess,
  detectCube,
} from "../opencv";

import { useOpenCV } from "../hooks/use-opencv";

type Props = {
  currentFace: string;

  captureFace: (
    image: string,
    colors: CubeColor[]
  ) => void;

  isComplete: boolean;
};

const REQUIRED_STABLE_FRAMES = 5;

export default function CameraPreview({
  currentFace,
  captureFace,
  isComplete,
}: Props) {

  const webcamRef = useRef<Webcam>(null);

  const intervalRef =
    useRef<number | null>(null);

  const processingRef =
    useRef(false);

  const { ready } =
    useOpenCV();

  const [cubeDetected, setCubeDetected] =
    useState(false);

  const [stableFrames, setStableFrames] =
    useState(0);

  const [isCapturing, setIsCapturing] =
    useState(false);

  const [capturedImage, setCapturedImage] =
    useState<string | null>(null);

  /**
   * Capture face
   */
  const handleCapture = useCallback(async () => {

    if (processingRef.current) return;

    if (!ready) return;

    processingRef.current = true;

    setIsCapturing(true);

    const image =
      webcamRef.current?.getScreenshot();

    if (!image) {
      processingRef.current = false;
      setIsCapturing(false);
      return;
    }

    let original: any;
    let edges: any;

    try {

      original =
        await readImage(image);

      edges =
        preprocess(original);

      const colors =
        processFace(
          original,
          edges
        );

      setCapturedImage(image);

      captureFace(
        image,
        colors
      );

    } catch (err) {

      console.error(err);

    } finally {

      edges?.delete?.();

      original?.delete?.();

      processingRef.current = false;

      setIsCapturing(false);

    }

  }, [
    ready,
    captureFace,
  ]);

  /**
   * Live detection
   */
  const analyzeFrame =
    useCallback(async () => {

      if (!ready) return;

      if (processingRef.current) return;

      const image =
        webcamRef.current?.getScreenshot();

      if (!image) return;

      let original: any;
      let edges: any;

      try {

        original =
          await readImage(image);

        edges =
          preprocess(original);

        const result =
          detectCube(edges);
                  setCubeDetected(result.detected);

        if (result.detected) {
          setStableFrames((prev) => {
            const next = Math.min(
              prev + 1,
              REQUIRED_STABLE_FRAMES
            );

            if (
              next === REQUIRED_STABLE_FRAMES &&
              !processingRef.current
            ) {
              setTimeout(() => {
                void handleCapture();
              }, 250);
            }

            return next;
          });
        } else {
          setStableFrames(0);
        }

        result.contour?.delete?.();

      } catch (err) {

        console.error(err);

      } finally {

        edges?.delete?.();

        original?.delete?.();

      }

    }, [
      ready,
      handleCapture,
    ]);

  /**
   * Start detection loop
   */
  useEffect(() => {

    if (!ready) return;

    intervalRef.current =
      window.setInterval(() => {

        void analyzeFrame();

      }, 250);

    return () => {

      if (intervalRef.current) {

        clearInterval(intervalRef.current);

      }

    };

  }, [
    ready,
    analyzeFrame,
  ]);

  if (isComplete) {

   if (isComplete) {
  return (
    <div className="rounded-2xl border border-green-500/20 p-8 text-center">
      <h2 className="text-2xl font-bold text-green-400">
        Cube Scan Complete ✅
      </h2>
    </div>
  );
}

  }

  return (

    <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">

      <h2 className="text-center text-3xl font-bold">

        Capture

        <span className="ml-2 text-cyan-400">

          {currentFace}

        </span>

      </h2>

      <div className="relative overflow-hidden rounded-2xl">

        <Webcam
          ref={webcamRef}
          audio={false}
          mirrored
          screenshotFormat="image/jpeg"
          className="aspect-video w-full rounded-2xl object-cover"
          videoConstraints={{
            facingMode: "environment",
            width: 1280,
            height: 720,
          }}
        />

        <ScannerOverlay />

      </div>

      <div className="rounded-xl border border-white/10 p-4">

        <div className="mb-2 flex justify-between">

          <span>

            Cube Detection

          </span>

          <span>

            {cubeDetected
              ? "🟢 Detected"
              : "🔴 Searching"}

          </span>

        </div>

        <div className="h-2 rounded-full bg-zinc-800">

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

        <p className="mt-2 text-xs text-zinc-400">

          Stability

          {" "}

          {stableFrames}/
          {REQUIRED_STABLE_FRAMES}

        </p>

      </div>

      <Button
        onClick={() => void handleCapture()}
        disabled={!ready || isCapturing}
        className="w-full"
      >

        {!ready
          ? "Loading OpenCV..."
          : isCapturing
          ? "Capturing..."
          : "Capture Manually"}

      </Button>

      {capturedImage && (

        <div className="rounded-2xl border border-white/10 bg-black/20 p-4">

          <h3 className="mb-3 font-semibold">

            Last Capture

          </h3>

          <img
            src={capturedImage}
            className="rounded-xl"
            alt="capture"
          />

        </div>

      )}

    </div>

  );

}