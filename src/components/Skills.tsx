import { Code, Database, Palette, Cloud, Zap, Users } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      items: ["ReactJS", "ViteJS", "JavaScript", "TypeScript", "HTML/CSS"]
    },
    {
      category: "Backend Development", 
      icon: <Database className="h-6 w-6" />,
      items: ["Node.js", "API Integration", "RESTful APIs", "Database Management"]
    },
    {
      category: "UI/UX Design",
      icon: <Palette className="h-6 w-6" />,
      items: ["UI/UX Design", "Color Grading", "Visual Design", "User Experience"]
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      items: ["AWS Cloud Deployment", "Server Management", "Performance Optimization"]
    },
    {
      category: "Development Practices",
      icon: <Zap className="h-6 w-6" />,
      items: ["Code Optimization", "Scalability", "Performance Enhancement"]
    },
    {
      category: "Collaboration",
      icon: <Users className="h-6 w-6" />,
      items: ["Code Reviews", "Team Collaboration", "Bug Fixes", "Feature Development"]
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-text-gradient bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={skill.category}
              className="bg-card-gradient rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-primary">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {skill.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex}
                    className="text-muted-foreground flex items-center"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;