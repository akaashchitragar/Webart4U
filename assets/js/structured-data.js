// Structured data for Organization and WebSite
const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Webart4U",
  "url": "https://webart4u.com",
  "logo": "https://webart4u.com/assets/images/logo.png",
  "sameAs": [
    "https://facebook.com/webart4u",
    "https://twitter.com/webart4u",
    "https://instagram.com/webart4u",
    "https://linkedin.com/company/webart4u"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-234-567-8900",
    "contactType": "customer service",
    "email": "hello@webart4u.com",
    "availableLanguage": ["English"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Web Street",
    "addressLocality": "Digital City",
    "addressRegion": "WA",
    "postalCode": "12345",
    "addressCountry": "US"
  },
  "description": "Transforming Digital Visions Into Reality Since 2002. Expert web design, development, SEO & digital marketing solutions for businesses worldwide."
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Webart4U",
  "url": "https://webart4u.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://webart4u.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

// Add structured data to page
document.addEventListener('DOMContentLoaded', function() {
  const organizationScript = document.createElement('script');
  organizationScript.type = 'application/ld+json';
  organizationScript.innerHTML = JSON.stringify(organizationStructuredData);
  document.head.appendChild(organizationScript);

  const websiteScript = document.createElement('script');
  websiteScript.type = 'application/ld+json';
  websiteScript.innerHTML = JSON.stringify(websiteStructuredData);
  document.head.appendChild(websiteScript);
}); 