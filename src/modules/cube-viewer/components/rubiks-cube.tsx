"use client";

import Cubie from "./cubie";

export default function RubiksCube() {
    const cubies = [];

    const spacing = 1.22;

    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            for (let z = -1; z <= 1; z++) {
                cubies.push(
                    <Cubie
                        key={`${x}-${y}-${z}`}
                        position={[
                            x,
                            y,
                            z,
                        ]}
                    />
                );
            }
        }
    }

  return (
  <group
    position={[0, 1.5, 0]}
    scale={1.25}
  >
    {cubies}
  </group>
);
}