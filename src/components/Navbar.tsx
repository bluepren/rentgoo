import { useState, useEffect } from 'react';
import { Menu, X, Car, Phone } from 'lucide-react';

const navLinks = [
  { name: 'Beranda', href: '#beranda' },
  { name: 'Kendaraan', href: '#kendaraan' },
  { name: 'Cara Kerja', href: '#cara-kerja' },
  { name: 'Testimoni', href: '#testimoni' },
  { name: 'Kontak', href: '#kontak' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-xl transition-colors ${scrolled ? 'bg-orange-500' : 'bg-white/20 backdrop-blur-sm'}`}>
              <Car className="w-6 h-6 text-white" />
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              Rent<span className="text-orange-500">Go</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+6281234567890" className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              scrolled ? 'text-gray-700' : 'text-white/90'
            }`}>
              <Phone className="w-4 h-4" />
              0812-3456-7890
            </a>
            <a
              href="#kendaraan"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all hover:shadow-lg hover:shadow-orange-500/25 active:scale-95"
            >
              Pesan Sekarang
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white border-t shadow-xl px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg text-sm font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#kendaraan"
            onClick={() => setIsOpen(false)}
            className="block mt-3 bg-orange-500 text-white text-center px-6 py-3 rounded-xl text-sm font-semibold"
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
}
