import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Gamepad, Code2, Heart } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Dubai, UAE • Originally from Pakistan</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-cyber-cyan/10 to-cyber-cyan/5 border-cyber-cyan/30 shadow-glow-cyan animate-slide-up">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Gamepad className="h-8 w-8 text-cyber-cyan" />
                <h3 className="text-2xl font-bold text-cyber-cyan">Gaming Life</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Xbox, Minecraft, board games—gaming fuels my creativity and inspires me to build my own experiences.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-electric-blue/10 to-electric-blue/5 border-electric-blue/30 shadow-glow-blue animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="h-8 w-8 text-electric-blue" />
                <h3 className="text-2xl font-bold text-electric-blue">Building Dreams</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I code games, chat apps, and GitHub projects. Currently working on a Rocket League Sideswipe-style game and exploring open-source contributions.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-matrix-teal/10 to-matrix-teal/5 border-matrix-teal/30 shadow-glow-teal animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <CardContent className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="h-8 w-8 text-matrix-teal" />
              <h3 className="text-2xl font-bold text-matrix-teal">Who I Am</h3>
            </div>
            <div className="text-muted-foreground leading-relaxed">
              <p>
                Curious creator who reverse-engineers cool stuff and builds my own versions. I keep things simple but impactful, 
                have a good sense of humor, and stay determined until I master what I'm learning.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-16 text-center animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold">
            <span>Ready to game, code, and create together?</span>
            <span className="animate-bounce">🚀</span>
          </div>
        </div>
      </div>
    </section>
  );
};