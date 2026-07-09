export type ValidationResult = {
  valid: boolean;
  error?: string;
};

export function validateCube(
  cube: string
): ValidationResult {
  if (cube.length !== 54) {
    return {
      valid: false,
      error: "Cube state must contain exactly 54 stickers.",
    };
  }

  const counts: Record<string, number> = {};

  for (const color of cube) {
    counts[color] = (counts[color] ?? 0) + 1;
  }

  const faces = ["U", "R", "F", "D", "L", "B"];

  for (const face of faces) {
    if (counts[face] !== 9) {
      return {
        valid: false,
        error: `Face ${face} has ${counts[face] ?? 0} stickers instead of 9.`,
      };
    }
  }

  return {
    valid: true,
  };
}