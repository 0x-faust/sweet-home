import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-black border-t border-gold-500/20 text-white min-h-footer-height">
      <div className="max-w-container-mobile md:max-w-container-laptop xl:max-w-container-desktop mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-spacing-lg md:gap-spacing-xl">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[30px] md:text-[48px] font-bold gold-text tracking-tight mb-3 md:mb-4 block leading-none">
                DARKYN
              </span>
              <p className="text-[15px] md:text-[16px] text-white/60 leading-[1.55]">
                {t('footer.about.text')}
              </p>
            </motion.div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[18px] md:text-[20px] font-semibold mb-4 md:mb-6 text-gold-500"
            >
              {t('footer.links')}
            </motion.h3>
            <ul className="space-y-spacing-sm md:space-y-2">
              {[
                { path: '/', label: t('nav.home') },
                { path: '/about', label: t('nav.about') },
                { path: '/products', label: t('nav.products') },
                { path: '/services', label: t('nav.services') },
                { path: '/projects', label: t('nav.projects') },
                { path: '/faq', label: t('nav.faq') },
              ].map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                >
                  <Link
                            to={link.path}
                            className="text-white/60 hover:text-gold-500 transition-colors text-[15px] md:text-[16px] duration-300"
                          >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-gold-500"
            >
              {t('footer.contact')}
            </motion.h3>
            <ul className="space-y-3 md:space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start space-x-3"
              >
                <MapPin className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">
                  Casablanca, Maroc
                </span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex items-center space-x-3"
              >
                <Phone className="h-5 w-5 text-gold-500 flex-shrink-0" />
                <span className="text-white/60 text-sm">+212 6XX-XXXXXX</span>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center space-x-3"
              >
                <Mail className="h-5 w-5 text-gold-500 flex-shrink-0" />
                <span className="text-white/60 text-sm">contact@darkyn.ma</span>
              </motion.li>
            </ul>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-gold-500"
            >
              {t('footer.follow')}
            </motion.h3>
            <div className="flex space-x-3 md:space-x-4">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gold-500/30 hover:border-gold-500 bg-dark-300/50 hover:bg-dark-300 flex items-center justify-center transition-all duration-300"
              >
                <Facebook className="h-4 w-4 md:h-5 md:w-5 text-gold-500" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gold-500/30 hover:border-gold-500 bg-dark-300/50 hover:bg-dark-300 flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="h-4 w-4 md:h-5 md:w-5 text-gold-500" />
              </motion.a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gold-500/10 text-center"
        >
          <p className="text-white/40 text-xs md:text-sm">{t('footer.rights')}</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
