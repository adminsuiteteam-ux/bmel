import { Link, useParams } from 'react-router-dom'
import SEO from '@/components/ui/SEO'
import { useTranslation } from 'react-i18next'
import { mockServices } from '@/data/mockData'
import { ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react'

export default function ServiceDetailPage() {
  const { t } = useTranslation()
  const { slug } = useParams<{ slug: string }>()
  const service = mockServices.find(s => s.slug === slug)

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-navy">{t('services.not_found_title', 'Service Not Found')}</h2>
        <p className="text-slate-500 mt-2">{t('services.not_found_desc', 'The engineering capability you requested is not listed.')}</p>
        <Link to="/services" className="btn-primary mt-6">
          <ArrowLeft size={16} /> {t('services.back_to_services', 'Back to Services')}
        </Link>
      </div>
    )
  }

  return (
    <>
      <SEO
        title={`${service.title} — Capabilities & Technical Process`}
        description={service.shortDesc}
      />

      {/* Header */}
      <section className="site-gradient-bg py-20 text-slate-900 border-b border-slate-200/60 relative">
        <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />
        <div className="container-xl relative z-10">
          <Link to="/services" className="inline-flex items-center gap-1.5 text-xs text-amber-600 font-bold hover:underline mb-4">
            <ArrowLeft size={12} /> {t('services.back_to_services', 'Back to Services')}
          </Link>
          <h1 className="text-3xl sm:text-5xl font-black text-navy">{service.title}</h1>
        </div>
      </section>

      {/* Details Section */}
      <section className="section-pad bg-white">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-10">
            <div>
              <h2 className="text-2xl font-heading font-bold text-navy mb-4">{t('services.overview_title', 'Service Overview')}</h2>
              <p className="text-slate-600 leading-relaxed text-base">{service.longDesc}</p>
            </div>

            {/* Benefits */}
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
              <h3 className="text-xl font-heading font-bold text-navy mb-6">{t('services.benefits_title', 'Key Engineering Benefits')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-amber mt-1 flex-shrink-0" />
                    <span className="text-sm text-slate-600 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Implementation Process */}
            <div>
              <h3 className="text-xl font-heading font-bold text-navy mb-6">{t('services.process_title', 'Our Technical Process')}</h3>
              <div className="space-y-4">
                {service.process.map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-navy text-amber flex items-center justify-center font-heading font-bold text-sm flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-navy text-base">{step.split(' & ')[0]}</h4>
                      <p className="text-sm text-slate-500 mt-1">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Gallery */}
            {service.gallery && service.gallery.length > 0 && (
              <div>
                <h3 className="text-xl font-heading font-bold text-navy mb-6">{t('services.gallery_title', 'Execution Gallery')}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.gallery.map((img, idx) => (
                    <div key={idx} className="h-64 overflow-hidden rounded-xl border border-slate-100">
                      <img
                        src={img}
                        alt={`${service.title} Gallery ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-navy text-white rounded-xl p-8 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 border-r border-t border-amber/10 pointer-events-none" />
              
              <h3 className="text-xl font-heading font-bold mb-4">{t('services.quote_cta_title', 'Request a Technical Quote')}</h3>
              <p className="text-sm text-white/60 mb-6 leading-relaxed">
                {t('services.quote_cta_desc', 'Need specifications, design drafts, or budget ranges for this capability? Speak with our engineers today.')}
              </p>

              <Link to="/contact" className="btn-primary w-full justify-center">
                {t('services.get_quote_btn', 'Get a Quote')} <ChevronRight size={16} />
              </Link>
            </div>

            {/* Other Capabilities */}
            <div className="border border-slate-100 rounded-xl p-6 shadow-card">
              <h4 className="font-heading font-bold text-navy text-sm uppercase tracking-wide mb-4">{t('services.other_capabilities', 'Other Capabilities')}</h4>
              <div className="space-y-3">
                {mockServices
                  .filter(s => s.slug !== slug)
                  .map(s => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 text-sm text-slate-600 font-medium transition-all"
                    >
                      <span>{s.title}</span>
                      <ChevronRight size={14} className="text-slate-400" />
                    </Link>
                  ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
