"use client";

import { RoundedBox } from "@react-three/drei"; 
import Sticker from "./sticker";
import { CUBE_COLORS } from "@/src/constants/cube";
type CubieProps = {
  position: [number, number, number];
};


export default function Cubie({ position }: CubieProps) {
  const [x, y, z] = position;

  const spacing = 1.12;

  const worldPosition: [number, number, number] = [
    x * spacing,
    y * spacing,
    z * spacing,
  ];

  return (
    <group position={worldPosition}>
      
   <RoundedBox
  args={[1.15, 1.15, 1.15]}
        radius={0.06}
        smoothness={4}
      >
       <meshPhysicalMaterial
  color="#111111"
  roughness={0.6}
  clearcoat={0.3}
  metalness={0.05}
/>
      </RoundedBox>

      {/* Right */}
      {x > 0 && (
        <Sticker
         color={CUBE_COLORS.right}
      position={[0.585, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
        />
      )}

      {/* Left */}
      {x < 0 && (
        <Sticker
       color={CUBE_COLORS.left}
         position={[-0.585, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        />
      )}

      {/* Top */}
      {y > 0 && (
        <Sticker
        color={CUBE_COLORS.top}
          position={[0, 0.585, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      )}

      {/* Bottom */}
      {y < 0 && (
        <Sticker
        color={CUBE_COLORS.bottom}
          position={[0, -0.585, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      )}

      {/* Front */}
      {z > 0 && (
        <Sticker
     color={CUBE_COLORS.front}
          position={[0, 0, 0.585]}
        />
      )}

      {/* Back */}
      {z < 0 && (
        <Sticker
          color={CUBE_COLORS.back}
          position={[0, 0, -0.585]}
          rotation={[0, Math.PI, 0]}
        />
      )}
    </group>
  );
}