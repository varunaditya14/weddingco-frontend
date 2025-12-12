import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100">
      <Navbar />

      {/* Figma-style centered container */}
      <main className="flex justify-center px-6 py-16">
        <div className="w-full max-w-[1100px] bg-white rounded-[32px] shadow-xl px-12 py-16 space-y-20">
          <Hero />
          <Features />
          <Pricing />
          <Contact />
        </div>
      </main>
    </div>
  );
}
