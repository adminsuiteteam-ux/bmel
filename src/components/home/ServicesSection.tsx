import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Droplets, Settings, Building2, Wrench, HardHat, Factory, Shield, Sprout, Zap, HelpCircle } from 'lucide-react'
import { mockServices } from '../../data/mockData'
import SectionHeading from '../ui/SectionHeading'

function getServiceIcon(iconName: string): React.ElementType {
  switch (iconName) {
    case 'Droplets': return Droplets
    case 'Settings': return Settings
    case 'Building2': return Building2
    case 'Wrench': return Wrench
    case 'HardHat': return HardHat
    case 'Factory': return Factory
    case 'Shield': return Shield
    case 'Sprout': return Sprout
    case 'Zap': return Zap
    default: return HelpCircle
  }
}

const cardAccents = [
  { border: 'border-navy/20', icon: 'text-navy', badge: 'bg-navy/10 text-navy' },
  { border: 'border-amber/30', icon: 'text-amber-600', badge: 'bg-amber/10 text-amber-700' },
  { border: 'border-sky-400/30', icon: 'text-sky-600', badge: 'bg-sky-50 text-sky-700' },
  { border: 'border-emerald-400/30', icon: 'text-emerald-600', badge: 'bg-emerald-50 text-emerald-700' },
  { border: 'border-violet-400/30', icon: 'text-violet-600', badge: 'bg-violet-50 text-violet-700' },
]

interface ServiceCardProps {
  title: string
  shortDesc: string
  iconName: string
  slug: string
  idx: number
}

function ServiceCard({ title, shortDesc, iconName, slug, idx }: ServiceCardProps) {
  const accent = cardAccents[idx % cardAccents.length]
  const IconComponent = getServiceIcon(iconName)

  return (
    <Link
      to={`/services/${slug}`}
      className={`flex-shrink-0 w-72 bg-white rounded-2xl border ${accent.border} shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 group cursor-pointer`}
    >
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${accent.badge}`}>
        <IconComponent size={22} className={accent.icon} />
      </div>
      <span className={`text-[10px] font-heading font-bold uppercase tracking-widest ${accent.icon} mb-2 block`}>
        Engineering
      </span>
      <h3 className="font-heading font-bold text-navy text-base leading-snug mb-2 group-hover:text-amber-600 transition-colors">
        {title}
      </h3>
      <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">{shortDesc}</p>
    </Link>
  )
}

export default function ServicesSection() {
  const { t } = useTranslation()

  const row1 = mockServices.slice(0, 5)
  const row2 = mockServices.slice(5)

  // Duplicate for seamless infinite loop
  const row1Loop = [...row1, ...row1]
  const row2Loop = [...row2, ...row2, ...row2] // row2 is shorter, triple it

  return (
    <section className="section-pad site-gradient-bg text-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />

      <div className="relative z-10">
        <div className="container-xl">
          <SectionHeading
            label={t('services.expertise_label', 'Our Expertise')}
            title={t('services.expertise_title', 'Engineered Solutions for Complex Utilities')}
            subtitle={t('services.expertise_subtitle', 'From design through installation and support, we handle full engineering cycles for fluid storage, processing, and transportation infrastructure.')}
            centered
          />
        </div>

        {/* Row 1 — slides left to right */}
        <div className="relative mt-10 overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10" style={{ background: 'linear-gradient(to right, var(--page-bg), transparent)' }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10" style={{ background: 'linear-gradient(to left, var(--page-bg), transparent)' }} />

          <div
            className="flex gap-6 w-max"
            style={{
              animation: 'marquee-ltr 35s linear infinite',
            }}
          >
            {row1Loop.map((service, i) => (
              <ServiceCard
                key={`r1-${i}`}
                title={service.title}
                shortDesc={service.shortDesc}
                iconName={service.iconName}
                slug={service.slug}
                idx={i % row1.length}
              />
            ))}
          </div>
        </div>

        {/* Row 2 — slides right to left */}
        <div className="relative mt-6 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10" style={{ background: 'linear-gradient(to right, var(--page-bg), transparent)' }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10" style={{ background: 'linear-gradient(to left, var(--page-bg), transparent)' }} />

          <div
            className="flex gap-6 w-max"
            style={{
              animation: 'marquee-rtl 28s linear infinite',
            }}
          >
            {row2Loop.map((service, i) => (
              <ServiceCard
                key={`r2-${i}`}
                title={service.title}
                shortDesc={service.shortDesc}
                iconName={service.iconName}
                slug={service.slug}
                idx={(i % row2.length) + 2}
              />
            ))}
          </div>
        </div>

        <div className="container-xl">
          <div className="text-center mt-12">
            <Link to="/services" className="btn-secondary">
              {t('services.view_all_specs', 'View All Services & Specifications')}
            </Link>
          </div>
        </div>
      </div>

      {/* Keyframe animations injected via style tag */}
      <style>{`
        @keyframes marquee-ltr {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        @keyframes marquee-rtl {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        /* Pause on hover for entire row */
        .marquee-row:hover > div {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
