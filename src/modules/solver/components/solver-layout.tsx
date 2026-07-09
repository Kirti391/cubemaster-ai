"use client";

import { useState } from "react";

import CubeInput from "./cube-input";
import SolutionPanel from "./solution-panel";

import { useSolver } from "../hooks/use-solver";

export default function SolverLayout() {
  const [cubeState, setCubeState] = useState("");

  const {
  loading,
  result,
  solveFromString,
} = useSolver();

  const handleSolve = () => {
  solveFromString(cubeState.trim());
};

  return (
    <div className="mx-auto max-w-7xl p-8">

      <h1 className="mb-8 text-4xl font-bold">
        Cube Solver
      </h1>

      <div className="grid gap-8 lg:grid-cols-2">

        <CubeInput
          cubeState={cubeState}
          setCubeState={setCubeState}
          loading={loading}
          onSolve={handleSolve}
        />

        <SolutionPanel
          loading={loading}
          result={result}
        />

      </div>

    </div>
  );
}