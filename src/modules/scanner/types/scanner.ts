export type CubeFace =
  | "Front"
  | "Right"
  | "Back"
  | "Left"
  | "Top"
  | "Bottom";

export type FaceCapture = {
  image: string;
  completed: boolean;
  timestamp: number;
};

export type CapturedFaces = Partial<Record<CubeFace, FaceCapture>>;