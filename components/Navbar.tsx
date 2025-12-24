import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#trust' },
    { name: 'Coverage', href: '#local' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-2 sm:py-3'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="z-50 group">
            <img
              src="/logo.png"
              alt="Oxford 365 Recovery"
              className="h-7 sm:h-8 md:h-9 w-auto transition-all duration-300"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-navy/80 hover:text-amber transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <motion.a
              href="tel:07415535213"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-amber text-navy px-5 py-2.5 font-bold text-sm rounded hover:bg-amber-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>07415535213</span>
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-3 sm:gap-4 z-50">
            <a
              href="tel:07415535213"
              className={`flex items-center justify-center w-11 h-11 rounded bg-amber text-navy shadow-md ${isScrolled ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-navy focus:outline-none w-11 h-11 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-0 left-0 w-full bg-navy flex flex-col items-center justify-center space-y-8 md:hidden overflow-hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl text-white font-light hover:text-amber transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:"
                className="mt-8 flex items-center gap-3 bg-amber text-navy px-8 py-4 font-bold text-lg rounded min-h-[44px]"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;