"use client";

import { useState } from "react";

import { CubeColor } from "../types/color";

export function useFaceStorage() {
  const [faces, setFaces] = useState<
    Record<string, CubeColor[]>
  >({});

  const saveFace = (
    face: string,
    colors: CubeColor[]
  ) => {
    setFaces((prev) => ({
      ...prev,
      [face]: colors,
    }));
  };

  const resetFaces = () =>
    setFaces({});

  const completedFaces =
    Object.keys(faces).length;

  return {
    faces,
    saveFace,
    resetFaces,
    completedFaces,
  };
}