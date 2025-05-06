import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';
import Script from 'next/script';

export const metadata = {
  title: 'Privacy Policy | Webart4U',
  description: 'Privacy Policy for Webart4U - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Privacy Policy | Webart4U',
    'description': 'Privacy Policy for Webart4U - Learn how we collect, use, and protect your personal information.',
    'publisher': {
      '@type': 'Organization',
      'name': 'Webart4U',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://webart4u.com/logo.png'
      }
    },
    'datePublished': '2023-01-01',
    'dateModified': new Date().toISOString().split('T')[0]
  };

  return (
    <>
      <Script
        id="privacy-policy-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-[#0D0D0D] text-white min-h-screen pt-24 pb-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#6A0DAD]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#FF4B24]/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-[#FF4B24] hover:text-[#FF4B24]/80 mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
          
          <div className="mb-8">
            <div className="inline-block mb-4">
              <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium border border-white/10 shadow-sm">
                <Shield className="w-4 h-4 text-[#FF4B24]" />
                <span>Privacy Policy</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Privacy <span className="text-[#FF4B24]">Policy</span>
            </h1>
            <p className="text-gray-400 mb-8">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-8 shadow-xl">
            <div className="prose prose-lg prose-invert max-w-none">
              <p>
                At Webart4U, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
              </p>
              
              <h2 className="text-white text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
              <p>
                We may collect several types of information from and about users of our website, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Personal identifiers such as name, email address, phone number, and company name when you contact us or request a quote</li>
                <li>Usage data including how you interact with our website</li>
                <li>Technical data such as IP address, browser type, device information, and cookies</li>
              </ul>
              
              <h2 className="text-white text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Provide, maintain, and improve our website and services</li>
                <li>Respond to your inquiries and fulfill your requests</li>
                <li>Send you updates, marketing communications, and other information that may be of interest to you</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Protect our website and services from unauthorized access or abuse</li>
              </ul>
              
              <h2 className="text-white text-2xl font-bold mt-8 mb-4">Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and to hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
              
              <h2 className="text-white text-2xl font-bold mt-8 mb-4">Third-Party Services</h2>
              <p>
                We may use third-party services such as Google Analytics, hosting providers, and payment processors that collect, monitor, and analyze data to help us improve our service. These third parties have their own privacy policies addressing how they use such information.
              </p>
              
              <h2 className="text-white text-2xl font-bold mt-8 mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              
              <h2 className="text-white text-2xl font-bold mt-8 mb-4">Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal data, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>The right to access the personal data we hold about you</li>
                <li>The right to request correction or deletion of your personal data</li>
                <li>The right to restrict or object to our processing of your personal data</li>
                <li>The right to data portability</li>
              </ul>
              
              <h2 className="text-white text-2xl font-bold mt-8 mb-4">Children&apos;s Privacy</h2>
              <p>
                Our website is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
              
              <h2 className="text-white text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
              </p>
              
              <h2 className="text-white text-2xl font-bold mt-8 mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="bg-[#FF4B24]/10 p-4 rounded-lg border border-[#FF4B24]/20 mt-4">
                <span className="font-semibold text-[#FF4B24]">Email:</span> <a href="mailto:privacy@webart4u.com" className="text-white hover:text-[#FF4B24] transition-colors">privacy@webart4u.com</a><br />
                <span className="font-semibold text-[#FF4B24]">Phone:</span> <a href="tel:+15551234567" className="text-white hover:text-[#FF4B24] transition-colors">+91 88 6767 2589</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 