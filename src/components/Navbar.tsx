import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/products', label: t('nav.products') },
    { path: '/services', label: t('nav.services') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/contact', label: t('nav.contact') },
    { path: '/faq', label: t('nav.faq') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gold-500/20">
      <div className="max-w-container-mobile md:max-w-container-laptop xl:max-w-container-desktop mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-navbar-mobile md:h-navbar-laptop">
          <Link to="/" className="flex items-center space-x-3 group" aria-label="DARKYN Home">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-[30px] md:text-[48px] font-bold gold-text tracking-tight leading-none">
                DARKYN
              </span>
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center space-x-6 md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                aria-current={isActive(link.path) ? 'page' : undefined}
                className={`relative text-[14px] md:text-[17px] font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-gold-500'
                    : 'text-white/80 hover:text-gold-500'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-500"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    aria-hidden="true"
                  />
                )}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gold-500/30 hover:border-gold-500/60 bg-dark-300/50 hover:bg-dark-300 transition-all duration-300"
            >
              <Languages className="h-4 w-4 text-gold-500" />
              <span className="text-sm font-medium text-white">
                {language === 'fr' ? 'AR' : 'FR'}
              </span>
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-gold-500 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-gold-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-base font-medium py-2 transition-colors ${
                    isActive(link.path)
                      ? 'text-gold-500'
                      : 'text-white/80 hover:text-gold-500'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
                className="flex items-center space-x-2 w-full px-4 py-3 rounded-lg border border-gold-500/30 hover:border-gold-500/60 bg-dark-300/50 transition-all"
              >
                <Languages className="h-5 w-5 text-gold-500" />
                <span className="text-sm font-medium text-white">
                  {language === 'fr' ? 'العربية' : 'Français'}
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
