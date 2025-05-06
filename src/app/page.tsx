import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import TechStack from '@/components/sections/TechStack';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/layout/Footer';
import { Metadata } from 'next';
import { generateFAQSchema } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';

// FAQ data structure for structured data
const faqItems = [
  {
    question: 'What services does Webart4U offer?',
    answer: 'Webart4U offers a complete range of web development services including custom website design, e-commerce solutions, web applications, SEO optimization, and ongoing maintenance and support.'
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'The timeline varies depending on the project complexity. Simple websites can be completed in 2-4 weeks, while more complex projects may take 2-3 months or more.'
  },
  {
    question: 'Do you offer website maintenance services?',
    answer: 'Yes, we offer comprehensive website maintenance packages to ensure your site remains secure, up-to-date, and performing optimally.'
  },
  {
    question: 'What technologies do you use for development?',
    answer: 'We use modern technologies including React, Next.js, TypeScript, and various CMS platforms depending on project requirements.'
  }
];

// Generate metadata for this page
export const metadata: Metadata = {
  title: 'Modern Web Development Agency | Custom Websites & Applications',
  description: 'Webart4U creates stunning, responsive websites and web applications that drive results. Our expert team blends creativity with technical expertise.',
  alternates: {
    canonical: 'https://webart4u.com',
  },
  openGraph: {
    title: 'Modern Web Development Agency | Custom Websites & Applications',
    description: 'Webart4U creates stunning, responsive websites and web applications that drive results. Our expert team blends creativity with technical expertise.',
  }
};

export default function Home() {
  // Create FAQ schema for structured data
  const faqSchema = generateFAQSchema(faqItems);
  
  return (
    <>
      <JsonLd data={faqSchema} />
      <main>
        <Header />
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
