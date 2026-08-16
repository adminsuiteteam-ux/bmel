import { useState } from 'react'
import SEO from '@/components/ui/SEO'
import { Link } from 'react-router-dom'
import { Calendar, MapPin, Search } from 'lucide-react'
import { mockProjects } from '@/data/mockData'
import { useTranslation } from 'react-i18next'

export default function ProjectsPage() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')

  const categories = ['All', 'Water Treatment', 'Tank Installation', 'Fabrication', 'Maintenance']

  const filteredProjects = mockProjects.filter(project => {
    // Category mapping logic matches labels to project services rendered
    const matchesCategory =
      filter === 'All' ||
      project.servicesRendered.some(service => {
        if (filter === 'Water Treatment') return service.toLowerCase().includes('water')
        if (filter === 'Tank Installation') return service.toLowerCase().includes('tank')
        if (filter === 'Fabrication') return service.toLowerCase().includes('fabrication')
        if (filter === 'Maintenance') return service.toLowerCase().includes('maintenance')
        return false
      })

    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.location.toLowerCase().includes(search.toLowerCase()) ||
      project.industry.toLowerCase().includes(search.toLowerCase())

    return matchesCategory && matchesSearch
  })

  return (
    <>
      <SEO
        title="Project Portfolio — Sectional Tanks & Treatment Plants"
        description="Browse our completed and ongoing mechanical projects in Nigeria including municipal water treatment installations, process piping, and steel tanks."
      />

      {/* Header */}
      <section className="site-gradient-bg py-20 text-slate-900 border-b border-slate-200/60 relative">
        <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />
        <div className="container-xl relative z-10 text-center">
          <span className="text-amber-600 font-heading font-bold text-xs uppercase tracking-widest">{t('projects.portfolio_label')}</span>
          <h1 className="text-4xl sm:text-5xl font-black text-navy mt-2">{t('projects.title')}</h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto mt-4">
            {t('projects.subtitle')}
          </p>
        </div>
      </section>

      {/* Projects Grid + Filter controls */}
      <section className="section-pad site-gradient-bg">
        <div className="container-xl">
          
          {/* Controls Bar */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                    filter === cat
                      ? 'bg-amber text-navy shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72 flex items-center">
              <Search size={16} className="absolute left-3 text-slate-400 pointer-events-none z-10" />
              <input
                type="text"
                placeholder="Search location, client, title..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 pl-10 text-sm focus:outline-none focus:border-amber/50 transition-colors"
              />
            </div>

          </div>

          {/* Grid */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-500">{t('projects.no_matches')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <div
                  key={project.slug}
                  className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-card card-hover flex flex-col h-full"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 z-10">
                      <span className={`inline-block px-2.5 py-1 rounded text-[10px] font-heading font-bold uppercase tracking-wider ${
                        project.status === 'Completed'
                          ? 'bg-emerald-500 text-white'
                          : 'bg-amber text-navy'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-amber font-heading font-bold text-xs uppercase tracking-widest block mb-2">
                        {project.industry}
                      </span>
                      <h3 className="font-heading font-bold text-navy text-lg mb-3 leading-tight hover:text-amber-600 transition-colors">
                        <Link to={`/projects/${project.slug}`}>{project.title}</Link>
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-3 mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-2 border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <MapPin size={13} className="text-amber flex-shrink-0" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Calendar size={13} className="text-amber flex-shrink-0" />
                        <span>{t('projects.completed')} {project.completionDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </>
  )
}

