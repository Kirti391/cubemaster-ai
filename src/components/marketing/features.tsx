import Container from "@/src/components/shared/container";
import FeatureCard from "./feature-card";
import { FEATURES } from "@/src/config/feature";

export default function Features() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        {/* Heading */}
        <div className="mx-auto mb-12 h-px w-40 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Features
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              CubeMaster AI
            </span>
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            Everything you need to scan, solve, learn and master
            the Rubik's Cube using AI.
          </p>
        </div>

        {/* Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}