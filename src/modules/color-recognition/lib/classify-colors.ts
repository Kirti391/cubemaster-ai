import {
  CubeColor,
  DetectedSticker,
} from "../types/color";

function distance(
  a: { r: number; g: number; b: number },
  b: { r: number; g: number; b: number }
) {
  return Math.sqrt(
    (a.r - b.r) ** 2 +
      (a.g - b.g) ** 2 +
      (a.b - b.b) ** 2
  );
}

const referenceColors = {
  white: { r: 240, g: 240, b: 240 },

  yellow: { r: 235, g: 220, b: 40 },

  red: { r: 210, g: 40, b: 40 },

  orange: { r: 240, g: 120, b: 30 },

  blue: { r: 40, g: 80, b: 220 },

  green: { r: 40, g: 170, b: 70 },
};

export function classifyColors(
  stickers: DetectedSticker[]
): CubeColor[] {
  return stickers.map((sticker) => {
    if (!sticker.rgb) {
      throw new Error(
        "Sticker RGB missing."
      );
    }

    let best: CubeColor = "white";
    let minDistance = Infinity;

    for (const [name, rgb] of Object.entries(
      referenceColors
    )) {
      const d = distance(
        sticker.rgb,
        rgb
      );

      if (d < minDistance) {
        minDistance = d;
        best = name as CubeColor;
      }
    }

    return best;
  });
}