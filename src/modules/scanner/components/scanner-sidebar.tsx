import FaceGuide from "./face-guide";
import AlignmentStatus from "./alignment-status";
import CaptureFeedback from "./capture-feedback";

type Props = {
  currentFace: string;
  cubeDetected: boolean;
  stableFrames: number;
  requiredFrames: number;
  autoCapturing: boolean;
  isAnalyzing: boolean;
};

export default function ScannerSidebar({
  currentFace,
  cubeDetected,
  stableFrames,
  requiredFrames,
  autoCapturing,
  isAnalyzing,
}: Props) {
  return (
    <div className="space-y-6">
      <FaceGuide currentFace={currentFace} />

      <AlignmentStatus
        cubeDetected={cubeDetected}
        stableFrames={stableFrames}
        requiredFrames={requiredFrames}
      />

      <CaptureFeedback
        autoCapturing={autoCapturing}
        isAnalyzing={isAnalyzing}
      />
    </div>
  );
}