import { useState } from 'react'
import SEO from '@/components/ui/SEO'
import { Link } from 'react-router-dom'
import { Search, ArrowRight, FileText, Droplets, BookOpen } from 'lucide-react'
import { mockServices, mockProjects, mockBlog } from '@/data/mockData'

interface SearchResult {
  title: string;
  type: 'Service' | 'Project' | 'Blog';
  link: string;
  desc: string;
}

export default function SearchPage() {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    if (!query) return []

    const results: SearchResult[] = []

    // 1. Search Services
    mockServices.forEach(s => {
      if (
        s.title.toLowerCase().includes(query.toLowerCase()) ||
        s.shortDesc.toLowerCase().includes(query.toLowerCase())
      ) {
        results.push({
          title: s.title,
          type: 'Service',
          link: `/services/${s.slug}`,
          desc: s.shortDesc,
        })
      }
    })

    // 2. Search Projects
    mockProjects.forEach(p => {
      if (
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.location.toLowerCase().includes(query.toLowerCase())
      ) {
        results.push({
          title: p.title,
          type: 'Project',
          link: `/projects/${p.slug}`,
          desc: p.description,
        })
      }
    })

    // 3. Search Blog
    mockBlog.forEach(b => {
      if (
        b.title.toLowerCase().includes(query.toLowerCase()) ||
        b.excerpt.toLowerCase().includes(query.toLowerCase())
      ) {
        results.push({
          title: b.title,
          type: 'Blog',
          link: `/blog/${b.slug}`,
          desc: b.excerpt,
        })
      }
    })

    return results
  }

  const results = handleSearch()

  return (
    <>
      <SEO
        title="Search — BMEL Engineering Portal"
        description="Search across services, completed engineering projects, and blog articles on the BMEL website."
      />

      {/* Header */}
      <section className="site-gradient-bg py-16 text-slate-900 border-b border-slate-200/60 relative">
        <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />
        <div className="container-xl relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-black text-navy">Search Portal</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad site-gradient-bg">
        <div className="container-xl max-w-2xl">
          
          {/* Input Bar */}
          <div className="relative mb-10">
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search services, project locations, specifications..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 pl-12 text-base focus:outline-none focus:border-amber/50 transition-colors shadow-sm"
              autoFocus
            />
            <Search size={20} className="absolute left-4 top-4.5 text-slate-400" />
          </div>

          {/* Results list */}
          {query && (
            <div className="space-y-6">
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Search Results ({results.length})
              </p>

              {results.length === 0 ? (
                <div className="text-center py-10 bg-slate-50 border border-slate-100 rounded-xl">
                  <p className="text-slate-500 text-sm">No matches found for "{query}".</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {results.map((r, idx) => (
                    <Link
                      key={idx}
                      to={r.link}
                      className="border border-slate-100 rounded-xl p-5 hover:border-amber/25 hover:shadow-card hover:bg-slate-50/50 transition-all flex justify-between items-center group block"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className={`text-[9px] font-heading font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                            r.type === 'Service'
                              ? 'bg-blue-50 text-blue-600 border border-blue-100'
                              : r.type === 'Project'
                                ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                                : 'bg-purple-50 text-purple-600 border border-purple-100'
                          }`}>
                            {r.type}
                          </span>
                          <h3 className="font-heading font-bold text-navy text-base group-hover:text-amber transition-colors">
                            {r.title}
                          </h3>
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{r.desc}</p>
                      </div>

                      <ArrowRight size={16} className="text-slate-400 group-hover:text-amber group-hover:translate-x-1 transition-all flex-shrink-0 ml-4" />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </section>
    </>
  )
}

