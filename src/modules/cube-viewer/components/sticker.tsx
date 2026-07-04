"use client";

type StickerProps = {
  position: [number, number, number];
  rotation?: [number, number, number];
  color: string;
};

export default function Sticker({
  position,
  rotation = [0, 0, 0],
  color,
}: StickerProps) {
  return (
    <mesh
      position={position}
      rotation={rotation}
    >
    <planeGeometry args={[0.92, 0.92]} />

     {/* <meshPhysicalMaterial
  color={color}
  roughness={0.08}
  clearcoat={1}
  clearcoatRoughness={0.05}
  reflectivity={0.8}
/> */}
<meshBasicMaterial color={color} />
    </mesh>
  );
}