import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "9886332529",
      href: "tel:9886332529"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "dheerajreddy.rreddy@gmail.com",
      href: "mailto:dheerajreddy.rreddy@gmail.com"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Bengaluru, Karnataka, India 560067",
      href: "#"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/Dheeraj-r-a252b9212",
      href: "https://linkedin.com/in/Dheeraj-r-a252b9212"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="bg-text-gradient bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card-gradient rounded-2xl p-8 md:p-12 shadow-elegant animate-fade-in">
            <div className="text-center mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always open to discussing new opportunities, collaborations, and exciting projects. 
                Feel free to reach out if you'd like to work together or just want to say hello!
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-all duration-300 group"
                >
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button 
                size="lg"
                onClick={() => window.open('mailto:dheerajreddy.rreddy@gmail.com', '_blank')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 animate-glow"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-16">
        <p className="text-muted-foreground">
          © 2024 Dheeraj R. Built with React & Vite.
        </p>
      </div>
    </section>
  );
};

export default Contact;