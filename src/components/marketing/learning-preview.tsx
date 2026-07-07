"use client";
import Container from "@/src/components/shared/container";
import LearningCard from "./learning-card";
import { LEARNING_PATHS } from "@/src/config/learning";
import SectionHeader from "../shared/section-header";

export default function LearningPreview() {
  return (
    <section className="py-18">

      <Container>

        <div className="mx-auto mb-20 max-w-3xl text-center">

        <SectionHeader
  badge="Learning"
  title="Learn Like a"
  highlight="Speedcuber"
  description="Interactive lessons, AI guidance and beautiful 3D animations."
/>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {LEARNING_PATHS.map((course) => (

            <LearningCard
              key={course.title}
              {...course}
            />

          ))}

        </div>

      </Container>

    </section>
  );
}