"use client";

// type Props = {
//   currentFace: string;
//   currentStep: number;
//   totalSteps: number;
// };

// export default function FaceGuide({
//   currentFace,
//   currentStep,
//   totalSteps,
// }: Props) {
//   return (
//     <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5 text-center">

//       <p className="text-sm uppercase tracking-widest text-cyan-400">
//         Step {currentStep} of {totalSteps}
//       </p>

//       <h2 className="mt-2 text-4xl font-bold text-white">
//         {currentFace.toUpperCase()}
//       </h2>

//       <p className="mt-3 text-zinc-400">
//         Rotate the cube until the{" "}
//         <span className="font-semibold text-cyan-400">
//           {currentFace}
//         </span>{" "}
//         face is directly facing the camera.
//       </p>

//     </div>
//   );
// }
type Props = {
  currentFace: string;
};

const FACE_INSTRUCTIONS: Record<string, string> = {
  Front: "Hold the FRONT face towards the camera.",
  Right: "Rotate the cube to show the RIGHT face.",
  Back: "Rotate another 90° to show the BACK face.",
  Left: "Rotate another 90° to show the LEFT face.",
  Top: "Point the TOP face towards the camera.",
  Bottom: "Flip the cube to show the BOTTOM face.",
};

export default function FaceGuide({
  currentFace,
}: Props) {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
      <p className="text-xs uppercase tracking-widest text-cyan-400">
        Current Face
      </p>

      <h2 className="mt-2 text-3xl font-bold text-white">
        {currentFace}
      </h2>

      <p className="mt-3 text-zinc-400">
        {FACE_INSTRUCTIONS[currentFace]}
      </p>
    </div>
  );
}