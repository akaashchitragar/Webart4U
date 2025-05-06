'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const GoogleAnalytics = () => {
  // Initialize GA on client-side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize dataLayer
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', 'G-P5LVN1NKW5');
    }
  }, []);

  return (
    <>
      {/* Google Tag Manager - Global base code */}
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
              'cookie_flags': 'SameSite=None;Secure',
            });
          `,
        }}
      />

      {/* Additional scripts for tracking user engagement */}
      <Script
        id="ga-events"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Scroll depth tracking
            let scrollDepthTriggered = {};
            window.addEventListener('scroll', function() {
              const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
              const scrollPosition = window.scrollY;
              const scrollPercentage = Math.round((scrollPosition / scrollHeight) * 100);
              
              [25, 50, 75, 90].forEach(function(depth) {
                if (scrollPercentage >= depth && !scrollDepthTriggered[depth]) {
                  scrollDepthTriggered[depth] = true;
                  window.gtag('event', 'scroll_depth', {
                    'depth': depth,
                    'page': window.location.pathname
                  });
                }
              });
            }, { passive: true });
            
            // Track outbound links
            document.addEventListener('click', function(e) {
              const target = e.target.closest('a');
              if (target && target.hostname !== window.location.hostname) {
                window.gtag('event', 'outbound_link', {
                  'url': target.href
                });
              }
            });
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics; 