import { CubeFace } from "./types/scanner";

export const CUBE_FACES: CubeFace[] = [
  "F",
  "R",
  "B",
  "L",
  "U",
  "D",
];

export const FACE_LABELS: Record<CubeFace, string> = {
  F: "Front",
  R: "Right",
  B: "Back",
  L: "Left",
  U: "Top",
  D: "Bottom",
};

export const SCANNER_INSTRUCTIONS = [
  "Keep the cube centered inside the frame.",
  "Make sure the entire face is visible.",
  "Avoid reflections and strong glare.",
  "Use good lighting for accurate color detection.",
];