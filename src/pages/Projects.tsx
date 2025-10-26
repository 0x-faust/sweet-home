import { useState } from 'react';
import { Building2, Home, Briefcase, Hotel } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

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
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('projects.title')}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('nav.home') === 'Accueil'
              ? 'Découvrez nos réalisations à travers le Maroc'
              : 'اكتشف مشاريعنا في جميع أنحاء المغرب'}
          </p>
        </div>
      </section>

      <section className="py-12 bg-white sticky top-20 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeFilter === filter.id
                    ? 'bg-amber-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.icon && <filter.icon className="h-5 w-5" />}
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
