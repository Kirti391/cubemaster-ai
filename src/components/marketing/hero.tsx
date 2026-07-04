import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import Container from "@/src/components/shared/container";
import CubeScene from "@/src/modules/cube-viewer/components/cube-scene";
export default function Hero() {
    return (
       <section className="relative overflow-hidden pt-28 pb-20 lg:pt-24">
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.15),transparent_40%)]" />

            <Container>
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Left */}
                    <div>
                        <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                            🚀 AI Powered Cube Solver
                        </span>

                        <h1 className="mt-5 text-5xl font-extrabold leading-tight md:text-7xl">
                            Solve Any
                            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                                {" "}
                                Rubik's Cube{" "}
                            </span>
                            Instantly
                        </h1>

                        <p className="mt-6 max-w-xl text-lg text-zinc-400">
                            Upload photos of your cube or scan it live with your camera.
                            CubeMaster AI generates step-by-step instructions and teaches you
                            how to solve it like a speedcuber.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Button>
                                Solve My Cube
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>

                            <Button variant="secondary">
                                <PlayCircle className="mr-2 h-4 w-4" />
                                Watch Demo
                            </Button>
                        </div>

                        <div className="mt-12 flex flex-wrap gap-6">
                            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
    <h3 className="text-3xl font-bold">100K+</h3>
    <p className="text-zinc-400">Cubes Solved</p>
</div>
  <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
                            <div>
                                <h3 className="text-3xl font-bold">98%</h3>
                                <p className="text-zinc-500">Detection Accuracy</p>
                            </div>
</div>
  <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
                            <div>
                                <h3 className="text-3xl font-bold">&lt;5 sec</h3>
                                <p className="text-zinc-500">Average Solve</p>
                            </div></div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="relative flex items-center justify-center lg:justify-end">
                        <div className="absolute h-[420px] w-[420px] rounded-full bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-violet-500/15 blur-[120px]" />

                     <div className="relative flex h-[480px] w-full items-center justify-center lg:h-[520px]">
    <CubeScene />
</div>

  
                    </div>
                </div>
            </Container>
        </section>
    );
}