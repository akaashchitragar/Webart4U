import Script from 'next/script';

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Component for adding structured data (JSON-LD) to pages
 * @param data - The structured data object or array of objects
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <Script
      id="json-ld-script"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
} 