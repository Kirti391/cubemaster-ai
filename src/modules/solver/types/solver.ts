export type CubeColor =
  | "U"
  | "R"
  | "F"
  | "D"
  | "L"
  | "B";

export type CubeState = CubeColor[];

export type SolveResult = {
  valid: boolean;
  solution: string[];
  error?: string;
};