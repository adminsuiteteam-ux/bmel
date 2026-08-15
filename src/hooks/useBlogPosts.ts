import { useQuery } from '@tanstack/react-query'
import { fetchLiveBlogPosts, fetchLiveBlogPostBySlug, ExtendedBlogPost } from '@/services/blogService'

export function useBlogPosts() {
  return useQuery<ExtendedBlogPost[]>({
    queryKey: ['liveBlogPosts'],
    queryFn: fetchLiveBlogPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes stale time
    gcTime: 30 * 60 * 1000, // 30 minutes memory cache
    refetchOnWindowFocus: false,
  })
}

export function useBlogPost(slug?: string) {
  return useQuery<ExtendedBlogPost | null>({
    queryKey: ['liveBlogPost', slug],
    queryFn: () => (slug ? fetchLiveBlogPostBySlug(slug) : Promise.resolve(null)),
    enabled: !!slug,
    staleTime: 10 * 60 * 1000,
  })
}
