export type CubeFace =
  | "Front"
  | "Right"
  | "Back"
  | "Left"
  | "Top"
  | "Bottom";

export type CapturedFaces = Partial<Record<CubeFace, string>>;