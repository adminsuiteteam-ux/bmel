import { Link } from 'react-router-dom'
import { ArrowRight, PhoneCall } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function CTASection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 site-gradient-bg relative overflow-hidden">
      {/* Background visual filters */}
      <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />

      <div className="container-xl relative z-10 text-center max-w-3xl mx-auto">
        <div className="bg-white/80 dark:bg-navy-900/80 backdrop-blur-md border border-slate-200/80 dark:border-navy-800 rounded-3xl p-8 sm:p-12 shadow-xl">
          <span className="text-amber-600 dark:text-amber-400 font-heading font-bold text-xs uppercase tracking-widest">
            {t('cta.need_partner', 'Need an Engineering Partner?')}
          </span>
          
          <h2 className="font-heading font-black text-navy dark:text-white text-3xl sm:text-4xl lg:text-5xl mt-3 mb-6 leading-tight">
            {t('cta.headline', "Let's Design and Build Your Next Mechanical System")}
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            {t('cta.description', 'Get in touch with our engineering team today for custom blueprints, volume specifications, and detailed budgetary quotation drafts.')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary group w-full sm:w-auto justify-center shadow-lg">
              {t('cta.free_consultation', 'Get a Free Consultation')}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:07063332335"
              className="btn-secondary w-full sm:w-auto justify-center flex items-center gap-2 bg-white dark:bg-navy-800 border border-slate-300 dark:border-navy-700 text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-navy-700"
            >
              <PhoneCall size={16} />
              <span>{t('cta.speak_to_sales', 'Speak to Sales')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
