import {
  DetectedSticker,
} from "../types/color";

export function buildCubeState(
  stickers: DetectedSticker[]
): string {
  return stickers
    .map((s) => s.color ?? "?")
    .join("");
}