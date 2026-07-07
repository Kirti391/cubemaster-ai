import { getCV } from "./cv";

export function matToCanvas(mat: any): string {
  const cv = getCV();

  const canvas = document.createElement("canvas");

  cv.imshow(canvas, mat);

  return canvas.toDataURL("image/png");
}