import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-primary/20 to-transparent blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-l from-secondary/20 to-transparent blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      {/* Floating Neon Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/20 blur-xl float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-secondary/20 blur-xl float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-primary/30 blur-lg float"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="mb-6 animate-fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full glass-card text-primary border border-primary/30 text-sm font-medium">
              👋 Available for freelance work
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Hi, I'm{' '}
            <span className="gradient-text">
              Shradha Kapoor
            </span>
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl text-muted-foreground">
              Developer
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Crafting immersive digital experiences with cutting-edge technologies. 
            Specializing in React, GSAP animations, and 3D web interactions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:glow-primary transition-all duration-300 pulse-glow px-8 py-6 text-lg font-semibold"
            >
              Hire Me
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass-card border-primary/30 hover:glow-primary transition-all duration-300 px-8 py-6 text-lg"
              onClick={() => {
                window.open('https://drive.google.com/file/d/1K1RNZP0_UvSrJoDj7poSfYuxidLqDxSF/view?usp=sharing', '_blank');
              }}
            >
              <Copy className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;