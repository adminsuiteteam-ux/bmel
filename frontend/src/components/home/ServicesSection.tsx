import { Link } from 'react-router-dom'
import * as Icons from 'lucide-react'
import { mockServices } from '../../data/mockData'
import SectionHeading from '../ui/SectionHeading'
import { AnimatedCard } from '../ui/AnimatedCard'

export default function ServicesSection() {
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
          label="Our Expertise"
          title="Engineered Solutions for Complex Utilities"
          subtitle="From design through installation and support, we handle full engineering cycles for fluid storage, processing, and transportation infrastructure."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockServices.map((service, idx) => {
            const IconComponent = (Icons as any)[service.iconName] || Icons.HelpCircle
            const colorVariant = colorVariants[idx % colorVariants.length]
            const indexStr = String(idx + 1).padStart(3, '0')

            return (
              <Link key={service.slug} to={`/services/${service.slug}`} className="block h-full">
                <AnimatedCard
                  index={indexStr}
                  tag="ENGINEERING"
                  title={service.title}
                  description={service.shortDesc}
                  colorVariant={colorVariant}
                  darkTheme={false}
                  actionText="Explore Capabilities"
                  icon={<IconComponent size={24} />}
                  className="h-full"
                />
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-secondary">
            View All Services & Specifications
          </Link>
        </div>
      </div>
    </section>
  )
}


