import { getCV } from "./cv";

export interface CubeDetection {
  detected: boolean;
  contour: any | null;
  corners: any[];
}

export function detectCube(edges: any): CubeDetection {
  const cv = getCV();

  const contours = new cv.MatVector();
  const hierarchy = new cv.Mat();

  cv.findContours(
    edges,
    contours,
    hierarchy,
    cv.RETR_EXTERNAL,
    cv.CHAIN_APPROX_SIMPLE
  );

  let largestContour = null;
  let largestArea = 0;

  for (let i = 0; i < contours.size(); i++) {
    const contour = contours.get(i);

    const area = cv.contourArea(contour);

    if (area > largestArea) {
      largestArea = area;

      largestContour = contour;
    }
  }

  if (!largestContour) {
    hierarchy.delete();
    contours.delete();

    return {
      detected: false,
      contour: null,
      corners: [],
    };
  }

  const perimeter = cv.arcLength(
    largestContour,
    true
  );

  const approx = new cv.Mat();

  cv.approxPolyDP(
    largestContour,
    approx,
    0.02 * perimeter,
    true
  );

  const detected = approx.rows === 4;

  hierarchy.delete();
  contours.delete();

  return {
    detected,
    contour: approx,
    corners: [],
  };
}