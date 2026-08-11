import { Link } from 'react-router-dom'
import SEO from '@/components/ui/SEO'
import { ArrowLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <>
      <SEO
        title="404 Page Not Found"
        description="The page you requested could not be found. Return to the BMEL homepage."
      />

      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center site-gradient-bg text-slate-900 relative">
        <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />
        
        <h1 className="text-8xl sm:text-9xl font-black text-amber-600 animate-pulse">404</h1>
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy mt-4">{t('not_found.title')}</h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-md mx-auto">
          The structural path or address you entered does not exist in our systems.
        </p>

        <Link to="/" className="btn-primary mt-8 gap-2">
          <ArrowLeft size={16} /> Return to Home
        </Link>
      </div>
    </>
  )
}

