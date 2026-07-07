import { DetectedFace } from "../types";

export async function detectColors(
  image: string,
  face: string
): Promise<DetectedFace> {
  await new Promise((r) => setTimeout(r, 1200));

  return {
    face,
    stickers: [
      { row: 0, col: 0, color: "red" },
      { row: 0, col: 1, color: "red" },
      { row: 0, col: 2, color: "red" },

      { row: 1, col: 0, color: "red" },
      { row: 1, col: 1, color: "red" },
      { row: 1, col: 2, color: "red" },

      { row: 2, col: 0, color: "red" },
      { row: 2, col: 1, color: "red" },
      { row: 2, col: 2, color: "red" },
    ],
  };
}