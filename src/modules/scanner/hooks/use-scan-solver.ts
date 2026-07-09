"use client";

import { useEffect } from "react";

import { useSolver } from "../../solver";

export function useScanSolver(
  cubeState: string | null
) {
  const {
    loading,
    result,
    solveFromString,
  } = useSolver();

  useEffect(() => {
    if (!cubeState) return;

    solveFromString(cubeState);
  }, [cubeState]);

  return {
    loading,
    result,
  };
}