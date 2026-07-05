export default function ScannerOverlay() {
  return (
    <>
      {/* Corner Guides */}
      <div className="pointer-events-none absolute inset-0">
        {/* Top Left */}
        <div className="absolute left-8 top-8 h-12 w-12 border-l-4 border-t-4 border-cyan-400 rounded-tl-xl" />

        {/* Top Right */}
        <div className="absolute right-8 top-8 h-12 w-12 border-r-4 border-t-4 border-cyan-400 rounded-tr-xl" />

        {/* Bottom Left */}
        <div className="absolute bottom-8 left-8 h-12 w-12 border-b-4 border-l-4 border-cyan-400 rounded-bl-xl" />

        {/* Bottom Right */}
        <div className="absolute bottom-8 right-8 h-12 w-12 border-b-4 border-r-4 border-cyan-400 rounded-br-xl" />
      </div>

      {/* Center Guide */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-3xl border-2 border-dashed border-cyan-400/70 backdrop-blur-[1px]" />

      {/* Hint */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-sm text-cyan-300 backdrop-blur">
        Place cube face inside the guide
      </div>
    </>
  );
}