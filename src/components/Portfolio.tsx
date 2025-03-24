import { useState } from "react";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "iOS", "Android", "Cross-Platform"];

  const projects = [
    {
      title: "VaThala",
      category: "iOS",
      description:
        "Empower your health with our VaThala app; Facilitating scheduled connections between qualified healthcare professionals and users in need. Enjoy affordable, at home healthcare, ensuring comfort, tracking and convenience at every step.",
      image: "",
    },
    {
      title: "VaThala Health Expert",
      category: "iOS",
      description:
        "Grow your practice on VaThala at ease with the ‘VaThala Health Expert’ app. VaThala partnered doctors use this app to carry out their activities and manage their practice on the go.",
      image: "bg-gradient-to-br from-green-500/20 to-teal-400/20",
    },

    {
      title: "VaThala",
      category: "Android",
      description:
        "Empower your health with our VaThala app; Facilitating scheduled connections between qualified healthcare professionals and users in need. Enjoy affordable, at home healthcare, ensuring comfort, tracking and convenience at every step.",
      image: "",
    },
    {
      title: "VaThala Health Expert",
      category: "Android",
      description:
        "Grow your practice on VaThala at ease with the ‘VaThala Health Expert’ app. VaThala partnered doctors use this app to carry out their activities and manage their practice on the go.",
      image: "bg-gradient-to-br from-green-500/20 to-teal-400/20",
    },
    {
      title: "Tamil Bible RC - Arulvakku",
      category: "Cross-Platform",
      description:
        "Arulvakku is the first in the internet media that serves the Tamil speaking Christian community across the world, by giving Holy Bible online, Online Radio and Online Bible Study..",
      image: "bg-gradient-to-br from-yellow-500/20 to-amber-400/20",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 opacity-0 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Our Work
          </h2>
          <p className="text-muted-foreground">
            Explore our portfolio of innovative mobile applications designed and
            developed for various industries.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-white text-foreground hover:bg-secondary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="card group overflow-hidden opacity-0 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`aspect-video rounded-lg mb-4 ${project.image} flex items-center justify-center overflow-hidden relative`}
              >
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="p-3 bg-white rounded-full shadow-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ExternalLink className="h-5 w-5 text-primary" />
                  </div>
                </div>

                <div className="w-20 h-40 bg-white/80 rounded-2xl shadow-md">
                  <div className="w-full h-full p-2 flex flex-col">
                    <div className="h-1/3 border-b border-gray-100 flex justify-center items-center">
                      <div className="w-8 h-2 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="h-2/3 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-secondary"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <span className="text-xs px-2 py-1 bg-secondary rounded-full text-foreground/70">
                    {project.category}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
