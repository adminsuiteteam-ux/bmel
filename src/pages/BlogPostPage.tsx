import { Link, useParams } from 'react-router-dom'
import SEO from '@/components/ui/SEO'
import { ArrowLeft, Calendar, User, Clock, Radio, ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useBlogPost } from '@/hooks/useBlogPosts'

export default function BlogPostPage() {
  const { t } = useTranslation()
  const { slug } = useParams<{ slug: string }>()
  const { data: post, isLoading, isError } = useBlogPost(slug)

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-10 h-10 border-3 border-amber border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-slate-500 font-mono text-sm">Fetching live article data from stream...</p>
      </div>
    )
  }

  if (isError || !post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-navy">{t('blog.not_found_title', 'Article Not Found')}</h2>
        <p className="text-slate-500 mt-2">{t('blog.not_found_subtitle', 'The requested live article could not be located.')}</p>
        <Link to="/blog" className="btn-primary mt-6">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </div>
    )
  }

  // Safe parsing utility for rendering HTML paragraphs / string blocks without vulnerability
  const parseContent = (contentString: string) => {
    // If the content is simple text or HTML paragraphs
    const paragraphs = contentString
      .split(/<\/?p>/)
      .map((p) => p.trim())
      .filter((p) => p.length > 0)

    if (paragraphs.length === 0) {
      return <p className="text-slate-600 text-base leading-relaxed mb-6">{contentString}</p>
    }

    return paragraphs.map((text, idx) => (
      <p key={idx} className="text-slate-600 text-base leading-relaxed mb-6">
        {text}
      </p>
    ))
  }

  return (
    <>
      <SEO
        title={`${post.title} — Technical Article`}
        description={post.excerpt}
        ogImage={post.image}
      />

      {/* Header Banner */}
      <section className="site-gradient-bg py-20 text-slate-900 border-b border-slate-200/60 relative">
        <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />
        <div className="container-xl relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-xs text-amber-600 font-bold hover:underline mb-4">
            <ArrowLeft size={12} /> Back to Blog
          </Link>
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-amber-500/10 text-amber-600 text-xs font-heading font-semibold px-2.5 py-1 rounded">
              {post.category}
            </span>
            {post.isLive && (
              <span className="bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 text-xs font-heading font-semibold px-2.5 py-1 rounded flex items-center gap-1">
                <Radio size={12} className="animate-pulse" /> Live API Stream
              </span>
            )}
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-navy max-w-4xl leading-tight">{post.title}</h1>
        </div>
      </section>

      {/* Article Body Content */}
      <section className="section-pad bg-white">
        <div className="container-xl max-w-3xl">
          
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-6 border-b border-slate-100 pb-6 mb-8 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-amber" />
              <span>{post.publishedDate}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <User size={14} className="text-amber" />
              <span>{post.author}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-amber" />
              <span>{post.readTime}</span>
            </span>
          </div>

          {/* Featured Image */}
          <div className="h-96 md:h-[420px] overflow-hidden rounded-2xl border border-slate-100 mb-8 shadow-sm">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body */}
          <article className="prose max-w-none">
            {parseContent(post.content)}
          </article>

          {/* External Source Link if available */}
          {post.url && (
            <div className="mt-8 p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
              <span className="text-xs text-slate-500">Originally published on live developer publication</span>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:underline"
              >
                View Live Publication Source <ExternalLink size={13} />
              </a>
            </div>
          )}

        </div>
      </section>
    </>
  )
}
