
import { Smartphone, Code, Layers, Paintbrush, Rocket, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Smartphone />,
      title: 'iOS Development',
      description: 'Native iOS applications built with Swift for optimal performance and seamless user experience.',
    },
    {
      icon: <Code />,
      title: 'Android Development',
      description: 'Robust Android applications using Kotlin that work flawlessly across all Android devices.',
    },
    {
      icon: <Layers />,
      title: 'Cross-Platform',
      description: 'Cost-effective solutions using React Native and Flutter for deployment across multiple platforms.',
    },
    {
      icon: <Paintbrush />,
      title: 'UX/UI Design',
      description: 'User-centered design that creates intuitive, engaging, and accessible mobile experiences.',
    },
    {
      icon: <Rocket />,
      title: 'App Store Optimization',
      description: 'Strategic app store presence to maximize visibility and drive organic downloads.',
    },
    {
      icon: <Shield />,
      title: 'Maintenance & Support',
      description: 'Ongoing technical support and updates to ensure your app remains secure and up-to-date.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 opacity-0 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground">
            Comprehensive mobile development solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card opacity-0 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="icon-container mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
