import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import { DefaultSeo } from 'next-seo';
import '@/app/globals.css';

// SEO configuration
const SEO_CONFIG = {
  titleTemplate: '%s | Webart4U - Web Design & Development Agency',
  defaultTitle: 'Webart4U - Transforming Digital Visions into Reality',
  description: 'Transform your digital vision into reality with Webart4U. We create engaging, responsive web experiences with cutting-edge technologies.',
  canonical: 'https://webart4u.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://webart4u.com',
    siteName: 'Webart4U',
    images: [
      {
        url: 'https://webart4u.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Webart4U - Web Design & Development Agency',
      },
    ],
  },
  twitter: {
    handle: '@webart4u',
    site: '@webart4u',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'web design, web development, responsive websites, next.js, react, SEO optimization',
    },
    {
      name: 'author',
      content: 'Webart4U',
    },
  ],
};

// Performance optimization
export function reportWebVitals({ id, name, label, value }: any) {
  // Send to Google Analytics
  if (window.gtag) {
    window.gtag('event', name, {
      event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js Metrics',
      event_label: id,
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      non_interaction: true,
    });
  }
}

// Type definition for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Track page views on route change
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (window.gtag) {
        window.gtag('config', 'G-P5LVN1NKW5', {
          page_path: url,
        });
      }
    };

    // Event listeners
    router.events.on('routeChangeStart', () => {
      // You can add loading indicators here
    });
    
    router.events.on('routeChangeComplete', (url) => {
      handleRouteChange(url);
      // Scroll to top on route change
      window.scrollTo(0, 0);
    });

    return () => {
      router.events.off('routeChangeStart', () => {});
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Advanced SEO Configuration */}
      <DefaultSeo {...SEO_CONFIG} />
      
      {/* Global Site Tag - Google Analytics & Google Tag Manager */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-P5LVN1NKW5`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P5LVN1NKW5', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Canonical link - helps prevent duplicate content issues */}
        <link rel="canonical" href={`https://webart4u.com${router.asPath}`} />
      </Head>
      <Component {...pageProps} />
    </>
  );
} 