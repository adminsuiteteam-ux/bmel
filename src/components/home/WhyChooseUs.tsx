import { ShieldCheck, Clock, CheckCircle2, Award, Truck, Headphones, Sliders, ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { Link } from 'react-router-dom'

const features = [
  {
    id: 'why-01',
    icon: Award,
    title: 'Experienced Engineering Professionals',
    desc: 'Our team combines deep technical expertise with practical field experience to deliver engineering solutions that exceed international standards.',
    tag: 'EXPERTISE',
    badgeBg: 'bg-blue-50 text-blue-600 border-blue-200',
    iconBg: 'bg-blue-600 text-white',
  },
  {
    id: 'why-02',
    icon: Truck,
    title: 'End-to-End Project Delivery',
    desc: 'From initial hydrogeological surveys and blueprint design to site installation, commissioning, and long-term facility maintenance.',
    tag: 'FULL CYCLE',
    badgeBg: 'bg-amber-50 text-amber-700 border-amber-200',
    iconBg: 'bg-amber-500 text-slate-950',
  },
  {
    id: 'why-03',
    icon: CheckCircle2,
    title: 'Quality Materials & Proven Equipment',
    desc: 'We use heavy-duty galvanized steel, high-durability PEX piping, and field-tested machinery built for long-term operational resilience.',
    tag: 'QUALITY',
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    iconBg: 'bg-emerald-600 text-white',
  },
  {
    id: 'why-04',
    icon: ShieldCheck,
    title: 'Strict Regulatory Compliance',
    desc: 'Every installation is engineered in strict compliance with COREN standards, national safety regulations, and environmental guidelines.',
    tag: 'COMPLIANCE',
    badgeBg: 'bg-sky-50 text-sky-700 border-sky-200',
    iconBg: 'bg-sky-600 text-white',
  },
  {
    id: 'why-05',
    icon: Clock,
    title: 'Timely Execution Schedules',
    desc: 'We value your schedule and capital investments, adhering to disciplined timelines and efficient field deployment benchmarks.',
    tag: 'TIMELY',
    badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    iconBg: 'bg-indigo-600 text-white',
  },
  {
    id: 'why-06',
    icon: Headphones,
    title: 'Responsive After-Sales Support',
    desc: 'Dedicated engineering support offering routine facility servicing, rapid emergency troubleshooting, and system upgrades.',
    tag: 'SUPPORT',
    badgeBg: 'bg-violet-50 text-violet-700 border-violet-200',
    iconBg: 'bg-violet-600 text-white',
  },
  {
    id: 'why-07',
    icon: Sliders,
    title: 'Tailored Engineering Solutions',
    desc: 'Customized hydraulic designs, water treatment loops, and MEP installations engineered for specific site parameters.',
    tag: 'CUSTOM',
    badgeBg: 'bg-rose-50 text-rose-700 border-rose-200',
    iconBg: 'bg-rose-600 text-white',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-pad site-gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />

      <div className="container-xl relative z-10">
        <SectionHeading
          label="Why Choose Brownforte"
          title="Engineering Excellence & Long-Term Reliability"
          subtitle="Discover why top clients trust Brownforte Mechanical Engineering Limited for residential, commercial, and municipal infrastructure projects."
          centered
        />

        {/* Simple & Clean Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((item) => {
            const IconComponent = item.icon
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm ${item.iconBg}`}>
                      <IconComponent size={22} />
                    </div>
                    <span className={`text-[10px] font-heading font-extrabold tracking-widest uppercase px-3 py-1 rounded-full border ${item.badgeBg}`}>
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading font-bold text-navy text-lg sm:text-xl mb-3 leading-snug group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Card Footer Indicator */}
                <div className="border-t border-slate-100 pt-4 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">BMEL STANDARD</span>
                  <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-amber-500 group-hover:scale-125 transition-all" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 btn-primary py-3.5 px-7 text-sm shadow-lg shadow-navy/10"
          >
            <span>Partner With BMEL Engineers</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
