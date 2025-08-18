import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Gamepad, Code2, Heart } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Hey, I'm Mikaal! 👋
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin className="h-5 w-5 text-primary" />
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
                I'm super into gaming—Xbox, Minecraft, board games—you name it. Gaming isn't just fun for me, 
                it's where I get inspired to create my own experiences and learn how things work under the hood.
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
                But I don't just play games, I like building them too. I mess around with coding, 
                making projects like a chat app or even a Rocket League Sideswipe-style game.
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
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm curious and creative, always wanting to figure out how things work and then try making my own version. 
                I like to keep things simple but cool.
              </p>
              <p>
                I've got a good sense of humor too—I don't mind getting roasted, and I'll throw some right back. 
                I like hanging out, joking, and having fun.
              </p>
              <p>
                At the same time, I'm determined—if I want to learn or build something, I'll keep at it until I get it right. 
                That's just how I roll.
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