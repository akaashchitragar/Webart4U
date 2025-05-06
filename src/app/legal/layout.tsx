'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import components with SSR disabled to avoid hydration issues
const Header = dynamic(() => import('@/components/layout/Header'), { ssr: false });
const Footer = dynamic(() => import('@/components/layout/Footer'), { ssr: false });

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={<div className="h-16"></div>}>
        <Header />
      </Suspense>
      {children}
      <Suspense fallback={<div className="h-16"></div>}>
        <Footer />
      </Suspense>
    </>
  );
} 