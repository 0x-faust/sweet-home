import { Link } from 'react-router-dom';
import { Palette, Wallpaper, Table2, Layers, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

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
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('products.title')}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('home.about.text')}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {products.map((product, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                    <product.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {product.title}
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-800 font-medium">{product.materials}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-800 font-medium">{product.colors}</p>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
                  >
                    <span>{t('products.cta')}</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
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

export default Products;
