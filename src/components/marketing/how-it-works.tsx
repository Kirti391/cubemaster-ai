import Container from "@/src/components/shared/container";
import StepCard from "./step-card";
import { HOW_IT_WORKS } from "@/src/config/how-it-works";

export default function HowItWorks() {
  return (
    <section className="py-28">

      <Container>

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
            Process
          </span>

          <h2 className="mt-6 text-5xl font-bold">

            How{" "}

            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">

              CubeMaster AI

            </span>{" "}

            Works

          </h2>

          <p className="mt-6 text-lg text-zinc-400">

            Solve your cube in four simple AI-powered steps.

          </p>

        </div>

        {/* Timeline */}

        <div className="grid gap-16 lg:grid-cols-4">

          {HOW_IT_WORKS.map((step, index) => (

            <StepCard
              key={step.step}
              {...step}
              isLast={index === HOW_IT_WORKS.length - 1}
            />

          ))}

        </div>

      </Container>

    </section>
  );
}