import { Link } from 'react-router-dom'
import { motion, LayoutGroup } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { TextRotate } from '@/components/ui/text-rotate'
import Floating, { FloatingElement } from '@/components/ui/parallax-floating'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

// Plumbing-engineering-focused Unsplash images (pipes, valves, water distribution, manifolds)
const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?q=80&w=2670&auto=format&fit=crop',
    alt: 'Plumbing engineering pressure meters and pipes',
  },
  {
    url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2669&auto=format&fit=crop',
    alt: 'Commercial plumbing manifold systems',
  },
  {
    url: 'https://images.unsplash.com/photo-1542013936693-8848e574047a?q=80&w=2670&auto=format&fit=crop',
    alt: 'Industrial water pipeline installation',
  },
  {
    url: 'https://images.unsplash.com/photo-1615859131861-052f0641a60e?q=80&w=2670&auto=format&fit=crop',
    alt: 'High pressure steel plumbing lines',
  },
  {
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop',
    alt: 'Professional plumbing pipe fabrication',
  },
]

const stats = [
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 100, suffix: '+', label: 'Corporate Clients' },
  { value: 36, suffix: '', label: 'States Covered' },
]

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen overflow-hidden flex flex-col items-center justify-center relative bg-navy text-white">

      {/* Subtle dot grid background */}
      <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-ocean-royal/30 rounded-full blur-[120px] pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-ocean-bright/20 rounded-full blur-[100px] pointer-events-none animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Parallax floating engineering images */}
      <Floating sensitivity={-0.5} className="h-full">

        <FloatingElement depth={0.5} className="top-[12%] left-[1%] md:top-[20%] md:left-[3%]">
          <motion.img
            src={heroImages[0].url}
            alt={heroImages[0].alt}
            className="w-20 h-14 sm:w-28 sm:h-20 md:w-36 md:h-24 lg:w-40 lg:h-28 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg] shadow-2xl rounded-xl border border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[2%] left-[6%] md:top-[5%] md:left-[9%]">
          <motion.img
            src={heroImages[1].url}
            alt={heroImages[1].alt}
            className="w-36 h-28 sm:w-48 sm:h-36 md:w-56 md:h-44 lg:w-64 lg:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[8deg] shadow-2xl rounded-xl border border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />
        </FloatingElement>

        <FloatingElement depth={3} className="top-[78%] left-[4%] md:top-[70%] md:left-[5%]">
          <motion.img
            src={heroImages[2].url}
            alt={heroImages[2].alt}
            className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rounded-xl border border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />
        </FloatingElement>

        <FloatingElement depth={2} className="top-[1%] left-[82%] md:top-[3%] md:left-[80%]">
          <motion.img
            src={heroImages[3].url}
            alt={heroImages[3].alt}
            className="w-36 h-32 sm:w-48 sm:h-40 md:w-56 md:h-48 lg:w-64 lg:h-52 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[5deg] rounded-xl border border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[72%] left-[80%] md:top-[65%] md:left-[80%]">
          <motion.img
            src={heroImages[4].url}
            alt={heroImages[4].alt}
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[14deg] rounded-xl border border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          />
        </FloatingElement>

      </Floating>

      {/* Centre content */}
      <div className="flex flex-col justify-center items-center w-[280px] sm:w-[360px] md:w-[560px] lg:w-[740px] z-50 pointer-events-auto px-4 py-20">

        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-amber/20 mb-8"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.2 }}
        >
          <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
          <span className="text-xs uppercase tracking-widest font-semibold text-amber">
            Nigeria's Trusted Engineering Partner
          </span>
        </motion.div>

        {/* Headline with TextRotate */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center w-full justify-center items-center flex flex-col whitespace-pre leading-tight font-heading font-black tracking-tight space-y-2 md:space-y-3"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.3 }}
        >
          <span className="text-white">Engineering Solutions</span>
          <LayoutGroup>
            <motion.span layout className="flex whitespace-pre items-center justify-center">
              <motion.span
                layout
                className="flex whitespace-pre text-white/70"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              >
                that are{' '}
              </motion.span>
              <TextRotate
                texts={[
                  'Reliable',
                  'Efficient',
                  'World-class',
                  'Certified ✓',
                  'Nationwide',
                  'Premium',
                  'Trusted',
                  '15+ Years',
                  'Innovative',
                  'Proven 🏆',
                ]}
                mainClassName="overflow-hidden pr-2 text-amber py-0 pb-1 md:pb-2 rounded-xl"
                staggerDuration={0.03}
                staggerFrom="last"
                rotationInterval={2800}
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              />
            </motion.span>
          </LayoutGroup>
        </motion.h1>

        {/* Sub-description */}
        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-center text-white/60 pt-5 sm:pt-8 md:pt-10 leading-relaxed max-w-lg"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.5 }}
        >
          Brownforte Mechanical Engineering Limited delivers premium water treatment systems,
          pumping infrastructure, sectional panel tanks, and custom fabrications nationwide.
        </motion.p>

        {/* Trust checkmarks */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-6 text-xs sm:text-sm text-white/50"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.6 }}
        >
          {['Certified ASME Fabrication', 'Full QA/QC Protocol', '24-Month Warranty'].map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-amber flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-row justify-center gap-4 items-center mt-10 sm:mt-12"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.7 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, transition: { type: 'spring', damping: 30, stiffness: 400 } }}
          >
            <Link
              to="/contact"
              className="btn-primary text-sm sm:text-base shadow-2xl"
            >
              Request a Quote
              <ArrowRight size={16} />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, transition: { type: 'spring', damping: 30, stiffness: 400 } }}
          >
            <Link
              to="/projects"
              className="btn-secondary text-sm sm:text-base"
            >
              Explore Projects
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-8 border-t border-white/10 mt-14 pt-10 w-full"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center sm:items-start">
              <span className="text-2xl sm:text-3xl font-heading font-black text-amber flex items-center">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-[11px] text-white/40 mt-1 font-medium tracking-wide uppercase text-center sm:text-left">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

