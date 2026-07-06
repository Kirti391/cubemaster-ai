import cv from "@techstark/opencv-js";

export async function readImage(
  imageSrc: string
): Promise<cv.Mat> {

  return new Promise((resolve, reject) => {

    const image = new Image();

    image.onload = () => {
      try {
        const canvas = document.createElement("canvas");

        canvas.width = image.width;
        canvas.height = image.height;

        const ctx = canvas.getContext("2d");

        if (!ctx) {
          reject("Canvas not supported");
          return;
        }

        ctx.drawImage(image, 0, 0);

        const mat = cv.imread(canvas);

        resolve(mat);

      } catch (err) {
        reject(err);
      }
    };

    image.onerror = reject;

    image.src = imageSrc;

  });

}