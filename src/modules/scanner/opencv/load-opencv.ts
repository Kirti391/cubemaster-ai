let isLoaded = false;

export async function loadOpenCV(): Promise<void> {
  if (isLoaded) return;

  return new Promise((resolve, reject) => {
    // Already loaded
    if ((window as any).cv?.Mat) {
      isLoaded = true;
      resolve();
      return;
    }

    const script = document.createElement("script");

    script.src = "/opencv/opencv.js";
    script.async = true;

    script.onload = () => {
      const cv = (window as any).cv;

      cv.onRuntimeInitialized = () => {
        console.log("✅ OpenCV Loaded");

        isLoaded = true;

        resolve();
      };
    };

    script.onerror = () => reject("Failed to load OpenCV");

    document.body.appendChild(script);
  });
}