import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GamepadIcon, Code, User, ArrowDown, ArrowRight } from "lucide-react"; // Added ArrowRight for the explore link

interface TableOfContentsProps {
  onScrollToAbout: () => void;
  // Assuming you might have handlers for exploring each section
  onExploreSection: (sectionId: string) => void; 
}

const sections = [
  {
    id: "about",
    title: "About Me",
    description: "Get to know the person behind the code.",
    icon: User,
    color: "cyber-cyan",
    gradient: "from-cyber-cyan/20 to-cyber-cyan/5",
    border: "border-cyber-cyan/30",
    shadow: "shadow-glow-cyan"
  },
  {
    id: "gaming",
    title: "Gaming World",
    description: "Xbox, Minecraft, and everything gaming fuels my creativity and inspires me to build my own experiences.",
    icon: GamepadIcon,
    color: "electric-blue", 
    gradient: "from-electric-blue/20 to-electric-blue/5",
    border: "border-electric-blue/30",
    shadow: "shadow-glow-blue"
  },
  {
    id: "coding",
    title: "Code & Projects",
    description: "I code games, chat apps, and GitHub projects. Currently working on a Rocket League Sideswipe-style game and exploring open-source contributions.",
    icon: Code,
    color: "matrix-teal",
    gradient: "from-matrix-teal/20 to-matrix-teal/5", 
    border: "border-matrix-teal/30",
    shadow: "shadow-glow-teal"
  }
];

export const TableOfContents = ({ onScrollToAbout, onExploreSection }: TableOfContentsProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            What You'll Discover
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dive into my world of gaming, coding, and creativity. Each section reveals a different part of my journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card 
                key={section.id}
                // Added h-full to Card to ensure consistent height for flex child
                className={`bg-gradient-to-br ${section.gradient} border ${section.border} ${section.shadow} hover:scale-105 transition-all duration-300 cursor-pointer animate-slide-up flex flex-col`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-card border ${section.border} flex items-center justify-center`}>
                    <Icon className={`h-8 w-8 text-${section.color}`} />
                  </div>
                  <CardTitle className={`text-xl font-bold text-${section.color}`}>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                {/* Modified CardContent to be a flex container with column direction */}
                <CardContent className="flex flex-col flex-grow p-6"> 
                  <p className="text-muted-foreground text-center mb-4 flex-grow"> {/* Added flex-grow to description */}
                    {section.description}
                  </p>
                  {/* "Click to explore" link fixed to the bottom */}
                  <div className="mt-auto text-center"> {/* mt-auto pushes it to the bottom */}
                    <a 
                      href="#" // Replace with actual link or use onClick
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default link behavior
                        onExploreSection(section.id); // Call handler to navigate or scroll
                      }}
                      className={`inline-flex items-center text-${section.color} hover:underline font-semibold`}
                    >
                      Click to explore <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg" 
            onClick={onScrollToAbout}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-pulse-glow"
          >
            Start Reading
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
