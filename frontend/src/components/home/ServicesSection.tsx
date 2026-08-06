import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Droplets, Settings, Building2, Wrench, HardHat, Factory, Shield, Sprout, Zap, HelpCircle } from 'lucide-react'
import { mockServices } from '../../data/mockData'
import SectionHeading from '../ui/SectionHeading'
import { AnimatedCard } from '../ui/AnimatedCard'

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

export default function ServicesSection() {
  const { t } = useTranslation()

  const colorVariants: Array<'amber' | 'cyan' | 'emerald' | 'violet' | 'steel'> = [
    'amber',
    'cyan',
    'emerald',
    'violet',
    'steel',
    'amber',
  ]

  return (
    <section className="section-pad site-gradient-bg text-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />

      <div className="container-xl relative z-10">
        <SectionHeading
          label={t('services.expertise_label', 'Our Expertise')}
          title={t('services.expertise_title', 'Engineered Solutions for Complex Utilities')}
          subtitle={t('services.expertise_subtitle', 'From design through installation and support, we handle full engineering cycles for fluid storage, processing, and transportation infrastructure.')}
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockServices.map((service, idx) => {
            const IconComponent = getServiceIcon(service.iconName)
            const colorVariant = colorVariants[idx % colorVariants.length] || 'amber'
            const indexStr = String(idx + 1).padStart(3, '0')

            return (
              <Link key={service.slug} to={`/services/${service.slug}`} className="block h-full">
                <AnimatedCard
                  index={indexStr}
                  tag={t('services.tag_engineering', 'ENGINEERING')}
                  title={service.title}
                  description={service.shortDesc}
                  colorVariant={colorVariant}
                  darkTheme={false}
                  actionText={t('services.action_explore', 'Explore Capabilities')}
                  icon={<IconComponent size={24} />}
                  className="h-full"
                />
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-secondary">
            {t('services.view_all_specs', 'View All Services & Specifications')}
          </Link>
        </div>
      </div>
    </section>
  )
}
