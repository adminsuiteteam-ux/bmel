import { Home, Building2, Hotel, Stethoscope, GraduationCap, Factory, Landmark, Building, Sprout } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Industry3DCarousel, { type IndustryCardItem } from '../ui/Industry3DCarousel'

const sectorItems: IndustryCardItem[] = [
  {
    id: 'ind-01',
    icon: Home,
    name: 'Residential Developments',
    desc: 'Custom plumbing, borehole drilling, water treatment, and swimming pool engineering for luxury homes, estates, and gated communities.',
    variant: 'navy',
    tags: ['Water Treatment', 'Piping Loops', 'Estates & Villas'],
  },
  {
    id: 'ind-02',
    icon: Building2,
    name: 'Commercial Buildings',
    desc: 'Full mechanical utilities, high-pressure booster pumping, fire suppression loops, and ongoing facility preventive maintenance.',
    variant: 'steel',
    tags: ['Office Towers', 'Fire Hydrants', 'Plumbing Risers'],
  },
  {
    id: 'ind-03',
    icon: Hotel,
    name: 'Hotels & Hospitality',
    desc: 'Centralized hot & cold water distribution, swimming pool hydraulics, and continuous automated water purification plants.',
    variant: 'amber',
    tags: ['Hot Water Loops', 'Resort Pools', '24/7 Water Supply'],
  },
  {
    id: 'ind-04',
    icon: Stethoscope,
    name: 'Healthcare Facilities',
    desc: 'Specialized clinical water purification systems, hospital sanitary plumbing, and ultra-reliable redundant backup pumping setups.',
    variant: 'cyan',
    tags: ['Clinical Filtration', 'Sanitary Plumbing', 'Emergency Backup'],
  },
  {
    id: 'ind-05',
    icon: GraduationCap,
    name: 'Educational Institutions',
    desc: 'Campus-wide water storage tanks, sewage treatment plants (STP), and school hostel plumbing & sanitation infrastructure.',
    variant: 'navy',
    tags: ['Campus Tanks', 'Sewage Treatment', 'Student Facilities'],
  },
  {
    id: 'ind-06',
    icon: Factory,
    name: 'Industrial Facilities',
    desc: 'Heavy-duty process pumping solutions, industrial RO purification, high-pressure process piping, and effluent treatment.',
    variant: 'steel',
    tags: ['Process Piping', 'RO Purification', 'Effluent Plants'],
  },
  {
    id: 'ind-07',
    icon: Landmark,
    name: 'Government & Municipal',
    desc: 'Public infrastructure water networks, municipal deep boreholes, steel panel tanks, and institutional mechanical engineering works.',
    variant: 'amber',
    tags: ['Municipal Boreholes', 'Steel Tanks', 'Public Works'],
  },
  {
    id: 'ind-08',
    icon: Building,
    name: 'Real Estate Developments',
    desc: 'Turnkey utility blueprints, sectional storage panel tanks, pressure vessels, and site-wide water reticulation networks.',
    variant: 'cyan',
    tags: ['Site Reticulation', 'Sectional Tanks', 'Turnkey Designs'],
  },
  {
    id: 'ind-09',
    icon: Sprout,
    name: 'Agricultural & Irrigation',
    desc: 'Deep aquifer borehole drilling, high-capacity solar & electric pumping setups, and agricultural irrigation infrastructure.',
    variant: 'navy',
    tags: ['Solar Pumping', 'Irrigation Lines', 'Farm Aquifers'],
  },
]

export default function Industries() {
  return (
    <section className="section-pad site-gradient-bg text-slate-900 relative overflow-hidden">
      {/* Subtle Dot Grid Overlay */}
      <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />

      <div className="container-xl relative z-10">
        <SectionHeading
          label="Industries We Serve"
          title="Tailored Engineering Solutions Across Sectors"
          subtitle="Brownforte Mechanical Engineering Limited delivers compliant, end-to-end mechanical and water infrastructure for diverse industries."
          centered
        />

        <div className="mt-6">
          <Industry3DCarousel items={sectorItems} />
        </div>
      </div>
    </section>
  )
}
