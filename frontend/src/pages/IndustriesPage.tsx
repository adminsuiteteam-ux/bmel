import SEO from '@/components/ui/SEO'
import { Fuel, Factory, Stethoscope, Building, Sprout, HardHat, CheckCircle } from 'lucide-react'

export default function IndustriesPage() {
  const industries = [
    {
      icon: Fuel,
      name: 'Oil & Gas',
      desc: 'High-pressure utilities, fluid transfer pipe spools, certified raw water filtration setups, and large-capacity fire-fighting storage panel tanks.',
      points: ['ASME-compliant pipe welding spools', 'Heavy-gauge steel panel tanks', 'Corrosive chemical fluid handling']
    },
    {
      icon: Factory,
      name: 'Manufacturing & Process Plants',
      desc: 'Dedicated reverse osmosis plants, sanitary steel food-grade piping spools, boilers feed pumps, and high-pressure steam utility lines.',
      points: ['Pure-grade sanitization networks', 'VFD energy-efficient pump arrays', 'Routine operations support plans']
    },
    {
      icon: Stethoscope,
      name: 'Healthcare & Pharma',
      desc: 'Highly purified water distribution systems matching pharmacopoeia standards, clinical air line fabrications, and clean room storage vessels.',
      points: ['Multi-phase filtration cascades', 'Stainless steel orbital welding', 'Sanitary booster pump alignments']
    },
    {
      icon: Building,
      name: 'Municipal & Public Works',
      desc: 'Large sectional raw storage towers, regional distribution pumping systems, community filter plants, and water transmission infrastructure.',
      points: ['State agency scale configurations', 'Elevated tower structural calculations', 'Nationwide deployment setups']
    },
    {
      icon: Sprout,
      name: 'Agriculture & Irrigation',
      desc: 'High-volume irrigation water lines, booster stations, dam intake arrays, solar water pumping configurations, and farm storage towers.',
      points: ['Off-grid solar integrated utilities', 'Raw filtration setups', 'Long-life pump assemblies']
    },
    {
      icon: HardHat,
      name: 'Construction & Estates',
      desc: 'Central plumbing setups for residential complexes, industrial drainage spools, elevated sectional steel tanks, and fire mains loops.',
      points: ['Gated community main reservoirs', 'High-rise balance valve configurations', 'Subcontracting drawings alignment']
    }
  ]

  return (
    <>
      <SEO
        title="Sectors Served — Oil & Gas, Manufacturing, Infrastructure"
        description="Learn how BMEL customizes mechanical design, water treatment plants, and panel tanks for diverse industries across Nigeria."
      />

      {/* Header */}
      <section className="site-gradient-bg py-20 text-slate-900 border-b border-slate-200/60 relative">
        <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />
        <div className="container-xl relative z-10 text-center">
          <span className="text-amber-600 font-heading font-bold text-xs uppercase tracking-widest">Sectors</span>
          <h1 className="text-4xl sm:text-5xl font-black text-navy mt-2">Industries We Serve</h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto mt-4">
            Custom utility blueprints and durable mechanical configurations optimized for diverse operating sectors.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, idx) => (
              <div
                key={idx}
                className="border border-slate-100 p-8 rounded-xl shadow-card hover:shadow-card-hover transition-all hover:border-slate-200"
              >
                <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center text-navy mb-6">
                  <ind.icon size={22} />
                </div>

                <h3 className="font-heading font-bold text-navy text-xl mb-3">
                  {ind.name}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {ind.desc}
                </p>

                <div className="space-y-2 border-t border-slate-100 pt-4">
                  {ind.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle size={12} className="text-amber flex-shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

