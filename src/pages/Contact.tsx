import { useState } from 'react';
import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitting(false);
      setSubmitStatus('success');

      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }
  };

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
            {t('contact.title')}
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
            {t('contact.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-[500px] md:min-h-[700px] py-spacing-lg md:py-spacing-xl bg-gradient-to-br from-black via-dark-50 to-black relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
        
        <div className="max-w-container-mobile md:max-w-container-laptop xl:max-w-container-desktop mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-spacing-lg md:gap-spacing-xl">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-h2-mobile md:text-h2-laptop font-bold text-white mb-spacing-lg md:mb-spacing-xl">
                {t('contact.info.title')}
              </h2>
              <div className="space-y-6 md:space-y-8 mb-8 md:mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {t('contact.info.address')}
                    </h3>
                    <p className="text-white/60">
                      Casablanca, Maroc
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {t('contact.info.phone')}
                    </h3>
                    <p className="text-white/60">+212 6XX-XXXXXX</p>
                    <p className="text-white/60">+212 5XX-XXXXXX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {t('contact.info.email')}
                    </h3>
                    <p className="text-white/60">contact@darkyn.ma</p>
                    <p className="text-white/60">info@darkyn.ma</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold-500/10 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {t('contact.info.hours')}
                    </h3>
                    <p className="text-white/60">{t('contact.info.hours.value')}</p>
                  </div>
                </div>
              </div>

              <div className="border border-gold-500/20 overflow-hidden h-64 md:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106449.45712267564!2d-7.680149695935566!3d33.57346486784647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2s!4v1647890123456!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) invert(1) brightness(0.3)' }}
                  allowFullScreen
                  loading="lazy"
                  title="Map"
                ></iframe>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-dark-300/50 border border-gold-500/20 p-6 md:p-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">
                {t('contact.subtitle')}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-label={t('contact.form.name')}
                    className="w-full px-4 py-3 bg-black/50 border border-gold-500/30 text-white placeholder-white/40 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all"
                    placeholder={t('contact.form.name')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-label={t('contact.form.email')}
                    className="w-full px-4 py-3 bg-black/50 border border-gold-500/30 text-white placeholder-white/40 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all"
                    placeholder={t('contact.form.email')}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-label={t('contact.form.phone')}
                    className="w-full px-4 py-3 bg-black/50 border border-gold-500/30 text-white placeholder-white/40 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all"
                    placeholder={t('contact.form.phone')}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-white mb-2">
                    {t('contact.form.service')}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-label={t('contact.form.service')}
                    className="w-full px-4 py-3 bg-black/50 border border-gold-500/30 text-white focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all"
                  >
                    <option value="">{t('contact.form.service.select')}</option>
                    <option value="moulures">{t('contact.form.service.moulures')}</option>
                    <option value="papier">{t('contact.form.service.papier')}</option>
                    <option value="parquet">{t('contact.form.service.parquet')}</option>
                    <option value="moquette">{t('contact.form.service.moquette')}</option>
                    <option value="consulting">{t('contact.form.service.consulting')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    aria-required="true"
                    aria-label={t('contact.form.message')}
                    className="w-full px-4 py-3 bg-black/50 border border-gold-500/30 text-white placeholder-white/40 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all resize-none"
                    placeholder={t('contact.form.message')}
                  ></textarea>
                </div>

                <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center space-x-2 bg-gold-500 hover:bg-gold-600 text-black min-w-[140px] px-5 md:px-6 h-[50px] rounded-lg text-body-mobile md:text-body-laptop font-semibold transition-all duration-300 shadow-gold hover:shadow-gold-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                  {isSubmitting ? (
                    <span>{t('nav.home') === 'Accueil' ? 'Envoi en cours...' : 'جاري الإرسال...'}</span>
                  ) : (
                    <>
                      <span>{t('contact.form.submit')}</span>
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-gold-500/20 border border-gold-500/50 text-gold-500 rounded-sm text-center font-semibold"
                    role="alert"
                    aria-live="polite"
                  >
                    {t('nav.home') === 'Accueil'
                      ? 'Message envoyé avec succès !'
                      : 'تم إرسال الرسالة بنجاح!'}
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-500/50 text-red-400 rounded-sm text-center font-semibold"
                    role="alert"
                    aria-live="polite"
                  >
                    {t('nav.home') === 'Accueil'
                      ? 'Une erreur est survenue. Veuillez réessayer.'
                      : 'حدث خطأ. يرجى المحاولة مرة أخرى.'}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
