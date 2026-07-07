"use client";

import { BrainCircuit } from "lucide-react";

type AIStatusProps = {
  status: string;
};

export default function AIStatus({ status }: AIStatusProps) {
  return (
    <div className="mb-8 flex items-center justify-between rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-4 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-cyan-500/20 p-2">
          <BrainCircuit className="h-5 w-5 text-cyan-400" />
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-cyan-300">
            AI Status
          </p>

          <p className="font-medium text-white">{status}</p>
        </div>
      </div>

      <div className="h-3 w-3 animate-pulse rounded-full bg-green-400" />
    </div>
  );
}