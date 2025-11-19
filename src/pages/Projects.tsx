import { useState } from 'react';
import { Building2, Home, Briefcase, Hotel } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: t('projects.filter.all'), icon: null },
    { id: 'residential', label: t('projects.filter.residential'), icon: Home },
    { id: 'professional', label: t('projects.filter.professional'), icon: Briefcase },
    { id: 'commercial', label: t('projects.filter.commercial'), icon: Building2 },
    { id: 'hotel', label: t('projects.filter.hotel'), icon: Hotel },
  ];

  const projects = [
    {
      id: 1,
      title: t('projects.project1.title'),
      description: t('projects.project1.desc'),
      category: 'residential',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      title: t('projects.project2.title'),
      description: t('projects.project2.desc'),
      category: 'professional',
      image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      title: t('projects.project3.title'),
      description: t('projects.project3.desc'),
      category: 'commercial',
      image: 'https://images.pexels.com/photos/2744193/pexels-photo-2744193.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 4,
      title: t('projects.project4.title'),
      description: t('projects.project4.desc'),
      category: 'hotel',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 5,
      title: t('nav.home') === 'Accueil' ? 'Appartement Contemporain - Agadir' : 'شقة عصرية - أكادير',
      description: t('nav.home') === 'Accueil' ? 'Papiers peints modernes et parquet stratifié' : 'ورق جدران عصري وباركيه مصفح',
      category: 'residential',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 6,
      title: t('nav.home') === 'Accueil' ? 'Cabinet Médical - Fès' : 'عيادة طبية - فاس',
      description: t('nav.home') === 'Accueil' ? 'Moquette antibactérienne et moulures épurées' : 'موكيت مضاد للبكتيريا وزخارف بسيطة',
      category: 'professional',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 7,
      title: t('nav.home') === 'Accueil' ? 'Showroom Mode - Casablanca' : 'معرض أزياء - الدار البيضاء',
      description: t('nav.home') === 'Accueil' ? 'Design minimaliste avec vinyle effet béton' : 'تصميم بسيط مع فينيل بتأثير الخرسانة',
      category: 'commercial',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 8,
      title: t('nav.home') === 'Accueil' ? 'Riad Traditionnel - Marrakech' : 'رياض تقليدي - مراكش',
      description: t('nav.home') === 'Accueil' ? 'Moulures marocaines et parquet traditionnel' : 'زخارف مغربية وباركيه تقليدي',
      category: 'hotel',
      image: 'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

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
            {t('projects.title')}
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
            {t('nav.home') === 'Accueil'
              ? 'Découvrez nos réalisations à travers le Maroc'
              : 'اكتشف مشاريعنا في جميع أنحاء المغرب'}
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-spacing-sm md:py-spacing-md bg-black/80 backdrop-blur-md sticky top-navbar-mobile md:top-navbar-laptop z-40 border-b border-gold-500/20">
        <div className="max-w-container-mobile md:max-w-container-laptop xl:max-w-container-desktop mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gold-500 text-black shadow-gold'
                    : 'bg-dark-300/50 border border-gold-500/30 text-white hover:border-gold-500/60'
                }`}
              >
                {filter.icon && <filter.icon className="h-5 w-5" />}
                <span>{filter.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="min-h-[500px] md:min-h-[700px] py-spacing-lg md:py-spacing-xl bg-gradient-to-br from-black via-dark-50 to-black">
        <div className="max-w-container-mobile md:max-w-container-laptop xl:max-w-container-desktop mx-auto px-4 md:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-spacing-md md:gap-spacing-lg"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden border border-gold-500/20 hover:border-gold-500/50 transition-all duration-300"
                >
                  <div className="relative h-portfolio-mobile md:h-portfolio-laptop overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                        <div className="w-16 h-px bg-gold-500 mb-3"></div>
                        <p className="text-white/80 leading-relaxed">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Projects;
