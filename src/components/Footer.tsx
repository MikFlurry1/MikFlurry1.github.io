import React from 'react';
import { Github } from 'lucide-react';

interface FooterProps {
  githubUrl?: string;
  githubText?: string;
}

const Footer: React.FC<FooterProps> = ({
  githubUrl = "https://github.com/MikFlurry1",
  githubText = "My awesome github"
}) => {
  return (
    <footer className="w-full bg-background border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <Github className="h-5 w-5 text-cyan-500" />
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:text-cyan-400 transition-colors duration-200 font-medium"
            >
              {githubText}
            </a>
            <button onClick={() => alert("You found the egg!")} className="bg-white text-black px-2 py-1 rounded">Click me</button>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </div>
          <div
            onClick={e => (e.currentTarget.innerText = "You found the egg!")}
            style={{ background: "white", cursor: "pointer", padding: "5px", marginTop: "8px" }}
          >
            Click me
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;