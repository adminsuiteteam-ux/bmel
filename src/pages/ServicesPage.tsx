import SEO from '@/components/ui/SEO'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import {
  Wrench,
  Droplets,
  Settings,
  Shield,
  Award,
  Building2,
  Sprout,
  Zap,
  HardHat,
  HelpCircle
} from 'lucide-react'
import { mockServices } from '@/data/mockData'

function getServiceIcon(iconName: string): React.ElementType {
  switch (iconName) {
    case 'Wrench': return Wrench
    case 'Droplets': return Droplets
    case 'Settings': return Settings
    case 'Shield': return Shield
    case 'Award': return Award
    case 'Building2': return Building2
    case 'Sprout': return Sprout
    case 'Zap': return Zap
    case 'HardHat': return HardHat
    default: return HelpCircle
  }
}

export default function ServicesPage() {
  const { t } = useTranslation()

  return (
    <>
      <SEO
        title="Services — Mechanical & Water Infrastructure Capabilities"
        description="Explore our specialized services including water treatment plants, steel sectional tanks, pump installation, mechanical design and piping fabrication in Nigeria."
      />

      {/* Header */}
      <section className="site-gradient-bg py-20 text-slate-900 border-b border-slate-200/60 relative">
        <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />
        <div className="container-xl relative z-10 text-center">
          <span className="text-amber-600 font-heading font-bold text-xs uppercase tracking-widest">{t('services.capabilities_label', 'Capabilities')}</span>
          <h1 className="text-4xl sm:text-5xl font-black text-navy mt-2">{t('services.page_title', 'Our Engineering Services')}</h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto mt-4">
            {t('services.page_subtitle', 'Industrial, municipal, and commercial fluid engineering systems deployed by certified COREN engineers.')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-pad site-gradient-bg">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockServices.map((service) => {
              const IconComponent = getServiceIcon(service.iconName)

              return (
                <div
                  key={service.slug}
                  className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col h-full group"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center text-navy mb-4 group-hover:bg-amber group-hover:text-navy transition-colors duration-300">
                        <IconComponent size={20} />
                      </div>
                      
                      <h3 className="font-heading font-bold text-navy text-xl mb-3">
                        {service.title}
                      </h3>
                      
                      <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-6">
                        {service.shortDesc}
                      </p>
                    </div>

                    <div className="border-t border-slate-100 pt-4">
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-amber transition-colors"
                      >
                        {t('services.view_specs', 'Technical Specifications & Process →')}
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
