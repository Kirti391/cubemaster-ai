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
    status: "Uploading Cube...",
  },
  {
    icon: ScanLine,
    title: "Detect Colors",
    description: "Recognizing stickers",
    status: "Detecting Colors...",
  },
  {
    icon: BrainCircuit,
    title: "Generate Solution",
    description: "Computing optimal moves",
    status: "Generating Solution...",
  },
  {
    icon: Box,
    title: "Interactive Guide",
    description: "Ready to solve",
    status: "Solution Ready!",
  },
];