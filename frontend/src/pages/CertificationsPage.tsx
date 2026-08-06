import SEO from '@/components/ui/SEO'
import { Award, ShieldAlert, BadgeCheck, Scale, CheckCircle2 } from 'lucide-react'

export default function CertificationsPage() {
  const credentials = [
    {
      icon: Award,
      title: 'ISO 9001:2015 Quality standards',
      subtitle: 'Accredited Quality Management System',
      desc: 'Our fabrication workshop operations, weld quality checks, and on-site engineering installation guidelines comply with strict ISO auditing standard pathways.',
    },
    {
      icon: BadgeCheck,
      title: 'COREN Authorized Engineering Firm',
      desc: 'Formally registered with the Council for the Regulation of Engineering in Nigeria. Our practices and drawings align with the highest professional ethical frameworks.',
    },
    {
      icon: ShieldAlert,
      title: 'HSE Safety Standard compliance',
      desc: 'Adherence to local and international construction safety acts. Our engineers hold OSHA-certified status, driving safety metrics to zero-incident milestones.',
    },
    {
      icon: Scale,
      title: 'Federal Ministry Registration',
      desc: 'Approved contractor for water plants, mechanical utilities, steel panel tanks, and public processing works with municipal agencies.',
    },
  ]

  return (
    <>
      <SEO
        title="Accreditations & Certificates — ISO & COREN"
        description="Verify BMEL's professional engineering accreditations including ISO 9001:2015, COREN registry, and occupational safety credentials."
      />

      {/* Header */}
      <section className="site-gradient-bg py-20 text-slate-900 border-b border-slate-200/60 relative">
        <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />
        <div className="container-xl relative z-10 text-center">
          <span className="text-amber-600 font-heading font-bold text-xs uppercase tracking-widest">Credibility</span>
          <h1 className="text-4xl sm:text-5xl font-black text-navy mt-2">Certifications & Standards</h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto mt-4">
            Quality assurance and standard compliance parameters governing all of our installations.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-pad bg-white">
        <div className="container-xl max-w-4xl">
          <div className="space-y-8">
            {credentials.map((cred, idx) => (
              <div
                key={idx}
                className="border border-slate-100 rounded-xl p-8 shadow-card flex flex-col md:flex-row gap-6 hover:shadow-card-hover hover:border-slate-200 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center text-navy flex-shrink-0">
                  <cred.icon size={26} />
                </div>
                
                <div>
                  <h3 className="font-heading font-bold text-navy text-xl mb-2">
                    {cred.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    {cred.desc}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <CheckCircle2 size={14} className="text-amber" />
                    <span>Active and verified for fiscal year 2026</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

