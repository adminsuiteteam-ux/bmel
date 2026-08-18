import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/context/ThemeContext'
import {
  Menu, X, ChevronDown, Phone, Mail,
  Droplets, Settings, Building2, Wrench, HardHat, Factory, Shield, Sprout, Zap,
  Newspaper, Briefcase, Download, Award, Users, MessageSquare,
  Search, FileText, Sun, Moon
} from 'lucide-react'

const services = [
  { key: 'borehole_drilling', slug: 'borehole-drilling', icon: Wrench },
  { key: 'water_treatment', slug: 'water-treatment', icon: Droplets },
  { key: 'plumbing_installations', slug: 'plumbing-installations', icon: Settings },
  { key: 'firefighting_systems', slug: 'firefighting-systems', icon: Shield },
  { key: 'swimming_pool', slug: 'swimming-pool-engineering', icon: Award },
  { key: 'sewage_treatment', slug: 'sewage-treatment-plants', icon: Building2 },
  { key: 'irrigation_systems', slug: 'irrigation-systems', icon: Sprout },
  { key: 'pumping_solutions', slug: 'pumping-solutions', icon: Zap },
  { key: 'facility_maintenance', slug: 'facility-maintenance', icon: HardHat },
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
  const { theme, toggleTheme } = useTheme()
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
    `text-sm font-medium transition-all duration-200 px-3.5 py-1.5 rounded-full hover:text-[#0077B6] dark:hover:text-sky-300 hover:bg-slate-900/5 dark:hover:bg-white/10 ${
      isActive ? 'text-[#0077B6] dark:text-sky-300 font-semibold bg-[#0077B6]/10 dark:bg-white/10 border border-[#0077B6]/30 shadow-sm' : 'text-slate-800 dark:text-white/90'
    }`

  return (
    <>
      {/* Main Floating White Transparent Glassmorphic Pill Navbar */}
      <div className="sticky top-3 sm:top-4 z-50 px-3 sm:px-6 max-w-7xl mx-auto w-full transition-all duration-300">
        <header
          className={`rounded-full transition-all duration-300 ${
            scrolled ? 'glass-navbar-scrolled' : 'glass-navbar'
          }`}
        >
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18 px-4 sm:px-6 lg:px-7">

            {/* Logo */}
            <Link to="/" className="flex items-center group flex-shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}bmel-logo.png`}
                alt="Brownforte Mechanical Engineering Limited"
                className="h-8 sm:h-10 lg:h-11 w-auto object-contain group-hover:scale-105 transition-all duration-300"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1.5">
              <NavLink to="/" end className={navLinkClass}>{t('navbar.nav_home')}</NavLink>
              <NavLink to="/about" className={navLinkClass}>{t('navbar.nav_about')}</NavLink>

              {/* Services Dropdown */}
              <div ref={servicesRef} className="relative">
                <button
                  onClick={() => { setServicesOpen(!servicesOpen); setCompanyOpen(false) }}
                  className={`flex items-center gap-1 text-sm font-medium transition-all duration-200 px-3.5 py-1.5 rounded-full hover:bg-slate-900/5 dark:hover:bg-white/10 hover:text-[#0077B6] dark:hover:text-sky-300 ${
                    servicesOpen ? 'text-[#0077B6] dark:text-sky-300 bg-[#0077B6]/10 dark:bg-white/10 border border-[#0077B6]/30' : 'text-slate-800 dark:text-white/90'
                  }`}
                >
                  {t('navbar.nav_services')} <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-0 mt-3 w-72 glass-dark rounded-3xl shadow-2xl border border-white/20 p-3.5 z-50 backdrop-blur-2xl"
                    >
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-2xl hover:bg-white/10 group transition-all duration-200"
                        >
                          <div className="w-8 h-8 bg-amber/15 rounded-xl flex items-center justify-center group-hover:bg-amber/30 group-hover:scale-110 transition-all duration-200">
                            <s.icon size={15} className="text-amber" />
                          </div>
                          <span className="text-white/85 text-sm group-hover:text-white transition-colors">{t(`navbar.services.${s.key}`)}</span>
                        </Link>
                      ))}
                      <div className="border-t border-white/15 mt-2 pt-2">
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
                  className={`flex items-center gap-1 text-sm font-medium transition-all duration-200 px-3.5 py-1.5 rounded-full hover:bg-slate-900/5 dark:hover:bg-white/10 hover:text-[#0077B6] dark:hover:text-sky-300 ${
                    companyOpen ? 'text-[#0077B6] dark:text-sky-300 bg-[#0077B6]/10 dark:bg-white/10 border border-[#0077B6]/30' : 'text-slate-800 dark:text-white/90'
                  }`}
                >
                  {t('navbar.nav_company')} <ChevronDown size={14} className={`transition-transform ${companyOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {companyOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full right-0 mt-3 w-[620px] glass-dark rounded-3xl shadow-2xl border border-white/20 p-6 z-50 grid grid-cols-3 gap-6 backdrop-blur-2xl"
                    >
                      {megaMenuLinks.map((col) => (
                        <div key={col.titleKey}>
                          <p className="text-amber text-xs font-bold uppercase tracking-widest mb-3">{t(`navbar.${col.titleKey}`)}</p>
                          <div className="space-y-1">
                            {col.links.map((link) => (
                              <Link
                                key={link.href}
                                to={link.href}
                                className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl hover:bg-white/10 group transition-all duration-200"
                              >
                                <link.icon size={14} className="text-amber/80 group-hover:text-amber transition-colors" />
                                <span className="text-white/80 text-sm group-hover:text-white transition-colors">{t(`navbar.${link.labelKey}`)}</span>
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

            {/* Right CTA + Search + Theme Toggle */}
            <div className="hidden lg:flex items-center gap-2.5">
              <Link to="/search" aria-label="Search" className="w-9 h-9 flex items-center justify-center rounded-full text-slate-700 dark:text-white/80 hover:text-[#0077B6] hover:bg-slate-900/5 dark:hover:bg-white/10 transition-all duration-200">
                <Search size={18} />
              </Link>
              {/* Dark mode toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="w-9 h-9 flex items-center justify-center rounded-full text-slate-700 dark:text-white/80 hover:text-[#0077B6] hover:bg-slate-900/5 dark:hover:bg-white/10 transition-all duration-300"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={theme}
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.25 }}
                  >
                    {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                  </motion.span>
                </AnimatePresence>
              </button>
              <Link to="/contact" className="btn-primary text-sm py-2 px-5 rounded-full shadow-lg shadow-amber/20 hover:scale-105 transition-all duration-300">
                {t('navbar.get_quote')}
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-slate-800 dark:text-white hover:text-[#0077B6] rounded-full hover:bg-slate-900/5 dark:hover:bg-white/10 transition-colors"
              aria-label={t('navbar.toggle_menu')}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </header>
      </div>

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
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9998] lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-[#03045E] border-l border-white/10 z-[9999] lg:hidden shadow-2xl flex flex-col justify-between overflow-y-auto"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between p-5 border-b border-white/10">
                  <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center">
                    <img
                      src={`${import.meta.env.BASE_URL}bmel-logo.png`}
                      alt="Brownforte Mechanical Engineering Limited"
                      className="h-8 sm:h-9 w-auto object-contain"
                    />
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
                {/* Dark mode toggle (mobile) */}
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-white/10 text-white/70 hover:text-amber hover:border-amber/30 text-sm font-medium transition-all duration-300"
                >
                  {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </button>
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

