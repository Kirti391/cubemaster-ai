import { getCV } from "./cv";

export function findLargestSquare(edges: any) {
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

  let largestArea = 0;
  let bestContour: any = null;
  let bestApprox: any = null;

  for (let i = 0; i < contours.size(); i++) {
    const contour = contours.get(i);

    const area = cv.contourArea(contour);

    if (area < 10000) {
      contour.delete();
      continue;
    }

    const perimeter = cv.arcLength(contour, true);

    const approx = new cv.Mat();

    cv.approxPolyDP(
      contour,
      approx,
      0.02 * perimeter,
      true
    );

    if (
      approx.rows === 4 &&
      area > largestArea &&
      cv.isContourConvex(approx)
    ) {
      largestArea = area;

      if (bestContour) bestContour.delete();
      if (bestApprox) bestApprox.delete();

      bestContour = contour;
      bestApprox = approx;
    } else {
      contour.delete();
      approx.delete();
    }
  }

  contours.delete();
  hierarchy.delete();

  return {
    contour: bestContour,
    approx: bestApprox,
    area: largestArea,
  };
}