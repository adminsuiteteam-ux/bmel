import { Link } from 'react-router-dom'
import { ArrowRight, PhoneCall } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 site-gradient-bg relative overflow-hidden">
      {/* Background visual filters */}
      <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />

      <div className="container-xl relative z-10 text-center max-w-3xl mx-auto">
        <div className="bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-xl">
          <span className="text-amber-600 font-heading font-bold text-xs uppercase tracking-widest">
            Need an Engineering Partner?
          </span>
          
          <h2 className="font-heading font-black text-navy text-3xl sm:text-4xl lg:text-5xl mt-3 mb-6 leading-tight">
            Let's Design and Build Your Next Mechanical System
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Get in touch with our engineering team today for custom blueprints, volume specifications, and detailed budgetary quotation drafts.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary group w-full sm:w-auto justify-center shadow-lg">
              Get a Free Consultation
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:07063332335"
              className="btn-secondary w-full sm:w-auto justify-center flex items-center gap-2 bg-white border border-slate-300 text-slate-800 hover:bg-slate-50"
            >
              <PhoneCall size={16} />
              <span>Speak to Sales</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

