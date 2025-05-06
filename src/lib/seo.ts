import { Metadata } from 'next';

// Base URL for the website
export const siteConfig = {
  name: 'Webart4U',
  description: 'Transform your digital vision into reality with Webart4U. We create engaging, responsive web experiences with cutting-edge technologies.',
  url: 'https://webart4u.com',
  ogImage: 'https://webart4u.com/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/webart4u',
    github: 'https://github.com/webart4u',
    linkedin: 'https://linkedin.com/company/webart4u',
    facebook: 'https://facebook.com/webart4u',
    instagram: 'https://instagram.com/webart4u',
  },
};

// Default metadata for all pages
export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Modern Web Development Agency`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'web development',
    'web design',
    'responsive design',
    'Next.js',
    'React',
    'modern UI/UX',
    'web agency',
    'digital solutions',
    'website builder',
    'custom web applications',
    'SEO optimization',
    'mobile-first design',
    'e-commerce websites',
    'progressive web apps',
    'website maintenance',
  ],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: `${siteConfig.name} - Modern Web Development Agency`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - Modern Web Development Agency`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@webart4u',
    site: '@webart4u',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/favicon/android-chrome-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/favicon/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'en-US': siteConfig.url,
    },
    types: {
      'application/rss+xml': `${siteConfig.url}/rss.xml`,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || '',
    // Custom verification for other search engines can be added in meta tags
  },
  category: 'technology',
  other: {
    'google-site-verification': process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
    'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION || '',
    'facebook-domain-verification': process.env.NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION || '',
  }
};

// Generate metadata for specific pages
export function generateMetadata({
  title,
  description,
  image,
  canonical,
  type = 'website',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
}): Metadata {
  return {
    title: title,
    description: description || defaultMetadata.description,
    openGraph: {
      type,
      title: title || defaultMetadata.openGraph?.title,
      description: description || defaultMetadata.openGraph?.description as string,
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: title || siteConfig.name,
            },
          ]
        : defaultMetadata.openGraph?.images,
    },
    twitter: {
      title: title || defaultMetadata.twitter?.title,
      description: description || defaultMetadata.twitter?.description as string,
      images: image ? [image] : defaultMetadata.twitter?.images,
    },
    alternates: {
      canonical: canonical || defaultMetadata.alternates?.canonical,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : defaultMetadata.robots,
  };
}

// Generate JSON-LD structured data for organization
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/logo.png`,
      width: 512,
      height: 512
    },
    sameAs: [
      siteConfig.links.twitter,
      siteConfig.links.github,
      siteConfig.links.linkedin,
      siteConfig.links.facebook,
      siteConfig.links.instagram,
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-123-456-7890',
        contactType: 'customer service',
        email: 'contact@webart4u.com',
        availableLanguage: ['English'],
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Web Street',
      addressLocality: 'Digital City',
      addressRegion: 'CA',
      postalCode: '94103',
      addressCountry: 'US',
    },
    founder: {
      '@type': 'Person',
      name: 'Web Artist',
      jobTitle: 'Founder & CEO',
      sameAs: [
        'https://linkedin.com/in/web-artist',
        'https://twitter.com/webartist'
      ]
    },
    foundingDate: '2020-01-01',
    description: siteConfig.description,
  };
}

// Generate JSON-LD structured data for local business
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    image: `${siteConfig.url}/logo.png`,
    '@id': siteConfig.url,
    url: siteConfig.url,
    telephone: '+1-123-456-7890',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Web Street',
      addressLocality: 'Digital City',
      addressRegion: 'CA',
      postalCode: '94103',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.7749,
      longitude: -122.4194,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
        ],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    sameAs: [
      siteConfig.links.twitter,
      siteConfig.links.github,
      siteConfig.links.linkedin,
    ],
  };
}

// Generate JSON-LD structured data for breadcrumbs
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Generate JSON-LD structured data for FAQ
export function generateFAQSchema(questions: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };
}

// Generate JSON-LD structured data for products
export function generateProductSchema({
  name,
  description,
  image,
  price,
  currency = 'USD',
  availability = 'https://schema.org/InStock',
  url,
  sku,
  brand,
  reviews = [],
}: {
  name: string;
  description: string;
  image: string;
  price: number;
  currency?: string;
  availability?: string;
  url: string;
  sku: string;
  brand: string;
  reviews?: {
    author: string;
    rating: number;
    content: string;
    date: string;
  }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: currency,
      availability,
      url,
    },
    sku,
    brand: {
      '@type': 'Brand',
      name: brand,
    },
    ...(reviews.length > 0 && {
      review: reviews.map((review) => ({
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: review.author,
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: review.rating,
          bestRating: '5',
        },
        reviewBody: review.content,
        datePublished: review.date,
      })),
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length,
        reviewCount: reviews.length,
      },
    }),
  };
} 