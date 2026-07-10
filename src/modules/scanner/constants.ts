import { CubeFace } from "./types/scanner";

export const CUBE_FACES: CubeFace[] = [
  "U",
  "R",
  "F",
  "D",
  "L",
  "B",
];

export const FACE_LABELS: Record<CubeFace, string> = {
  U: "Top",
  R: "Right",
  F: "Front",
  D: "Bottom",
  L: "Left",
  B: "Back",
};
export const SCANNER_INSTRUCTIONS = [
  "Keep the cube centered inside the frame.",
  "Make sure the entire face is visible.",
  "Avoid reflections and strong glare.",
  "Use good lighting for accurate color detection.",
];