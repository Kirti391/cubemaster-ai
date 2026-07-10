import {
  DetectedSticker,
  RGB,
} from "../types/color";

export function sampleColors(
  mat: any,
  stickers: DetectedSticker[]
): DetectedSticker[] {
  return stickers.map((sticker) => {
    const sampleSize = Math.floor(
      sticker.size * 0.4
    );

    const startX =
      sticker.x +
      Math.floor(
        (sticker.size - sampleSize) / 2
      );

    const startY =
      sticker.y +
      Math.floor(
        (sticker.size - sampleSize) / 2
      );

    let r = 0;
    let g = 0;
    let b = 0;
    let pixels = 0;

    for (
      let y = startY;
      y < startY + sampleSize;
      y++
    ) {
      if (y < 0 || y >= mat.rows) continue;

      for (
        let x = startX;
        x < startX + sampleSize;
        x++
      ) {
        if (x < 0 || x >= mat.cols) continue;

        const pixel = mat.ucharPtr(y, x);

        b += pixel[0];
        g += pixel[1];
        r += pixel[2];

        pixels++;
      }
    }

    if (pixels === 0) {
      throw new Error(
        "Failed to sample sticker colors."
      );
    }

    const rgb: RGB = {
      r: Math.round(r / pixels),
      g: Math.round(g / pixels),
      b: Math.round(b / pixels),
    };

    return {
      ...sticker,
      rgb,
    };
  });
}