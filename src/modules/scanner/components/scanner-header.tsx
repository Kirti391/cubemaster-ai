import Link from "next/link";
import { ArrowLeft, ScanLine } from "lucide-react";

export default function ScannerHeader() {
  return (
    <header className="mb-12 flex items-center justify-between">
      <div>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
          <ScanLine className="h-4 w-4" />
          AI Cube Scanner
        </div>

        <h1 className="text-4xl font-bold">
          Scan Your
          <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            {" "}Rubik's Cube
          </span>
        </h1>

        <p className="mt-3 max-w-xl text-zinc-400">
          Capture all six faces. Our AI will detect every sticker
          and generate the optimal solution.
        </p>
      </div>

      <Link
        href="/"
        className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-500/40 hover:bg-cyan-500/10"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Link>
    </header>
  );
}