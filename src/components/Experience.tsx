import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Web Designer & Developer",
      company: "Wordwise Language Labs",
      location: "Bengaluru, India",
      period: "05/2024 to 06/2025",
      responsibilities: [
        "Designed most of the websites for the company's portfolio and maintained website content.",
        "Integrated third party API's into the application for additional features and functionality.",
        "Researched, developed and involved with all the core team to implement new technologies to improve development.",
        "Managed both front-end and back-end aspects of development process.",
        "Utilized ReactJS & ViteJS to develop dynamic and interactive web application.",
        "Implemented animations and motions.",
        "Troubleshooted issues related to frontend, backend and in server."
      ]
    },
    {
      title: "Full Stack Web Developer Intern",
      company: "Infotrixs",
      location: "Remote",
      period: "12/2023 to 01/2024",
      responsibilities: [
        "Reviewed information and elements regularly on websites and pages for accuracy and functionality.",
        "Redesigned sites to enhance navigation and improve visual appeal."
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-text-gradient bg-clip-text text-transparent">
            Professional Experience
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative bg-card-gradient rounded-2xl p-8 mb-8 shadow-elegant animate-slide-in-left"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Briefcase className="h-4 w-4" />
                    <span className="text-lg font-semibold">{exp.company}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <div key={respIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed">
                      {responsibility}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;