"use client";

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/src/components/ui/button";

type Props = {
  onContinue: () => void;
};

export default function ScannerComplete({
  onContinue,
}: Props) {
  return (
    <div className="flex h-full min-h-[500px] flex-col items-center justify-center rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-10 text-center">

      <CheckCircle2 className="mb-6 h-20 w-20 text-green-400" />

      <h2 className="text-3xl font-bold text-white">
        Scan Complete
      </h2>

      <p className="mt-3 max-w-md text-zinc-400">
        All six cube faces have been captured successfully.
        Your cube is ready for AI analysis.
      </p>

     <Button className="h-12 px-8 text-base"
        onClick={onContinue}
      >
        Continue to AI Analysis
      </Button>
    </div>
  );
}