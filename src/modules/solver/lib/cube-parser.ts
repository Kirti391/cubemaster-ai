import { CubeColor } from "../types/solver";

export function parseCubeState(
  faces: CubeColor[][]
): string {
  return faces.flat().join("");
}