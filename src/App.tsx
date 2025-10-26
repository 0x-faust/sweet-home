import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEO from './components/SEO';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import { useLanguage } from './contexts/LanguageContext';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent = () => {
  const { t } = useLanguage();
  const location = useLocation();

  const getSEO = () => {
    const path = location.pathname;
    const isArabic = t('nav.home') === 'الرئيسية';

    const seoData = {
      '/': {
        title: isArabic ? 'الصفحة الرئيسية' : 'Accueil',
        description: isArabic
          ? 'شركة رائدة في الديكور الداخلي بالمغرب - زخارف، ورق جدران، باركيه، موكيت وفينيل'
          : 'Leader en décoration intérieure au Maroc - Moulures, Papiers Peints, Parquet, Moquette et Vinyle',
        keywords: 'décoration intérieure, moulures, papier peint, parquet PVC, moquette, vinyle, Maroc, Casablanca',
      },
      '/about': {
        title: isArabic ? 'من نحن' : 'À Propos',
        description: isArabic
          ? 'تعرف على شركة SHG للديكور - فريقنا، قيمنا ورؤيتنا في تحويل المساحات'
          : 'Découvrez SHG Décoration - Notre équipe, nos valeurs et notre vision pour transformer vos espaces',
        keywords: 'à propos, équipe, mission, vision, valeurs, SHG Décoration',
      },
      '/products': {
        title: isArabic ? 'المنتجات' : 'Produits',
        description: isArabic
          ? 'اكتشف مجموعتنا الواسعة من منتجات الديكور الداخلي عالية الجودة'
          : 'Découvrez notre large gamme de produits de décoration intérieure haut de gamme',
        keywords: 'produits, moulures décoratives, papiers peints design, parquet PVC, moquette, vinyle',
      },
      '/services': {
        title: isArabic ? 'الخدمات' : 'Services',
        description: isArabic
          ? 'خدماتنا الشاملة: البيع، التركيب، الاستشارة والدعم الفني'
          : 'Nos services complets : vente, installation, conseil et support technique',
        keywords: 'services, installation, conseil design, vente, fourniture, service après-vente',
      },
      '/projects': {
        title: isArabic ? 'المشاريع' : 'Réalisations',
        description: isArabic
          ? 'استعرض مشاريعنا المنجزة في المغرب - سكني، تجاري، مهني وفندقي'
          : 'Découvrez nos réalisations à travers le Maroc - résidentiel, commercial, professionnel et hôtelier',
        keywords: 'réalisations, projets, portfolio, décoration Maroc, projets résidentiels, projets commerciaux',
      },
      '/contact': {
        title: isArabic ? 'اتصل بنا' : 'Contact',
        description: isArabic
          ? 'تواصل معنا للحصول على استشارة مجانية وعرض سعر'
          : 'Contactez-nous pour une consultation gratuite et un devis personnalisé',
        keywords: 'contact, devis gratuit, consultation, adresse, téléphone, email',
      },
      '/faq': {
        title: isArabic ? 'الأسئلة الشائعة' : 'FAQ',
        description: isArabic
          ? 'إجابات على أسئلتك حول خدماتنا، الضمان، التركيب والتوصيل'
          : 'Réponses à vos questions sur nos services, garantie, installation et livraison',
        keywords: 'FAQ, questions fréquentes, aide, support, garantie, délais',
      },
    };

    return seoData[path as keyof typeof seoData] || seoData['/'];
  };

  const seo = getSEO();

  return (
    <>
      <SEO title={seo.title} description={seo.description} keywords={seo.keywords} />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <LanguageProvider>
        <ScrollToTop />
        <AppContent />
      </LanguageProvider>
    </Router>
  );
}

export default App;
