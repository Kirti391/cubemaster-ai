"use client";

import Image from "next/image";

import {
  FACE_LABELS,
  CUBE_FACES,
} from "../constants";

import {
  CapturedFaces,
  CubeFace,
} from "../types/scanner";

import { Button } from "@/src/components/ui/button";

type Props = {
  capturedFaces: CapturedFaces;
  progress: number;
  retakeFace: (face: CubeFace) => void;
};

export default function UploadPanel({
  capturedFaces,
  progress,
  retakeFace,
}: Props) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            Captured Faces
          </h2>

          <p className="text-zinc-400">
            {progress} of 6 faces captured
          </p>

        </div>

      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {CUBE_FACES.map((face) => {

          const capture =
            capturedFaces[face];

          return (

            <div
              key={face}
              className="rounded-2xl border border-white/10 bg-black/20 p-4"
            >

              <div className="mb-3 flex items-center justify-between">

                <h3 className="font-semibold">

                  {FACE_LABELS[face]}

                </h3>

                {capture ? (
                  <span className="text-green-400">
                    ✓
                  </span>
                ) : (
                  <span className="text-zinc-500">
                    —
                  </span>
                )}

              </div>

              {capture ? (

                <>

                  <div className="relative aspect-square overflow-hidden rounded-xl">

                    <Image
                      src={capture.image}
                      alt={FACE_LABELS[face]}
                      fill
                      className="object-cover"
                      unoptimized
                    />

                  </div>

                  <Button
                    variant="outline"
                    className="mt-4 w-full"
                    onClick={() =>
                      retakeFace(face)
                    }
                  >
                    Retake
                  </Button>

                </>

              ) : (

                <div className="flex aspect-square items-center justify-center rounded-xl border border-dashed border-zinc-700 text-sm text-zinc-500">

                  Not Captured

                </div>

              )}

            </div>

          );

        })}

      </div>

    </section>
  );
}