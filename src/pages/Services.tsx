import { ShoppingBag, Wrench, Lightbulb, HeadphonesIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

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
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('about.mission.text')}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="w-14 h-14 bg-amber-600 rounded-lg flex items-center justify-center shadow-lg">
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('home.why.title')}
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('about.mission.text')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-5xl font-bold text-amber-600 mb-2">15+</div>
                <p className="text-gray-600 text-lg">
                  {t('nav.home') === 'Accueil' ? 'Années d\'expérience' : 'سنوات من الخبرة'}
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-amber-600 mb-2">500+</div>
                <p className="text-gray-600 text-lg">
                  {t('nav.home') === 'Accueil' ? 'Projets réalisés' : 'مشاريع منجزة'}
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-amber-600 mb-2">100%</div>
                <p className="text-gray-600 text-lg">
                  {t('nav.home') === 'Accueil' ? 'Satisfaction client' : 'رضا العملاء'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
