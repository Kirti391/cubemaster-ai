import { DetectedSticker } from "../types/color";
import { sortStickers } from "./sort-stickers";
export function detectStickers(
  mat: any
): DetectedSticker[] {
  const contours = new cv.MatVector();
  const hierarchy = new cv.Mat();

  cv.findContours(
    mat,
    contours,
    hierarchy,
    cv.RETR_EXTERNAL,
    cv.CHAIN_APPROX_SIMPLE
  );

  const stickers: DetectedSticker[] = [];

  for (let i = 0; i < contours.size(); i++) {
    const contour = contours.get(i);

    const area = cv.contourArea(contour);

    // Ignore very small contours
    if (area < 500) {
      contour.delete();
      continue;
    }

    const rect = cv.boundingRect(contour);

    const ratio = rect.width / rect.height;

    // Sticker should be roughly square
    if (ratio < 0.8 || ratio > 1.2) {
      contour.delete();
      continue;
    }

    stickers.push({
      x: rect.x,
      y: rect.y,
      size: Math.max(rect.width, rect.height),
    });

    contour.delete();
  }

  contours.delete();
  hierarchy.delete();
if (stickers.length !== 9) {
  return stickers;
}

return sortStickers(stickers);
}