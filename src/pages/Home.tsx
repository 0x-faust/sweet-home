import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Wallpaper, Table2, Layers, Award, Users, Sparkles, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

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
    <div className="pt-20">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            {t('home.hero.subtitle')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            <span>{t('home.hero.cta')}</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            {t('home.specialties.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors">
                  <specialty.icon className="h-8 w-8 text-amber-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{specialty.title}</h3>
                <p className="text-gray-600 leading-relaxed">{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Interior Design"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('home.about.title')}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {t('home.about.text')}
              </p>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-semibold text-lg"
              >
                <span>{t('common.learnMore')}</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            {t('home.why.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <item.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('contact.subtitle')}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t('home.hero.subtitle')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            <span>{t('products.cta')}</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
