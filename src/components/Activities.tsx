import { Camera, Bike, Globe, Trophy } from "lucide-react";

const Activities = () => {
  const activities = [
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Sports",
      description: "College level Basketball player with competitive experience and team leadership skills."
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Creative Arts",
      description: "Photography and videography enthusiast specializing in ads, campaigning, events, and travel content with professional editing skills."
    },
    {
      icon: <Bike className="h-8 w-8" />,
      title: "Automotive",
      description: "Passionate bike and car enthusiast with deep knowledge of automotive technology and mechanics."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Languages",
      description: "Multilingual communicator fluent in Kannada, English, Telugu, and Hindi."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-text-gradient bg-clip-text text-transparent">
            Activities & Interests
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="bg-card-gradient rounded-xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-full text-primary flex-shrink-0">
                  {activity.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;