import {
  Upload,
  ScanLine,
  BrainCircuit,
  Box,
} from "lucide-react";

export const AI_WORKFLOW = [
  {
    icon: Upload,
    title: "Upload Cube",
    description: "Capture all six faces",
  },
  {
    icon: ScanLine,
    title: "Scanning Cube",
    description: "Detecting sticker colors",
  },
  {
    icon: BrainCircuit,
    title: "Generating Solution",
    description: "Computing the best moves",
  },
  {
    icon: Box,
    title: "Interactive 3D Guide",
    description: "Follow the cube step-by-step",
  },
];