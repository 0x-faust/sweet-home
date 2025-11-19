import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Wallpaper, Table2, Layers, Award, Users, Sparkles, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const Home = () => {
  const { t } = useLanguage();

  const specialties = [
    {
      icon: Palette,
      title: t('home.specialty.moulures'),
      description: t('home.specialty.moulures.desc'),
    },
    {
      icon: Wallpaper,
      title: t('home.specialty.papier'),
      description: t('home.specialty.papier.desc'),
    },
    {
      icon: Table2,
      title: t('home.specialty.parquet'),
      description: t('home.specialty.parquet.desc'),
    },
    {
      icon: Layers,
      title: t('home.specialty.moquette'),
      description: t('home.specialty.moquette.desc'),
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: t('home.why.quality'),
      description: t('home.why.quality.desc'),
    },
    {
      icon: Users,
      title: t('home.why.expertise'),
      description: t('home.why.expertise.desc'),
    },
    {
      icon: Sparkles,
      title: t('home.why.service'),
      description: t('home.why.service.desc'),
    },
    {
      icon: Shield,
      title: t('home.why.guarantee'),
      description: t('home.why.guarantee.desc'),
    },
  ];

  return (
    <div className="pt-navbar-mobile md:pt-navbar-laptop">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-dark-50 to-black">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
        </div>

        {/* Gold accent lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-h1-mobile md:text-h1-laptop font-bold text-white mb-spacing-md md:mb-spacing-lg leading-tight tracking-tight"
          >
            {t('home.hero.title')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-body-mobile md:text-body-laptop text-white/70 mb-spacing-lg md:mb-spacing-xl leading-[1.55] max-w-3xl mx-auto px-4"
          >
            {t('home.hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center space-x-2 md:space-x-3 bg-gold-500 hover:bg-gold-600 text-black min-w-[140px] px-5 md:px-6 h-[50px] rounded-lg text-body-mobile md:text-body-laptop font-semibold transition-all duration-300 shadow-gold hover:shadow-gold-lg"
            >
              <span>{t('home.hero.cta')}</span>
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="min-h-[500px] md:min-h-[700px] py-spacing-lg md:py-spacing-xl bg-black relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
        
        <div className="max-w-container-mobile md:max-w-container-laptop xl:max-w-container-desktop mx-auto px-4 md:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-h2-mobile md:text-h2-laptop font-bold text-center text-white mb-spacing-lg md:mb-spacing-xl"
          >
            {t('home.specialties.title')}
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-spacing-sm md:gap-spacing-md">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-dark-300/50 border border-gold-500/20 hover:border-gold-500/50 w-full md:w-card-laptop h-card-mobile md:h-card-laptop p-5 md:p-6 transition-all duration-300"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mb-spacing-sm md:mb-4 group-hover:bg-gold-500/20 transition-colors">
                  <specialty.icon className="h-7 w-7 md:h-8 md:w-8 text-gold-500" />
                </div>
                <h3 className="text-h3-mobile md:text-h3-laptop font-bold text-white mb-2 md:mb-3">{specialty.title}</h3>
                <p className="text-body-mobile md:text-body-laptop text-white/60 leading-[1.55]">{specialty.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-[500px] md:min-h-[700px] py-spacing-lg md:py-spacing-xl bg-gradient-to-br from-black via-dark-50 to-black relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
        
        <div className="max-w-container-mobile md:max-w-container-laptop xl:max-w-container-desktop mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Interior Design"
                className="w-full h-image-section-mobile md:h-image-section-laptop object-cover opacity-90 border border-gold-500/20"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-h2-mobile md:text-h2-laptop font-bold text-white mb-4 md:mb-6">
                {t('home.about.title')}
              </h2>
              <div className="w-16 md:w-20 h-px bg-gold-500 mb-spacing-md md:mb-6"></div>
              <p className="text-body-mobile md:text-body-laptop text-white/70 leading-[1.55] mb-spacing-md md:mb-6">
                {t('home.about.text')}
              </p>
              <Link
                to="/about"
                className="group inline-flex items-center space-x-2 text-gold-500 hover:text-gold-400 font-semibold text-lg transition-colors"
              >
                <span>{t('common.learnMore')}</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="min-h-[500px] md:min-h-[700px] py-spacing-lg md:py-spacing-xl bg-black relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
        
        <div className="max-w-container-mobile md:max-w-container-laptop xl:max-w-container-desktop mx-auto px-4 md:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12 md:mb-16 lg:mb-20"
          >
            {t('home.why.title')}
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gold-500/10 border border-gold-500/30 rounded-full flex items-center justify-center mx-auto mb-spacing-sm md:mb-4 group-hover:bg-gold-500/20 transition-colors">
                  <item.icon className="h-8 w-8 md:h-10 md:w-10 text-gold-500" />
                </div>
                <h3 className="text-h3-mobile md:text-h3-laptop font-bold text-white mb-2 md:mb-3">{item.title}</h3>
                <p className="text-body-mobile md:text-body-laptop text-white/60 leading-[1.55]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-[200px] md:min-h-[300px] py-spacing-md md:py-spacing-lg bg-gradient-to-br from-black via-dark-50 to-black relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-h2-mobile md:text-h2-laptop font-bold mb-4 md:mb-6 text-white"
          >
            {t('contact.subtitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-mobile md:text-body-laptop text-white/70 mb-spacing-md md:mb-6"
          >
            {t('home.hero.subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center space-x-2 md:space-x-3 bg-gold-500 hover:bg-gold-600 text-black px-6 md:px-10 py-3 md:py-4 rounded-sm text-base md:text-lg font-semibold transition-all duration-300 shadow-gold hover:shadow-gold-lg"
            >
              <span>{t('products.cta')}</span>
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
