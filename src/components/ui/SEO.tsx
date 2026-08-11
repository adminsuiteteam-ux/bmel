import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export default function SEO({
  title,
  description,
  keywords = 'mechanical engineering Nigeria, water treatment plants, steel panel tanks, industrial pump installation, piping fabrication Lagos, BMEL, Brownforte Mechanical Engineering',
  ogImage = 'https://images.unsplash.com/photo-1581094719234-8c8efd9df737?auto=format&fit=crop&w=800&q=80',
  ogType = 'website',
  canonicalUrl = window.location.href,
}: SEOProps) {
  const fullTitle = `${title} | Brownforte Mechanical Engineering Limited (BMEL)`
  
  return (
    <Helmet>
      {/* Title */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="BMEL" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}

