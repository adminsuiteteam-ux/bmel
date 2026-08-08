import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { mockTestimonials } from '../../data/mockData'
import SectionHeading from '../ui/SectionHeading'

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const handlePrev = () => {
    setActive(prev => (prev === 0 ? mockTestimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActive(prev => (prev === mockTestimonials.length - 1 ? 0 : prev + 1))
  }

  const safeActive = Math.max(0, Math.min(active, mockTestimonials.length - 1))
  const current = mockTestimonials[safeActive] || mockTestimonials[0]

  if (!current) return null

  return (
    <section className="section-pad site-gradient-bg overflow-hidden">
      <div className="container-xl">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say About BMEL"
          subtitle="Discover how we've helped major real estate developers and manufacturers execute complex mechanical engineering systems."
          centered
        />

        <div className="max-w-4xl mx-auto relative px-4 sm:px-12">
          {/* Card slider wrapper */}
          <div className="relative bg-white border border-slate-100 rounded-2xl shadow-card p-8 sm:p-12 min-h-[300px] flex flex-col justify-between">
            
            {/* Top quote decorator */}
            <div className="absolute top-8 right-8 text-amber/15 pointer-events-none">
              <Quote size={80} />
            </div>

            <div className="flex flex-col gap-6">
              {/* Rating stars */}
              <div className="flex gap-1">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-amber text-amber" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-navy text-lg sm:text-xl font-medium leading-relaxed italic">
                "{current.review}"
              </p>
            </div>

            {/* User Bio */}
            <div className="border-t border-slate-100 pt-6 mt-8">
              <h4 className="font-heading font-bold text-navy text-base">
                {current.client}
              </h4>
              <p className="text-xs text-slate-500 font-medium">
                {current.company}
              </p>
            </div>

          </div>

          {/* Slider controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-navy hover:bg-amber hover:text-navy hover:border-amber transition-all shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-navy hover:bg-amber hover:text-navy hover:border-amber transition-all shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

