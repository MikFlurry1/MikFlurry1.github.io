import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin, Gamepad, Code2, Heart } from "lucide-react";

interface HeroSectionProps {}

export const HeroSection = ({}: HeroSectionProps) => {
  return (
    <section className="h-screen flex flex-col justify-center bg-gradient-hero relative overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyber-cyan/10 animate-float blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 rounded-full bg-electric-blue/10 animate-float blur-3xl" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full bg-matrix-teal/10 animate-float blur-3xl" style={{ animationDelay: "4s" }}></div>
      </div>
      
      <div className="container mx-auto relative z-10 max-w-6xl">
        {/* Title at the top */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6">
            <div className="relative" style={{ width: '580px', height: '160px', margin: '0 auto' }}>
              <h1 className="text-6xl md:text-8xl font-black absolute" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
                <span className="bg-cyber-cyan text-black px-4 py-2 absolute top-0 left-0">MIKAAL</span>
                <span className="bg-cyber-cyan text-black px-4 py-2 absolute" style={{ top: '85px', left: '300px' }}>KHAN</span>
              </h1>
            </div>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground mb-2">
            11-Year-Old Developer & Gamer from Dubai
          </p>
          <p className="text-sm text-muted-foreground/80 mb-6">
            Building games, coding projects, and exploring GitHub repositories
          </p>
          
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
        </div>
        
        {/* Descriptions below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div 
            className="bg-gradient-to-br from-cyber-cyan/10 to-cyber-cyan/5 border border-cyber-cyan/30 rounded-lg p-6 shadow-glow-cyan text-center cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-glow-cyan"
            onClick={() => document.getElementById('gaming-life')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Gamepad className="h-6 w-6 text-cyber-cyan" />
              <h3 className="text-lg font-bold text-cyber-cyan">Gaming Life</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-3">
              Xbox, Minecraft, board games—gaming fuels my creativity and inspires me to build my own experiences.
            </p>
            <p className="text-xs text-cyber-cyan hover:underline">Click to explore →</p>
          </div>
          
          <div 
            className="bg-gradient-to-br from-electric-blue/10 to-electric-blue/5 border border-electric-blue/30 rounded-lg p-6 shadow-glow-blue text-center cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-glow-blue"
            onClick={() => document.getElementById('building-dreams')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Code2 className="h-6 w-6 text-electric-blue" />
              <h3 className="text-lg font-bold text-electric-blue">Building Dreams</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-3">
              I code games, chat apps, and GitHub projects. Currently working on a Rocket League Sideswipe-style game and exploring open-source contributions.
            </p>
            <p className="text-xs text-electric-blue hover:underline">Click to explore →</p>
          </div>
          
          <div 
            className="bg-gradient-to-br from-matrix-teal/10 to-matrix-teal/5 border border-matrix-teal/30 rounded-lg p-6 shadow-glow-teal text-center cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-glow-teal"
            onClick={() => document.getElementById('who-i-am')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Heart className="h-6 w-6 text-matrix-teal" />
              <h3 className="text-lg font-bold text-matrix-teal">Who I Am</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-3">
              Curious creator who reverse-engineers cool stuff and builds my own versions. I keep things simple but impactful, 
              have a good sense of humor, and stay determined until I master what I'm learning.
            </p>
            <p className="text-xs text-matrix-teal hover:underline">Click to explore →</p>
          </div>
        </div>
      </div>
    </section>
  );
};