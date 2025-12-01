/**
 * SEO Utility Functions for SyncOps
 * Provides reusable functions for generating SEO metadata and structured data
 */

const BASE_URL = 'https://syncops.tech';

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbs(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${BASE_URL}${item.url}`
    }))
  };
}

/**
 * Generate FAQPage structured data
 */
export function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Generate Review/Rating structured data
 */
export function generateReviewSchema(review) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "reviewBody": review.quote || review.text,
    "author": {
      "@type": "Person",
      "name": review.author || review.name
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating || 5,
      "bestRating": 5
    },
    "itemReviewed": {
      "@type": "Organization",
      "name": "SyncOps",
      "url": BASE_URL
    }
  };
}

/**
 * Generate Service structured data
 */
export function generateServiceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "SyncOps",
      "url": BASE_URL
    },
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `${BASE_URL}/services/${service.slug}`,
      "serviceType": "Online"
    }
  };
}

/**
 * Generate complete metadata object
 */
export function generateMetadata({
  title,
  description,
  keywords = [],
  url,
  image = '/images/logo.png',
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  noindex = false
}) {
  const fullTitle = title.includes('SyncOps') ? title : `${title} | SyncOps`;
  const fullUrl = url.startsWith('http') ? url : `${BASE_URL}${url}`;
  const fullImage = image.startsWith('http') ? image : `${BASE_URL}${image}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords.join(', ') : undefined,
    authors: author ? [{ name: author }] : undefined,
    creator: 'SyncOps Technologies',
    publisher: 'SyncOps Technologies',
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      type,
      locale: 'en_US',
      url: fullUrl,
      siteName: 'SyncOps',
      title: fullTitle,
      description,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
      ...(section && { section }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [fullImage],
      creator: '@SyncOps',
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    ...(publishedTime && {
      other: {
        'article:published_time': publishedTime,
        ...(author && { 'article:author': author }),
        ...(section && { 'article:section': section }),
      },
    }),
  };
}

/**
 * Generate WebPage structured data
 */
export function generateWebPageSchema({
  name,
  description,
  url,
  breadcrumbs,
  mainEntity
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": name,
    "description": description,
    "url": url.startsWith('http') ? url : `${BASE_URL}${url}`,
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": "SyncOps",
      "url": BASE_URL
    },
    "about": {
      "@type": "Organization",
      "name": "SyncOps",
      "url": BASE_URL
    }
  };

  if (breadcrumbs) {
    schema.breadcrumb = generateBreadcrumbs(breadcrumbs);
  }

  if (mainEntity) {
    schema.mainEntity = mainEntity;
  }

  return schema;
}

