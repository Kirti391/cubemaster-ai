"use client";

import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Float,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import RubiksCube from "./rubiks-cube";

export default function CubeScene() {
  return (
    <div className="h-[500px] w-full">
      <Canvas shadows>
       <PerspectiveCamera
  makeDefault
  position={[8, 7, 9]}
  fov={40}
/>
        <ambientLight intensity={0.8} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2.5}
          castShadow
        />

        <directionalLight
          position={[-5, -5, -5]}
          intensity={0.8}
        />

        <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI/4}
            maxPolarAngle={Math.PI/2}
            autoRotate
            autoRotateSpeed={1.2}
        />


        <Environment preset="studio" />
        <Float
          speed={2}
          rotationIntensity={0.25}
          floatIntensity={0.8}
        >
          <RubiksCube />
        </Float>


      </Canvas>
    </div>
  );
}