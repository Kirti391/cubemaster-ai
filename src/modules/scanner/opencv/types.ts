export interface CubeDetection {
  detected: boolean;
  contour: any | null;
  corners: any[];
}

export interface StickerColor {
  row: number;
  col: number;
  color: string;
}

export interface CubeState {
  front: string[];
  right: string[];
  back: string[];
  left: string[];
  top: string[];
  bottom: string[];
}