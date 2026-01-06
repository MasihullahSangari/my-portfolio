import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-dark/90 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-primary font-mono text-2xl font-bold hover:opacity-80 transition-opacity"
        >
          O
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ol className="flex items-center gap-6">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-mono text-sm text-slate-light hover:text-primary transition-colors"
                >
                  <span className="text-primary">0{index + 1}.</span> {link.name}
                </a>
              </li>
            ))}
          </ol>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-primary text-primary font-mono text-sm rounded hover:bg-green-tint transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-navy-dark/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <ol className="flex flex-col items-center gap-6">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-mono text-lg text-slate-light hover:text-primary transition-colors"
                >
                  <span className="text-primary block text-center mb-1">0{index + 1}.</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ol>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-primary text-primary font-mono text-lg rounded hover:bg-green-tint transition-colors"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
