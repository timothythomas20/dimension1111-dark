import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Accommodations', path: '/stays' },
  { name: 'Cafe & Dining', path: '/cafe' },
  { name: 'Adventures', path: '/adventures' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const experiences = [
  { name: 'Kheerganga Trek', path: '/adventures' },
  { name: 'Sar Pass Trek', path: '/adventures' },
  { name: 'Bonfire Evenings', path: '/adventures' },
  { name: 'Cafe Menu', path: '/cafe' },
];

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-3xl font-serif font-bold text-cream-100">
                <span className="text-amber-500">11</span>
                <span className="text-cream-300">:</span>
                <span className="text-amber-500">11</span>
              </span>
              <span className="block text-xs text-cream-400 uppercase tracking-[0.2em] font-sans mt-1">
                Dimension
              </span>
            </Link>
            <p className="text-cream-400 text-sm leading-relaxed mb-6">
              A premium homestay, cafe, and adventure experience nestled in the serene Old Kasol, Parvati Valley. Where mountain comfort meets adventure spirit.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/dimension1111kasol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-800 text-cream-400 hover:bg-amber-600 hover:text-dark-900 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/dimension1111kasol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-800 text-cream-400 hover:bg-amber-600 hover:text-dark-900 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-cream-100 font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-cream-400 hover:text-amber-500 text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-cream-100 font-serif text-lg font-semibold mb-6">Experiences</h4>
            <ul className="space-y-3">
              {experiences.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-cream-400 hover:text-amber-500 text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-cream-100 font-serif text-lg font-semibold mt-8 mb-4">Hours</h4>
            <div className="flex items-center gap-2 text-cream-400 text-sm">
              <Clock className="w-4 h-4 text-amber-500" />
              <span>Cafe: 8 AM - 10 PM</span>
            </div>
          </div>

          <div>
            <h4 className="text-cream-100 font-serif text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+918580731659"
                  className="flex items-start gap-3 text-cream-400 hover:text-amber-500 text-sm transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-amber-500 flex-shrink-0" />
                  <span>+91 85807 31659</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact.dimension1111@gmail.com"
                  className="flex items-start gap-3 text-cream-400 hover:text-amber-500 text-sm transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-amber-500 flex-shrink-0" />
                  <span>contact.dimension1111@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=32.0098,77.3150"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-cream-400 hover:text-amber-500 text-sm transition-colors duration-300"
                >
                  <MapPin className="w-4 h-4 mt-0.5 text-amber-500 flex-shrink-0" />
                  <span>Near Gungun Parking, Old Kasol, Himachal Pradesh 175105</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-dark-800">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-cream-500 text-sm">
              &copy; {new Date().getFullYear()} Dimension 11:11. All rights reserved.
            </p>
            <p className="text-cream-500 text-sm">
              Made with love in the Himalayas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
