import type { Metadata } from "next";
import { montserrat, roboto, playfair, dmSans, firaCode } from "@/lib/fonts";
import "./globals.css";
import Script from "next/script";
import { Suspense } from "react";
import { Preloader } from "@/components/Preloader";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import JsonLd from "@/components/JsonLd";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import { defaultMetadata, generateOrganizationSchema } from "@/lib/seo";

// Use the default metadata from our SEO utility
export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization schema for structured data
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        
        <Script 
          id="cal-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function (C, A, L) {
                let p = function (a, ar) {
                  a.q.push(ar);
                };
                let d = C.document;
                C.Cal =
                  C.Cal ||
                  function () {
                    let cal = C.Cal;
                    let ar = arguments;
                    if (!cal.loaded) {
                      cal.ns = {};
                      cal.q = cal.q || [];
                      d.head.appendChild(d.createElement("script")).src = A;
                      cal.loaded = true;
                    }
                    if (ar[0] === L) {
                      const api = function () {
                        p(api, arguments);
                      };
                      const namespace = ar[1];
                      api.q = api.q || [];
                      typeof namespace === "string"
                        ? (cal.ns[namespace] = api) && p(api, ar)
                        : p(cal, ar);
                      return;
                    }
                    p(cal, ar);
                  };
              })(window, "https://cal.com/embed.js", "init");
              Cal("init", {apiKey: "cal_live_fa8ee1845d418d75c1be2b65de5608b9"});
              Cal("ui", {theme: "dark"});
            `
          }}
        />
        
        {/* Bing Webmaster Tools verification */}
        {process.env.NEXT_PUBLIC_BING_VERIFICATION && (
          <meta name="msvalidate.01" content={process.env.NEXT_PUBLIC_BING_VERIFICATION} />
        )}
        
        {/* Facebook Domain Verification */}
        {process.env.NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION && (
          <meta name="facebook-domain-verification" content={process.env.NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION} />
        )}
      </head>
      <body
        className={`${montserrat.variable} ${roboto.variable} ${playfair.variable} ${dmSans.variable} ${firaCode.variable} font-body bg-rich-black text-off-white antialiased`}
      >
        {/* Google Analytics */}
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        
        {/* JSON-LD Structured Data */}
        <JsonLd data={organizationSchema} />
        
        {/* Analytics Tracker for user engagement */}
        <AnalyticsTracker>
          <Preloader />
          {children}
        </AnalyticsTracker>
      </body>
    </html>
  );
}
