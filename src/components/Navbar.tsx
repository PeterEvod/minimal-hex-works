
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold tracking-tight">
            studio.
          </a>
          
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          <div className={`lg:flex items-center space-x-8 ${isMenuOpen ? 'absolute top-full left-0 right-0 bg-white/80 backdrop-blur-md p-6 space-y-4 lg:space-y-0' : 'hidden'}`}>
            <a href="#work" className="text-sm font-medium hover:text-black/70 transition-colors">Work</a>
            <a href="#services" className="text-sm font-medium hover:text-black/70 transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium hover:text-black/70 transition-colors">About</a>
            <a href="#contact" className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-black/90 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
