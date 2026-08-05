import { useState } from 'react'
import SEO from '@/components/ui/SEO'
import TurnstileWidget from '@/components/ui/TurnstileWidget'
import { MapPin, Phone, Mail, Clock, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const [turnstileError, setTurnstileError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!turnstileToken) {
      setTurnstileError(true)
      return
    }

    setSubmitting(true)
    setTurnstileError(false)

    // Simulate API request
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1500)
  }

  const branches = [
    {
      city: 'Head Office — Lagos',
      address: 'No. 32 Eylaro Street, Ogudu Ojota, Lagos'
    },
    {
      city: 'Branch Office — Bayelsa',
      address: 'No. 21 Daewoo Road, Ox-Bow Lake, Yenagoa, Bayelsa State'
    },
  ]

  return (
    <>
      <SEO
        title="Contact Us — Office Locations & Support"
        description="Get in touch with Brownforte Mechanical Engineering Limited (BMEL). Reach us on 07063332335, email brownfortemechanical@gmail.com, or visit our offices in Lagos (Ogudu Ojota) and Yenagoa, Bayelsa State."
      />

      {/* Header */}
      <section className="bg-navy py-20 text-white relative">
        <div className="absolute inset-0 dot-grid-bg opacity-15 pointer-events-none" />
        <div className="container-xl relative z-10 text-center">
          <span className="text-amber font-heading font-semibold text-sm uppercase tracking-widest">Connect</span>
          <h1 className="text-4xl sm:text-5xl font-black mt-2">Contact Our Sales & Support Team</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto mt-4">
            We are available for consultations, site visits, and support requests.
          </p>
        </div>
      </section>

      {/* Layout */}
      <section className="section-pad bg-white">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column - Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-heading font-bold text-navy mb-6">Corporate Offices</h2>
              <div className="space-y-6">
                {branches.map((b, idx) => (
                  <div key={idx} className="flex gap-3">
                    <MapPin size={18} className="text-amber mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold text-navy text-sm uppercase tracking-wider">{b.city}</h4>
                      <p className="text-xs text-slate-500 mt-1">{b.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-100 pt-8 space-y-4">
              <a href="tel:07063332335" className="flex items-center gap-3 text-sm text-slate-600 hover:text-amber transition-colors">
                <Phone size={16} className="text-amber" />
                <span>07063332335</span>
              </a>
              <a href="mailto:brownfortemechanical@gmail.com" className="flex items-center gap-3 text-sm text-slate-600 hover:text-amber transition-colors">
                <Mail size={16} className="text-amber" />
                <span>brownfortemechanical@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Clock size={16} className="text-amber" />
                <span>Business Hours: Mon – Fri, 8AM – 6PM WAT</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7">
            <div className="border border-slate-100 rounded-xl p-8 shadow-card bg-slate-50/55">
              <h3 className="font-heading font-bold text-navy text-xl mb-6">Send Us a Message</h3>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4 text-emerald-500">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="font-heading font-bold text-navy text-lg mb-2">Message Sent!</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Thank you. Your message has been routed to our sales and engineering support department. We will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber/50"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber/50"
                        placeholder="e.g., +234 80 1234 5678"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber/50"
                      placeholder="name@company.com"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Subject *</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber/50"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Message *</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber/50 resize-none"
                      placeholder="Detail your inquiry..."
                    />
                  </div>

                  {/* Cloudflare Turnstile Anti-Spam Protection */}
                  <div className="pt-2">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                      <ShieldCheck size={14} className="text-emerald-500" />
                      <span>Protected by Cloudflare Turnstile Anti-Spam</span>
                    </div>

                    <TurnstileWidget
                      onVerify={(token) => {
                        setTurnstileToken(token)
                        setTurnstileError(false)
                      }}
                      onExpire={() => setTurnstileToken(null)}
                      onError={() => setTurnstileToken(null)}
                    />

                    {turnstileError && (
                      <div className="flex items-center gap-2 text-xs text-rose-600 font-medium bg-rose-50 p-2.5 rounded-lg border border-rose-200 mt-2">
                        <AlertCircle size={14} className="flex-shrink-0" />
                        Please complete the Cloudflare security verification before submitting.
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full justify-center text-sm py-3 mt-2"
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

