"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowRight, type LucideIcon } from "lucide-react"

export interface IndustryCardItem {
  id: string
  name: string
  desc: string
  icon: LucideIcon
  variant: 'navy' | 'steel' | 'amber' | 'cyan'
  tags: string[]
}

interface Industry3DCarouselProps {
  items: IndustryCardItem[]
}

const variantStyles = {
  navy: {
    badge: "bg-navy/10 text-navy dark:bg-sky-400/15 dark:text-sky-300 border-navy/20 dark:border-sky-400/30",
    iconBg: "bg-navy text-white shadow-navy/30 dark:bg-sky-500 dark:text-slate-950",
    glow: "shadow-[0_0_40px_rgba(3,4,94,0.3)] dark:shadow-[0_0_40px_rgba(56,189,248,0.25)]",
    accent: "bg-navy dark:bg-sky-400",
    border: "border-navy/20 dark:border-sky-400/30",
  },
  steel: {
    badge: "bg-sky-500/10 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300 border-sky-500/20 dark:border-sky-400/30",
    iconBg: "bg-sky-600 text-white shadow-sky-500/30 dark:bg-sky-400 dark:text-slate-950",
    glow: "shadow-[0_0_40px_rgba(0,119,182,0.3)] dark:shadow-[0_0_40px_rgba(56,189,248,0.25)]",
    accent: "bg-sky-500 dark:bg-sky-300",
    border: "border-sky-500/20 dark:border-sky-400/30",
  },
  amber: {
    badge: "bg-amber-500/10 text-amber-700 dark:bg-amber-400/15 dark:text-amber-300 border-amber-500/20 dark:border-amber-400/30",
    iconBg: "bg-amber-500 text-slate-950 shadow-amber-500/30 dark:bg-amber-400 dark:text-slate-950",
    glow: "shadow-[0_0_40px_rgba(245,158,11,0.3)] dark:shadow-[0_0_40px_rgba(251,191,36,0.25)]",
    accent: "bg-amber-500 dark:bg-amber-400",
    border: "border-amber-500/20 dark:border-amber-400/30",
  },
  cyan: {
    badge: "bg-cyan-500/10 text-cyan-700 dark:bg-cyan-400/15 dark:text-cyan-300 border-cyan-500/20 dark:border-cyan-400/30",
    iconBg: "bg-cyan-500 text-slate-950 shadow-cyan-500/30 dark:bg-cyan-400 dark:text-slate-950",
    glow: "shadow-[0_0_40px_rgba(6,182,212,0.3)] dark:shadow-[0_0_40px_rgba(34,211,238,0.25)]",
    accent: "bg-cyan-500 dark:bg-cyan-400",
    border: "border-cyan-500/20 dark:border-cyan-400/30",
  },
}

export default function Industry3DCarousel({ items }: Industry3DCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length)
  }, [items.length])

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length)
  }, [items.length])

  useEffect(() => {
    if (!isAutoPlaying) return
    autoPlayRef.current = setInterval(() => {
      handleNext()
    }, 4000)

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [isAutoPlaying, handleNext])

  return (
    <div
      className="relative w-full py-8 select-none"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* 3D Perspective Card Track */}
      <div className="relative h-[380px] sm:h-[420px] w-full flex items-center justify-center overflow-hidden">
        {items.map((item, idx) => {
          // Calculate relative position to activeIndex (-2, -1, 0, 1, 2)
          let offset = idx - activeIndex
          if (offset > Math.floor(items.length / 2)) offset -= items.length
          if (offset < -Math.floor(items.length / 2)) offset += items.length

          const absOffset = Math.abs(offset)
          const isVisible = absOffset <= 2

          if (!isVisible) return null

          const variantStyle = variantStyles[item.variant]
          const IconComp = item.icon
          const isActive = offset === 0

          // Calculate 3D transforms
          const translateX = offset * (window?.innerWidth < 640 ? 190 : 280)
          const scale = 1 - absOffset * 0.14
          const rotateY = offset * -15
          const zIndex = 20 - absOffset * 5
          const opacity = 1 - absOffset * 0.35

          return (
            <motion.div
              key={item.id}
              initial={false}
              animate={{
                x: translateX,
                scale,
                rotateY,
                opacity,
                zIndex,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 28,
              }}
              onClick={() => setActiveIndex(idx)}
              className={`
                absolute w-[300px] sm:w-[380px] rounded-3xl p-7 flex flex-col justify-between
                cursor-pointer transition-all duration-300
                bg-white dark:bg-slate-900/90 border backdrop-blur-xl
                ${isActive
                  ? `${variantStyle.glow} border-amber-400/50 dark:border-sky-400/60 ring-1 ring-sky-400/20`
                  : 'border-slate-200/80 dark:border-slate-800 shadow-lg'
                }
              `}
              style={{
                transformStyle: "preserve-3d",
                height: "340px",
              }}
            >
              {/* Header: Tag + Sector Index */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-heading font-black tracking-[0.2em] uppercase px-3 py-1 rounded-full border ${variantStyle.badge}`}>
                    SECTOR #{String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-lg ${variantStyle.iconBg}`}>
                    <IconComp size={22} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading font-black text-navy dark:text-white text-xl leading-snug mb-3">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                  {item.desc}
                </p>
              </div>

              {/* Tags + Action */}
              <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between text-xs font-heading font-bold text-amber-600 dark:text-sky-400 pt-1"
                  >
                    <span>EXPLORE CAPABILITIES</span>
                    <ArrowRight size={15} />
                  </motion.div>
                )}
              </div>

              {/* Bottom Accent Bar */}
              <div className={`absolute bottom-0 left-8 right-8 h-1 rounded-t-full ${variantStyle.accent}`} />
            </motion.div>
          )
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-6 mt-6 z-30 relative">
        <button
          onClick={handlePrev}
          aria-label="Previous Sector"
          className="w-12 h-12 rounded-full border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md flex items-center justify-center text-navy dark:text-sky-300 hover:border-amber-500 dark:hover:border-sky-400 hover:text-amber-600 dark:hover:text-sky-400 transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Dot Pagination */}
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === activeIndex
                  ? "bg-amber-500 dark:bg-sky-400 w-8 h-2.5"
                  : "bg-slate-300 dark:bg-slate-700 w-2.5 h-2.5 hover:bg-slate-400 dark:hover:bg-slate-600"
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next Sector"
          className="w-12 h-12 rounded-full border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md flex items-center justify-center text-navy dark:text-sky-300 hover:border-amber-500 dark:hover:border-sky-400 hover:text-amber-600 dark:hover:text-sky-400 transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  )
}
