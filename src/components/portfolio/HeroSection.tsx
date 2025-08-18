import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin, Gamepad, Code2, Heart } from "lucide-react";

interface HeroSectionProps {}

export const HeroSection = ({}: HeroSectionProps) => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyber-cyan/10 animate-float blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 rounded-full bg-electric-blue/10 animate-float blur-3xl" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full bg-matrix-teal/10 animate-float blur-3xl" style={{ animationDelay: "4s" }}></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Title and intro */}
          <div className="text-center lg:text-left relative z-10">
            <div className="animate-slide-up">
              <div className="relative inline-block mb-6">
                <h1 className="text-6xl md:text-8xl font-black relative" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
                  <span className="bg-cyber-cyan text-black px-2 py-1">MIKAAL</span>
                  <span className="bg-cyber-cyan text-black px-2 py-1 absolute -bottom-3 -right-4 md:-bottom-4 md:-right-6 text-4xl md:text-5xl">KHAN</span>
                </h1>
              </div>
              <p className="text-base md:text-lg text-muted-foreground mb-3">
                11-Year-Old Developer & Gamer from Dubai
              </p>
              <p className="text-sm text-muted-foreground/80 mb-8">
                Building games, coding projects, and exploring GitHub repositories
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-xs md:text-sm">
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
            </div>
          </div>
          
          {/* Right side - About content */}
          <div className="relative z-10">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-cyber-cyan/10 to-cyber-cyan/5 border border-cyber-cyan/30 rounded-lg p-6 shadow-glow-cyan">
                <div className="flex items-center gap-3 mb-3">
                  <Gamepad className="h-6 w-6 text-cyber-cyan" />
                  <h3 className="text-xl font-bold text-cyber-cyan">Gaming Life</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Xbox, Minecraft, board games—gaming fuels my creativity and inspires me to build my own experiences.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-electric-blue/10 to-electric-blue/5 border border-electric-blue/30 rounded-lg p-6 shadow-glow-blue">
                <div className="flex items-center gap-3 mb-3">
                  <Code2 className="h-6 w-6 text-electric-blue" />
                  <h3 className="text-xl font-bold text-electric-blue">Building Dreams</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  I code games, chat apps, and GitHub projects. Currently working on a Rocket League Sideswipe-style game and exploring open-source contributions.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-matrix-teal/10 to-matrix-teal/5 border border-matrix-teal/30 rounded-lg p-6 shadow-glow-teal">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="h-6 w-6 text-matrix-teal" />
                  <h3 className="text-xl font-bold text-matrix-teal">Who I Am</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Curious creator who reverse-engineers cool stuff and builds my own versions. I keep things simple but impactful, 
                  have a good sense of humor, and stay determined until I master what I'm learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};