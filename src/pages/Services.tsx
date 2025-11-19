import { ShoppingBag, Wrench, Lightbulb, HeadphonesIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: ShoppingBag,
      title: t('services.sale.title'),
      description: t('services.sale.desc'),
      image: 'https://images.pexels.com/photos/6585608/pexels-photo-6585608.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Wrench,
      title: t('services.installation.title'),
      description: t('services.installation.desc'),
      image: 'https://images.pexels.com/photos/5691607/pexels-photo-5691607.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Lightbulb,
      title: t('services.consulting.title'),
      description: t('services.consulting.desc'),
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: HeadphonesIcon,
      title: t('services.aftersales.title'),
      description: t('services.aftersales.desc'),
      image: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="pt-navbar-mobile md:pt-navbar-laptop">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] py-spacing-xl md:py-spacing-2xl bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
        
        <div className="relative z-10 max-w-container-mobile md:max-w-container-laptop xl:max-w-container-desktop mx-auto px-4 md:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-h1-mobile md:text-h1-laptop font-bold text-white mb-spacing-md md:mb-spacing-lg"
          >
            {t('services.title')}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 md:w-24 h-px bg-gold-500 mx-auto mb-spacing-md md:mb-spacing-lg"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-body-mobile md:text-body-laptop text-white/70 max-w-3xl mx-auto leading-[1.55] px-4"
          >
            {t('about.mission.text')}
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="min-h-[500px] md:min-h-[700px] py-spacing-lg md:py-spacing-xl bg-gradient-to-br from-black via-dark-50 to-black relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
        
        <div className="max-w-container-mobile md:max-w-container-laptop xl:max-w-container-desktop mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-spacing-md md:gap-spacing-lg">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-dark-300/50 border border-gold-500/20 hover:border-gold-500/50 overflow-hidden transition-all duration-300"
              >
                <div className="relative h-image-section-mobile md:h-image-section-laptop overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-80"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="w-14 h-14 bg-gold-500/20 border border-gold-500/30 backdrop-blur-sm flex items-center justify-center">
                      <service.icon className="h-7 w-7 text-gold-500" />
                    </div>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-h2-mobile md:text-h2-laptop font-bold text-white mb-3 md:mb-4">{service.title}</h3>
                  <div className="w-12 md:w-16 h-px bg-gold-500 mb-3 md:mb-4"></div>
                  <p className="text-body-mobile md:text-body-laptop text-white/70 leading-[1.55]">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="min-h-[200px] md:min-h-[300px] py-spacing-md md:py-spacing-lg bg-black relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
        
        <div className="max-w-container-mobile md:max-w-container-laptop xl:max-w-container-desktop mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-dark-300/50 border border-gold-500/20 p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-12">
              {t('home.why.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="text-6xl font-bold gold-text mb-4">15+</div>
                <p className="text-white/70 text-lg">
                  {t('nav.home') === 'Accueil' ? 'Années d\'expérience' : 'سنوات من الخبرة'}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-6xl font-bold gold-text mb-4">500+</div>
                <p className="text-white/70 text-lg">
                  {t('nav.home') === 'Accueil' ? 'Projets réalisés' : 'مشاريع منجزة'}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="text-6xl font-bold gold-text mb-4">100%</div>
                <p className="text-white/70 text-lg">
                  {t('nav.home') === 'Accueil' ? 'Satisfaction client' : 'رضا العملاء'}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
