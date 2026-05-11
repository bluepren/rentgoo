import { Car, Phone, Mail, MapPin, Globe, Camera, MessageCircle, Play } from 'lucide-react';

const footerLinks = {
  perusahaan: [
    { name: 'Tentang Kami', href: '#' },
    { name: 'Karir', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Partner', href: '#' },
  ],
  layanan: [
    { name: 'Rental Mobil', href: '#' },
    { name: 'Rental Motor', href: '#' },
    { name: 'Rental Bulanan', href: '#' },
    { name: 'Rental untuk Event', href: '#' },
  ],
  bantuan: [
    { name: 'FAQ', href: '#' },
    { name: 'Syarat & Ketentuan', href: '#' },
    { name: 'Kebijakan Privasi', href: '#' },
    { name: 'Hubungi Kami', href: '#' },
  ],
};

const socialLinks = [
  { icon: Globe, href: '#', label: 'Facebook' },
  { icon: Camera, href: '#', label: 'Instagram' },
  { icon: MessageCircle, href: '#', label: 'Twitter' },
  { icon: Play, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer id="kontak" className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <a href="#beranda" className="flex items-center gap-2">
              <div className="p-2 bg-orange-500 rounded-xl">
                <Car className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Rent<span className="text-orange-500">Go</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              RentGo adalah platform rental mobil dan motor terpercaya di Indonesia. Kami menyediakan kendaraan berkualitas dengan harga bersaing dan layanan terbaik.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span>Jl. Sudirman No. 123, Jakarta Pusat 10220</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span>0812-3456-7890</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span>info@rentgo.co.id</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-3">
              {footerLinks.perusahaan.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Layanan</h4>
            <ul className="space-y-3">
              {footerLinks.layanan.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Bantuan</h4>
            <ul className="space-y-3">
              {footerLinks.bantuan.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              &copy; 2026 RentGo. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Syarat & Ketentuan</a>
              <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Kebijakan Privasi</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
