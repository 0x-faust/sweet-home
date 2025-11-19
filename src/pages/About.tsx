import { Target, Eye, Heart, Award, Lightbulb } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Award,
      title: t('about.values.excellence'),
      description: t('about.values.excellence.desc'),
    },
    {
      icon: Heart,
      title: t('about.values.integrity'),
      description: t('about.values.integrity.desc'),
    },
    {
      icon: Lightbulb,
      title: t('about.values.innovation'),
      description: t('about.values.innovation.desc'),
    },
  ];

  return (
    <div className="pt-navbar-mobile md:pt-navbar-laptop">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] py-spacing-xl md:py-spacing-2xl bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-dark-50 to-black"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
        
        <div className="relative z-10 max-w-container-mobile md:max-w-container-laptop xl:max-w-container-desktop mx-auto px-4 md:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-h1-mobile md:text-h1-laptop font-bold text-center text-white mb-spacing-md md:mb-spacing-lg"
          >
            {t('about.title')}
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
            className="text-body-mobile md:text-body-laptop text-white/70 text-center max-w-3xl mx-auto leading-[1.55] px-4"
          >
            {t('home.about.text')}
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="min-h-[500px] md:min-h-[700px] py-spacing-lg md:py-spacing-xl bg-gradient-to-br from-black via-dark-50 to-black relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
        
        <div className="max-w-container-mobile md:max-w-container-laptop xl:max-w-container-desktop mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-start space-x-4 md:space-x-6"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                <Target className="h-6 w-6 md:h-8 md:w-8 text-gold-500" />
              </div>
              <div>
                <h2 className="text-h2-mobile md:text-h2-laptop font-bold text-white mb-3 md:mb-4">
                  {t('about.mission.title')}
                </h2>
                <div className="w-12 md:w-16 h-px bg-gold-500 mb-4 md:mb-6"></div>
                <p className="text-body-mobile md:text-body-laptop text-white/70 leading-[1.55]">
                  {t('about.mission.text')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-start space-x-6"
            >
              <div className="w-16 h-16 bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                <Eye className="h-8 w-8 text-gold-500" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  {t('about.vision.title')}
                </h2>
                <div className="w-16 h-px bg-gold-500 mb-6"></div>
                <p className="text-lg text-white/70 leading-relaxed">
                  {t('about.vision.text')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
            {t('about.values.title')}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-spacing-md md:gap-spacing-lg">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-dark-300/50 border border-gold-500/20 hover:border-gold-500/50 p-5 md:p-6 transition-all duration-300"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mb-spacing-sm md:mb-4">
                  <value.icon className="h-7 w-7 md:h-8 md:w-8 text-gold-500" />
                </div>
                <h3 className="text-h3-mobile md:text-h3-laptop font-bold text-white mb-2 md:mb-3">{value.title}</h3>
                <div className="w-10 md:w-12 h-px bg-gold-500 mb-3 md:mb-4"></div>
                <p className="text-body-mobile md:text-body-laptop text-white/60 leading-[1.55]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="min-h-[200px] md:min-h-[300px] py-spacing-md md:py-spacing-lg bg-gradient-to-br from-black via-dark-50 to-black relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
        
        <div className="max-w-container-mobile md:max-w-container-laptop xl:max-w-container-desktop mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-16 md:w-24 h-px bg-gold-500 mx-auto mb-spacing-md md:mb-spacing-lg"></div>
            <p className="text-h2-mobile md:text-h2-laptop text-white/80 leading-[1.55] italic mb-spacing-md md:mb-spacing-lg px-4">
              "Chaque espace raconte une histoire. Notre mission est de donner vie à la vôtre."
            </p>
            <div className="w-24 h-px bg-gold-500 mx-auto"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
