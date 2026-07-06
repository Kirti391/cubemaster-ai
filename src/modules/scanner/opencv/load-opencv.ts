import cv from "@techstark/opencv-js";

let loaded = false;

export async function loadOpenCV() {
  if (loaded) return cv;

  return new Promise<typeof cv>((resolve) => {
    cv.onRuntimeInitialized = () => {
      loaded = true;
      console.log("✅ OpenCV Loaded");
      resolve(cv);
    };
  });
}