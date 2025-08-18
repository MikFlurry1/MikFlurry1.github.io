import { HeroSection } from "@/components/portfolio/HeroSection";
import { GamingLifeSection } from "@/components/portfolio/GamingLifeSection";
import { BuildingDreamsSection } from "@/components/portfolio/BuildingDreamsSection";
import { WhoIAmSection } from "@/components/portfolio/WhoIAmSection";
import { AchievementsSection } from "@/components/portfolio/AchievementsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <GamingLifeSection />
      <BuildingDreamsSection />
      <WhoIAmSection />
      <AchievementsSection />
    </div>
  );
};

export default Index;