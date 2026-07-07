type Props = {
  autoCapturing: boolean;
  isAnalyzing: boolean;
};

export default function CaptureFeedback({
  autoCapturing,
  isAnalyzing,
}: Props) {
  if (autoCapturing) {
    return (
      <div className="rounded-xl bg-green-500/10 p-4 text-center text-green-400">
        📸 Capturing...
      </div>
    );
  }

  if (isAnalyzing) {
    return (
      <div className="rounded-xl bg-cyan-500/10 p-4 text-center text-cyan-400">
        🤖 Processing...
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-zinc-900 p-4 text-center text-zinc-400">
      Waiting for stable cube...
    </div>
  );
}