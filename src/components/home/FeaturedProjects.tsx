import { Link } from 'react-router-dom'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { mockProjects } from '../../data/mockData'
import { AnimatedCard, type CardColorVariant } from '../ui/AnimatedCard'

export default function FeaturedProjects() {
  const { t } = useTranslation()
  const featured = mockProjects.slice(0, 3)
  const variants: CardColorVariant[] = ['navy', 'steel', 'amber']

  return (
    <section className="section-pad site-gradient-bg">
      <div className="container-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <span className="section-label">{t('projects.selected_portfolio', 'Selected Portfolio')}</span>
            <h2 className="section-title mt-2 text-navy">{t('projects.engineering_in_action', 'Engineering In Action')}</h2>
            <p className="text-slate-600 mt-4 text-lg">
              {t('projects.subtitle_featured', 'Explore some of our recently completed and ongoing infrastructure developments delivered to top standards across Nigeria.')}
            </p>
          </div>
          <Link to="/projects" className="btn-outline group mt-6 md:mt-0 flex-shrink-0">
            {t('projects.view_all', 'View All Projects')}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project, idx) => {
            const variant = variants[idx % variants.length] || 'amber'

            return (
              <Link key={project.slug} to={`/projects/${project.slug}`} className="block h-full">
                <AnimatedCard
                  index={`PRJ-${String(idx + 1).padStart(3, '0')}`}
                  tag={project.status}
                  title={project.title}
                  description={project.description}
                  imageSrc={project.images[0]}
                  colorVariant={variant}
                  darkTheme={false}
                  actionText={t('projects.read_case_study', 'Read Case Study')}
                  className="h-full"
                >
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <MapPin size={14} className="text-amber-500 flex-shrink-0" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Calendar size={14} className="text-amber-500 flex-shrink-0" />
                      <span>{t('projects.completed_label', 'Completed')}: {project.completionDate}</span>
                    </div>
                  </div>
                </AnimatedCard>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
