import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Award, Target, Eye } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

export default function AboutSection() {
  const highlights = [
    { title: 'Our Mission', desc: 'To deliver reliable, innovative, and cost-effective mechanical engineering solutions that exceed client expectations through quality workmanship, integrity, and continuous improvement.' },
    { title: 'Our Vision', desc: 'To become one of Africa\'s most trusted mechanical engineering companies, recognized for technical excellence, innovation, and exceptional project delivery.' },
    { title: 'End-to-End Delivery', desc: 'From concept and design to installation, testing, commissioning, and long-term facility maintenance.' },
    { title: 'Quality & Safety', desc: 'Strict compliance with international engineering standards and zero-compromise safety protocols.' }
  ]

  return (
    <section className="section-pad site-gradient-bg relative overflow-hidden">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-6">
            <SectionHeading
              label="Who We Are"
              title="About Brownforte Mechanical Engineering Limited"
              subtitle="Brownforte Mechanical Engineering Limited (BMEL) is a Nigerian engineering company providing innovative mechanical, plumbing, water, and infrastructure solutions for residential, commercial, industrial, and institutional projects."
            />
            
            <p className="text-slate-600 mb-6 leading-relaxed">
              We specialize in borehole drilling, water treatment systems, plumbing installations, firefighting systems, swimming pool engineering, sewage treatment plants, irrigation systems, pumping solutions, and facility maintenance. Every project we undertake is driven by engineering excellence, quality workmanship, safety, and long-term reliability.
            </p>

            <p className="text-slate-600 mb-8 leading-relaxed">
              At Brownforte Mechanical Engineering Limited, we believe engineering is more than installing equipment, it is about solving problems, protecting investments, and creating systems that serve people for decades.
            </p>

            <Link to="/about" className="btn-outline group inline-flex items-center gap-2">
              Discover Our Full Profile
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-slate-200/70 shadow-card hover:shadow-card-hover transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-navy/5 text-navy flex items-center justify-center mb-4">
                    {idx === 0 ? <Target size={20} /> : idx === 1 ? <Eye size={20} /> : idx === 2 ? <Award size={20} /> : <ShieldCheck size={20} />}
                  </div>
                  <h3 className="font-heading font-bold text-navy text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}


