import { useRef } from "react";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { TableOfContents } from "@/components/portfolio/TableOfContents";
import { AboutSection } from "@/components/portfolio/AboutSection";

const Index = () => {
  const tocRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  const scrollToToc = () => scrollToSection(tocRef);
  const scrollToAbout = () => scrollToSection(aboutRef);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
    </div>
  );
};

export default Index;