"use client";

import { useState } from "react";

import { parseCubeState } from "../lib/cube-parser";
import { validateCube } from "../lib/cube-validator";
import { solveCube } from "../lib/solver";

import {
  CubeColor,
  SolveResult,
} from "../types/solver";

export function useSolver() {
  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState<SolveResult | null>(null);

  /**
   * Used by Scanner Module
   */
  const solve = async (
    faces: CubeColor[][]
  ) => {
    setLoading(true);

    try {
      const cube =
        parseCubeState(faces);

      const validation =
        validateCube(cube);

      if (!validation.valid) {
        setResult({
          valid: false,
          solution: [],
          error: validation.error,
        });

        return;
      }

      const solution = await
        solveCube(cube);

      setResult({
        valid: true,
        solution,
      });
    } catch (err) {
      setResult({
        valid: false,
        solution: [],
        error:
          err instanceof Error
            ? err.message
            : "Unknown solver error",
      });
    } finally {
      setLoading(false);
    }
  };

  /**
   * Used by Solver Playground
   */
  const solveFromString = async (
    cubeState: string
  ) => {
    setLoading(true);

    try {
      const validation =
        validateCube(cubeState);

      if (!validation.valid) {
        setResult({
          valid: false,
          solution: [],
          error: validation.error,
        });

        return;
      }

      const solution =await
        solveCube(cubeState);

      setResult({
        valid: true,
        solution,
      });
    } catch (err) {
      setResult({
        valid: false,
        solution: [],
        error:
          err instanceof Error
            ? err.message
            : "Unknown solver error",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    result,
    solve,
    solveFromString,
  };
}