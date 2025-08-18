import { DetailedSection } from "./DetailedSection";
import { Heart, Compass, Star, Coffee, BookOpen, Puzzle } from "lucide-react";

export const WhoIAmSection = () => {
  const content = (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="h-8 w-8 text-matrix-teal" />
            <h3 className="text-2xl font-bold text-matrix-teal">My Philosophy</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            I believe in the power of curiosity and determination. When I see something cool, 
            I don't just admire it—I reverse-engineer it, understand how it works, and then 
            build my own version with my unique twist.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Simplicity is my strength. I keep things straightforward but impactful, 
            focusing on what truly matters rather than over-complicating solutions.
          </p>
          
          <div className="bg-matrix-teal/10 rounded-lg p-6 border border-matrix-teal/30">
            <h4 className="font-semibold text-matrix-teal mb-3">My Learning Approach</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Star className="h-4 w-4 text-matrix-teal" />
                Question everything and understand the 'why' behind it
              </li>
              <li className="flex items-center gap-2">
                <Puzzle className="h-4 w-4 text-matrix-teal" />
                Break down complex problems into manageable pieces
              </li>
              <li className="flex items-center gap-2">
                <Compass className="h-4 w-4 text-matrix-teal" />
                Stay persistent until I master what I'm learning
              </li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <Coffee className="h-8 w-8 text-matrix-teal" />
            <h3 className="text-2xl font-bold text-matrix-teal">Beyond Coding</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Living in Dubai while originally from Pakistan gives me a unique perspective on different cultures and approaches to problem-solving.
          </p>
          <div className="space-y-4">
            <div className="bg-matrix-teal/10 rounded-lg p-4 border border-matrix-teal/30">
              <h4 className="font-semibold text-matrix-teal mb-2">Academic Excellence</h4>
              <p className="text-sm text-muted-foreground">99th percentile in Math MAT Test - numbers and logic are my playground</p>
            </div>
            <div className="bg-matrix-teal/10 rounded-lg p-4 border border-matrix-teal/30">
              <h4 className="font-semibold text-matrix-teal mb-2">Sports & Strategy</h4>
              <p className="text-sm text-muted-foreground">Basketball champion - applying tactical thinking in physical competition</p>
            </div>
            <div className="bg-matrix-teal/10 rounded-lg p-4 border border-matrix-teal/30">
              <h4 className="font-semibold text-matrix-teal mb-2">Continuous Learning</h4>
              <p className="text-sm text-muted-foreground">Enrolled in MAA and Kaggle classes to expand my mathematical and data science knowledge</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-matrix-teal/30 pt-8">
        <h3 className="text-2xl font-bold text-matrix-teal mb-6 flex items-center gap-3">
          <BookOpen className="h-8 w-8" />
          Personal Values & Traits
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-matrix-teal/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-matrix-teal" />
            </div>
            <h4 className="font-bold text-matrix-teal mb-2">Empathy</h4>
            <p className="text-sm text-muted-foreground">Understanding others' perspectives helps me build better solutions</p>
          </div>
          <div className="text-center">
            <div className="bg-matrix-teal/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Compass className="h-8 w-8 text-matrix-teal" />
            </div>
            <h4 className="font-bold text-matrix-teal mb-2">Determination</h4>
            <p className="text-sm text-muted-foreground">Once I set my mind on something, I see it through to completion</p>
          </div>
          <div className="text-center">
            <div className="bg-matrix-teal/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-matrix-teal" />
            </div>
            <h4 className="font-bold text-matrix-teal mb-2">Humor</h4>
            <p className="text-sm text-muted-foreground">A good sense of humor makes the learning journey more enjoyable</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <DetailedSection
      id="who-i-am"
      title="Who I Am"
      description="A curious creator with a passion for understanding and building"
      content={content}
      bgGradient="bg-gradient-to-br from-matrix-teal/10 to-matrix-teal/5"
      borderColor="border-matrix-teal/30"
      textColor="text-matrix-teal"
      shadowClass="shadow-glow-teal"
    />
  );
};