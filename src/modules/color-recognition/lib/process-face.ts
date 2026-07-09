import { detectStickers } from "./detect-stickers";
import { sampleColors } from "./sample-colors";
import { classifyColors } from "./classify-colors";

import { CubeColor } from "../types/color";

export function processFace(
  originalMat: any
): CubeColor[] {
  // Detect stickers directly from the original image
  const stickers = detectStickers(originalMat);

  if (stickers.length !== 9) {
    throw new Error(
      `Expected 9 stickers, detected ${stickers.length}.`
    );
  }

  // Sample sticker colors from the original image
  const sampledColors = sampleColors(
    originalMat,
    stickers
  );

  // Convert RGB -> CubeColor
  return classifyColors(sampledColors);
}