import { Award, ShieldAlert, BadgeCheck, Scale } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const certs = [
  {
    icon: Award,
    title: 'ISO 9001:2015 Quality',
    desc: 'Certified Quality Management System mapping all fabrication and project execution phases.',
  },
  {
    icon: BadgeCheck,
    title: 'COREN Registered Firm',
    desc: 'Registered engineering firm holding active practice authorization with the Council of Nigerian Engineers.',
  },
  {
    icon: ShieldAlert,
    title: 'HSE Safety Standard',
    desc: 'Full compliance with occupational health and safety regulations across construction zones.',
  },
  {
    icon: Scale,
    title: 'Federal Ministry Registration',
    desc: 'Approved contractor for public water infrastructure, industrial utilities, and plumbing spools.',
  },
]

export default function Certifications() {
  return (
    <section className="section-pad site-gradient-bg">
      <div className="container-xl">
        <SectionHeading
          label="Accreditation"
          title="Credibility & Compliance Credentials"
          subtitle="BMEL maintains registrations and rigorous certifications to meet local Nigerian and international technical and safety standards."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certs.map((cert, idx) => (
            <div
              key={idx}
              className="border border-slate-100 dark:border-navy-700 bg-slate-50/50 dark:bg-navy-800/50 rounded-xl p-6 text-center hover:bg-white dark:hover:bg-navy-800 hover:shadow-card hover:border-slate-200 dark:hover:border-navy-600 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-navy/5 dark:bg-amber-500/10 flex items-center justify-center mx-auto mb-4 text-navy dark:text-amber-400 group-hover:bg-amber group-hover:text-navy dark:group-hover:bg-amber-500 dark:group-hover:text-navy transition-colors duration-300">
                <cert.icon size={20} />
              </div>
              <h3 className="font-heading font-bold text-navy dark:text-white text-base mb-2">
                {cert.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {cert.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

