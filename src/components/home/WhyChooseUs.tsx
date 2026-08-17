import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldCheck, Clock, CheckCircle2, Award, Truck, Headphones, Sliders, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<number>(1)
  const [isHovered, setIsHovered] = useState(false)
  const [itemsPerPage, setItemsPerPage] = useState(3)

  // Calculate items to show based on screen width
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2)
      } else {
        setItemsPerPage(3)
      }
    }

    updateItemsPerPage()
    window.addEventListener('resize', updateItemsPerPage)
    return () => window.removeEventListener('resize', updateItemsPerPage)
  }, [])

  const maxPages = Math.ceil(features.length / itemsPerPage)

  // Auto-play interval
  useEffect(() => {
    if (isHovered) return

    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % maxPages)
    }, 5000)

    return () => clearInterval(timer)
  }, [isHovered, maxPages])

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + maxPages) % maxPages)
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % maxPages)
  }

  // Get current visible features
  const startIndex = currentIndex * itemsPerPage
  const visibleFeatures = features.slice(startIndex, startIndex + itemsPerPage)

  // Slide animation variants
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 60 : -60,
      opacity: 0,
    }),
  }

  return (
    <section className="section-pad site-gradient-bg relative overflow-hidden select-none">
      <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />

      <div className="container-xl relative z-10">
        <SectionHeading
          label="Why Choose Brownforte"
          title="Engineering Excellence & Long-Term Reliability"
          subtitle="Discover why top clients trust Brownforte Mechanical Engineering Limited for residential, commercial, and municipal infrastructure projects."
          centered
        />

        {/* Carousel Container */}
        <div
          className="mt-6 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Controls: Left & Right Navigation Arrows */}
          <div className="flex items-center justify-end gap-2 mb-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-navy hover:bg-navy hover:text-amber shadow-sm flex items-center justify-center transition-all active:scale-95"
              aria-label="Previous Carousel Slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-navy hover:bg-navy hover:text-amber shadow-sm flex items-center justify-center transition-all active:scale-95"
              aria-label="Next Carousel Slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Cards Track */}
          <div className="overflow-hidden min-h-[360px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {visibleFeatures.map((item) => {
                  const IconComponent = item.icon
                  return (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl border border-slate-200/80 p-7 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full"
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

                      {/* Card Footer */}
                      <div className="border-t border-slate-100 pt-4 flex items-center justify-between text-xs text-slate-400">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                          {t('why_choose_us.bmel_standard', 'BMEL STANDARD')}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-amber-500 group-hover:scale-125 transition-all" />
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicator Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1)
                  setCurrentIndex(idx)
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-amber-500 shadow-sm'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide page ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-10 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 btn-primary py-3.5 px-7 text-sm shadow-lg shadow-navy/10"
          >
            <span>{t('why_choose_us.partner_btn', 'Partner With BMEL Engineers')}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
