export type RGB = {
  r: number;
  g: number;
  b: number;
};

export type CubeColor =
  | "white"
  | "yellow"
  | "red"
  | "orange"
  | "blue"
  | "green";

export type DetectedSticker = {
  x: number;
  y: number;
  size: number;

  rgb?: RGB;
};