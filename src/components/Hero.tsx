import { MapPin, Phone, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-text-gradient bg-clip-text text-transparent">
              DHEERAJ R
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Full Stack Web Designer & Developer
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Bengaluru, Karnataka, India 560067</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4 text-primary" />
              <span>9886332529</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4 text-primary" />
              <span>dheerajreddy.rreddy@gmail.com</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 animate-glow"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://linkedin.com/in/Dheeraj-r-a252b9212', '_blank')}
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn Profile
            </Button>
          </div>

          <div className="animate-bounce mt-12">
            <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;