import SEO from '@/components/ui/SEO'
import { Link } from 'react-router-dom'
import { MapPin, Briefcase, Calendar, ArrowRight } from 'lucide-react'
import { mockCareers } from '@/data/mockData'
import { useTranslation } from 'react-i18next'

export default function CareersPage() {
  const { t } = useTranslation()

  return (
    <>
      <SEO
        title="Careers — Join Our Engineering Team"
        description="Explore job openings, internships, and graduate programs at Brownforte Mechanical Engineering Limited. Apply online to join our team."
      />

      {/* Header */}
      <section className="site-gradient-bg py-20 text-slate-900 border-b border-slate-200/60 relative">
        <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />
        <div className="container-xl relative z-10 text-center">
          <span className="text-amber-600 font-heading font-bold text-xs uppercase tracking-widest">{t('careers.opportunities_label', 'Opportunities')}</span>
          <h1 className="text-4xl sm:text-5xl font-black text-navy mt-2">{t('careers.title', 'Join Our Engineering Team')}</h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto mt-4">
            {t('careers.subtitle', 'Build your professional engineering career at Nigeria\'s top mechanical fabrication and water infrastructure firm.')}
          </p>
        </div>
      </section>

      {/* Listings */}
      <section className="section-pad bg-white">
        <div className="container-xl max-w-4xl">
          
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-navy">{t('careers.open_roles', 'Current Open Positions')}</h2>
            <p className="text-sm text-slate-500 mt-1">{t('careers.open_roles_subtitle', 'Review active roles and submit your application online.')}</p>
          </div>

          <div className="space-y-6">
            {mockCareers.map(job => (
              <div
                key={job.id}
                className="border border-slate-100 rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div>
                  <span className="inline-block text-[10px] font-heading font-bold bg-navy text-amber px-2.5 py-1 rounded uppercase tracking-wider mb-3">
                    {job.type}
                  </span>
                  
                  <h3 className="font-heading font-bold text-navy text-lg mb-2">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Briefcase size={13} /> {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={13} /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={13} /> {t('careers.apply_by', 'Apply by')}: {job.deadline}
                    </span>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <Link
                    to={`/careers/${job.id}`}
                    className="btn-primary text-xs py-2 px-4 group"
                  >
                    {t('careers.view_details', 'View Details')}
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
