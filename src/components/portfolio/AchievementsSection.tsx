import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, Target, Brain, Star, Medal } from "lucide-react";

export const AchievementsSection = () => {
  const achievements = [
    {
      icon: Brain,
      title: "99th Percentile - Math MAT Test",
      description: "Exceptional mathematical abilities demonstrated through standardized testing, showcasing strong analytical and problem-solving skills.",
      category: "Academic Excellence",
      color: "text-cyber-cyan",
      bgColor: "bg-cyber-cyan/10",
      borderColor: "border-cyber-cyan/30"
    },
    {
      icon: Medal,
      title: "U12 Basketball Champion",
      description: "Won the U12 Basketball Scene, demonstrating teamwork, strategic thinking, and competitive excellence in sports.",
      category: "Sports Achievement",
      color: "text-electric-blue",
      bgColor: "bg-electric-blue/10",
      borderColor: "border-electric-blue/30"
    },
    {
      icon: Award,
      title: "Expert Student Verification",
      description: "Achieved expert student status, recognizing outstanding academic performance and dedication to learning.",
      category: "Academic Recognition",
      color: "text-matrix-teal",
      bgColor: "bg-matrix-teal/10",
      borderColor: "border-matrix-teal/30"
    },
    {
      icon: Target,
      title: "AI & Technology Proficiency",
      description: "Demonstrated advanced understanding of AI concepts, neural networks, and machine learning principles at a young age.",
      category: "Technical Skills",
      color: "text-cyber-cyan",
      bgColor: "bg-cyber-cyan/10",
      borderColor: "border-cyber-cyan/30"
    },
    {
      icon: Star,
      title: "Self-Directed Learning Excellence",
      description: "Successfully pursuing advanced education through self-learning and online platforms including MAA and Kaggle courses.",
      category: "Personal Development",
      color: "text-electric-blue",
      bgColor: "bg-electric-blue/10",
      borderColor: "border-electric-blue/30"
    },
    {
      icon: Trophy,
      title: "Game Development Innovation",
      description: "Created multiple game projects including an AI-enhanced Rocket League clone, showcasing creativity and technical skills.",
      category: "Creative Achievement",
      color: "text-matrix-teal",
      bgColor: "bg-matrix-teal/10",
      borderColor: "border-matrix-teal/30"
    }
  ];

  return (
    <section id="achievements" className="py-16 px-4 bg-gradient-to-br from-background to-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-muted-foreground">
            Milestones that showcase my dedication to excellence and continuous growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card 
                key={index} 
                className={`${achievement.bgColor} ${achievement.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`${achievement.bgColor} ${achievement.borderColor} border rounded-full p-3`}>
                      <IconComponent className={`h-6 w-6 ${achievement.color}`} />
                    </div>
                    <span className={`text-xs font-medium ${achievement.color} uppercase tracking-wider`}>
                      {achievement.category}
                    </span>
                  </div>
                  
                  <h3 className={`text-lg font-bold ${achievement.color} mb-3`}>
                    {achievement.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <Card className="bg-gradient-primary/10 border-primary/30 shadow-glow-cyan inline-block">
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Trophy className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold text-primary">6</span>
              </div>
              <p className="text-sm text-muted-foreground">Major Achievements at Age 11</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};