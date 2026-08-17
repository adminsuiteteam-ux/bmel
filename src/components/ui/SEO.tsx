import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  ogType?: string
  canonicalUrl?: string
}

export default function SEO({
  title,
  description,
  keywords = 'Brownforte Mechanical Engineering Limited, BMEL, borehole drilling Nigeria, water treatment plants Lagos, Braithwaite steel tanks, MEP contractor Nigeria, hydrogeological surveys, industrial water engineering, SUBEB water projects, FGGS Jalingo tank',
  ogImage = 'https://www.brownfortemechanical.com/bmel-logo.png',
  ogType = 'website',
  canonicalUrl,
}: SEOProps) {
  const currentUrl =
    canonicalUrl || (typeof window !== 'undefined' ? window.location.href : 'https://www.brownfortemechanical.com/')

  const fullTitle = title.includes('BMEL') || title.includes('Brownforte')
    ? title
    : `${title} | Brownforte Mechanical Engineering Limited (BMEL)`

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook / LinkedIn / WhatsApp */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Brownforte Mechanical Engineering Limited (BMEL)" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}
