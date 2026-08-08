import { useState } from 'react'
import SEO from '@/components/ui/SEO'
import { useTranslation } from 'react-i18next'
import {
  CheckCircle2,
  XCircle,
  Star,
  Zap,
  Building2,
  Globe,
  Shield,
  Clock,
  RefreshCw,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

/* ─────────────────────────── Types ─────────────────────────── */

interface LineItem {
  label: string
  amount: string
  isFree?: boolean
}

interface Package {
  id: string
  badge: string
  name: string
  subtitle: string
  totalPrice: string
  popular: boolean
  Icon: React.ElementType
  gradientFrom: string
  gradientTo: string
  glowClass: string
  popularLabel?: string
  idealFor: string[]
  lineItems: LineItem[]
  monthlySupport: string
  annualRenewal: string
  delivery: string
  deliveryNote?: string
}

/* ─────────────────────────── Data ─────────────────────────── */

const packages: Package[] = [
  {
    id: 'basic',
    badge: 'Basic',
    name: 'Basic',
    subtitle: 'Perfect for small businesses, portfolios & startups',
    totalPrice: '₦250,000',
    popular: false,
    Icon: Globe,
    gradientFrom: '#0EA5E9',
    gradientTo: '#0369A1',
    glowClass: 'hover:shadow-xl',
    idealFor: ['Small businesses', 'Startups', 'NGOs', 'Churches', 'Portfolios', 'Company profiles'],
    lineItems: [
      { label: 'Website Development (up to 5 pages)', amount: '₦250,000' },
      { label: '.com Domain Registration (1 year)', amount: '₦28,000 Value' },
      { label: 'Web Hosting (1 year)', amount: '₦10,000 Value' },
      { label: 'SSL Certificate (1 year)', amount: 'FREE', isFree: true },
    ],
    monthlySupport: '₦5,000/month',
    annualRenewal: '₦49,000/year',
    delivery: '5–7 Working Days',
  },
  {
    id: 'premium',
    badge: 'Most Popular',
    name: 'Premium',
    subtitle: 'Ideal for engineering firms, schools & growing businesses',
    totalPrice: '₦350,000',
    popular: true,
    popularLabel: 'Most Popular',
    Icon: Zap,
    gradientFrom: '#F59E0B',
    gradientTo: '#D97706',
    glowClass: 'hover:shadow-xl',
    idealFor: ['Engineering firms', 'Schools', 'Hotels', 'Healthcare providers', 'SMEs', 'Organizations'],
    lineItems: [
      { label: 'React Dynamic Website + CMS', amount: '₦350,000' },
      { label: '.com Domain Registration (1 year)', amount: '₦28,000 Value' },
      { label: 'Web Hosting (1 year)', amount: '₦10,000 Value' },
      { label: 'Business Email Setup (1 Account)', amount: 'Included' },
      { label: 'SSL Certificate', amount: 'FREE', isFree: true },
    ],
    monthlySupport: '₦10,000/month',
    annualRenewal: '₦57,000/year',
    delivery: '10–15 Working Days',
    deliveryNote:
      'Includes Admin Dashboard, Blog/News, Gallery, Testimonials, Portfolio, Newsletter, Live Chat, Advanced SEO, API Integration, and 60 days free support.',
  },
  {
    id: 'business',
    badge: 'Enterprise',
    name: 'Business',
    subtitle: 'For large organizations, SaaS, ERP, CRM & custom systems',
    totalPrice: '₦550,000',
    popular: false,
    Icon: Building2,
    gradientFrom: '#7C3AED',
    gradientTo: '#5B21B6',
    glowClass: 'hover:shadow-xl',
    idealFor: [
      'Large organizations',
      'Logistics companies',
      'Manufacturing firms',
      'Hospitals / HR systems',
      'ERP / CRM / SaaS platforms',
    ],
    lineItems: [
      { label: 'React Frontend + Django Backend', amount: '₦550,000' },
      { label: '.com Domain Registration (1 year)', amount: '₦28,000 Value' },
      { label: 'Cloud Hosting (1 year)', amount: 'Included' },
      { label: 'Business Email Setup', amount: 'Included' },
      { label: 'Database Hosting', amount: 'Included' },
      { label: 'SSL Certificate', amount: 'FREE', isFree: true },
    ],
    monthlySupport: '₦20,000–₦50,000/month',
    annualRenewal: '₦78,000+/year',
    delivery: '3–6 Weeks',
  },
]

/* Feature comparison rows */
const comparisonRows = [
  { label: 'Number of Pages', values: ['Up to 5', 'Unlimited', 'Unlimited'] },
  { label: 'Technology', values: ['HTML5 / CSS3 / JS', 'React + CMS', 'React + Django'] },
  { label: 'Mobile Responsive', values: [true, true, true] },
  { label: 'Contact Form', values: ['Basic', 'Advanced + file uploads', 'Advanced + CRM'] },
  { label: 'WhatsApp Integration', values: [true, true, true] },
  { label: 'Google Maps', values: [true, true, true] },
  { label: 'SEO Optimization', values: ['Basic on-page', 'Advanced SEO', 'Enterprise SEO'] },
  { label: 'Google Analytics', values: [true, true, true] },
  { label: 'Blog / News', values: [false, true, true] },
  { label: 'Project Gallery', values: [false, 'Filterable + lightbox', 'Interactive + case studies'] },
  { label: 'Admin Dashboard', values: [false, true, 'Full-featured CMS'] },
  { label: 'CMS / Dynamic Content', values: [false, true, true] },
  { label: 'Payment Gateway', values: [false, false, true] },
  { label: 'AI Chatbot', values: [false, false, true] },
  { label: 'Multi-User / Role-Based Access', values: [false, false, true] },
  { label: 'Database Integration', values: [false, true, 'PostgreSQL / MySQL'] },
  { label: 'API Integration', values: [false, true, true] },
  { label: 'Email & SMS Notifications', values: [false, true, true] },
  { label: 'Automated Backups', values: [false, false, 'Daily'] },
  { label: 'Free Technical Support', values: ['30 Days', '60 Days', '90 Days'] },
  { label: 'Delivery Timeline', values: ['5–7 Working Days', '10–15 Working Days', '3–6 Weeks'] },
]

const maintenancePlans = [
  { pkg: 'Basic', monthly: '₦5,000/month', annual: '₦51,000/year' },
  { pkg: 'Premium', monthly: '₦10,000/month', annual: '₦102,000/year' },
  { pkg: 'Business', monthly: '₦20,000–₦50,000/month', annual: 'Custom pricing' },
]

const whyUs = [
  { Icon: Sparkles, title: 'Modern & Responsive Designs', desc: 'Pixel-perfect interfaces built for every screen size.' },
  { Icon: Shield, title: 'Secure & Scalable Solutions', desc: 'Industry-grade security hardening and cloud-ready architecture.' },
  { Icon: Globe, title: 'SEO-Optimized Websites', desc: 'Built to rank — from meta tags to Core Web Vitals.' },
  { Icon: Zap, title: 'Fast Loading Performance', desc: 'Optimized assets and caching for sub-second load times.' },
  { Icon: CheckCircle2, title: 'Cross-Browser Compatibility', desc: 'Tested across Chrome, Firefox, Safari, Edge and more.' },
  { Icon: RefreshCw, title: 'Clean & Maintainable Code', desc: 'Documented, version-controlled, and easy to extend.' },
  { Icon: Clock, title: 'Timely Project Delivery', desc: 'We respect your deadlines — always.' },
  { Icon: Star, title: 'Transparent Pricing', desc: 'No hidden fees. What you see is what you pay.' },
]

/* ─────────────────────────── Helpers ────────────────────────── */

function BoolCell({ val }: { val: boolean | string }) {
  if (val === true)
    return <CheckCircle2 size={16} className="text-emerald-500 mx-auto" />
  if (val === false)
    return <XCircle size={16} className="text-slate-300 mx-auto" />
  return <span className="text-xs text-slate-600 text-center block">{val}</span>
}

/* ─────────────────────────── Component ─────────────────────── */

export default function PricingPage() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState<'cards' | 'compare'>('cards')

  return (
    <>
      <SEO
        title="Website Development Packages & Pricing"
        description="Explore our website development plans — Basic ₦250,000 · Premium ₦350,000 · Business ₦550,000. Transparent, all-inclusive pricing for Nigerian businesses."
        keywords="website development Nigeria, web design packages Lagos, React Django website price, CMS website Nigeria, enterprise web app development"
      />

      {/* ── Hero ── */}
      <section className="site-gradient-bg py-24 text-slate-900 border-b border-slate-200/60 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />

        <div className="container-xl relative z-10 text-center">
          <span className="section-label">{t('pricing.web_dev')}</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy mt-3 leading-tight">
            Website Development
            <span className="block text-amber-600">{t('pricing.packages')} & Pricing</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
            Four tiers — from a polished 5-page site to a full-scale enterprise platform.
            Transparent, all-inclusive pricing with no hidden fees.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
            {['React & Django Stack', 'All-Inclusive Pricing', 'Secure by Design', 'Fast Delivery'].map(tag => (
              <span key={tag} className="bg-white/10 border border-white/15 text-white/80 rounded-full px-4 py-1.5 backdrop-blur-sm">
                ✦ {tag}
              </span>
            ))}
          </div>

          {/* Tab toggle */}
          <div className="mt-10 inline-flex bg-white/10 border border-white/15 rounded-xl p-1 backdrop-blur-sm">
            {(['cards', 'compare'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-lg text-sm font-heading font-semibold transition-all ${
                  activeTab === tab
                    ? 'bg-amber text-navy shadow-md'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {tab === 'cards' ? '📦 Package Cards' : '⚖️ Compare All'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Package Cards ── */}
      {activeTab === 'cards' && (
        <section className="section-pad bg-gradient-to-b from-slate-50 to-white">
          <div className="container-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
              {packages.map(pkg => {
                const Icon = pkg.Icon
                return (
                  <div
                    key={pkg.id}
                    className={`relative rounded-2xl border overflow-hidden transition-all duration-500 flex flex-col ${
                      pkg.popular
                        ? 'border-amber shadow-[0_8px_40px_rgba(245,158,11,0.22)] xl:-mt-4 xl:mb-4'
                        : 'border-slate-200 shadow-card'
                    } ${pkg.glowClass}`}
                  >
                    {/* Popular ribbon */}
                    {pkg.popular && (
                      <div className="bg-amber text-navy text-xs font-heading font-bold tracking-widest uppercase text-center py-1.5">
                        ★ {pkg.popularLabel}
                      </div>
                    )}

                    {/* Header */}
                    <div
                      className="p-6 text-white"
                      style={{
                        background: `linear-gradient(135deg, ${pkg.gradientFrom} 0%, ${pkg.gradientTo} 100%)`,
                      }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <span className="bg-white/20 text-white text-xs font-heading font-semibold uppercase tracking-widest rounded-full px-3 py-1">
                          {pkg.badge}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                          <Icon size={20} />
                        </div>
                      </div>
                      <h2 className="text-2xl font-heading font-black leading-tight">{pkg.name}</h2>
                      <p className="text-white/70 text-xs mt-1 leading-snug">{pkg.subtitle}</p>
                      <div className="mt-5 border-t border-white/20 pt-4">
                        <p className="text-white/60 text-xs uppercase tracking-wider font-heading">{t('pricing.total_setup')}</p>
                        <p className="text-3xl font-black font-heading mt-1">{pkg.totalPrice}</p>
                      </div>
                    </div>

                    {/* Delivery + Ideal For */}
                    <div className="bg-white border-b border-slate-100 px-5 py-3">
                      <div className="flex items-center gap-2 text-slate-500 text-xs mb-3">
                        <Clock size={12} className="text-amber flex-shrink-0" />
                        <span className="font-semibold">{t('pricing.delivery')}</span>
                        <span>{pkg.delivery}</span>
                      </div>
                      <p className="text-xs font-heading font-semibold text-slate-400 uppercase tracking-wider mb-1.5">{t('pricing.ideal_for')}</p>
                      <div className="flex flex-wrap gap-1">
                        {pkg.idealFor.map(item => (
                          <span key={item} className="text-xs bg-slate-100 text-slate-600 rounded-full px-2 py-0.5">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Cost breakdown */}
                    <div className="bg-white px-5 py-4 flex-1">
                      <p className="text-xs font-heading font-bold text-slate-400 uppercase tracking-wider mb-3">{t('pricing.cost_breakdown')}</p>
                      <ul className="space-y-2">
                        {pkg.lineItems.map(item => (
                          <li key={item.label} className="flex items-start justify-between gap-2 text-xs">
                            <span className="text-slate-600 leading-snug">{item.label}</span>
                            <span
                              className={`font-heading font-bold whitespace-nowrap flex-shrink-0 ${
                                item.isFree ? 'text-emerald-500' : 'text-navy'
                              }`}
                            >
                              {item.amount}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Total row */}
                      <div className="mt-3 pt-3 border-t-2 border-amber/40 flex justify-between items-center">
                        <span className="text-xs font-heading font-bold text-navy uppercase tracking-wider">{t('pricing.total_setup')}</span>
                        <span className="font-heading font-black text-amber text-base">{pkg.totalPrice}</span>
                      </div>
                    </div>

                    {/* Support & Renewal */}
                    <div className="bg-slate-50 border-t border-slate-100 px-5 py-3 text-xs space-y-1.5">
                      <div className="flex justify-between">
                        <span className="text-slate-500">{t('pricing.monthly_support')}</span>
                        <span className="font-heading font-semibold text-slate-700">{pkg.monthlySupport}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">{t('pricing.annual_renewal')}</span>
                        <span className="font-heading font-semibold text-slate-700">{pkg.annualRenewal}</span>
                      </div>
                    </div>

                    {/* Delivery note */}
                    {pkg.deliveryNote && (
                      <div className="bg-amber/5 border-t border-amber/20 px-5 py-3">
                        <p className="text-xs text-amber-700 leading-relaxed">
                          <span className="font-bold">✦ Includes:</span> {pkg.deliveryNote}
                        </p>
                      </div>
                    )}

                    {/* CTA */}
                    <div className={`px-5 py-4 border-t ${pkg.popular ? 'bg-navy border-amber/20' : 'bg-white border-slate-100'}`}>
                      <a
                        href="/contact"
                        className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-heading font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 ${
                          pkg.popular
                            ? 'bg-[#0077B6] text-white hover:bg-[#03045E] shadow-md'
                            : 'bg-navy text-white hover:bg-navy/90'
                        }`}
                      >
                        Get This Package <ArrowRight size={15} />
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>

            <p className="text-center text-slate-400 text-sm mt-10 max-w-2xl mx-auto">
              All prices are in Nigerian Naira (₦). Payments can be structured as milestones.
              Contact us for custom requirements outside these packages.
            </p>
          </div>
        </section>
      )}

      {/* ── Feature Comparison Table ── */}
      {activeTab === 'compare' && (
        <section className="section-pad bg-gradient-to-b from-slate-50 to-white">
          <div className="container-xl">
            <div className="text-center mb-10">
              <span className="section-label">{t('pricing.side_by_side')}</span>
              <h2 className="section-title text-navy mt-2">{t('pricing.feature_comparison')}</h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left px-6 py-4 font-heading font-semibold text-xs uppercase tracking-wider w-[28%]">{t('pricing.feature')}</th>
                    {packages.map(p => (
                      <th key={p.id} className="px-4 py-4 font-heading font-semibold text-xs uppercase tracking-wider text-center">
                        <div className="flex flex-col items-center gap-1">
                          <p.Icon size={16} className="text-amber" />
                          <span>{p.name}</span>
                          <span className="text-amber font-black text-sm">{p.totalPrice}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-6 py-3 font-semibold text-slate-700 text-xs">{row.label}</td>
                      {row.values.map((val, vi) => (
                        <td key={vi} className="px-4 py-3 text-center">
                          <BoolCell val={val as boolean | string} />
                        </td>
                      ))}
                    </tr>
                  ))}
                  {/* Totals row */}
                  <tr className="bg-amber/10 border-t-2 border-amber/40">
                    <td className="px-6 py-4 font-heading font-bold text-navy text-xs uppercase tracking-wider">{t('pricing.total_setup_cost')}</td>
                    {packages.map(p => (
                      <td key={p.id} className="px-4 py-4 text-center">
                        <span className="font-heading font-black text-navy text-sm">{p.totalPrice}</span>
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-3 font-semibold text-slate-700 text-xs">{t('pricing.monthly_support')}</td>
                    {packages.map(p => (
                      <td key={p.id} className="px-4 py-3 text-center text-xs font-semibold text-slate-600">{p.monthlySupport}</td>
                    ))}
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-3 font-semibold text-slate-700 text-xs">{t('pricing.annual_renewal')}</td>
                    {packages.map(p => (
                      <td key={p.id} className="px-4 py-3 text-center text-xs font-semibold text-slate-600">{p.annualRenewal}</td>
                    ))}
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-3 font-semibold text-slate-700 text-xs">{t('pricing.delivery_timeline')}</td>
                    {packages.map(p => (
                      <td key={p.id} className="px-4 py-3 text-center text-xs font-semibold text-amber">{p.delivery}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-center text-slate-400 text-sm mt-6">
              All prices in Nigerian Naira (₦). Milestone payment plans available on request.
            </p>
          </div>
        </section>
      )}

      {/* ── Maintenance Plans ── */}
      <section className="section-pad bg-white border-t border-slate-100">
        <div className="container-xl">
          <div className="text-center mb-10">
            <span className="section-label">{t('pricing.ongoing_support')}</span>
            <h2 className="section-title text-navy mt-2">{t('pricing.maintenance')} & Support Plans</h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto mt-3">
              Keep your website secure, up-to-date, and performing at its best with one of our flexible support plans.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl border border-slate-200 shadow-card overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left px-6 py-4 font-heading font-semibold text-xs uppercase tracking-wider">{t('pricing.package')}</th>
                    <th className="px-6 py-4 font-heading font-semibold text-xs uppercase tracking-wider text-center">{t('pricing.monthly_plan')}</th>
                    <th className="px-6 py-4 font-heading font-semibold text-xs uppercase tracking-wider text-center">
                      Annual Plan <span className="text-amber">(save 15%)</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {maintenancePlans.map((row, i) => (
                    <tr key={row.pkg} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-6 py-3 font-semibold text-navy">{row.pkg}</td>
                      <td className="px-6 py-3 text-center font-heading font-bold text-slate-700">{row.monthly}</td>
                      <td className="px-6 py-3 text-center font-heading font-bold text-emerald-600">{row.annual}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Software updates & security patches',
                'Bug fixes & troubleshooting',
                'Minor content updates (text, images, blog)',
                'Monthly performance & uptime reports',
                'Email & phone support (24-hr response)',
                'Regular backups (weekly or daily)',
                'Uptime monitoring (99.9% SLA for Pro/Enterprise)',
                '4-hour response SLA for Enterprise',
              ].map(item => (
                <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle2 size={15} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section-pad bg-navy relative overflow-hidden">
        <div className="absolute inset-0 dot-grid-bg opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber via-amber-400 to-amber" />

        <div className="container-xl relative z-10">
          <div className="text-center mb-14">
            <span className="section-label">{t('pricing.our_commitment')}</span>
            <h2 className="section-title text-white mt-2">
              Why Clients Choose <span className="text-gradient">{t('pricing.brownforte')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map(item => {
              const Icon = item.Icon
              return (
                <div
                  key={item.title}
                  className="glass rounded-2xl p-6 group hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-11 h-11 rounded-xl bg-amber/15 flex items-center justify-center mb-4 group-hover:bg-amber/25 transition-colors">
                    <Icon size={20} className="text-amber" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-sm mb-1.5">{item.title}</h3>
                  <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-16 bg-gradient-to-r from-amber-400 via-amber to-orange-400">
        <div className="container-xl text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-navy">
            Ready to Build Your Digital Presence?
          </h2>
          <p className="text-navy/70 text-base mt-3 max-w-xl mx-auto">
            Pick a package, fill a short form, and our team will reach out within 24 hours
            with a full roadmap and milestone payment plan.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-navy text-amber font-heading font-bold px-8 py-3.5 rounded-xl hover:bg-navy/90 transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
            >
              Request a Quote <ArrowRight size={18} />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-navy text-navy font-heading font-bold px-8 py-3.5 rounded-xl hover:bg-navy hover:text-amber transition-all duration-200 hover:-translate-y-0.5"
            >
              Contact Us First
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

