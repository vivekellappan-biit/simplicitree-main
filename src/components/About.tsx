
import { CheckCircle } from 'lucide-react';

const About = () => {
  const benefits = [
    'Experienced team of developers',
    'Award-winning design approach',
    'Agile development methodology',
    'Transparent communication',
    'On-time delivery commitment',
    'Post-launch support',
  ];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-slide-up">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl"></div>
              <div className="absolute inset-8 overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100">
                <div className="h-2/3 bg-primary/10 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/30 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
                <div className="h-1/3 p-6">
                  <div className="w-3/4 h-3 bg-gray-200 rounded-full mb-3"></div>
                  <div className="w-1/2 h-3 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="opacity-0 animate-slide-up animate-delay-200">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/5 text-primary border border-primary/10 text-sm mb-6">
              <span>About Us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Transforming Ideas Into Exceptional Mobile Applications
            </h2>
            
            <p className="text-muted-foreground mb-6">
              We are a team of passionate mobile developers dedicated to creating innovative and
              user-friendly applications that solve real-world problems. With years of industry
              experience, we bring technical expertise and creative solutions to every project.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="button-primary inline-flex">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
