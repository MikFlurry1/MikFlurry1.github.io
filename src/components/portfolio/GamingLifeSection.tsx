import { DetailedSection } from "./DetailedSection";
import { Gamepad2, Trophy, Users, Zap, Target, Brain } from "lucide-react";

export const GamingLifeSection = () => {
  const content = (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <Gamepad2 className="h-8 w-8 text-cyber-cyan" />
            <h3 className="text-2xl font-bold text-cyber-cyan">My Gaming Journey</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Gaming isn't just entertainment for me—it's a source of endless inspiration and creativity. 
            From the strategic depth of board games to the competitive world of Xbox, every game teaches 
            me something new about problem-solving, teamwork, and innovation.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I spend hours analyzing game mechanics, understanding what makes games engaging, and reverse-engineering 
            the logic behind my favorite titles. This curiosity drives me to create my own gaming experiences.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="h-8 w-8 text-cyber-cyan" />
            <h3 className="text-2xl font-bold text-cyber-cyan">Gaming Achievements</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-cyber-cyan/10 rounded-lg p-4 border border-cyber-cyan/30">
              <h4 className="font-semibold text-cyber-cyan mb-2">Basketball Champion</h4>
              <p className="text-sm text-muted-foreground">Won the U12 Basketball Scene - combining physical and mental strategy</p>
            </div>
            <div className="bg-cyber-cyan/10 rounded-lg p-4 border border-cyber-cyan/30">
              <h4 className="font-semibold text-cyber-cyan mb-2">Minecraft Builder</h4>
              <p className="text-sm text-muted-foreground">Created complex redstone circuits and architectural marvels</p>
            </div>
            <div className="bg-cyber-cyan/10 rounded-lg p-4 border border-cyber-cyan/30">
              <h4 className="font-semibold text-cyber-cyan mb-2">Strategy Master</h4>
              <p className="text-sm text-muted-foreground">Excel at board games that require tactical thinking and planning</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-cyber-cyan/30 pt-8">
        <h3 className="text-2xl font-bold text-cyber-cyan mb-6 flex items-center gap-3">
          <Brain className="h-8 w-8" />
          What Gaming Teaches Me
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <Target className="h-12 w-12 text-cyber-cyan mx-auto mb-4" />
            <h4 className="font-bold text-cyber-cyan mb-2">Strategic Thinking</h4>
            <p className="text-sm text-muted-foreground">Every game is a puzzle to solve, teaching me to think several steps ahead</p>
          </div>
          <div className="text-center">
            <Users className="h-12 w-12 text-cyber-cyan mx-auto mb-4" />
            <h4 className="font-bold text-cyber-cyan mb-2">Teamwork</h4>
            <p className="text-sm text-muted-foreground">Multiplayer games teach collaboration and communication skills</p>
          </div>
          <div className="text-center">
            <Zap className="h-12 w-12 text-cyber-cyan mx-auto mb-4" />
            <h4 className="font-bold text-cyber-cyan mb-2">Quick Adaptation</h4>
            <p className="text-sm text-muted-foreground">Gaming environments change rapidly, teaching me to adapt and innovate</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <DetailedSection
      id="gaming-life"
      title="Gaming Life"
      description="Where strategy meets creativity and competition fuels innovation"
      content={content}
      bgGradient="bg-gradient-to-br from-cyber-cyan/10 to-cyber-cyan/5"
      borderColor="border-cyber-cyan/30"
      textColor="text-cyber-cyan"
      shadowClass="shadow-glow-cyan"
    />
  );
};