import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../lib/utils'

export type CardColorVariant = 'amber' | 'navy' | 'steel' | 'emerald' | 'cyan' | 'violet'

interface AnimatedCardProps extends Omit<React.ComponentPropsWithoutRef<typeof motion.div>, 'title'> {
  index?: string
  tag?: string
  title: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactNode
  imageSrc?: string
  colorVariant?: CardColorVariant
  darkTheme?: boolean
  actionText?: string
  actionHref?: string
  onClick?: () => void
  children?: React.ReactNode
}

const colorStyles: Record<CardColorVariant, { radial: string; tagBg: string; tagText: string; iconBg: string; iconText: string; borderHover: string }> = {
  amber: {
    radial: 'radial-gradient(circle at 50% 20%, rgba(245, 158, 11, 0.15) 0%, transparent 70%)',
    tagBg: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    tagText: 'text-amber-500',
    iconBg: 'bg-amber-500/10 border-amber-500/20 text-amber-500 group-hover:bg-amber-500 group-hover:text-navy-900',
    iconText: 'text-amber-500',
    borderHover: 'hover:border-amber-500/40 hover:shadow-amber-500/10',
  },
  navy: {
    radial: 'radial-gradient(circle at 50% 20%, rgba(14, 116, 144, 0.15) 0%, transparent 70%)',
    tagBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    tagText: 'text-cyan-400',
    iconBg: 'bg-slate-800 border-slate-700 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-navy-950',
    iconText: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/40 hover:shadow-cyan-500/10',
  },
  steel: {
    radial: 'radial-gradient(circle at 50% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
    tagBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    tagText: 'text-indigo-400',
    iconBg: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white',
    iconText: 'text-indigo-400',
    borderHover: 'hover:border-indigo-500/40 hover:shadow-indigo-500/10',
  },
  emerald: {
    radial: 'radial-gradient(circle at 50% 20%, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
    tagBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    tagText: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-navy-950',
    iconText: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/40 hover:shadow-emerald-500/10',
  },
  cyan: {
    radial: 'radial-gradient(circle at 50% 20%, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
    tagBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    tagText: 'text-cyan-300',
    iconBg: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300 group-hover:bg-cyan-400 group-hover:text-navy-950',
    iconText: 'text-cyan-300',
    borderHover: 'hover:border-cyan-400/40 hover:shadow-cyan-400/10',
  },
  violet: {
    radial: 'radial-gradient(circle at 50% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
    tagBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    tagText: 'text-purple-400',
    iconBg: 'bg-purple-500/10 border-purple-500/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-white',
    iconText: 'text-purple-400',
    borderHover: 'hover:border-purple-500/40 hover:shadow-purple-500/10',
  },
}

export const AnimatedCard = React.forwardRef<HTMLDivElement, AnimatedCardProps>(
  (
    {
      className,
      index,
      tag,
      title,
      description,
      icon,
      imageSrc,
      colorVariant = 'amber',
      darkTheme = true,
      actionText,
      actionHref,
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    const variantStyle = colorStyles[colorVariant] || colorStyles.amber

    return (
      <motion.div
        ref={ref}
        onClick={onClick}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        whileHover={{ y: -8, scale: 1.015 }}
        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
        className={cn(
          'group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-7 shadow-lg transition-all duration-300',
          darkTheme
            ? 'bg-slate-900/90 text-white border-white/10 backdrop-blur-md hover:bg-slate-900/95'
            : 'bg-white text-slate-900 border-slate-200/80 shadow-slate-200/50 hover:bg-white',
          variantStyle.borderHover,
          className
        )}
      >
        {/* Ambient Radial Background Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: variantStyle.radial }}
        />

        {/* Dynamic Top Bar Accent */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-amber-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

        {/* Card Header Section */}
        <div>
          <div className="flex items-center justify-between gap-4 mb-5 relative z-10">
            {index && (
              <span className="font-mono text-xs tracking-widest uppercase font-semibold text-slate-400 opacity-80 group-hover:text-amber-400 transition-colors">
                {index}
              </span>
            )}
            {tag && (
              <span
                className={cn(
                  'px-3 py-1 rounded-full text-xs font-semibold tracking-wide border backdrop-blur-sm transition-colors',
                  variantStyle.tagBg
                )}
              >
                {tag}
              </span>
            )}
          </div>

          {/* Optional Main Image with Hover Zoom */}
          {imageSrc && (
            <div className="relative h-48 w-full overflow-hidden rounded-xl mb-6 border border-white/5">
              <motion.img
                src={imageSrc}
                alt={typeof title === 'string' ? title : 'Card preview'}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </div>
          )}

          {/* Icon Container */}
          {icon && (
            <div
              className={cn(
                'w-13 h-13 rounded-xl border flex items-center justify-center mb-5 transition-all duration-300 shadow-sm group-hover:scale-110 group-hover:rotate-3',
                variantStyle.iconBg
              )}
            >
              {icon}
            </div>
          )}

          {/* Title */}
          <h3
            className={cn(
              'font-heading font-bold text-xl mb-3 leading-snug transition-colors group-hover:text-amber-400',
              darkTheme ? 'text-white' : 'text-slate-900'
            )}
          >
            {title}
          </h3>

          {/* Description */}
          {description && (
            <p
              className={cn(
                'text-sm leading-relaxed mb-4 line-clamp-3',
                darkTheme ? 'text-slate-300/80' : 'text-slate-600'
              )}
            >
              {description}
            </p>
          )}

          {children}
        </div>

        {/* Footer Action Link */}
        {actionText && (
          <div className="pt-4 mt-2 border-t border-white/5 flex items-center justify-between text-xs font-semibold relative z-10">
            <span className="text-amber-400 group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
              {actionText}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        )}
      </motion.div>
    )
  }
)

AnimatedCard.displayName = 'AnimatedCard'
