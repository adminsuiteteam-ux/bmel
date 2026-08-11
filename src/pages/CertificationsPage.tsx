import SEO from '@/components/ui/SEO'
import { Award, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function CertificationsPage() {
  const { t } = useTranslation()

  const credentials = [
    {
      icon: FileCheck,
      title: t('certifications.coren_title', 'COREN Registered Engineering Consultancy'),
      desc: t('certifications.coren_desc', 'Formally licensed by the Council for the Regulation of Engineering in Nigeria (COREN) to practice mechanical, water resources, and structural engineering services nationwide.'),
    },
    {
      icon: Award,
      title: t('certifications.iso_title', 'ISO 9001:2015 Quality Management Certified'),
      desc: t('certifications.iso_desc', 'Audited and certified operating workflows covering procurement, mechanical design, welding fabrication, and site project management.'),
    },
    {
      icon: ShieldCheck,
      title: t('certifications.osha_title', 'OSHA / ISO 45001 Occupational Safety Standards'),
      desc: t('certifications.osha_desc', 'Zero-incident safety culture implemented across every site installation, crane lifting operation, and high-pressure testing environment.'),
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
          <span className="text-amber-600 font-heading font-bold text-xs uppercase tracking-widest">{t('certifications.credibility_label', 'Credibility')}</span>
          <h1 className="text-4xl sm:text-5xl font-black text-navy mt-2">{t('certifications.title', 'Certifications & Accreditations')}</h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto mt-4">
            {t('certifications.subtitle_header', 'Quality assurance and standard compliance parameters governing all of our installations.')}
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
                    <span>{t('certifications.verified', 'Verified Compliance Record')}</span>
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
