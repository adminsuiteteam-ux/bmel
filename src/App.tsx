import { lazy, Suspense, useState, useCallback } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PageLayout from '@/components/layout/PageLayout'
import ScrollToTop from '@/components/ui/ScrollToTop'
import { ThemeProvider } from '@/context/ThemeContext'
import Preloader from '@/components/ui/Preloader'

// Lazy-loaded pages for code splitting
const HomePage = lazy(() => import('@/pages/HomePage'))
const AboutPage = lazy(() => import('@/pages/AboutPage'))
const ServicesPage = lazy(() => import('@/pages/ServicesPage'))
const ServiceDetailPage = lazy(() => import('@/pages/ServiceDetailPage'))
const ProjectsPage = lazy(() => import('@/pages/ProjectsPage'))
const ProjectDetailPage = lazy(() => import('@/pages/ProjectDetailPage'))
const IndustriesPage = lazy(() => import('@/pages/IndustriesPage'))
const GalleryPage = lazy(() => import('@/pages/GalleryPage'))
const BlogPage = lazy(() => import('@/pages/BlogPage'))
const BlogPostPage = lazy(() => import('@/pages/BlogPostPage'))
const CareersPage = lazy(() => import('@/pages/CareersPage'))
const CareerDetailPage = lazy(() => import('@/pages/CareerDetailPage'))
const DownloadsPage = lazy(() => import('@/pages/DownloadsPage'))
const CertificationsPage = lazy(() => import('@/pages/CertificationsPage'))
const TestimonialsPage = lazy(() => import('@/pages/TestimonialsPage'))
const FAQPage = lazy(() => import('@/pages/FAQPage'))
const ContactPage = lazy(() => import('@/pages/ContactPage'))
const PricingPage = lazy(() => import('@/pages/PricingPage'))
const SearchPage = lazy(() => import('@/pages/SearchPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

function RouteLoader() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-3 border-amber border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  )
}

const HAS_VISITED_KEY = 'bmel_has_visited_site'

export default function App() {
  const [loading, setLoading] = useState(() => {
    try {
      // Allow overriding for testing via ?preview=true
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search)
        if (params.get('preview') === 'true') {
          return true
        }
      }
      return !localStorage.getItem(HAS_VISITED_KEY)
    } catch {
      return true
    }
  })

  const handleComplete = useCallback(() => {
    try {
      localStorage.setItem(HAS_VISITED_KEY, 'true')
    } catch {
      // fallback if storage is disabled
    }
    setLoading(false)
  }, [])

  return (
    <ThemeProvider>
      <ScrollToTop />
      {loading && <Preloader onComplete={handleComplete} />}
      <Suspense fallback={<RouteLoader />}>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/careers/:id" element={<CareerDetailPage />} />
            <Route path="/downloads" element={<DownloadsPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  )
}

