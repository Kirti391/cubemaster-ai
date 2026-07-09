import { SolveResult } from "../types/solver";

type Props = {
  loading: boolean;
  result: SolveResult | null;
};

export default function SolutionPanel({
  loading,
  result,
}: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

      <h2 className="mb-6 text-2xl font-bold">
        Solution
      </h2>

      {loading && (
        <div className="text-cyan-400">
          Solving cube...
        </div>
      )}

      {!loading && !result && (
        <div className="text-zinc-400">
          No solution yet.
        </div>
      )}

      {!loading && result && !result.valid && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
          {result.error}
        </div>
      )}

      {!loading &&
        result?.valid && (
          <div className="space-y-4">

            <div className="text-green-400 font-semibold">
              Cube Solved ✅
            </div>

            <div className="flex flex-wrap gap-2">

              {result.solution.map(
                (move, index) => (
                  <span
                    key={index}
                    className="rounded-lg bg-cyan-500/20 px-3 py-2 text-cyan-300"
                  >
                    {move}
                  </span>
                )
              )}

            </div>

            <p className="text-sm text-zinc-400">
              Total Moves:{" "}
              {result.solution.length}
            </p>

          </div>
        )}
    </div>
  );
}