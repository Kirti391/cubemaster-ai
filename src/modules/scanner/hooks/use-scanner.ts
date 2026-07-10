"use client";

import { useState } from "react";

import {
  CUBE_FACES,
} from "../constants";

import {
  CubeFace,
  CapturedFaces,
} from "../types/scanner";

import {
  CubeColor,
} from "../../color-recognition/types/color";

export function useScanner() {
  const [cameraActive, setCameraActive] =
    useState(false);

  const [currentFaceIndex, setCurrentFaceIndex] =
    useState(0);

  const [capturedFaces, setCapturedFaces] =
    useState<CapturedFaces>({});

  const currentFace =
    CUBE_FACES[currentFaceIndex] as CubeFace;

  const progress =
    Object.keys(capturedFaces).length;

  const isComplete =
    progress === CUBE_FACES.length;
      /**
   * Start scanner
   */
  const startScanner = () => {
    setCameraActive(true);
  };

  /**
   * Stop scanner
   */
  const stopScanner = () => {
    setCameraActive(false);
  };

  /**
   * Capture current face
   */
  const captureFace = (
    image: string,
    colors: CubeColor[]
  ) => {
    const face =
      currentFace as CubeFace;

    setCapturedFaces((prev) => ({
      ...prev,
      [face]: {
        image,
        colors,
        completed: true,
        timestamp: Date.now(),
      },
    }));

    // Turn camera off after capture
    setCameraActive(false);

    // Move to next face
    if (
      currentFaceIndex <
      CUBE_FACES.length - 1
    ) {
      setCurrentFaceIndex((prev) => prev + 1);
    }
  };

  /**
   * Open a specific face for retake
   */
  const retakeFace = (
    face: CubeFace
  ) => {
    const index =
      CUBE_FACES.indexOf(face);

    if (index === -1) return;

    setCurrentFaceIndex(index);

    setCapturedFaces((prev) => {
      const updated = {
        ...prev,
      };

      delete updated[face];

      return updated;
    });

    setCameraActive(true);
  };

  /**
   * Reset everything
   */
  const resetScanner = () => {
    setCapturedFaces({});

    setCurrentFaceIndex(0);

    setCameraActive(false);
  };

  return {
    cameraActive,
    startScanner,
    stopScanner,

    currentFace,
    currentFaceIndex,

    capturedFaces,

    captureFace,

    progress,

    isComplete,

    retakeFace,

    resetScanner,
  };
}