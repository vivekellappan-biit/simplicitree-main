import { ArrowRight, CodeXml, Compass, Smartphone } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 opacity-0 animate-fade-in">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/5 text-primary border border-primary/10 text-sm">
            <span>Mobile Development Excellence</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Seamlessly transform your{" "}
            <span className="text-primary">Mobile Apps</span> idea idea into a
            global success
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl">
            Creating exceptional mobile experiences through innovative design
            and cutting-edge development for startups and enterprises.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="button-primary">
              <span>Get Started</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#services" className="button-secondary">
              <span>Our Services</span>
            </a>
          </div>

          <div className="pt-6">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by innovative companies
            </p>
            <div className="flex flex-wrap gap-8 items-center opacity-75">
              <div className="h-8 text-lg font-semibold text-foreground/90">
                MuNiAh Technologies
              </div>
              <div className="h-8 text-lg font-semibold text-foreground/90">
                Arulvakku
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 opacity-0 animate-fade-in animate-delay-200">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-80 bg-white rounded-[2.5rem] shadow-xl border-8 border-gray-100 overflow-hidden flex flex-col">
                  <div className="h-6 bg-gray-100 flex justify-center items-center">
                    <div className="w-20 h-4 bg-gray-200 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-primary/5 p-3 flex flex-col gap-3">
                    <div className="w-full h-24 bg-white rounded-lg shadow-sm"></div>
                    <div className="w-full h-12 bg-white rounded-lg shadow-sm"></div>
                    <div className="w-full h-12 bg-white rounded-lg shadow-sm"></div>
                    <div className="w-3/4 h-12 bg-primary rounded-lg shadow-sm self-center mt-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-1/4 -left-8 glass p-4 rounded-xl shadow-lg opacity-0 animate-fade-in animate-delay-300 animate-float">
            <Smartphone className="h-6 w-6 text-primary" />
          </div>

          <div className="absolute top-2/3 right-0 glass p-4 rounded-xl shadow-lg opacity-0 animate-fade-in animate-delay-400 animate-float">
            <CodeXml className="h-6 w-6 text-primary" />
          </div>

          <div className="absolute bottom-0 left-1/4 glass p-4 rounded-xl shadow-lg opacity-0 animate-fade-in animate-delay-500 animate-float">
            <Compass className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
