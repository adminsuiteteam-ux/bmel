import axios from 'axios'
import { BlogPost, mockBlog } from '@/data/mockData'

export interface ExtendedBlogPost extends BlogPost {
  isLive?: boolean
  url?: string
}

// Configurable live API endpoint (defaults to Dev.to REST API for engineering & tech articles)
const LIVE_BLOG_API_URL =
  import.meta.env.VITE_BLOG_API_URL || 'https://dev.to/api/articles?per_page=15&top=30'

interface DevToArticle {
  id: number
  title: string
  description: string
  slug: string
  url: string
  published_at: string
  readable_publish_date: string
  reading_time: number
  cover_image: string | null
  social_image: string | null
  tag_list: string[]
  body_html?: string
  body_markdown?: string
  user: {
    name: string
    username: string
    profile_image: string
  }
}

/**
 * Format raw date strings into readable human dates
 */
function formatDate(dateStr?: string): string {
  if (!dateStr) return 'Recently Published'
  try {
    const d = new Date(dateStr)
    if (isNaN(d.getTime())) return dateStr
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return dateStr
  }
}

/**
 * Normalizes a raw API article response into a standardized ExtendedBlogPost
 */
function normalizeApiArticle(article: DevToArticle): ExtendedBlogPost {
  const categoryTag = article.tag_list && article.tag_list.length > 0 ? article.tag_list[0].toUpperCase() : 'ENGINEERING'
  
  return {
    slug: article.slug || `live-${article.id}`,
    title: article.title,
    excerpt: article.description || 'Technical insight and engineering analysis.',
    content: article.body_html || article.body_markdown || `<p>${article.description}</p><p>Read full live article on official publication: <a href="${article.url}" target="_blank" rel="noopener noreferrer">${article.url}</a></p>`,
    author: article.user?.name ? `${article.user.name} (Guest Author)` : 'Engineering Specialist',
    publishedDate: article.readable_publish_date || formatDate(article.published_at),
    category: categoryTag,
    readTime: `${article.reading_time || 5} min read`,
    image:
      article.cover_image ||
      article.social_image ||
      'https://images.unsplash.com/photo-1581094719234-8c8efd9df737?auto=format&fit=crop&w=800&q=80',
    isLive: true,
    url: article.url,
  }
}

/**
 * Fetches real-time blog articles from the live API with fallback to local mock data
 */
export async function fetchLiveBlogPosts(): Promise<ExtendedBlogPost[]> {
  try {
    const response = await axios.get<DevToArticle[]>(LIVE_BLOG_API_URL, {
      timeout: 8000,
    })

    if (Array.isArray(response.data) && response.data.length > 0) {
      const liveArticles = response.data.map(normalizeApiArticle)
      // Merge live articles with company-specific mock articles so company insights remain accessible
      const combined = [...liveArticles, ...mockBlog.map((b) => ({ ...b, isLive: false }))]
      return combined
    }
  } catch (error) {
    console.warn('Live Blog API unavailable, falling back to local dataset:', error)
  }

  // Fallback to internal dataset if API is unreachable or fails
  return mockBlog.map((b) => ({ ...b, isLive: false }))
}

/**
 * Fetches a single blog post by slug from live API or local fallback
 */
export async function fetchLiveBlogPostBySlug(slug: string): Promise<ExtendedBlogPost | null> {
  // First check if it exists in local mock data
  const localMatch = mockBlog.find((p) => p.slug === slug)
  if (localMatch) {
    return { ...localMatch, isLive: false }
  }

  // Otherwise fetch detailed article from live API
  try {
    const response = await axios.get<DevToArticle>(`https://dev.to/api/articles/${slug}`, {
      timeout: 8000,
    })
    if (response.data && response.data.title) {
      return normalizeApiArticle(response.data)
    }
  } catch {
    // If slug lookup failed, search list of live articles
    try {
      const allPosts = await fetchLiveBlogPosts()
      const match = allPosts.find((p) => p.slug === slug)
      if (match) return match
    } catch {
      // ignore
    }
  }

  return null
}
