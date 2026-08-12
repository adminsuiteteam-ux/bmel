import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppWidget from '@/components/ui/WhatsAppWidget'
import CookieConsent from '@/components/ui/CookieConsent'
import { useEffect } from 'react'

export default function PageLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Global glowing ambient orbs */}
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="glow-orb glow-orb-blue w-[600px] h-[600px] -top-32 -left-32 opacity-60" style={{ animationDelay: '0s' }} />
        <div className="glow-orb glow-orb-navy w-[500px] h-[500px] top-1/2 -right-48 opacity-50" style={{ animationDelay: '4s' }} />
        <div className="glow-orb glow-orb-cyan w-[400px] h-[400px] bottom-0 left-1/3 opacity-40" style={{ animationDelay: '8s' }} />
      </div>
      <Navbar />
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppWidget />
      <CookieConsent />
    </div>
  )
}


