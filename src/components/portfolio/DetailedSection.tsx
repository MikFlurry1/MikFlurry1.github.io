import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

interface DetailedSectionProps {
  id: string;
  title: string;
  description: string;
  content: React.ReactNode;
  bgGradient: string;
  borderColor: string;
  textColor: string;
  shadowClass: string;
}

export const DetailedSection = ({ 
  id, 
  title, 
  description, 
  content, 
  bgGradient, 
  borderColor, 
  textColor, 
  shadowClass 
}: DetailedSectionProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id={id} className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${textColor}`}>
            {title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {description}
          </p>
        </div>
        
        <Card className={`${bgGradient} ${borderColor} ${shadowClass} animate-slide-up`}>
          <CardContent className="p-8 md:p-12">
            {content}
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <Button 
            onClick={scrollToTop}
            variant="outline"
            className="bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </section>
  );
};