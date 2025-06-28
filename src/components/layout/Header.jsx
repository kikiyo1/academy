import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = ({ handlePayment, handleFeatureClick }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Beranda', feature: 'Beranda' },
    { name: 'Kursus', feature: 'Kursus' },
    { name: 'Tentang', feature: 'Tentang' },
    { name: 'Kontak', feature: 'Kontak' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AH</span>
            </div>
            <span className="text-white font-bold text-xl">ACADEMY HADESOLUTION</span>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.feature}
                href="#"
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => handleFeatureClick(link.feature)}
              >
                {link.name}
              </a>
            ))}
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
              onClick={() => handleFeatureClick('Masuk')}
            >
              Masuk
            </Button>
            <Button
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              onClick={handlePayment}
            >
              Daftar Sekarang
            </Button>
          </nav>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-black/90 backdrop-blur-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.feature}
                href="#"
                className="block text-white/80 hover:text-white transition-colors"
                onClick={() => {
                  handleFeatureClick(link.feature);
                  setIsMenuOpen(false);
                }}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <Button
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10"
                onClick={() => {
                  handleFeatureClick('Masuk');
                  setIsMenuOpen(false);
                }}
              >
                Masuk
              </Button>
              <Button
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                onClick={() => {
                  handlePayment();
                  setIsMenuOpen(false);
                }}
              >
                Daftar Sekarang
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;