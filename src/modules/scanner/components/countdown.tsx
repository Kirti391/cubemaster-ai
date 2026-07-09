"use client";

type Props = {
  seconds: number;
};

export default function Countdown({
  seconds,
}: Props) {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-8 text-center">

      <p className="text-zinc-400">
        Hold the cube steady
      </p>

      <h2 className="mt-3 text-6xl font-bold text-cyan-400">
        {seconds}
      </h2>

    </div>
  );
}