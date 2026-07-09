import { DetectedSticker } from "../types/color";

export function sortStickers(
  stickers: DetectedSticker[]
): DetectedSticker[] {
  if (stickers.length !== 9) {
    return stickers;
  }

  // Sort all stickers from top to bottom
  const byY = [...stickers].sort(
    (a, b) => a.y - b.y
  );

  const rows = [
    byY.slice(0, 3),
    byY.slice(3, 6),
    byY.slice(6, 9),
  ];

  // Sort each row from left to right
  rows.forEach((row) =>
    row.sort((a, b) => a.x - b.x)
  );

  return rows.flat();
}