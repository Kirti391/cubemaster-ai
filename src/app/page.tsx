import Navbar from "@/src/components/layout/navbar";
import Hero from "@/src/components/marketing/hero";
import Features from "@/src/components/marketing/features";
import HowItWorks from "@/src/components/marketing/how-it-works";
import AIDemo from "../components/marketing/ai-demo";
import LearningPreview from "../components/marketing/learning-preview";
import CTA from "../components/marketing/cta";
import Footer from "../components/marketing/footer";
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <AIDemo />
      <LearningPreview />
      <CTA/>
      <Footer />


    </main>
  );
}