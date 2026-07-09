"use client";

import { useState } from "react";

import { CUBE_FACES } from "../constants";
import {
  CapturedFaces,
  CubeFace,
} from "../types/scanner";

import { CubeColor } from "../../color-recognition/types/color";
import { buildScannedCube } from "../lib/build-scanned-cube";

export function useCamera() {
  const [currentFaceIndex, setCurrentFaceIndex] =
    useState(0);

  const [capturedFaces, setCapturedFaces] =
    useState<CapturedFaces>({});

  // Scanner state
  const [cubeDetected, setCubeDetected] =
    useState(false);

  const [stableFrames, setStableFrames] =
    useState(0);

  const [isAnalyzing, setIsAnalyzing] =
    useState(false);

  const [autoCapturing, setAutoCapturing] =
    useState(false);

  /**
   * Capture current face
   */
  const captureFace = (
    image: string,
    colors: CubeColor[]
  ) => {
    const currentFace =
      CUBE_FACES[currentFaceIndex] as CubeFace;

    setCapturedFaces((prev) => ({
      ...prev,
      [currentFace]: {
        image,
        colors,
        completed: true,
        timestamp: Date.now(),
      },
    }));

    if (
      currentFaceIndex <
      CUBE_FACES.length - 1
    ) {
      setCurrentFaceIndex((prev) => prev + 1);
    }
  };

  /**
   * Jump to a specific face
   */
  const goToFace = (face: CubeFace) => {
    const index = CUBE_FACES.indexOf(face);

    if (index !== -1) {
      setCurrentFaceIndex(index);
    }
  };

  /**
   * Retake a scanned face
   */
  const retakeFace = (face: CubeFace) => {
    goToFace(face);

    setCapturedFaces((prev) => {
      const updated = { ...prev };

      delete updated[face];

      return updated;
    });
  };

  /**
   * Reset scanner
   */
  const resetScanner = () => {
    setCapturedFaces({});
    setCurrentFaceIndex(0);

    setCubeDetected(false);
    setStableFrames(0);
    setIsAnalyzing(false);
    setAutoCapturing(false);
  };

const progress =
  Object.keys(capturedFaces).length;

const isComplete =
  progress === CUBE_FACES.length;

  const cubeState =
  isComplete
    ? buildScannedCube(capturedFaces)
    : null;

  return {
    // Current face
    currentFace:
      CUBE_FACES[currentFaceIndex],
    currentFaceIndex,
cubeState,
    // Captured faces
    capturedFaces,
    captureFace,

    // Progress
    progress,
    isComplete,

    // Navigation
    goToFace,
    retakeFace,
    resetScanner,

    // Scanner state
    cubeDetected,
    stableFrames,
    isAnalyzing,
    autoCapturing,

    // State setters
    setCubeDetected,
    setStableFrames,
    setIsAnalyzing,
    setAutoCapturing,
  };
}