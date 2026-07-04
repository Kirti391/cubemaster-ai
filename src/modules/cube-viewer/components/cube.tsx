"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Cube() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Slow rotation
    meshRef.current.rotation.x += 0.003;
    meshRef.current.rotation.y += 0.005;

    // Floating effect
    meshRef.current.position.y =
      Math.sin(state.clock.elapsedTime) * 0.15;
  });
  

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />

      <meshStandardMaterial
        color="#38bdf8"
        metalness={0.4}
        roughness={0.2}
      />
    </mesh>
  );
}
