import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import SEO from '@/components/ui/SEO'
import TurnstileWidget from '@/components/ui/TurnstileWidget'
import { MapPin, Phone, Mail, Clock, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react'

export default function ContactPage() {
  const { t } = useTranslation()
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!turnstileToken) {
      setTurnstileError(true)
      return
    }

    setSubmitting(true)
    setTurnstileError(false)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY || '4cc8bfa5-d4db-4ffd-ad4a-02cde4020861',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject || `Engineering Inquiry from ${formData.name}`,
          message: formData.message,
          from_name: 'BMEL Website Contact'
        })
      })
      const data = await response.json()
      if (response.status === 200) {
        setSubmitted(true)
      } else {
        alert(data.message || 'Submission failed. Please try again.')
      }
    } catch (err) {
      console.error(err)
      alert('Network error. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const branches = [
    {
      city: t('contact.head_office_title'),
      address: t('contact.head_office_address')
    },
    {
      city: t('contact.branch_office_title'),
      address: t('contact.branch_office_address')
    },
  ]

  return (
    <>
      <SEO
        title="Contact Us — Office Locations & Support"
        description="Get in touch with Brownforte Mechanical Engineering Limited (BMEL). Reach us on 07063332335, email brownfortemechanical@gmail.com, or visit our offices in Lagos (Ogudu Ojota) and Yenagoa, Bayelsa State."
      />

      {/* Header */}
      <section className="site-gradient-bg py-20 text-slate-900 border-b border-slate-200/60 relative">
        <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />
        <div className="container-xl relative z-10 text-center">
          <span className="text-amber-600 font-heading font-bold text-xs uppercase tracking-widest">{t('contact.connect')}</span>
          <h1 className="text-4xl sm:text-5xl font-black text-navy mt-2">{t('contact.title')}</h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto mt-4">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Layout */}
      <section className="section-pad site-gradient-bg">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column - Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-heading font-bold text-navy mb-6">{t('contact.corporate_offices')}</h2>
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
                <span>{t('contact.phone')}</span>
              </a>
              <a href="mailto:brownfortemechanical@gmail.com" className="flex items-center gap-3 text-sm text-slate-600 hover:text-amber transition-colors">
                <Mail size={16} className="text-amber" />
                <span>{t('contact.email')}</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Clock size={16} className="text-amber" />
                <span>{t('contact.hours')}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7">
            <div className="border border-slate-100 rounded-xl p-8 shadow-card bg-slate-50/55">
              <h3 className="font-heading font-bold text-navy text-xl mb-6">{t('contact.form_heading')}</h3>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4 text-emerald-500">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="font-heading font-bold text-navy text-lg mb-2">{t('contact.success_title')}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {t('contact.success_message')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">{t('contact.label_name')}</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber/50"
                        placeholder={t('contact.placeholder_name')}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">{t('contact.label_phone')}</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber/50"
                        placeholder={t('contact.placeholder_phone')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">{t('contact.label_email')}</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber/50"
                      placeholder={t('contact.placeholder_email')}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">{t('contact.label_subject')}</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber/50"
                      placeholder={t('contact.placeholder_subject')}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">{t('contact.label_message')}</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-amber/50 resize-none"
                      placeholder={t('contact.placeholder_message')}
                    />
                  </div>

                  {/* Cloudflare Turnstile Anti-Spam Protection */}
                  <div className="pt-2">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                      <ShieldCheck size={14} className="text-emerald-500" />
                      <span>{t('contact.turnstile_protected')}</span>
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
                        {t('contact.turnstile_required')}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full justify-center text-sm py-3 mt-2"
                  >
                    {submitting ? t('contact.sending') : t('contact.send_button')}
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


