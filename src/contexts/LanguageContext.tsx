import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.products': 'Produits',
    'nav.services': 'Services',
    'nav.projects': 'Réalisations',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',

    // Home
    'home.hero.title': 'Excellence en Décoration Intérieure',
    'home.hero.subtitle': 'Transformez vos espaces avec nos solutions de décoration haut de gamme',
    'home.hero.cta': 'Découvrir nos services',
    'home.specialties.title': 'Nos Spécialités',
    'home.specialty.moulures': 'Moulures',
    'home.specialty.moulures.desc': 'Ornements décoratifs élégants pour sublimer vos murs et plafonds',
    'home.specialty.papier': 'Papier Peints',
    'home.specialty.papier.desc': 'Large gamme de motifs et textures pour personnaliser vos intérieurs',
    'home.specialty.parquet': 'Parquet PVC',
    'home.specialty.parquet.desc': 'Revêtements de sol résistants et esthétiques',
    'home.specialty.moquette': 'Moquette & Vinyle',
    'home.specialty.moquette.desc': 'Solutions de sol confortables et durables',
    'home.about.title': 'Qui Sommes-Nous ?',
    'home.about.text': 'Nous sommes une entreprise leader dans le domaine de la décoration intérieure, spécialisée dans les moulures, papiers peints, parquets PVC, moquettes et vinyles. Avec notre expertise et notre passion pour l\'excellence, nous transformons vos espaces en lieux uniques et raffinés.',
    'home.why.title': 'Pourquoi Nous Choisir ?',
    'home.why.quality': 'Qualité Premium',
    'home.why.quality.desc': 'Matériaux de haute qualité importés et sélectionnés',
    'home.why.expertise': 'Expertise Professionnelle',
    'home.why.expertise.desc': 'Équipe qualifiée avec des années d\'expérience',
    'home.why.service': 'Service Personnalisé',
    'home.why.service.desc': 'Accompagnement sur mesure pour chaque projet',
    'home.why.guarantee': 'Garantie & Suivi',
    'home.why.guarantee.desc': 'Service après-vente et garantie sur nos installations',

    // About
    'about.title': 'À Propos de Nous',
    'about.mission.title': 'Notre Mission',
    'about.mission.text': 'Offrir des solutions de décoration intérieure innovantes et de haute qualité, en accompagnant nos clients à chaque étape de leur projet pour créer des espaces qui reflètent leur personnalité et leurs aspirations.',
    'about.vision.title': 'Notre Vision',
    'about.vision.text': 'Être la référence incontournable en matière de décoration intérieure au Maroc, reconnue pour notre excellence, notre créativité et notre engagement envers la satisfaction client.',
    'about.values.title': 'Nos Valeurs',
    'about.values.excellence': 'Excellence',
    'about.values.excellence.desc': 'Nous visons la perfection dans chaque projet',
    'about.values.integrity': 'Intégrité',
    'about.values.integrity.desc': 'Transparence et honnêteté dans nos relations',
    'about.values.innovation': 'Innovation',
    'about.values.innovation.desc': 'Toujours à la pointe des tendances',
    'about.team.title': 'Notre Équipe',

    // Products
    'products.title': 'Nos Produits',
    'products.moulures.title': 'Moulures Décoratives',
    'products.moulures.desc': 'Nos moulures en polyuréthane et plâtre offrent une touche d\'élégance intemporelle à vos intérieurs. Disponibles dans une variété de styles, du classique au contemporain.',
    'products.moulures.materials': 'Matériaux : Polyuréthane, Plâtre, PVC',
    'products.moulures.colors': 'Couleurs : Blanc, Doré, Personnalisable',
    'products.papier.title': 'Papier Peints Design',
    'products.papier.desc': 'Collection exclusive de papiers peints pour tous les styles : moderne, classique, minimaliste. Qualité premium et installation facile.',
    'products.papier.materials': 'Matériaux : Vinyle, Intissé, Textile',
    'products.papier.colors': 'Motifs : Unis, Géométriques, Floraux, Texturés',
    'products.parquet.title': 'Parquet PVC',
    'products.parquet.desc': 'Parquet PVC résistant et facile à entretenir, idéal pour toutes les pièces. Imitation bois parfaite pour un rendu authentique.',
    'products.parquet.materials': 'Matériaux : PVC haute densité, couche d\'usure renforcée',
    'products.parquet.colors': 'Finitions : Chêne, Noyer, Gris clair, Marron foncé',
    'products.moquette.title': 'Moquette & Vinyle',
    'products.moquette.desc': 'Solutions de revêtement de sol confortables et acoustiques. Moquettes et vinyles adaptés aux espaces résidentiels et commerciaux.',
    'products.moquette.materials': 'Matériaux : Laine, Synthétique, Vinyle',
    'products.moquette.colors': 'Textures : Bouclé, Velours, Uni, Chiné',
    'products.cta': 'Demander un Devis',

    // Services
    'services.title': 'Nos Services',
    'services.sale.title': 'Vente & Fourniture',
    'services.sale.desc': 'Large catalogue de produits de décoration intérieure de qualité premium, importés et sélectionnés avec soin.',
    'services.installation.title': 'Installation Professionnelle',
    'services.installation.desc': 'Équipe d\'installateurs qualifiés pour une pose parfaite et durable de tous nos produits.',
    'services.consulting.title': 'Conseil & Design',
    'services.consulting.desc': 'Accompagnement personnalisé pour choisir les meilleurs produits adaptés à votre projet et votre budget.',
    'services.aftersales.title': 'Service Après-Vente',
    'services.aftersales.desc': 'Garantie sur nos installations et support technique pour assurer votre satisfaction à long terme.',

    // Projects
    'projects.title': 'Nos Réalisations',
    'projects.filter.all': 'Tous',
    'projects.filter.residential': 'Résidentiel',
    'projects.filter.professional': 'Professionnel',
    'projects.filter.commercial': 'Commercial',
    'projects.filter.hotel': 'Hôtelier',
    'projects.project1.title': 'Villa Moderne - Casablanca',
    'projects.project1.desc': 'Décoration complète avec moulures et parquet PVC effet chêne',
    'projects.project2.title': 'Bureau d\'Entreprise - Rabat',
    'projects.project2.desc': 'Papier peint design et moquette acoustique',
    'projects.project3.title': 'Restaurant Luxe - Marrakech',
    'projects.project3.desc': 'Moulures dorées et revêtement vinyle haute résistance',
    'projects.project4.title': 'Hôtel Boutique - Tanger',
    'projects.project4.desc': 'Papiers peints texturés et parquet PVC dans toutes les chambres',

    // Contact
    'contact.title': 'Contactez-Nous',
    'contact.subtitle': 'Demandez votre devis gratuit',
    'contact.form.name': 'Nom complet',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Téléphone',
    'contact.form.service': 'Service souhaité',
    'contact.form.service.select': 'Sélectionnez un service',
    'contact.form.service.moulures': 'Moulures',
    'contact.form.service.papier': 'Papier Peints',
    'contact.form.service.parquet': 'Parquet PVC',
    'contact.form.service.moquette': 'Moquette & Vinyle',
    'contact.form.service.consulting': 'Consultation',
    'contact.form.message': 'Votre message',
    'contact.form.submit': 'Envoyer',
    'contact.info.title': 'Informations de Contact',
    'contact.info.address': 'Adresse',
    'contact.info.phone': 'Téléphone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Horaires',
    'contact.info.hours.value': 'Lun - Sam : 9h - 18h',

    // FAQ
    'faq.title': 'Questions Fréquentes',
    'faq.q1': 'Quelle est la durée d\'exécution d\'un projet ?',
    'faq.a1': 'La durée varie selon l\'ampleur du projet. Pour une pièce standard, comptez 2-3 jours. Pour un projet complet, entre 1-2 semaines. Nous établissons un planning détaillé lors du devis.',
    'faq.q2': 'Offrez-vous une garantie sur vos installations ?',
    'faq.a2': 'Oui, nous offrons une garantie de 2 ans sur la main d\'œuvre et selon la garantie fabricant pour les matériaux (généralement 5-10 ans).',
    'faq.q3': 'Faites-vous l\'installation ou seulement la vente ?',
    'faq.a3': 'Nous proposons les deux services : vente seule ou vente avec installation professionnelle par notre équipe qualifiée.',
    'faq.q4': 'Livrez-vous dans toutes les villes du Maroc ?',
    'faq.a4': 'Oui, nous livrons dans tout le Maroc. Les frais de livraison et d\'installation sont calculés selon la distance.',
    'faq.q5': 'Peut-on voir des échantillons avant de commander ?',
    'faq.a5': 'Absolument ! Nous proposons des échantillons gratuits pour vous aider à faire le meilleur choix.',
    'faq.q6': 'Quel est le délai pour recevoir un devis ?',
    'faq.a6': 'Nous vous répondons sous 24-48h avec un devis détaillé et personnalisé.',

    // Footer
    'footer.about': 'À Propos',
    'footer.about.text': 'Leader en décoration intérieure au Maroc, nous offrons des solutions complètes et personnalisées pour transformer vos espaces.',
    'footer.links': 'Liens Rapides',
    'footer.contact': 'Contact',
    'footer.follow': 'Suivez-Nous',
    'footer.rights': '© 2024 SHG Décoration. Tous droits réservés.',

    // Common
    'common.learnMore': 'En savoir plus',
    'common.viewAll': 'Voir tout',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.products': 'المنتجات',
    'nav.services': 'الخدمات',
    'nav.projects': 'المشاريع',
    'nav.contact': 'اتصل بنا',
    'nav.faq': 'الأسئلة الشائعة',

    // Home
    'home.hero.title': 'التميز في الديكور الداخلي',
    'home.hero.subtitle': 'حول مساحاتك مع حلول الديكور الفاخرة لدينا',
    'home.hero.cta': 'اكتشف خدماتنا',
    'home.specialties.title': 'تخصصاتنا',
    'home.specialty.moulures': 'الزخارف',
    'home.specialty.moulures.desc': 'زخارف ديكورية أنيقة لإبراز جدرانك وأسقفك',
    'home.specialty.papier': 'ورق الجدران',
    'home.specialty.papier.desc': 'مجموعة واسعة من الأنماط والملمس لتخصيص ديكوراتك الداخلية',
    'home.specialty.parquet': 'الباركيه بي في سي',
    'home.specialty.parquet.desc': 'أرضيات مقاومة وجمالية',
    'home.specialty.moquette': 'الموكيت والفينيل',
    'home.specialty.moquette.desc': 'حلول أرضيات مريحة ومتينة',
    'home.about.title': 'من نحن؟',
    'home.about.text': 'نحن شركة رائدة في مجال الديكور الداخلي، متخصصة في الزخارف، ورق الجدران، الباركيه بي في سي، الموكيت والفينيل. بخبرتنا وشغفنا بالتميز، نحول مساحاتك إلى أماكن فريدة وراقية.',
    'home.why.title': 'لماذا تختارنا؟',
    'home.why.quality': 'جودة عالية',
    'home.why.quality.desc': 'مواد عالية الجودة مستوردة ومختارة بعناية',
    'home.why.expertise': 'خبرة مهنية',
    'home.why.expertise.desc': 'فريق مؤهل مع سنوات من الخبرة',
    'home.why.service': 'خدمة مخصصة',
    'home.why.service.desc': 'مرافقة حسب الطلب لكل مشروع',
    'home.why.guarantee': 'ضمان ومتابعة',
    'home.why.guarantee.desc': 'خدمة ما بعد البيع وضمان على تركيباتنا',

    // About
    'about.title': 'نبذة عنا',
    'about.mission.title': 'مهمتنا',
    'about.mission.text': 'تقديم حلول ديكور داخلي مبتكرة وعالية الجودة، مع مرافقة عملائنا في كل مرحلة من مشروعهم لخلق مساحات تعكس شخصيتهم وطموحاتهم.',
    'about.vision.title': 'رؤيتنا',
    'about.vision.text': 'أن نكون المرجع الأول في مجال الديكور الداخلي في المغرب، معروفين بتميزنا وإبداعنا والتزامنا برضا العملاء.',
    'about.values.title': 'قيمنا',
    'about.values.excellence': 'التميز',
    'about.values.excellence.desc': 'نسعى للكمال في كل مشروع',
    'about.values.integrity': 'النزاهة',
    'about.values.integrity.desc': 'الشفافية والصدق في علاقاتنا',
    'about.values.innovation': 'الابتكار',
    'about.values.innovation.desc': 'دائماً في طليعة الاتجاهات',
    'about.team.title': 'فريقنا',

    // Products
    'products.title': 'منتجاتنا',
    'products.moulures.title': 'الزخارف الديكورية',
    'products.moulures.desc': 'زخارفنا من البولي يوريثان والجبس تضفي لمسة من الأناقة الخالدة على ديكوراتك الداخلية. متوفرة في مجموعة متنوعة من الأساليب، من الكلاسيكية إلى المعاصرة.',
    'products.moulures.materials': 'المواد: بولي يوريثان، جبس، بي في سي',
    'products.moulures.colors': 'الألوان: أبيض، ذهبي، قابل للتخصيص',
    'products.papier.title': 'ورق جدران عصري',
    'products.papier.desc': 'مجموعة حصرية من ورق الجدران لجميع الأنماط: عصري، كلاسيكي، بسيط. جودة عالية وتركيب سهل.',
    'products.papier.materials': 'المواد: فينيل، غير منسوج، نسيج',
    'products.papier.colors': 'الأنماط: سادة، هندسية، زهرية، محززة',
    'products.parquet.title': 'باركيه بي في سي',
    'products.parquet.desc': 'باركيه بي في سي مقاوم وسهل الصيانة، مثالي لجميع الغرف. تقليد خشب مثالي لمظهر أصيل.',
    'products.parquet.materials': 'المواد: بي في سي عالي الكثافة، طبقة مقاومة معززة',
    'products.parquet.colors': 'التشطيبات: بلوط، جوز، رمادي فاتح، بني داكن',
    'products.moquette.title': 'موكيت وفينيل',
    'products.moquette.desc': 'حلول أرضيات مريحة وصوتية. موكيت وفينيل مناسب للمساحات السكنية والتجارية.',
    'products.moquette.materials': 'المواد: صوف، صناعي، فينيل',
    'products.moquette.colors': 'الملمس: معقود، مخمل، سادة، منقط',
    'products.cta': 'اطلب عرض سعر',

    // Services
    'services.title': 'خدماتنا',
    'services.sale.title': 'البيع والتوريد',
    'services.sale.desc': 'كتالوج واسع من منتجات الديكور الداخلي ذات الجودة العالية، مستوردة ومختارة بعناية.',
    'services.installation.title': 'تركيب احترافي',
    'services.installation.desc': 'فريق من المركبين المؤهلين لتركيب مثالي ومتين لجميع منتجاتنا.',
    'services.consulting.title': 'استشارة وتصميم',
    'services.consulting.desc': 'مرافقة شخصية لاختيار أفضل المنتجات المناسبة لمشروعك وميزانيتك.',
    'services.aftersales.title': 'خدمة ما بعد البيع',
    'services.aftersales.desc': 'ضمان على تركيباتنا ودعم فني لضمان رضاك على المدى الطويل.',

    // Projects
    'projects.title': 'مشاريعنا',
    'projects.filter.all': 'الكل',
    'projects.filter.residential': 'سكني',
    'projects.filter.professional': 'مهني',
    'projects.filter.commercial': 'تجاري',
    'projects.filter.hotel': 'فندقي',
    'projects.project1.title': 'فيلا عصرية - الدار البيضاء',
    'projects.project1.desc': 'ديكور كامل مع زخارف وباركيه بي في سي بتأثير البلوط',
    'projects.project2.title': 'مكتب شركة - الرباط',
    'projects.project2.desc': 'ورق جدران عصري وموكيت صوتي',
    'projects.project3.title': 'مطعم فاخر - مراكش',
    'projects.project3.desc': 'زخارف ذهبية وغطاء فينيل عالي المقاومة',
    'projects.project4.title': 'فندق بوتيك - طنجة',
    'projects.project4.desc': 'ورق جدران محزز وباركيه بي في سي في جميع الغرف',

    // Contact
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'اطلب عرض الأسعار المجاني الخاص بك',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.phone': 'الهاتف',
    'contact.form.service': 'الخدمة المطلوبة',
    'contact.form.service.select': 'اختر خدمة',
    'contact.form.service.moulures': 'الزخارف',
    'contact.form.service.papier': 'ورق الجدران',
    'contact.form.service.parquet': 'باركيه بي في سي',
    'contact.form.service.moquette': 'موكيت وفينيل',
    'contact.form.service.consulting': 'استشارة',
    'contact.form.message': 'رسالتك',
    'contact.form.submit': 'إرسال',
    'contact.info.title': 'معلومات الاتصال',
    'contact.info.address': 'العنوان',
    'contact.info.phone': 'الهاتف',
    'contact.info.email': 'البريد الإلكتروني',
    'contact.info.hours': 'ساعات العمل',
    'contact.info.hours.value': 'الإثنين - السبت: 9 صباحاً - 6 مساءً',

    // FAQ
    'faq.title': 'الأسئلة الشائعة',
    'faq.q1': 'ما هي مدة تنفيذ المشروع؟',
    'faq.a1': 'تختلف المدة حسب حجم المشروع. لغرفة عادية، يستغرق 2-3 أيام. لمشروع كامل، بين 1-2 أسبوع. نضع جدولاً زمنياً مفصلاً عند تقديم العرض.',
    'faq.q2': 'هل تقدمون ضماناً على التركيبات؟',
    'faq.a2': 'نعم، نقدم ضماناً لمدة سنتين على العمالة وحسب ضمان الشركة المصنعة للمواد (عادة 5-10 سنوات).',
    'faq.q3': 'هل تقومون بالتركيب أم البيع فقط؟',
    'faq.a3': 'نقدم كلا الخدمتين: البيع فقط أو البيع مع التركيب الاحترافي من قبل فريقنا المؤهل.',
    'faq.q4': 'هل توصلون إلى جميع مدن المغرب؟',
    'faq.a4': 'نعم، نوصل إلى جميع أنحاء المغرب. تحسب رسوم التوصيل والتركيب حسب المسافة.',
    'faq.q5': 'هل يمكننا رؤية عينات قبل الطلب؟',
    'faq.a5': 'بالطبع! نقدم عينات مجانية لمساعدتك على اتخاذ الخيار الأفضل.',
    'faq.q6': 'ما هو الوقت اللازم لتلقي عرض السعر؟',
    'faq.a6': 'نرد عليك خلال 24-48 ساعة بعرض سعر مفصل ومخصص.',

    // Footer
    'footer.about': 'نبذة عنا',
    'footer.about.text': 'رائدون في الديكور الداخلي في المغرب، نقدم حلولاً شاملة ومخصصة لتحويل مساحاتك.',
    'footer.links': 'روابط سريعة',
    'footer.contact': 'اتصل بنا',
    'footer.follow': 'تابعنا',
    'footer.rights': '© 2024 SHG للديكور. جميع الحقوق محفوظة.',

    // Common
    'common.learnMore': 'اعرف المزيد',
    'common.viewAll': 'عرض الكل',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'fr' ? 'ar' : 'fr'));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={language === 'ar' ? 'font-arabic' : 'font-latin'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
