'use client';

import Head from 'next/head';

interface SeoMetaProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
  additionalMetaTags?: Array<{
    name?: string;
    property?: string;
    content: string;
  }>;
}

/**
 * Component for adding advanced SEO meta tags that can't be handled by Next.js metadata
 */
export default function SeoMeta({
  noIndex = false,
  additionalMetaTags = [],
}: SeoMetaProps) {
  return (
    <Head>
      {/* Additional meta tags that can't be handled by Next.js metadata */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Bing Webmaster Tools verification */}
      {process.env.NEXT_PUBLIC_BING_VERIFICATION && (
        <meta name="msvalidate.01" content={process.env.NEXT_PUBLIC_BING_VERIFICATION} />
      )}
      
      {/* Facebook Domain Verification */}
      {process.env.NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION && (
        <meta name="facebook-domain-verification" content={process.env.NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION} />
      )}
      
      {/* Pinterest verification */}
      {process.env.NEXT_PUBLIC_PINTEREST_VERIFICATION && (
        <meta name="p:domain_verify" content={process.env.NEXT_PUBLIC_PINTEREST_VERIFICATION} />
      )}
      
      {/* Additional meta tags */}
      {additionalMetaTags.map((tag, index) => {
        if (tag.name) {
          return <meta key={`meta-${index}`} name={tag.name} content={tag.content} />;
        } else if (tag.property) {
          return <meta key={`meta-${index}`} property={tag.property} content={tag.content} />;
        }
        return null;
      })}
    </Head>
  );
} 