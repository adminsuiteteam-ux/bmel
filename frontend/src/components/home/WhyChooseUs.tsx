import { ShieldCheck, Clock, CheckCircle2, Award, Truck, Headphones, Sliders } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { AnimatedCard, type CardColorVariant } from '../ui/AnimatedCard'

const features: Array<{ icon: any; title: string; desc: string; tag: string; variant: CardColorVariant }> = [
  {
    icon: Award,
    title: 'Experienced Engineering Professionals',
    desc: 'Our team combines technical expertise with practical field experience to deliver solutions that meet international engineering standards.',
    tag: 'EXPERTISE',
    variant: 'amber',
  },
  {
    icon: Truck,
    title: 'End-to-End Project Delivery',
    desc: 'From concept and design to installation, testing, commissioning, and maintenance, we manage every single stage.',
    tag: 'FULL CYCLE',
    variant: 'cyan',
  },
  {
    icon: CheckCircle2,
    title: 'Quality Materials & Proven Equipment',
    desc: 'We utilize top-tier materials and field-tested machinery ensuring your engineering assets serve efficiently for decades.',
    tag: 'QUALITY',
    variant: 'emerald',
  },
  {
    icon: ShieldCheck,
    title: 'Strict Compliance with Standards',
    desc: 'Every system is engineered and installed in strict compliance with safety codes and international engineering standards.',
    tag: 'COMPLIANCE',
    variant: 'steel',
  },
  {
    icon: Clock,
    title: 'Timely Project Execution',
    desc: 'We value your time and investments, maintaining rigorous timelines and streamlined field execution schedules.',
    tag: 'TIMELY',
    variant: 'amber',
  },
  {
    icon: Headphones,
    title: 'Responsive After-Sales Support',
    desc: 'Dedicated technical team providing continuous facility maintenance, emergency response, and system checks.',
    tag: 'SUPPORT',
    variant: 'violet',
  },
  {
    icon: Sliders,
    title: 'Customized Solutions',
    desc: 'We tailor every mechanical, water, and plumbing installation to address the unique conditions of your project.',
    tag: 'TAILORED',
    variant: 'emerald',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-pad site-gradient-bg relative overflow-hidden">
      <div className="container-xl">
        <SectionHeading
          label="Why Choose Brownforte"
          title="Engineering Excellence & Long-Term Reliability"
          subtitle="Discover why clients trust Brownforte Mechanical Engineering Limited for residential, commercial, and industrial engineering projects."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <AnimatedCard
              key={idx}
              index={`WHY-${String(idx + 1).padStart(2, '0')}`}
              tag={feature.tag}
              title={feature.title}
              description={feature.desc}
              colorVariant={feature.variant}
              darkTheme={false}
              icon={<feature.icon size={22} />}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  )
}



