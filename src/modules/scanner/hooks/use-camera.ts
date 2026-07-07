"use client";

import { useState } from "react";
import { CUBE_FACES } from "../constants";
import { CapturedFaces, CubeFace } from "../types/scanner";

export function useCamera() {
  const [currentFaceIndex, setCurrentFaceIndex] = useState(0);

  const [capturedFaces, setCapturedFaces] =
    useState<CapturedFaces>({});
const [cubeDetected, setCubeDetected] = useState(false);

const [stableFrames, setStableFrames] = useState(0);

const [isAnalyzing, setIsAnalyzing] = useState(false);

const [autoCapturing, setAutoCapturing] = useState(false);
  // Capture current face
  const captureFace = (image: string) => {
    const currentFace = CUBE_FACES[currentFaceIndex] as CubeFace;

    setCapturedFaces((prev) => ({
      ...prev,
      [currentFace]: {
        image,
        completed: true,
        timestamp: Date.now(),
      },
    }));

    if (currentFaceIndex < CUBE_FACES.length - 1) {
      setCurrentFaceIndex((prev) => prev + 1);
    }
  };

  const goToFace = (face: CubeFace) => {
  const index = CUBE_FACES.indexOf(face);

  if (index !== -1) {
    setCurrentFaceIndex(index);
  }
};

const retakeFace = (face: CubeFace) => {
  goToFace(face);

  setCapturedFaces((prev) => {
    const updated = { ...prev };

    delete updated[face];

    return updated;
  });
};

const resetScanner = () => {
  setCapturedFaces({});
  setCurrentFaceIndex(0);
};
  const progress = Object.keys(capturedFaces).length;

  const isComplete = progress === CUBE_FACES.length;

//  return {
//   currentFace: CUBE_FACES[currentFaceIndex],
//   currentFaceIndex,

//   capturedFaces,

//   captureFace,

//   progress,

//   isComplete,

//   goToFace,
//   retakeFace,
//   resetScanner,
// };
return {
  currentFace: CUBE_FACES[currentFaceIndex],
  currentFaceIndex,

  capturedFaces,

  captureFace,

  progress,

  isComplete,

  goToFace,
  retakeFace,
  resetScanner,

  // Scanner State
  cubeDetected,
  stableFrames,
  isAnalyzing,
  autoCapturing,

  // Setters
  setCubeDetected,
  setStableFrames,
  setIsAnalyzing,
  setAutoCapturing,
};
}