import Navbar from "@/src/components/layout/navbar";
import Hero from "@/src/components/marketing/hero";
import Features from "@/src/components/marketing/features";
import HowItWorks from "@/src/components/marketing/how-it-works";
export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <Hero />
<Features />
<HowItWorks />
{/* 
   // Placeholder for now
<Footer /> */}
    </main>
  );
}