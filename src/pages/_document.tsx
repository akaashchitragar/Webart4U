import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* Add meta tags for better SEO and performance */}
        <meta name="theme-color" content="#0D0D0D" />
        <meta name="description" content="Transform your digital vision into reality with Webart4U. We create engaging, responsive web experiences with cutting-edge technologies." />
        
        {/* SEO prevention of content duplication */}
        <link rel="alternate" hrefLang="x-default" href="https://webart4u.com/" />
        <link rel="alternate" hrefLang="en" href="https://webart4u.com/" />
        
        {/* PWA support */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        
        {/* Preload critical assets */}
        <link rel="preload" as="image" href="/logo.svg" />
        <link rel="preload" href="/fonts/Inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Structured data for organization (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Webart4U',
              url: 'https://webart4u.com',
              logo: 'https://webart4u.com/logo.svg',
              sameAs: [
                'https://twitter.com/webart4u',
                'https://www.facebook.com/webart4u',
                'https://www.linkedin.com/company/webart4u',
                'https://www.instagram.com/webart4u'
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-123-456-7890',
                contactType: 'customer service',
                email: 'info@webart4u.com',
                availableLanguage: 'English'
              }
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
 