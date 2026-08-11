import { Link, useParams } from 'react-router-dom'
import SEO from '@/components/ui/SEO'
import { mockBlog } from '@/data/mockData'
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function BlogPostPage() {
  const { t } = useTranslation()
  const { slug } = useParams<{ slug: string }>()
  const post = mockBlog.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-navy">{t('blog.not_found_title')}</h2>
        <p className="text-slate-500 mt-2">{t('blog.not_found_subtitle')}</p>
        <Link to="/blog" className="btn-primary mt-6">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </div>
    )
  }

  // Safe rendering utility to split HTML paragraphs and render them as JSX elements
  // This completely avoids dangerouslySetInnerHTML and prevents XSS vector risks.
  const parseContent = (htmlString: string) => {
    const paragraphs = htmlString
      .split(/<\/?p>/)
      .map(p => p.trim())
      .filter(p => p.length > 0)

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
      />

      {/* Header */}
      <section className="site-gradient-bg py-20 text-slate-900 border-b border-slate-200/60 relative">
        <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />
        <div className="container-xl relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-xs text-amber-600 font-bold hover:underline mb-4">
            <ArrowLeft size={12} /> Back to Blog
          </Link>
          <span className="bg-amber-500/10 text-amber-600 text-xs font-heading font-semibold px-2.5 py-1 rounded block w-fit mb-3">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-navy max-w-4xl leading-tight">{post.title}</h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-pad bg-white">
        <div className="container-xl max-w-3xl">
          
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-6 border-b border-slate-100 pb-6 mb-8 text-xs text-slate-400">
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
          <div className="h-96 md:h-[420px] overflow-hidden rounded-xl border border-slate-100 mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Body content parsed safely */}
          <article className="prose max-w-none">
            {parseContent(post.content)}
          </article>

        </div>
      </section>
    </>
  )
}

