"use client";

import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import Container from "@/src/components/shared/container";
import CubeScene from "@/src/modules/cube-viewer/components/cube-scene";

export default function CTA() {
  return (
    <section className="relative py-20 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_60%)]" />

      <Container>

        <div className="relative rounded-[40px] border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-14 text-center overflow-hidden">

          {/* Decorative Glow */}
          <div className="absolute -top-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
{/* <div >
  <CubeScene />
</div> */}
          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Ready?
          </span>

          <h2 className="mt-8 text-5xl font-bold">

            Start Solving Cubes

            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              {" "}
              Smarter
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Scan your cube, let AI detect every color, and solve it with
            interactive 3D guidance in just a few seconds.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Button className="px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-all">
              Start Solving
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
<Button
  variant="secondary"
  className="px-8 py-6 rounded-full"
>
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>

          </div>

        </div>

      </Container>

    </section>
  );
}