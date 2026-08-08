import { Home, Building2, Hotel, Stethoscope, GraduationCap, Factory, Landmark, Building, Sprout } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { AnimatedCard, type CardColorVariant } from '../ui/AnimatedCard'

const industries = [
  { icon: Home, name: 'Residential Developments', desc: 'Custom plumbing, borehole drilling, water treatment, and swimming pool engineering for homes & estates.', variant: 'navy' as CardColorVariant },
  { icon: Building2, name: 'Commercial Buildings', desc: 'Full mechanical utilities, high-pressure pumping, fire suppression, and facility maintenance.', variant: 'steel' as CardColorVariant },
  { icon: Hotel, name: 'Hotels & Hospitality', desc: 'Centralized hot/cold water distribution, pool engineering, and continuous water treatment plants.', variant: 'amber' as CardColorVariant },
  { icon: Stethoscope, name: 'Healthcare Facilities', desc: 'Specialized clinical water treatment systems, medical facility plumbing, and reliable backup pumping.', variant: 'cyan' as CardColorVariant },
  { icon: GraduationCap, name: 'Educational Institutions', desc: 'Campus-wide water storage, sewage treatment plants, and school facility plumbing infrastructure.', variant: 'navy' as CardColorVariant },
  { icon: Factory, name: 'Industrial Facilities', desc: 'Heavy-duty pumping solutions, industrial water purification, process piping, and effluent treatment.', variant: 'steel' as CardColorVariant },
  { icon: Landmark, name: 'Government Projects', desc: 'Public infrastructure water systems, municipal boreholes, and institutional mechanical works.', variant: 'amber' as CardColorVariant },
  { icon: Building, name: 'Real Estate Developments', desc: 'Turnkey utility designs, sectional storage panel tanks, and site-wide reticulation networks.', variant: 'cyan' as CardColorVariant },
  { icon: Sprout, name: 'Agricultural & Irrigation', desc: 'Borehole systems, solar & electric pumping setups, and agricultural irrigation infrastructure.', variant: 'navy' as CardColorVariant },
]

export default function Industries() {
  return (
    <section className="section-pad site-gradient-bg text-slate-900 relative overflow-hidden">

      <div className="container-xl relative z-10">
        <SectionHeading
          label="Industries We Serve"
          title="Tailored Engineering Solutions Across Sectors"
          subtitle="Brownforte Mechanical Engineering Limited delivers compliant, end-to-end mechanical and water infrastructure for diverse industries."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => (
            <AnimatedCard
              key={idx}
              index={`IND-${String(idx + 1).padStart(2, '0')}`}
              tag="SECTOR"
              title={ind.name}
              description={ind.desc}
              colorVariant={ind.variant}
              darkTheme={false}
              icon={<ind.icon size={20} />}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  )
}



