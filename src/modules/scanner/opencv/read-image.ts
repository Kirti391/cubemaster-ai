import { getCV } from "./cv";

export async function readImage(imageSrc: string) {
  const cv = getCV();

  return new Promise<any>((resolve, reject) => {
    const image = new Image();

    image.onload = () => {
      const canvas = document.createElement("canvas");

      canvas.width = image.width;
      canvas.height = image.height;

      const ctx = canvas.getContext("2d");

      if (!ctx) {
        reject("Canvas Error");
        return;
      }

      ctx.drawImage(image, 0, 0);

      const mat = cv.imread(canvas);

      resolve(mat);
    };

    image.onerror = reject;

    image.src = imageSrc;
  });
}