import { Link } from 'react-router-dom'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import { mockProjects } from '../../data/mockData'
import { AnimatedCard, type CardColorVariant } from '../ui/AnimatedCard'

export default function FeaturedProjects() {
  // Show only first 3 projects as featured on home
  const featured = mockProjects.slice(0, 3)

  const variants: CardColorVariant[] = ['amber', 'emerald', 'cyan']

  return (
    <section className="section-pad site-gradient-bg">
      <div className="container-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <span className="section-label">Selected Portfolio</span>
            <h2 className="section-title mt-2 text-navy">Engineering In Action</h2>
            <p className="text-slate-600 mt-4 text-lg">
              Explore some of our recently completed and ongoing infrastructure developments delivered to top standards across Nigeria.
            </p>
          </div>
          <Link to="/projects" className="btn-outline group mt-6 md:mt-0 flex-shrink-0">
            View All Projects
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project, idx) => (
            <Link key={project.slug} to={`/projects/${project.slug}`} className="block h-full">
              <AnimatedCard
                index={`PRJ-${String(idx + 1).padStart(3, '0')}`}
                tag={project.status}
                title={project.title}
                description={project.description}
                imageSrc={project.images[0]}
                colorVariant={variants[idx % variants.length]}
                darkTheme={false}
                actionText="Read Case Study"
                className="h-full"
              >
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <MapPin size={14} className="text-amber-500 flex-shrink-0" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Calendar size={14} className="text-amber-500 flex-shrink-0" />
                    <span>Completed: {project.completionDate}</span>
                  </div>
                </div>
              </AnimatedCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}


