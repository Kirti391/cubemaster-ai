import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 shadow-lg shadow-cyan-500/30 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
        🧩
      </div>

      <div>
        <h1 className="text-lg font-bold tracking-tight text-white">
          CubeMaster AI
        </h1>

        <p className="text-xs text-zinc-400">
          AI Powered Cube Solver
        </p>
      </div>
    </Link>
  );
}