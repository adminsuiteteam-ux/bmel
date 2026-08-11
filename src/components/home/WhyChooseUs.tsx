import { ShieldCheck, Clock, CheckCircle2, Award, Truck, Headphones, Sliders } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import CardFanCarousel from '../ui/CardFanCarousel'

const features = [
  {
    id: 'why-01',
    icon: Award,
    title: 'Experienced Engineering Professionals',
    desc: 'Our team combines technical expertise with practical field experience to deliver solutions that meet international engineering standards.',
    tag: 'EXPERTISE',
    accent: { bg: 'bg-navy', light: 'bg-navy/8', text: 'text-navy', border: 'border-navy/15' },
  },
  {
    id: 'why-02',
    icon: Truck,
    title: 'End-to-End Project Delivery',
    desc: 'From concept and design to installation, testing, commissioning, and maintenance, we manage every single stage.',
    tag: 'FULL CYCLE',
    accent: { bg: 'bg-sky-600', light: 'bg-sky-50', text: 'text-sky-700', border: 'border-sky-200' },
  },
  {
    id: 'why-03',
    icon: CheckCircle2,
    title: 'Quality Materials & Proven Equipment',
    desc: 'We utilize top-tier materials and field-tested machinery ensuring your engineering assets serve efficiently for decades.',
    tag: 'QUALITY',
    accent: { bg: 'bg-amber-500', light: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  },
  {
    id: 'why-04',
    icon: ShieldCheck,
    title: 'Strict Compliance with Standards',
    desc: 'Every system is engineered and installed in strict compliance with safety codes and international engineering standards.',
    tag: 'COMPLIANCE',
    accent: { bg: 'bg-emerald-600', light: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  },
  {
    id: 'why-05',
    icon: Clock,
    title: 'Timely Project Execution',
    desc: 'We value your time and investments, maintaining rigorous timelines and streamlined field execution schedules.',
    tag: 'TIMELY',
    accent: { bg: 'bg-violet-600', light: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200' },
  },
  {
    id: 'why-06',
    icon: Headphones,
    title: 'Responsive After-Sales Support',
    desc: 'Dedicated technical team providing continuous facility maintenance, emergency response, and system checks.',
    tag: 'SUPPORT',
    accent: { bg: 'bg-navy', light: 'bg-navy/8', text: 'text-navy', border: 'border-navy/15' },
  },
  {
    id: 'why-07',
    icon: Sliders,
    title: 'Customized Solutions',
    desc: 'We tailor every mechanical, water, and plumbing installation to address the unique conditions of your project.',
    tag: 'TAILORED',
    accent: { bg: 'bg-rose-600', light: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' },
  },
]

export default function WhyChooseUs() {
  const carouselCards = features.map((f) => ({
    id: f.id,
    content: (
      <div
        className={`w-full h-full rounded-2xl border ${f.accent.border} bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 p-7 flex flex-col gap-4 select-none`}
        style={{ minHeight: '260px' }}
      >
        {/* Tag pill */}
        <span
          className={`self-start text-[10px] font-heading font-bold tracking-widest uppercase px-3 py-1 rounded-full ${f.accent.light} ${f.accent.text}`}
        >
          {f.tag}
        </span>

        {/* Icon */}
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${f.accent.light}`}>
          <f.icon size={24} className={f.accent.text} />
        </div>

        {/* Text */}
        <div>
          <h3 className="font-heading font-bold text-navy text-base leading-snug mb-2">
            {f.title}
          </h3>
          <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
        </div>

        {/* Bottom accent line */}
        <div className={`mt-auto h-0.5 w-10 rounded-full ${f.accent.bg}`} />
      </div>
    ),
  }))

  return (
    <section className="section-pad site-gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />

      <div className="container-xl relative z-10">
        <SectionHeading
          label="Why Choose Brownforte"
          title="Engineering Excellence & Long-Term Reliability"
          subtitle="Discover why clients trust Brownforte Mechanical Engineering Limited for residential, commercial, and industrial engineering projects."
          centered
        />

        <div className="mt-10">
          <CardFanCarousel cards={carouselCards} />
        </div>
      </div>
    </section>
  )
}
