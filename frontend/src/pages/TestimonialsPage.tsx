import SEO from '@/components/ui/SEO'
import { Star } from 'lucide-react'
import { mockTestimonials } from '@/data/mockData'
import { useTranslation } from 'react-i18next'

export default function TestimonialsPage() {
  const { t } = useTranslation()

  return (
    <>
      <SEO
        title="Client Reviews & Testimonials"
        description="Read what estate developers, chemical plants, and municipal authorities say about partnering with Brownforte Mechanical Engineering Limited."
      />

      {/* Header */}
      <section className="site-gradient-bg py-20 text-slate-900 border-b border-slate-200/60 relative">
        <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />
        <div className="container-xl relative z-10 text-center">
          <span className="text-amber-600 font-heading font-bold text-xs uppercase tracking-widest">{t('testimonials.reviews_label')}</span>
          <h1 className="text-4xl sm:text-5xl font-black text-navy mt-2">{t('testimonials.title')}</h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto mt-4">
            {t('testimonials.subtitle')}
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mockTestimonials.map(t => (
              <div
                key={t.id}
                className="bg-slate-50 border border-slate-100 rounded-xl p-8 shadow-card flex flex-col justify-between hover:bg-white hover:border-slate-200 hover:shadow-card-hover transition-all"
              >
                <div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={15} className="fill-amber text-amber" />
                    ))}
                  </div>
                  
                  <p className="text-navy text-base leading-relaxed italic mb-6">
                    "{t.review}"
                  </p>
                </div>

                <div className="border-t border-slate-200/50 pt-4">
                  <h4 className="font-heading font-bold text-navy text-sm">{t.client}</h4>
                  <p className="text-xs text-slate-400 font-semibold">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

