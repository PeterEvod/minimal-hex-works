
import Navbar from "@/components/Navbar";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight animate-slideUp">
              We craft digital experiences that inspire and elevate brands
            </h1>
            <p className="mt-6 text-lg text-black/70 max-w-2xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              A design-driven studio creating premium digital solutions that help businesses stand out and connect with their audience.
            </p>
            <a 
              href="#work" 
              className="inline-flex items-center mt-8 px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-black/90 transition-colors animate-scaleUp"
              style={{ animationDelay: '0.4s' }}
            >
              View our work <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold">Selected Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-lg aspect-video bg-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-semibold">Project {item}</h3>
                    <p className="mt-2 text-sm text-white/80">Brand Identity & Web Design</p>
                    <a href="#" className="inline-flex items-center mt-4 text-sm font-medium hover:underline">
                      View Case Study <ArrowUpRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {['Brand Strategy', 'Digital Design', 'Development'].map((service) => (
              <div key={service} className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-semibold">{service}</h3>
                <p className="mt-4 text-black/70">
                  We help brands stand out through strategic thinking and premium execution.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold">About Us</h2>
            <p className="mt-6 text-white/80 text-lg">
              We're a team of designers, developers, and strategists who are passionate about creating digital experiences that make a difference. Our approach combines creativity with technical expertise to deliver solutions that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Start a Project</h2>
            <p className="mt-6 text-black/70">
              Have a project in mind? We'd love to hear about it. Let's discuss how we can help bring your ideas to life.
            </p>
            <a 
              href="mailto:hello@studio.com" 
              className="inline-flex items-center mt-8 px-8 py-4 bg-black text-white rounded-full text-sm font-medium hover:bg-black/90 transition-colors"
            >
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
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

export default Index;
