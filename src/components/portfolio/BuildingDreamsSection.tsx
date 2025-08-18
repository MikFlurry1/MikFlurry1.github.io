import { DetailedSection } from "./DetailedSection";
import { Code2, Rocket, Github, Lightbulb, Cpu, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BuildingDreamsSection = () => {
  const content = (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <Code2 className="h-8 w-8 text-electric-blue" />
            <h3 className="text-2xl font-bold text-electric-blue">Current Projects</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-electric-blue/10 rounded-lg p-6 border border-electric-blue/30">
              <h4 className="font-semibold text-electric-blue mb-3 flex items-center gap-2">
                <Rocket className="h-5 w-5" />
                Rocket League Sideswipe Clone
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Developing a physics-based car soccer game inspired by Rocket League Sideswipe. 
                Features realistic car physics, ball mechanics, and multiplayer capabilities.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 text-xs rounded-md bg-electric-blue/20 text-electric-blue">Game Physics</span>
                <span className="px-2 py-1 text-xs rounded-md bg-electric-blue/20 text-electric-blue">Multiplayer</span>
                <span className="px-2 py-1 text-xs rounded-md bg-electric-blue/20 text-electric-blue">3D Graphics</span>
              </div>
            </div>
            
            <div className="bg-electric-blue/10 rounded-lg p-6 border border-electric-blue/30">
              <h4 className="font-semibold text-electric-blue mb-3 flex items-center gap-2">
                <Github className="h-5 w-5" />
                SimpleGames Repository
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                A collection of simple but engaging games showcasing different programming concepts and game mechanics.
              </p>
              <Button 
                onClick={() => window.open('https://github.com/MikFlurry1/SimpleGames', '_blank')}
                className="bg-electric-blue/20 hover:bg-electric-blue/30 text-electric-blue border border-electric-blue/50"
                variant="outline"
              >
                <Github className="h-4 w-4 mr-2" />
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="h-8 w-8 text-electric-blue" />
            <h3 className="text-2xl font-bold text-electric-blue">AI & Innovation</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            I'm fascinated by artificial intelligence and its applications in game development. 
            Currently exploring AI-enhanced gameplay mechanics and intelligent NPC behavior.
          </p>
          <div className="space-y-4">
            <div className="bg-electric-blue/10 rounded-lg p-4 border border-electric-blue/30">
              <h4 className="font-semibold text-electric-blue mb-2">AI Chatbot Development</h4>
              <p className="text-sm text-muted-foreground">Building conversational AI systems with natural language processing</p>
            </div>
            <div className="bg-electric-blue/10 rounded-lg p-4 border border-electric-blue/30">
              <h4 className="font-semibold text-electric-blue mb-2">Machine Learning Integration</h4>
              <p className="text-sm text-muted-foreground">Implementing ML algorithms for adaptive game difficulty</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-electric-blue/30 pt-8">
        <h3 className="text-2xl font-bold text-electric-blue mb-6 flex items-center gap-3">
          <Cpu className="h-8 w-8" />
          Technical Skills & Learning
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-electric-blue mb-4">Programming Languages</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Python</span>
                <div className="w-32 bg-muted rounded-full h-2">
                  <div className="bg-electric-blue h-2 rounded-full w-4/5"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">JavaScript</span>
                <div className="w-32 bg-muted rounded-full h-2">
                  <div className="bg-electric-blue h-2 rounded-full w-3/5"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Game Development</span>
                <div className="w-32 bg-muted rounded-full h-2">
                  <div className="bg-electric-blue h-2 rounded-full w-4/5"></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-electric-blue mb-4">Currently Learning</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Database className="h-4 w-4 text-electric-blue" />
                <span className="text-sm">Neural Networks & Machine Learning</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-electric-blue" />
                <span className="text-sm">Advanced Game Physics</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4 text-electric-blue" />
                <span className="text-sm">Open Source Contributions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <DetailedSection
      id="building-dreams"
      title="Building Dreams"
      description="Where code meets creativity and ideas become reality"
      content={content}
      bgGradient="bg-gradient-to-br from-electric-blue/10 to-electric-blue/5"
      borderColor="border-electric-blue/30"
      textColor="text-electric-blue"
      shadowClass="shadow-glow-blue"
    />
  );
};