import { Link, useParams } from 'react-router-dom'
import SEO from '@/components/ui/SEO'
import { mockProjects } from '@/data/mockData'
import { ArrowLeft, Calendar, User, MapPin, Tag, Activity, Wrench } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function ProjectDetailPage() {
  const { t } = useTranslation()
  const { slug } = useParams<{ slug: string }>()
  const project = mockProjects.find(p => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-navy">{t('projects.not_found_title')}</h2>
        <p className="text-slate-500 mt-2">{t('projects.not_found_subtitle')}</p>
        <Link to="/projects" className="btn-primary mt-6">
          <ArrowLeft size={16} /> Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <>
      <SEO
        title={`${project.title} — Case Study`}
        description={project.description}
      />

      {/* Header */}
      <section className="site-gradient-bg py-20 text-slate-900 border-b border-slate-200/60 relative">
        <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />
        <div className="container-xl relative z-10">
          <Link to="/projects" className="inline-flex items-center gap-1.5 text-xs text-amber-600 font-bold hover:underline mb-4">
            <ArrowLeft size={12} /> Back to Projects
          </Link>
          <h1 className="text-3xl sm:text-5xl font-black text-navy max-w-4xl">{project.title}</h1>
        </div>
      </section>

      {/* Main Details */}
      <section className="section-pad bg-white">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column - Core Description */}
          <div className="lg:col-span-8 space-y-10">
            {/* Gallery Images & Videos */}
            <div className="grid grid-cols-1 gap-6">
              {project.images.map((media, idx) => {
                const ext = media.split('.').pop()?.toLowerCase();
                const isVideo = ['mp4', 'webm', 'mov', 'm4v', 'avi'].includes(ext || '');

                return (
                  <div key={idx} className="h-96 md:h-[480px] overflow-hidden rounded-xl border border-slate-100 shadow-sm bg-slate-900 relative">
                    {isVideo ? (
                      <video
                        controls
                        playsInline
                        preload="metadata"
                        poster="/images/achievers-farm-water-treatment.jpg"
                        className="w-full h-full object-cover rounded-xl"
                      >
                        <source src={media} type="video/mp4" />
                        <source src={media} type="video/webm" />
                        Your browser does not support HTML5 video playback.
                      </video>
                    ) : (
                      <img
                        src={media}
                        alt={`${project.title} Main image ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                )
              })}
            </div>

            {/* Overview */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-navy mb-4">{t('projects.overview')}</h2>
              <p className="text-slate-600 leading-relaxed text-base">{project.description}</p>
            </div>

            {/* Equipment Used */}
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-8">
              <h3 className="text-lg font-heading font-bold text-navy mb-4 flex items-center gap-2">
                <Wrench size={18} className="text-amber" />
                <span>{t('projects.equipment')} Infrastructure Specs</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.equipmentUsed.map((eq, idx) => (
                  <div key={idx} className="text-sm text-slate-600 flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg border border-slate-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                    <span>{eq}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Project Metadata card */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Project Details Box */}
            <div className="border border-slate-100 rounded-xl p-6 shadow-card bg-slate-50/50">
              <h3 className="font-heading font-bold text-navy text-base mb-6 border-b border-slate-200 pb-4">
                Project Parameters
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <User size={16} className="text-amber mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block">{t('projects.client')}</span>
                    <span className="text-sm font-semibold text-navy">{project.client}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-amber mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block">{t('projects.location')}</span>
                    <span className="text-sm font-semibold text-navy">{project.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar size={16} className="text-amber mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block">{t('projects.completion_date')}</span>
                    <span className="text-sm font-semibold text-navy">{project.completionDate}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Tag size={16} className="text-amber mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block">{t('projects.industry')}</span>
                    <span className="text-sm font-semibold text-navy">{project.industry}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Activity size={16} className="text-amber mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block">{t('projects.status')}</span>
                    <span className="text-sm font-semibold text-navy">{project.status}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Rendered Box */}
            <div className="border border-slate-100 rounded-xl p-6 shadow-card">
              <h4 className="font-heading font-bold text-navy text-sm uppercase tracking-wide mb-4">{t('projects.services_rendered')}</h4>
              <div className="flex flex-wrap gap-2">
                {project.servicesRendered.map((srv, idx) => (
                  <span key={idx} className="bg-navy/5 text-navy text-xs font-semibold px-3 py-1.5 rounded-lg border border-navy/5">
                    {srv}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

