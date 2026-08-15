import { useState } from 'react'
import SEO from '@/components/ui/SEO'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Calendar, Clock, ArrowRight, RefreshCw, Radio, ExternalLink } from 'lucide-react'
import { useBlogPosts } from '@/hooks/useBlogPosts'

export default function BlogPage() {
  const { t } = useTranslation()
  const { data: posts, isLoading, isFetching, refetch, isError } = useBlogPosts()
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL')

  // Extract unique categories dynamically
  const categories = posts
    ? ['ALL', ...Array.from(new Set(posts.map((p) => p.category.toUpperCase())))]
    : ['ALL']

  const filteredPosts =
    posts?.filter((p) => (selectedCategory === 'ALL' ? true : p.category.toUpperCase() === selectedCategory)) || []

  return (
    <>
      <SEO
        title="Live Engineering Blog & Industry News"
        description="Real-time technical articles, engineering research, water infrastructure trends, and company updates from Brownforte Mechanical Engineering Limited."
      />

      {/* Header Banner */}
      <section className="site-gradient-bg py-20 text-slate-900 border-b border-slate-200/60 relative">
        <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />
        <div className="container-xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-heading font-bold uppercase tracking-widest mb-3">
            <Radio size={14} className="text-emerald-500 animate-pulse" />
            <span>{t('blog.insights_label', 'Real-Time Insights Feed')}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-navy mt-1">
            {t('blog.page_title', 'Engineering Blog & Live News')}
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-4">
            {t('blog.page_subtitle', 'Live technical articles, hydro-engineering trends, water treatment research, and real-time updates.')}
          </p>

          {/* Real-time Status Bar & Manual Refresh */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Connected to Live REST API Stream</span>
            </span>
            <button
              onClick={() => refetch()}
              disabled={isFetching}
              className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-navy bg-white hover:bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm transition-all active:scale-95 disabled:opacity-50"
              title="Refresh live articles"
            >
              <RefreshCw size={13} className={isFetching ? 'animate-spin text-amber-600' : ''} />
              <span>{isFetching ? 'Syncing...' : 'Sync Live Feed'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Blog Grid */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          {/* Category Filter Tabs */}
          {categories.length > 1 && (
            <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-navy text-amber shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Loading Skeleton Grid */}
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="bg-slate-50 border border-slate-100 rounded-xl p-4 animate-pulse">
                  <div className="w-full h-52 bg-slate-200 rounded-lg mb-4" />
                  <div className="h-4 bg-slate-200 rounded w-1/4 mb-3" />
                  <div className="h-6 bg-slate-200 rounded w-3/4 mb-3" />
                  <div className="h-4 bg-slate-200 rounded w-full mb-2" />
                  <div className="h-4 bg-slate-200 rounded w-2/3" />
                </div>
              ))}
            </div>
          )}

          {/* Error Notice */}
          {isError && !isLoading && (
            <div className="text-center py-12 bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6 max-w-xl mx-auto mb-8">
              <p className="text-amber-800 font-medium text-sm">
                Unable to reach live API stream right now. Displaying cached engineering articles.
              </p>
              <button
                onClick={() => refetch()}
                className="mt-3 px-4 py-2 bg-navy text-white text-xs font-bold rounded-lg hover:bg-navy/90"
              >
                Retry Connection
              </button>
            </div>
          )}

          {/* Live & Cached Posts Cards */}
          {!isLoading && filteredPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <div
                  key={post.slug}
                  className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all flex flex-col group relative"
                >
                  {/* Image Container */}
                  <div className="h-56 overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                      <span className="bg-navy/90 backdrop-blur-md text-amber text-[10px] font-heading font-extrabold uppercase px-2.5 py-1 rounded-md shadow-sm">
                        {post.category}
                      </span>
                      {post.isLive && (
                        <span className="bg-emerald-600 text-white text-[10px] font-heading font-extrabold uppercase px-2 py-0.5 rounded-md shadow-sm flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" /> LIVE API
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar size={13} className="text-amber-600" /> {post.publishedDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={13} className="text-sky-600" /> {post.readTime}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-navy text-lg sm:text-xl mb-3 leading-snug hover:text-amber-600 transition-colors line-clamp-2">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>

                      <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400 truncate max-w-[150px]">
                        By {post.author.split('(')[0]}
                      </span>
                      {post.url ? (
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-800 transition-colors"
                        >
                          Source <ExternalLink size={12} />
                        </a>
                      ) : (
                        <Link
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-navy hover:text-amber transition-colors group"
                        >
                          {t('blog.read_full_article', 'Read Article')}
                          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                      )}
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
