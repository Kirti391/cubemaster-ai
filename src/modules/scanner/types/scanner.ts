import { CubeColor } from "../../color-recognition/types/color";

export type CubeFace =
  | "U"
  | "R"
  | "F"
  | "D"
  | "L"
  | "B";

export interface CapturedFace {
  image: string;

  colors: CubeColor[];

  completed: boolean;

  timestamp: number;
}

export type CapturedFaces = Partial<
  Record<CubeFace, CapturedFace>
>;