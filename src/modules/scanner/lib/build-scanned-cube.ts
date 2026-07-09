import { CapturedFaces } from "../types/scanner";
import { buildCubeState } from "../../color-recognition/lib/build-cube-state";

export function buildScannedCube(
  faces: CapturedFaces
): string {
  const requiredFaces = [
    "U",
    "R",
    "F",
    "D",
    "L",
    "B",
  ] as const;

  for (const face of requiredFaces) {
    if (!faces[face]) {
      throw new Error(
        `Missing scanned face: ${face}`
      );
    }
  }

  return buildCubeState({
    U: faces.U!.colors,
    R: faces.R!.colors,
    F: faces.F!.colors,
    D: faces.D!.colors,
    L: faces.L!.colors,
    B: faces.B!.colors,
  });
}