const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-text-gradient bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="bg-card-gradient rounded-2xl p-8 md:p-12 shadow-elegant animate-fade-in">
            <p className="text-lg leading-relaxed text-foreground">
              Dynamic Full Stack Web Designer and Developer with proven expertise at Wordwise Language Labs 
              in API integration and helped in cloud deployment as well. Adept at optimizing code for 
              enhanced performance and scalability while fostering collaboration through effective communication. 
              Successfully designed and developed complete product from scratch, driving impactful improvements 
              in web application functionality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;