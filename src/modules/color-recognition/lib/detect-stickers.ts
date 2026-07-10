import { DetectedSticker } from "../types/color";
import { sortStickers } from "./sort-stickers";

export function detectStickers(
  mat: any
): DetectedSticker[] {
  const contours = new cv.MatVector();
  const hierarchy = new cv.Mat();

  console.log("Finding contours...");

  cv.findContours(
    mat,
    contours,
    hierarchy,
    cv.RETR_TREE,
    cv.CHAIN_APPROX_SIMPLE
  );

  console.log(
    "Contours found:",
    contours.size()
  );

  const stickers: DetectedSticker[] = [];

  const MIN_AREA = 700;
  const MAX_AREA = 25000;

  for (let i = 0; i < contours.size(); i++) {
    const contour = contours.get(i);

    const area = cv.contourArea(contour);

    if (
      area < MIN_AREA ||
      area > MAX_AREA
    ) {
      contour.delete();
      continue;
    }

    const perimeter = cv.arcLength(
      contour,
      true
    );

    const approx = new cv.Mat();

    cv.approxPolyDP(
      contour,
      approx,
      0.04 * perimeter,
      true
    );

    // Must have 4 corners
    if (approx.rows !== 4) {
      approx.delete();
      contour.delete();
      continue;
    }

    // Must be convex
    if (!cv.isContourConvex(approx)) {
      approx.delete();
      contour.delete();
      continue;
    }

    const rect = cv.boundingRect(
      approx
    );

    const ratio =
      rect.width / rect.height;

    if (
      ratio < 0.8 ||
      ratio > 1.2
    ) {
      approx.delete();
      contour.delete();
      continue;
    }

    stickers.push({
      x: rect.x,
      y: rect.y,
      size: Math.max(
        rect.width,
        rect.height
      ),
    });

    approx.delete();
    contour.delete();
  }

  contours.delete();
  hierarchy.delete();

  console.log(
    "Valid stickers:",
    stickers.length
  );

  if (stickers.length !== 9) {
    return stickers;
  }

  const sorted =
    sortStickers(stickers);

  console.log(
    "Sticker order:",
    sorted
  );

  return sorted;
}