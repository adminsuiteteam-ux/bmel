import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  Menu, X, ChevronDown, Phone, Mail,
  Droplets, Settings, Building2, Wrench, HardHat, Factory,
  Newspaper, Briefcase, Download, Award, Users, MessageSquare,
  Search, FileText
} from 'lucide-react'

const services = [
  { key: 'water_treatment', slug: 'water-treatment', icon: Droplets },
  { key: 'pumping_systems', slug: 'pumping-systems', icon: Settings },
  { key: 'panel_tanks', slug: 'panel-tanks', icon: Building2 },
  { key: 'mechanical_fabrication', slug: 'mechanical-fabrication', icon: Wrench },
  { key: 'installation', slug: 'installation', icon: HardHat },
  { key: 'maintenance', slug: 'maintenance', icon: Factory },
]

const megaMenuLinks = [
  {
    titleKey: 'mega_company',
    links: [
      { labelKey: 'mega_links.about_us', href: '/about', icon: Users },
      { labelKey: 'mega_links.our_projects', href: '/projects', icon: Building2 },
      { labelKey: 'mega_links.industries', href: '/industries', icon: Factory },
      { labelKey: 'mega_links.certifications', href: '/certifications', icon: Award },
    ]
  },
  {
    titleKey: 'mega_resources',
    links: [
      { labelKey: 'mega_links.blog', href: '/blog', icon: Newspaper },
      { labelKey: 'mega_links.gallery', href: '/gallery', icon: Building2 },
      { labelKey: 'mega_links.downloads', href: '/downloads', icon: Download },
      { labelKey: 'mega_links.testimonials', href: '/testimonials', icon: MessageSquare },
    ]
  },
  {
    titleKey: 'mega_work_with_us',
    links: [
      { labelKey: 'mega_links.careers', href: '/careers', icon: Briefcase },
      { labelKey: 'mega_links.faq', href: '/faq', icon: FileText },
      { labelKey: 'mega_links.contact', href: '/contact', icon: Phone },
      { labelKey: 'mega_links.get_quote', href: '/quote', icon: Mail },
    ]
  },
]

export default function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)
  const location = useLocation()
  const servicesRef = useRef<HTMLDivElement>(null)
  const companyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
    setCompanyOpen(false)
  }, [location])

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false)
      if (companyRef.current && !companyRef.current.contains(e.target as Node)) setCompanyOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-200 hover:text-amber ${
      isActive ? 'text-amber' : 'text-white/80'
    }`

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:flex bg-navy-700 border-b border-white/5">
        <div className="container-xl w-full flex justify-between items-center py-2 text-xs text-white/60">
          <div className="flex items-center gap-6">
            <a href="mailto:brownfortemechanical@gmail.com" className="flex items-center gap-1.5 hover:text-amber transition-colors">
              <Mail size={12} /> {t('navbar.email')}
            </a>
            <a href="tel:07063332335" className="flex items-center gap-1.5 hover:text-amber transition-colors">
              <Phone size={12} /> {t('navbar.phone')}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span>{t('navbar.hours')}</span>
            <Link to="/contact" className="text-amber font-semibold hover:underline">
              {t('navbar.request_quote')}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy/90 backdrop-blur-lg shadow-card border-b border-amber/20'
            : 'bg-navy'
        }`}
      >
        <div className="container-xl flex items-center justify-between h-16 lg:h-18">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="BMEL Logo" className="w-10 h-10 rounded-lg group-hover:scale-105 transition-transform shadow-glow-blue" />
            <div className="hidden sm:block">
              <div className="text-white font-heading font-bold text-base leading-tight">{t('navbar.logo_name')}</div>
              <div className="text-amber text-[10px] font-medium tracking-widest uppercase leading-tight">
                {t('navbar.logo_tagline')}
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <NavLink to="/" end className={navLinkClass}>{t('navbar.nav_home')}</NavLink>
            <NavLink to="/about" className={navLinkClass}>{t('navbar.nav_about')}</NavLink>

            {/* Services Dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => { setServicesOpen(!servicesOpen); setCompanyOpen(false) }}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-amber ${
                  servicesOpen ? 'text-amber' : 'text-white/80'
                }`}
              >
                {t('navbar.nav_services')} <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 mt-2 w-72 glass-dark rounded-xl shadow-xl border border-white/10 p-3 z-50"
                  >
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 group transition-colors"
                      >
                        <div className="w-8 h-8 bg-amber/10 rounded-lg flex items-center justify-center group-hover:bg-amber/20 transition-colors">
                          <s.icon size={15} className="text-amber" />
                        </div>
                        <span className="text-white/80 text-sm group-hover:text-white transition-colors">{t(`navbar.services.${s.key}`)}</span>
                      </Link>
                    ))}
                    <div className="border-t border-white/10 mt-2 pt-2">
                      <Link to="/services" className="flex items-center justify-center gap-1 py-2 text-amber text-sm font-semibold hover:underline">
                        {t('navbar.view_all_services')}
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/projects" className={navLinkClass}>{t('navbar.nav_projects')}</NavLink>
            <NavLink to="/industries" className={navLinkClass}>{t('navbar.nav_industries')}</NavLink>

            {/* Company Mega Menu */}
            <div ref={companyRef} className="relative">
              <button
                onClick={() => { setCompanyOpen(!companyOpen); setServicesOpen(false) }}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-amber ${
                  companyOpen ? 'text-amber' : 'text-white/80'
                }`}
              >
                {t('navbar.nav_company')} <ChevronDown size={14} className={`transition-transform ${companyOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {companyOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full right-0 mt-2 w-[600px] glass-dark rounded-xl shadow-xl border border-white/10 p-6 z-50 grid grid-cols-3 gap-6"
                  >
                    {megaMenuLinks.map((col) => (
                      <div key={col.titleKey}>
                        <p className="text-amber text-xs font-semibold uppercase tracking-widest mb-3">{t(`navbar.${col.titleKey}`)}</p>
                        <div className="space-y-1">
                          {col.links.map((link) => (
                            <Link
                              key={link.href}
                              to={link.href}
                              className="flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-white/5 group transition-colors"
                            >
                              <link.icon size={14} className="text-amber/70 group-hover:text-amber transition-colors" />
                              <span className="text-white/70 text-sm group-hover:text-white transition-colors">{t(`navbar.${link.labelKey}`)}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/contact" className={navLinkClass}>{t('navbar.nav_contact')}</NavLink>
          </nav>

          {/* Right CTA + Search */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/search" className="w-9 h-9 flex items-center justify-center rounded-lg text-white/60 hover:text-amber hover:bg-white/5 transition-colors">
              <Search size={18} />
            </Link>
            <Link to="/contact" className="btn-primary text-sm py-2.5 px-5">
              {t('navbar.get_quote')}
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-amber transition-colors"
            aria-label={t('navbar.toggle_menu')}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Side Drawer Overlay & Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-xs z-50 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-navy border-l border-white/10 z-50 lg:hidden shadow-2xl flex flex-col justify-between overflow-y-auto"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between p-5 border-b border-white/10">
                  <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5">
                    <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="BMEL Logo" className="w-8 h-8 rounded-lg" />
                    <div>
                      <div className="text-white font-heading font-bold text-sm leading-tight">{t('navbar.logo_name')}</div>
                      <div className="text-amber text-[9px] font-medium tracking-widest uppercase">{t('navbar.logo_tagline')}</div>
                    </div>
                  </Link>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="w-9 h-9 flex items-center justify-center text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="p-5 flex flex-col gap-1">
                  <MobileLink to="/" onClick={() => setMobileOpen(false)}>{t('navbar.nav_home')}</MobileLink>
                  <MobileLink to="/about" onClick={() => setMobileOpen(false)}>{t('navbar.nav_about')}</MobileLink>
                  <MobileLink to="/services" onClick={() => setMobileOpen(false)}>{t('navbar.nav_services')}</MobileLink>
                  <MobileLink to="/projects" onClick={() => setMobileOpen(false)}>{t('navbar.nav_projects')}</MobileLink>
                  <MobileLink to="/industries" onClick={() => setMobileOpen(false)}>{t('navbar.nav_industries')}</MobileLink>
                  <MobileLink to="/gallery" onClick={() => setMobileOpen(false)}>{t('navbar.mobile_gallery')}</MobileLink>
                  <MobileLink to="/blog" onClick={() => setMobileOpen(false)}>{t('navbar.mobile_blog')}</MobileLink>
                  <MobileLink to="/careers" onClick={() => setMobileOpen(false)}>{t('navbar.mobile_careers')}</MobileLink>
                  <MobileLink to="/downloads" onClick={() => setMobileOpen(false)}>{t('navbar.mobile_downloads')}</MobileLink>
                  <MobileLink to="/contact" onClick={() => setMobileOpen(false)}>{t('navbar.nav_contact')}</MobileLink>
                </nav>
              </div>

              {/* Bottom Actions */}
              <div className="p-5 border-t border-white/10 space-y-3">
                <Link to="/contact" onClick={() => setMobileOpen(false)} className="btn-primary w-full justify-center text-sm py-3">
                  {t('navbar.get_free_quote')}
                </Link>
                <div className="flex flex-col gap-2 pt-2 text-xs text-white/50">
                  <a href="tel:07063332335" className="flex items-center gap-2 hover:text-amber transition-colors">
                    <Phone size={13} className="text-amber" /> 07063332335
                  </a>
                  <a href="mailto:brownfortemechanical@gmail.com" className="flex items-center gap-2 hover:text-amber transition-colors">
                    <Mail size={13} className="text-amber" /> brownfortemechanical@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

function MobileLink({ to, children, indent, onClick }: { to: string; children: React.ReactNode; indent?: boolean; onClick?: () => void }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `block px-3.5 py-3 rounded-lg text-sm font-medium transition-colors ${
          indent ? 'pl-6' : ''
        } ${isActive ? 'bg-amber/10 text-amber font-semibold' : 'text-white/80 hover:text-white hover:bg-white/5'}`
      }
    >
      {children}
    </NavLink>
  )
}

