import SEO from '@/components/ui/SEO'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { mockBlog } from '@/data/mockData'

export default function BlogPage() {
  return (
    <>
      <SEO
        title="Blog & Engineering News"
        description="Read technical articles, industry updates, and company news from the engineering team at Brownforte Mechanical Engineering Limited."
      />

      {/* Header */}
      <section className="site-gradient-bg py-20 text-slate-900 border-b border-slate-200/60 relative">
        <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />
        <div className="container-xl relative z-10 text-center">
          <span className="text-amber-600 font-heading font-bold text-xs uppercase tracking-widest">Insights</span>
          <h1 className="text-4xl sm:text-5xl font-black text-navy mt-2">Engineering Blog & Updates</h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto mt-4">
            Technical guides, industry trends, and project updates from our engineering directors.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mockBlog.map((post) => (
              <div
                key={post.slug}
                className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all flex flex-col group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-navy text-amber text-xs font-heading font-semibold px-2.5 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} /> {post.publishedDate}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-navy text-xl sm:text-2xl mb-4 leading-snug hover:text-amber-600 transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-sm text-slate-500 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="border-t border-slate-100 pt-4">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-amber transition-colors group"
                    >
                      Read Full Article
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

