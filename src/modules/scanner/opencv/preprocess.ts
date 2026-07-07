import { getCV } from "./cv";

export function preprocess(mat: any) {
  const cv = getCV();

  // Convert to grayscale
  const gray = new cv.Mat();

  cv.cvtColor(
    mat,
    gray,
    cv.COLOR_RGBA2GRAY
  );

  // Apply Gaussian Blur
  const blurred = new cv.Mat();

  cv.GaussianBlur(
    gray,
    blurred,
    new cv.Size(5, 5),
    0
  );

  // Detect edges
  const edges = new cv.Mat();

  cv.Canny(
    blurred,
    edges,
    75,
    150
  );

  // Free intermediate Mats
  gray.delete();
  blurred.delete();

  return edges;
}