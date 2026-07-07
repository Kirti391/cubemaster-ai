import Container from "@/src/components/shared/container";
import FeatureCard from "./feature-card";
import { FEATURES } from "@/src/config/feature";
import SectionHeader from "../shared/section-header";

export default function Features() {
  return (
    
    <section className="py-16 lg:py-16">
      <Container>
        {/* Heading */}
        <div className="mx-auto mb-12 h-px w-40 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

        <div className="mx-auto mb-16 max-w-3xl text-center">
         <SectionHeader
  badge="Features"
  title="Why Choose"
  highlight="CubeMaster AI"
  description="Everything you need to scan, solve, and master the Rubik's Cube with the help of AI."
/>
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