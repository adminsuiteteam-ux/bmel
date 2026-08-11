import { useState } from 'react'
import SEO from '@/components/ui/SEO'
import { Plus, Minus } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQPage() {
  const { t } = useTranslation()
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      q: 'What types of water treatment technologies do you design?',
      a: 'We design Reverse Osmosis (RO), Ultrafiltration (UF), Membrane Bioreactors (MBR), activated carbon filtration, multi-media filters, chemical dosing stations, and sewage/wastewater treatment plants custom-built to standard regulatory requirements.'
    },
    {
      q: 'Do you provide elevated towers for sectional panel tanks?',
      a: 'Yes, our engineering team designs and executes the concrete foundations and structural steel towers for elevated sectional panel tanks. We verify towers against local wind load and soil parameters.'
    },
    {
      q: 'Which states in Nigeria can you deploy site teams to?',
      a: 'We deploy engineering crews nationwide. While our primary fabrication yards are based in Lagos, we have logistics networks and completed project footprints in Port Harcourt, Abuja, Kano, and over 30 states.'
    },
    {
      q: 'Are your welding technicians certified to standards?',
      a: 'Absolutely. Our welders hold ASME Section IX and AWS structural steel welding certifications. We perform non-destructive tests (NDT) such as dye penetrant and ultrasonic tests to confirm joint reliability.'
    },
    {
      q: 'How does your preventive maintenance agreement work?',
      a: 'We offer quarterly or monthly service contracts that include pump alignment checks, vibration testing, chemical replenishment, membrane cleaning, seal refits, and electrical system diagnostics.'
    }
  ]

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  return (
    <>
      <SEO
        title="FAQ — Mechanical Engineering & Panel Tanks Questions"
        description="Find answers to frequently asked questions about BMEL's water treatment plant designs, sectional tanks, maintenance, and logistics across Nigeria."
      />

      {/* Header */}
      <section className="site-gradient-bg py-20 text-slate-900 border-b border-slate-200/60 relative">
        <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />
        <div className="container-xl relative z-10 text-center">
          <span className="text-amber-600 font-heading font-bold text-xs uppercase tracking-widest">{t('faq.support_label')}</span>
          <h1 className="text-4xl sm:text-5xl font-black text-navy mt-2">{t('faq.title')}</h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto mt-4">
            Answers to common questions regarding our capabilities, certifications, and project workflows.
          </p>
        </div>
      </section>

      {/* Accordion list */}
      <section className="section-pad site-gradient-bg">
        <div className="container-xl max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx

              return (
                <div
                  key={idx}
                  className="border border-slate-100 rounded-xl overflow-hidden shadow-card"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full bg-slate-50 hover:bg-slate-100/75 transition-colors p-6 flex justify-between items-center text-left font-heading font-bold text-navy text-base sm:text-lg"
                  >
                    <span>{faq.q}</span>
                    <span className="text-amber flex-shrink-0 ml-4">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="p-6 bg-white border-t border-slate-100 text-sm text-slate-500 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

