import { GraduationCap, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-text-gradient bg-clip-text text-transparent">
            Education
          </span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-card-gradient rounded-2xl p-8 shadow-elegant animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/20 p-3 rounded-full">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  Bachelor of Engineering
                </h3>
                <p className="text-lg text-primary font-semibold">
                  Information Science and Engineering
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  The Oxford College of Engineering
                </h4>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Bengaluru, Karnataka, India</span>
                </div>
              </div>
              
              <div className="border-t border-border pt-4">
                <p className="text-muted-foreground leading-relaxed">
                  Specialized in Information Science and Engineering with focus on web technologies, 
                  software development, and system design. Gained comprehensive knowledge in programming 
                  languages, database management, and software engineering principles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;