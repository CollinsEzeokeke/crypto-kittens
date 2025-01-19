import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { TrustSection } from "@/components/TrustSection";
import { SpeedSection } from "@/components/SpeedSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-purple-dark">
      <Hero />
      <Features />
      <Stats />
      <SpeedSection />
      <TrustSection />
    </div>
  );
};

export default Index;