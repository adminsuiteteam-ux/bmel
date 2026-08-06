import SEO from '@/components/ui/SEO'
import { useTranslation } from 'react-i18next'
import { Home, Building2, Hotel, Stethoscope, GraduationCap, Factory, Landmark, Building, Sprout, CheckCircle } from 'lucide-react'

export default function IndustriesPage() {
  const { t } = useTranslation()

  const industries = [
    {
      icon: Home,
      name: t('industries.ind_residential', 'Residential Developments'),
      desc: t('industries.desc_residential', 'Custom plumbing installations, borehole drilling, water treatment systems, and swimming pool engineering for private residences and gated estates.'),
      points: ['Estate water reticulation networks', 'Sectional storage panel tanks', 'Borehole & filtration systems']
    },
    {
      icon: Building2,
      name: t('industries.ind_commercial', 'Commercial Buildings'),
      desc: t('industries.desc_commercial', 'Full mechanical utility design, high-pressure pumping solutions, firefighting systems, and routine facility maintenance contracts.'),
      points: ['High-rise water booster pumps', 'Certified fire suppression loops', '24/7 facility maintenance']
    },
    {
      icon: Hotel,
      name: t('industries.ind_hospitality', 'Hotels & Hospitality'),
      desc: t('industries.desc_hospitality', 'Centralized hot and cold water distribution, swimming pool engineering, sewage treatment plants, and continuous water filtration.'),
      points: ['Swimming pool water treatment', 'Constant pressure water supply', 'Effluent & sewage treatment']
    },
    {
      icon: Stethoscope,
      name: t('industries.ind_healthcare', 'Healthcare Facilities'),
      desc: t('industries.desc_healthcare', 'Specialized clinical water treatment systems, medical facility plumbing installations, and zero-downtime backup pumping solutions.'),
      points: ['Sterile water filtration systems', 'Emergency water storage tanks', 'Sanitary plumbing installations']
    },
    {
      icon: GraduationCap,
      name: t('industries.ind_educational', 'Educational Institutions'),
      desc: t('industries.desc_educational', 'Campus-wide water storage panel tanks, sewage treatment plants, borehole drilling, and educational facility plumbing systems.'),
      points: ['Campus water reticulation', 'High-capacity sectional tanks', 'Waste water treatment plants']
    },
    {
      icon: Factory,
      name: t('industries.ind_industrial', 'Industrial Facilities'),
      desc: t('industries.desc_industrial', 'Heavy-duty industrial pumping solutions, process water purification, process piping fabrication, and chemical dosing setups.'),
      points: ['Industrial water treatment', 'Heavy-duty fluid pumping', 'Custom pipe fabrication & welding']
    },
    {
      icon: Landmark,
      name: t('industries.ind_government', 'Government Projects'),
      desc: t('industries.desc_government', 'Public infrastructure water treatment schemes, municipal borehole drilling, institutional plumbing installations, and government facilities.'),
      points: ['Public utility water schemes', 'Municipal borehole drilling', 'Compliant engineering execution']
    },
    {
      icon: Building,
      name: t('industries.ind_realestate', 'Real Estate Developments'),
      desc: t('industries.desc_realestate', 'Turnkey utility blueprints, sectional steel storage panel tanks, site-wide drainage, and residential estate plumbing infrastructure.'),
      points: ['Turnkey utility infrastructure', 'Ground & elevated storage tanks', 'Comprehensive maintenance']
    },
    {
      icon: Sprout,
      name: t('industries.ind_agricultural', 'Agricultural & Irrigation Projects'),
      desc: t('industries.desc_agricultural', 'High-volume borehole drilling, electric & solar pumping solutions, farm water storage, and agricultural irrigation systems.'),
      points: ['Solar & electric pumping setups', 'Agricultural irrigation lines', 'Raw water treatment systems']
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
          <span className="text-amber-600 font-heading font-bold text-xs uppercase tracking-widest">{t('industries.header_label', 'Sectors')}</span>
          <h1 className="text-4xl sm:text-5xl font-black text-navy mt-2">{t('industries.header_title', 'Industries We Serve')}</h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto mt-4">
            {t('industries.header_subtitle', 'Custom utility blueprints and durable mechanical configurations optimized for diverse operating sectors.')}
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
