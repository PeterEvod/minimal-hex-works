
import Navbar from "@/components/Navbar";
import { ArrowUpRight, Layout, Monitor, Smartphone } from "lucide-react";
import { useState } from "react";

type Category = "all" | "web" | "mobile" | "branding";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  client: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modernist E-commerce Platform",
    category: "web",
    description: "A premium shopping experience for a luxury fashion brand",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    client: "Fashion House Co."
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "mobile",
    description: "Next-generation banking experience for digital natives",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    client: "FinTech Innovation"
  },
  {
    id: 3,
    title: "Tech Startup Branding",
    category: "branding",
    description: "Complete brand identity for an AI startup",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    client: "AI Solutions"
  },
  {
    id: 4,
    title: "Healthcare Dashboard",
    category: "web",
    description: "Patient management system with intuitive interface",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    client: "MedTech Inc."
  },
  {
    id: 5,
    title: "Social Platform Design",
    category: "mobile",
    description: "Community-driven platform for creative professionals",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    client: "Creative Network"
  }
];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const filteredProjects = projects.filter(project =>
    selectedCategory === "all" ? true : project.category === selectedCategory
  );

  const categories: { value: Category; label: string; icon: React.ReactNode }[] = [
    { value: "all", label: "All Work", icon: <Layout className="w-4 h-4" /> },
    { value: "web", label: "Web Design", icon: <Monitor className="w-4 h-4" /> },
    { value: "mobile", label: "Mobile Apps", icon: <Smartphone className="w-4 h-4" /> },
    { value: "branding", label: "Branding", icon: <Layout className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight animate-slideUp">
            Our Work
          </h1>
          <p className="mt-6 text-lg text-black/70 max-w-2xl animate-fadeIn">
            A collection of our finest work, showcasing our expertise in digital design, development, and branding.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-t border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.value
                    ? "bg-black text-white"
                    : "bg-gray-100 text-black/70 hover:bg-gray-200"
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg aspect-video bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <p className="text-sm font-medium text-white/70">{project.client}</p>
                      <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
                      <p className="mt-2 text-white/90">{project.description}</p>
                      <a href="#" className="inline-flex items-center mt-4 text-sm font-medium hover:underline">
                        View Case Study <ArrowUpRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Start Your Project</h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's create something amazing together.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center mt-8 px-8 py-4 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
          >
            Get in Touch <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-black/70">
              © 2024 Studio. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-black/70 hover:text-black transition-colors">Instagram</a>
              <a href="#" className="text-sm text-black/70 hover:text-black transition-colors">Twitter</a>
              <a href="#" className="text-sm text-black/70 hover:text-black transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Work;
