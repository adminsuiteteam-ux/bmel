import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Phone, Mail, MapPin, Globe, Share2, ArrowRight, ChevronRight
} from 'lucide-react'

const serviceKeys = [
  { key: 'borehole_drilling', href: '/services/borehole-drilling' },
  { key: 'water_treatment', href: '/services/water-treatment' },
  { key: 'plumbing_installations', href: '/services/plumbing-installations' },
  { key: 'firefighting_systems', href: '/services/firefighting-systems' },
  { key: 'swimming_pool', href: '/services/swimming-pool-engineering' },
  { key: 'sewage_treatment', href: '/services/sewage-treatment-plants' },
  { key: 'irrigation_systems', href: '/services/irrigation-systems' },
  { key: 'pumping_solutions', href: '/services/pumping-solutions' },
  { key: 'facility_maintenance', href: '/services/facility-maintenance' },
]

const quickLinkKeys = [
  { key: 'about', href: '/about' },
  { key: 'projects', href: '/projects' },
  { key: 'industries', href: '/industries' },
  { key: 'blog', href: '/blog' },
  { key: 'careers', href: '/careers' },
  { key: 'downloads', href: '/downloads' },
  { key: 'certifications', href: '/certifications' },
  { key: 'faq', href: '/faq' },
]

const socials = [
  { icon: Globe, href: '#', label: 'Website' },
  { icon: Share2, href: '#', label: 'Share' },
]

export default function Footer() {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) { setSubscribed(true); setEmail('') }
  }

  return (
    <footer className="bg-navy border-t border-white/5">

      {/* Main Footer Grid */}
      <div className="container-xl py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand Column */}
        <div className="lg:col-span-1">
          <Link to="/" className="inline-block mb-5">
            <img
              src={`${import.meta.env.BASE_URL}bmel-logo.png`}
              alt="Brownforte Mechanical Engineering Limited"
              className="h-10 sm:h-12 lg:h-13 w-auto object-contain hover:scale-105 transition-all duration-300"
            />
          </Link>
          <p className="text-white/50 text-sm leading-relaxed mb-6">
            {t('footer.brand_description')}
          </p>
          <div className="flex gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-amber hover:border-amber/30 hover:bg-amber/10 transition-all"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-widest mb-5">
            {t('footer.services_heading')}
          </h4>
          <ul className="space-y-2.5">
            {serviceKeys.map(s => (
              <li key={s.href}>
                <Link
                  to={s.href}
                  className="flex items-center gap-2 text-white/50 text-sm hover:text-amber transition-colors group"
                >
                  <ChevronRight size={12} className="text-amber/40 group-hover:text-amber transition-colors" />
                  {t(`footer.services.${s.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-widest mb-5">
            {t('footer.quick_links_heading')}
          </h4>
          <ul className="space-y-2.5">
            {quickLinkKeys.map(l => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  className="flex items-center gap-2 text-white/50 text-sm hover:text-amber transition-colors group"
                >
                  <ChevronRight size={12} className="text-amber/40 group-hover:text-amber transition-colors" />
                  {t(`footer.quick_links.${l.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Newsletter */}
        <div>
          <h4 className="text-white font-heading font-semibold text-sm uppercase tracking-widest mb-5">
            {t('footer.contact_heading')}
          </h4>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-sm text-white/50">
              <MapPin size={15} className="text-amber mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white/70 font-semibold text-xs uppercase tracking-wider mb-0.5">{t('footer.head_office')}</p>
                <span>No. 32 Eylaro Street, Ogudu Ojota, Lagos</span>
              </div>
            </li>
            <li className="flex items-start gap-3 text-sm text-white/50">
              <MapPin size={15} className="text-amber mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white/70 font-semibold text-xs uppercase tracking-wider mb-0.5">{t('footer.branch_office')}</p>
                <span>No. 21 Daewoo Road, Ox-Bow Lake, Yenagoa, Bayelsa State</span>
              </div>
            </li>
            <li>
              <a href="tel:07063332335" className="flex items-center gap-3 text-sm text-white/50 hover:text-amber transition-colors">
                <Phone size={15} className="text-amber flex-shrink-0" />
                07063332335
              </a>
            </li>
            <li>
              <a href="mailto:brownfortemechanical@gmail.com" className="flex items-center gap-3 text-sm text-white/50 hover:text-amber transition-colors">
                <Mail size={15} className="text-amber flex-shrink-0" />
                brownfortemechanical@gmail.com
              </a>
            </li>
          </ul>

          {/* Newsletter */}
          <div>
            <p className="text-white/60 text-xs uppercase tracking-widest font-semibold mb-3">{t('footer.newsletter_label')}</p>
            {subscribed ? (
              <p className="text-amber text-sm font-medium">{t('footer.newsletter_subscribed')}</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder={t('footer.newsletter_placeholder')}
                  required
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-amber/50 transition-colors"
                />
                <button
                  type="submit"
                  className="w-10 h-10 flex items-center justify-center bg-amber rounded-lg hover:bg-amber-400 transition-colors flex-shrink-0"
                >
                  <ArrowRight size={16} className="text-navy" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          <div className="flex gap-4">
            <Link to="/faq" className="hover:text-amber transition-colors">{t('footer.bottom_faq')}</Link>
            <span>·</span>
            <Link to="/downloads" className="hover:text-amber transition-colors">{t('footer.bottom_downloads')}</Link>
            <span>·</span>
            <Link to="/contact" className="hover:text-amber transition-colors">{t('footer.bottom_contact')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

