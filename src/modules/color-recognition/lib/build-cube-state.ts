import { CubeColor } from "../types/color";

type FaceMap = Record<
  "U" | "R" | "F" | "D" | "L" | "B",
  CubeColor[]
>;

const colorToFace: Record<CubeColor, string> = {
  white: "U",
  red: "R",
  green: "F",
  yellow: "D",
  orange: "L",
  blue: "B",
};

export function buildCubeState(
  faces: FaceMap
): string {
  const order = [
    "U",
    "R",
    "F",
    "D",
    "L",
    "B",
  ] as const;

  let cubeState = "";

  for (const face of order) {
    for (const color of faces[face]) {
      cubeState += colorToFace[color];
    }
  }

  return cubeState;
}