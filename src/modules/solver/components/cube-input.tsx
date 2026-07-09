"use client";

import { Button } from "@/src/components/ui/button";

type Props = {
  cubeState: string;
  setCubeState: (value: string) => void;

  loading: boolean;

  onSolve: () => void;
};

export default function CubeInput({
  cubeState,
  setCubeState,
  loading,
  onSolve,
}: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

      <h2 className="mb-4 text-2xl font-bold">
        Cube State
      </h2>

      <textarea
        value={cubeState}
        onChange={(e) =>
          setCubeState(e.target.value)
        }
        placeholder="Paste 54-character cube state..."
        className="h-56 w-full rounded-xl border border-white/10 bg-black/20 p-4 font-mono text-sm outline-none"
      />

      <Button
        onClick={onSolve}
        disabled={loading}
        className="mt-6 w-full"
      >
        {loading ? "Solving..." : "Solve Cube"}
      </Button>
    </div>
  );
}