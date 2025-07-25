import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-hero-bg overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-secondary rounded-lg rotate-45"></div>
        <div className="absolute bottom-32 left-40 w-16 h-16 bg-accent rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 border border-primary rounded-lg"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 left-8 z-50">
        <div className="flex flex-col space-y-1">
          <div className="text-primary font-bold text-2xl">AK</div>
          <div className="text-primary text-sm">HILA</div>
        </div>
      </nav>

      {/* Download CV Button */}
      <div className="fixed top-8 right-8 z-50">
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <Download className="w-4 h-4 mr-2" />
          Download CV
        </Button>
      </div>

      {/* Main Content */}
      <div className="text-center z-10 px-6">
        {/* Profile Image */}
        <div className="relative mb-8">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-accent bg-gradient-accent p-1">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img 
                src="/lovable-uploads/d91ded3d-1059-4c44-8bc1-f7d65e99a765.png" 
                alt="Akhila Rekulapadu" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Hero Text */}
        <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-4">
          Hi, I'm Akhila!
        </h1>
        
        <div className="flex items-center justify-center mb-8">
          <div className="h-px bg-primary w-16 mr-4"></div>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Aspiring Data Scientist & AI Enthusiast
          </p>
          <div className="h-px bg-primary w-16 ml-4"></div>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Passionate about leveraging AI and machine learning to drive business intelligence and decision-making. 
          Skilled in Python, deep learning, NLP, and generative AI with hands-on experience in real-world projects.
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center space-x-6 mb-12">
          <a 
            href="https://github.com/akhi1120" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-muted hover:bg-gradient-primary flex items-center justify-center transition-all group"
          >
            <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary-foreground" />
          </a>
          <a 
            href="https://www.linkedin.com/in/akhila-rekulapadu-1019a12a2/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-muted hover:bg-gradient-primary flex items-center justify-center transition-all group"
          >
            <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary-foreground" />
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <button 
          onClick={scrollToAbout}
          className="animate-bounce text-primary hover:text-secondary transition-colors"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>

      {/* Side Navigation */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
        <nav className="flex flex-col space-y-4">
          <a href="#home" className="w-3 h-3 rounded-full bg-primary"></a>
          <a href="#about" className="w-3 h-3 rounded-full bg-muted hover:bg-primary transition-colors"></a>
          <a href="#experience" className="w-3 h-3 rounded-full bg-muted hover:bg-primary transition-colors"></a>
          <a href="#projects" className="w-3 h-3 rounded-full bg-muted hover:bg-primary transition-colors"></a>
          <a href="#skills" className="w-3 h-3 rounded-full bg-muted hover:bg-primary transition-colors"></a>
          <a href="#contact" className="w-3 h-3 rounded-full bg-muted hover:bg-primary transition-colors"></a>
        </nav>
      </div>
    </section>
  );
};

export default Hero;