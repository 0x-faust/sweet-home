import { Link } from 'react-router-dom';
import { Palette, Wallpaper, Table2, Layers, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const Products = () => {
  const { t } = useLanguage();

  const products = [
    {
      icon: Palette,
      title: t('products.moulures.title'),
      description: t('products.moulures.desc'),
      materials: t('products.moulures.materials'),
      colors: t('products.moulures.colors'),
      image: 'https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Wallpaper,
      title: t('products.papier.title'),
      description: t('products.papier.desc'),
      materials: t('products.papier.materials'),
      colors: t('products.papier.colors'),
      image: 'https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Table2,
      title: t('products.parquet.title'),
      description: t('products.parquet.desc'),
      materials: t('products.parquet.materials'),
      colors: t('products.parquet.colors'),
      image: 'https://images.pexels.com/photos/7031705/pexels-photo-7031705.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Layers,
      title: t('products.moquette.title'),
      description: t('products.moquette.desc'),
      materials: t('products.moquette.materials'),
      colors: t('products.moquette.colors'),
      image: 'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=800',
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
            {t('products.title')}
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
            {t('home.about.text')}
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="min-h-[500px] md:min-h-[700px] py-spacing-lg md:py-spacing-xl bg-gradient-to-br from-black via-dark-50 to-black relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
        
        <div className="max-w-container-mobile md:max-w-container-laptop xl:max-w-container-desktop mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-spacing-md md:gap-spacing-lg">
            {products.map((product, index) => (
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
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-80"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-gold-500/20 border border-gold-500/30 flex items-center justify-center backdrop-blur-sm">
                    <product.icon className="h-6 w-6 text-gold-500" />
                  </div>
                </div>
                
                <div className="p-5 md:p-6">
                  <h2 className="text-h2-mobile md:text-h2-laptop font-bold text-white mb-3 md:mb-4">
                    {product.title}
                  </h2>
                  <div className="w-12 md:w-16 h-px bg-gold-500 mb-3 md:mb-4"></div>
                  <p className="text-body-mobile md:text-body-laptop text-white/70 mb-4 md:mb-6 leading-[1.55]">
                    {product.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="bg-black/50 border border-gold-500/10 p-3">
                      <p className="text-white/80 text-sm font-medium">{product.materials}</p>
                    </div>
                    <div className="bg-black/50 border border-gold-500/10 p-3">
                      <p className="text-white/80 text-sm font-medium">{product.colors}</p>
                    </div>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="group/btn inline-flex items-center space-x-2 bg-gold-500 hover:bg-gold-600 text-black min-w-[140px] px-5 md:px-6 h-[50px] rounded-lg text-body-mobile md:text-body-laptop font-semibold transition-all duration-300 shadow-gold hover:shadow-gold-lg"
                  >
                    <span>{t('products.cta')}</span>
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-[200px] md:min-h-[300px] py-spacing-md md:py-spacing-lg bg-black relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
        
        <div className="max-w-container-mobile md:max-w-container-laptop xl:max-w-container-desktop mx-auto px-4 md:px-6 lg:px-8 text-center">
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
              className="group inline-flex items-center space-x-3 bg-gold-500 hover:bg-gold-600 text-black px-10 py-4 rounded-sm text-lg font-semibold transition-all duration-300 shadow-gold hover:shadow-gold-lg"
            >
              <span>{t('products.cta')}</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
