import SEO from '@/components/ui/SEO'
import { Award, Eye, ShieldCheck, Target, CheckCircle2, Building2, Wrench, Shield, Zap, Sparkles, HeartHandshake, FileCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  const missionVision = [
    {
      icon: Target,
      title: 'Our Mission',
      desc: 'To deliver reliable, innovative, and cost-effective mechanical engineering solutions that exceed client expectations through quality workmanship, integrity, and continuous improvement.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      desc: 'To become one of Africa\'s most trusted mechanical engineering companies, recognized for technical excellence, innovation, and exceptional project delivery.'
    }
  ]

  const coreValues = [
    { title: 'Integrity', desc: 'Operating with honesty, transparency, and high ethical standards in all dealings.', icon: HeartHandshake },
    { title: 'Professionalism', desc: 'Maintaining rigor, technical precision, and expertise across all stages.', icon: FileCheck },
    { title: 'Innovation', desc: 'Embracing modern engineering techniques and technology for smarter solutions.', icon: Sparkles },
    { title: 'Quality', desc: 'Delivering top-tier craftsmanship that withstands the test of time.', icon: Award },
    { title: 'Safety', desc: 'Prioritizing zero-incident workplace environments for staff and partners.', icon: ShieldCheck },
    { title: 'Customer Satisfaction', desc: 'Exceeding client expectations with tailored engineering responses.', icon: CheckCircle2 },
    { title: 'Accountability', desc: 'Taking full ownership of project outcomes and long-term performance.', icon: Shield },
    { title: 'Excellence', desc: 'Striving for world-class perfection in design, installation, and support.', icon: Zap }
  ]

  const whyChooseUs = [
    'Experienced engineering professionals',
    'End-to-end project delivery',
    'Quality materials and proven equipment',
    'Strict compliance with engineering standards',
    'Timely project execution',
    'Responsive after-sales support',
    'Customized solutions for every client'
  ]

  const specializations = [
    'Borehole Drilling',
    'Water Treatment Systems',
    'Plumbing Installations',
    'Firefighting Systems',
    'Swimming Pool Engineering',
    'Sewage Treatment Plants',
    'Irrigation Systems',
    'Pumping Solutions',
    'Facility Maintenance'
  ]

  const industriesServed = [
    'Residential Developments',
    'Commercial Buildings',
    'Hotels & Hospitality',
    'Healthcare Facilities',
    'Educational Institutions',
    'Industrial Facilities',
    'Government Projects',
    'Real Estate Developments',
    'Agricultural & Irrigation Projects'
  ]

  return (
    <>
      <SEO
        title="About Us — Brownforte Mechanical Engineering Limited"
        description="Brownforte Mechanical Engineering Limited (BMEL) is a Nigerian engineering company providing innovative mechanical, plumbing, water, and infrastructure solutions."
      />

      {/* Page Header */}
      <section className="site-gradient-bg py-20 text-slate-900 border-b border-slate-200/60 relative">
        <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />
        <div className="container-xl relative z-10 text-center">
          <span className="text-amber-600 font-heading font-bold text-xs uppercase tracking-widest">Corporate Profile</span>
          <h1 className="text-4xl sm:text-5xl font-black text-navy mt-2">About Brownforte Mechanical</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-4">
            Innovative mechanical, plumbing, water, and infrastructure solutions for residential, commercial, industrial, and institutional projects across Nigeria & Africa.
          </p>
        </div>
      </section>

      {/* Company Profile Narrative */}
      <section className="section-pad bg-white">
        <div className="container-xl max-w-4xl">
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-base sm:text-lg space-y-6">
            <p className="font-medium text-navy text-xl sm:text-2xl leading-snug">
              Brownforte Mechanical Engineering Limited (BMEL) is a Nigerian engineering company providing innovative mechanical, plumbing, water, and infrastructure solutions for residential, commercial, industrial, and institutional projects.
            </p>
            <p>
              We specialize in borehole drilling, water treatment systems, plumbing installations, firefighting systems, swimming pool engineering, sewage treatment plants, irrigation systems, pumping solutions, and facility maintenance. Every project we undertake is driven by engineering excellence, quality workmanship, safety, and long-term reliability.
            </p>
            <p>
              Our team combines technical expertise with practical field experience to deliver solutions that meet international engineering standards while addressing the unique conditions of every project. From concept and design to installation, testing, commissioning, and maintenance, we ensure every system performs efficiently and consistently.
            </p>
            <div className="bg-slate-50 border-l-4 border-amber p-6 rounded-r-xl my-8 text-slate-700 italic font-heading">
              "At Brownforte Mechanical Engineering Limited, we believe engineering is more than installing equipment, it is about solving problems, protecting investments, and creating systems that serve people for decades."
            </div>
          </div>

          {/* Specializations Grid */}
          <div className="mt-12">
            <h3 className="font-heading font-bold text-navy text-xl mb-6">Our Core Specializations</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {specializations.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 border border-slate-100 text-sm font-semibold text-slate-800">
                  <Wrench size={16} className="text-amber flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad site-gradient-bg border-y border-slate-200/60">
        <div className="container-xl max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {missionVision.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 p-8 sm:p-10 rounded-2xl shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-navy text-amber flex items-center justify-center mb-6 shadow-md">
                  <item.icon size={28} />
                </div>
                <h2 className="font-heading font-bold text-navy text-2xl mb-4">
                  {item.title}
                </h2>
                <p className="text-slate-600 leading-relaxed text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-amber-600 font-heading font-semibold text-xs uppercase tracking-widest">Guiding Principles</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy mt-2">Our Core Values</h2>
            <p className="text-slate-500 mt-3">The principles that define our culture, decisions, and commitment to client satisfaction.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div key={idx} className="border border-slate-100 p-6 rounded-xl bg-slate-50/50 hover:bg-white hover:shadow-card hover:border-slate-200 transition-all">
                <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center mb-4 text-navy">
                  <val.icon size={20} />
                </div>
                <h3 className="font-heading font-bold text-navy text-lg mb-2">{val.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Brownforte & Industries We Serve */}
      <section className="section-pad bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 dot-grid-bg opacity-10 pointer-events-none" />
        <div className="container-xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Why Choose Us */}
            <div>
              <span className="text-amber font-heading font-bold text-xs uppercase tracking-widest">Competitive Advantage</span>
              <h2 className="text-3xl font-heading font-bold text-white mt-2 mb-6">Why Choose Brownforte?</h2>
              <div className="space-y-4">
                {whyChooseUs.map((reason, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-800/60 p-4 rounded-xl border border-slate-700/50">
                    <CheckCircle2 size={20} className="text-amber flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 font-medium text-sm sm:text-base">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Industries We Serve */}
            <div>
              <span className="text-amber font-heading font-bold text-xs uppercase tracking-widest">Sector Reach</span>
              <h2 className="text-3xl font-heading font-bold text-white mt-2 mb-6">Industries We Serve</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {industriesServed.map((industry, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-slate-800/60 p-4 rounded-xl border border-slate-700/50">
                    <Building2 size={18} className="text-amber flex-shrink-0" />
                    <span className="text-slate-200 text-sm font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="mt-16 text-center border-t border-slate-800 pt-10">
            <h3 className="text-xl font-heading font-bold mb-4">Have an Engineering Project in Mind?</h3>
            <Link to="/contact" className="btn-amber inline-flex items-center gap-2">
              Get in Touch with Our Team →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}


