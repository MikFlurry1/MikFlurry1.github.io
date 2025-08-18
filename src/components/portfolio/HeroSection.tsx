import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onScrollToContent: () => void;
}

export const HeroSection = ({ onScrollToContent }: HeroSectionProps) => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyber-cyan/10 animate-float blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 rounded-full bg-electric-blue/10 animate-float blur-3xl" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full bg-matrix-teal/10 animate-float blur-3xl" style={{ animationDelay: "4s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10 flex flex-col justify-between h-full pt-8">
        <div className="animate-slide-up">
          <div className="relative inline-block mb-4">
            <h1 className="text-6xl md:text-8xl font-black relative" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
              <span className="bg-cyber-cyan text-black px-2 py-1">MIKAAL</span>
              <span className="bg-cyber-cyan text-black px-2 py-1 absolute -bottom-2 -right-8 md:-bottom-4 md:-right-12">KHAN</span>
            </h1>
          </div>
          <p className="text-base md:text-lg text-muted-foreground mb-2 mt-8">
            11-Year-Old Developer & Gamer from Dubai
          </p>
          <p className="text-sm text-muted-foreground/80 mb-6">
            Building games, coding projects, and exploring GitHub repositories
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-3 text-xs md:text-sm">
              <span className="px-3 py-1 rounded-full bg-card border border-cyber-cyan/30 text-cyber-cyan shadow-glow-cyan">
                Game Developer
              </span>
              <span className="px-3 py-1 rounded-full bg-card border border-electric-blue/30 text-electric-blue shadow-glow-blue">
                Xbox Gamer
              </span>
              <span className="px-3 py-1 rounded-full bg-card border border-matrix-teal/30 text-matrix-teal shadow-glow-teal">
                Creative Coder
              </span>
            </div>
            <Button 
              variant="glow" 
              size="lg" 
              onClick={onScrollToContent}
            >
              Explore My Journey
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Bottom section with scroll indicator */}
        <div className="pb-8">
          <div className="flex justify-center">
            <ChevronDown className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};