export type Sticker = {
  x: number;
  y: number;
  size: number;
};

export type RGB = {
  r: number;
  g: number;
  b: number;
};

export type CubeColor =
  | "U"
  | "R"
  | "F"
  | "D"
  | "L"
  | "B";

export type DetectedSticker = Sticker & {
  rgb?: RGB;
  color?: CubeColor;
};