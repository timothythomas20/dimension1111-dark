import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Stays', path: '/stays' },
  { name: 'Cafe', path: '/cafe' },
  { name: 'Adventures', path: '/adventures' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hello! I would like to book a stay at Dimension 11:11.');
    window.open(`https://wa.me/918580731659?text=${message}`, '_blank');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-dark-900/95 backdrop-blur-md shadow-dark'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-2xl md:text-3xl font-serif font-bold text-cream-100 tracking-wider">
                <span className="text-amber-500">11</span>
                <span className="text-cream-300">:</span>
                <span className="text-amber-500">11</span>
              </span>
              <span className="hidden sm:block text-xs text-cream-400 uppercase tracking-[0.15em] font-sans border-l border-dark-600 pl-3 ml-1">
                Dimension
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-sans uppercase tracking-wider transition-colors duration-300 relative group ${
                    location.pathname === link.path
                      ? 'text-amber-500'
                      : 'text-cream-300 hover:text-amber-500'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-amber-500 transition-all duration-300 ${
                      location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <button
                onClick={openWhatsApp}
                className="hidden md:flex btn-primary text-sm py-3 px-6"
              >
                Book Now
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 text-cream-200 hover:text-amber-500 transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-dark-950/95 backdrop-blur-lg transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          className={`absolute inset-y-0 right-0 w-full max-w-sm bg-dark-900 shadow-dark transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex items-center justify-between mb-12">
              <span className="text-2xl font-serif font-bold text-cream-100">
                <span className="text-amber-500">11</span>
                <span className="text-cream-300">:</span>
                <span className="text-amber-500">11</span>
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-cream-300 hover:text-amber-500 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-2xl font-serif py-3 transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  } ${
                    location.pathname === link.path
                      ? 'text-amber-500'
                      : 'text-cream-200 hover:text-amber-500'
                  }`}
                  style={{ transitionDelay: `${index * 50 + 100}ms` }}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-8 border-t border-dark-700">
              <button
                onClick={openWhatsApp}
                className="btn-primary w-full text-center"
              >
                Book on WhatsApp
              </button>

              <div className="flex items-center justify-center gap-6 mt-6">
                <a
                  href="https://instagram.com/dimension1111kasol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-400 hover:text-amber-500 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://facebook.com/dimension1111kasol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-400 hover:text-amber-500 transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
