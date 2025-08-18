import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onScrollToContent: () => void;
}

export const HeroSection = ({ onScrollToContent }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyber-cyan/10 animate-float blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 rounded-full bg-electric-blue/10 animate-float blur-3xl" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full bg-matrix-teal/10 animate-float blur-3xl" style={{ animationDelay: "4s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-pulse-glow">
            MIKAAL
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            11-Year-Old Developer & Gamer from Dubai
          </p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <span className="px-4 py-2 rounded-full bg-card border border-cyber-cyan/30 text-cyber-cyan shadow-glow-cyan">
                Game Developer
              </span>
              <span className="px-4 py-2 rounded-full bg-card border border-electric-blue/30 text-electric-blue shadow-glow-blue">
                Xbox Gamer
              </span>
              <span className="px-4 py-2 rounded-full bg-card border border-matrix-teal/30 text-matrix-teal shadow-glow-teal">
                Creative Coder
              </span>
            </div>
            <Button 
              variant="glow" 
              size="lg" 
              onClick={onScrollToContent}
              className="animate-pulse-glow"
            >
              Explore My Journey
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  );
};