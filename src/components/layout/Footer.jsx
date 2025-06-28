import React from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = ({ handleFeatureClick }) => {
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, feature: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, feature: 'Twitter' },
    { icon: <Instagram className="h-5 w-5" />, feature: 'Instagram' },
    { icon: <Linkedin className="h-5 w-5" />, feature: 'LinkedIn' },
  ];

  const footerLinks = {
    Produk: ['Kursus Online', 'Bootcamp', 'Sertifikasi', 'Corporate Training'],
    Perusahaan: ['Tentang Kami', 'Karir', 'Blog', 'Press'],
    Dukungan: ['Help Center', 'Kontak', 'Privacy Policy', 'Terms of Service'],
  };

  return (
    <footer className="bg-black/20 backdrop-blur-lg border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AH</span>
              </div>
              <span className="text-white font-bold text-xl">ACADEMY HADESOLUTION</span>
            </div>
            <p className="text-white/60">
              Platform pembelajaran online terdepan di Indonesia dengan ribuan kursus berkualitas.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Button
                  key={link.feature}
                  size="icon"
                  variant="ghost"
                  className="text-white/60 hover:text-white hover:bg-white/10"
                  onClick={() => handleFeatureClick(link.feature)}
                >
                  {link.icon}
                </Button>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <span className="text-white font-semibold text-lg mb-4 block">{title}</span>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-white transition-colors"
                      onClick={() => handleFeatureClick(link)}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2025 ACADEMY HADESOLUTION. Semua hak dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;