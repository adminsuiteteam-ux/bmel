import { Link } from 'react-router-dom'
import { motion, LayoutGroup } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { TextRotate } from '@/components/ui/text-rotate'
import Floating, { FloatingElement } from '@/components/ui/parallax-floating'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

// BMEL real project photos
const heroImages = [
  {
    url: '/images/hero-1.jpg',
    alt: 'BMEL water treatment system with pipes and valves',
  },
  {
    url: '/images/hero-2.jpg',
    alt: 'BMEL borehole steel tank stand installation - S.U.B.E.B project, Bayelsa State',
  },
  {
    url: '/images/hero-3.jpg',
    alt: 'BMEL borehole with steel tank stand - Kolokuma/Opokuma LGA, Bayelsa State',
  },
  {
    url: '/images/hero-4.jpg',
    alt: 'BMEL swimming pool construction and plumbing at night',
  },
  {
    url: '/images/hero-5.jpg',
    alt: 'BMEL team installing elevated galvanized water tank',
  },
]

export default function HeroSection() {
  const { t } = useTranslation()

  const stats = [
    { value: 15, suffix: '+', label: t('hero.stat_years', 'Years Experience') },
    { value: 500, suffix: '+', label: t('hero.stat_projects', 'Projects Completed') },
    { value: 100, suffix: '+', label: t('hero.stat_clients', 'Corporate Clients') },
    { value: 36, suffix: '', label: t('hero.stat_states', 'States Covered') },
  ]

  return (
    <section className="w-full min-h-screen overflow-hidden flex flex-col items-center justify-center relative site-gradient-bg text-slate-900 dark:text-slate-100">

      {/* Subtle dot grid background */}
      <div className="absolute inset-0 dot-grid-bg opacity-25 pointer-events-none" />


      {/* Parallax floating engineering images */}
      <Floating sensitivity={-0.5} className="h-full hidden md:block">

        <FloatingElement depth={0.5} className="top-[12%] left-[1%] md:top-[20%] md:left-[3%]">
          <motion.img
            src={heroImages[0].url}
            alt={heroImages[0].alt}
            className="w-20 h-14 sm:w-28 sm:h-20 md:w-36 md:h-24 lg:w-40 lg:h-28 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg] shadow-xl rounded-xl border border-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[2%] left-[6%] md:top-[5%] md:left-[9%]">
          <motion.img
            src={heroImages[1].url}
            alt={heroImages[1].alt}
            className="w-36 h-28 sm:w-48 sm:h-36 md:w-56 md:h-44 lg:w-64 lg:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[8deg] shadow-xl rounded-xl border border-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />
        </FloatingElement>

        <FloatingElement depth={3} className="top-[78%] left-[4%] md:top-[70%] md:left-[5%]">
          <motion.img
            src={heroImages[2].url}
            alt={heroImages[2].alt}
            className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-xl rounded-xl border border-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />
        </FloatingElement>

        <FloatingElement depth={2} className="top-[1%] left-[82%] md:top-[3%] md:left-[80%]">
          <motion.img
            src={heroImages[3].url}
            alt={heroImages[3].alt}
            className="w-36 h-32 sm:w-48 sm:h-40 md:w-56 md:h-48 lg:w-64 lg:h-52 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-xl rotate-[5deg] rounded-xl border border-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[72%] left-[80%] md:top-[65%] md:left-[80%]">
          <motion.img
            src={heroImages[4].url}
            alt={heroImages[4].alt}
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-xl rotate-[14deg] rounded-xl border border-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          />
        </FloatingElement>

      </Floating>

      {/* Centre content */}
      <div className="flex flex-col justify-center items-center w-full max-w-4xl z-10 pointer-events-auto px-5 py-16 md:py-24">

        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-md border border-navy/15 dark:border-sky-400/20 shadow-sm mb-8"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.2 }}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-amber animate-pulse" />
          <span className="text-xs uppercase tracking-widest font-bold text-navy">
            {t('hero.badge', "Nigeria's Trusted Engineering Partner")}
          </span>
        </motion.div>

        {/* Headline with TextRotate */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center w-full justify-center items-center flex flex-col leading-tight font-heading font-black tracking-tight space-y-1 sm:space-y-2 md:space-y-3"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.3 }}
        >
          <span className="text-navy dark:text-sky-200">{t('hero.title_part1', 'Engineering Solutions')}</span>
          <LayoutGroup>
            <motion.span layout className="flex flex-wrap items-center justify-center gap-x-2">
              <motion.span
                layout
                className="text-slate-600 dark:text-slate-300"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              >
                {t('hero.that_are', 'that are')}
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
                mainClassName="overflow-hidden pr-2 text-amber-600 font-black py-0 pb-1 md:pb-2 rounded-xl"
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
          className="text-sm sm:text-base md:text-lg lg:text-xl text-center text-slate-600 dark:text-slate-300 font-medium pt-5 sm:pt-8 md:pt-10 leading-relaxed max-w-xl"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.5 }}
        >
          {t('hero.description', 'Brownforte Mechanical Engineering Limited (BMEL) provides innovative mechanical, plumbing, water, and infrastructure solutions for residential, commercial, industrial, and institutional projects across Nigeria.')}
        </motion.p>

        {/* Trust checkmarks */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-semibold"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.6 }}
        >
          {[t('hero.trust_excellence', 'Engineering Excellence'), t('hero.trust_standards', 'Strict Compliance Standards'), t('hero.trust_delivery', 'End-to-End Delivery')].map((item, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-amber-500 flex-shrink-0" />
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
              className="btn-primary text-sm sm:text-base shadow-xl"
            >
              {t('hero.request_quote', 'Request a Quote')}
              <ArrowRight size={16} />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, transition: { type: 'spring', damping: 30, stiffness: 400 } }}
          >
            <Link
              to="/projects"
              className="btn-secondary text-sm sm:text-base bg-white/80 border border-slate-300 text-slate-800 hover:bg-slate-100"
            >
              {t('hero.explore_projects', 'Explore Projects')}
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-8 border-t border-slate-300/70 dark:border-slate-700/60 mt-14 pt-10 w-full"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center sm:items-start">
              <span className="text-2xl sm:text-3xl font-heading font-black text-navy dark:text-sky-300 flex items-center">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-[11px] text-slate-500 mt-1 font-semibold tracking-wide uppercase text-center sm:text-left">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
