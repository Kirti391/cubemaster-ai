export interface DetectedSticker {
  row: number;
  col: number;

  color:
    | "white"
    | "yellow"
    | "green"
    | "blue"
    | "red"
    | "orange";
}

export interface DetectedFace {
  face: string;

  stickers: DetectedSticker[];
}