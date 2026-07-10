import { detectStickers } from "./detect-stickers";
import { sampleColors } from "./sample-colors";
import { classifyColors } from "./classify-colors";

import { CubeColor } from "../types/color";

export function processFace(
  originalMat: any,
  edgeMat: any
): CubeColor[] {
  console.log("processFace()");

  console.log("Detecting stickers...");
  const stickers = detectStickers(edgeMat);

  console.log("Detected:", stickers.length);

  if (stickers.length !== 9) {
    throw new Error(
      `Expected 9 stickers, found ${stickers.length}`
    );
  }

  console.log("Sampling colors...");
  const sampled = sampleColors(
    originalMat,
    stickers
  );

  console.log("Classifying...");
  return classifyColors(sampled);
}