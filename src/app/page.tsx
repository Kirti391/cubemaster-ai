import Navbar from "@/src/components/layout/navbar";
import Hero from "@/src/components/marketing/hero";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <Hero />
    </main>
  );
}