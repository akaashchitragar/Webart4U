import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';
import Script from 'next/script';

export const metadata = {
  title: 'Terms of Service | Webart4U',
  description: 'Terms of Service for Webart4U - Learn about the terms and conditions governing the use of our services.',
};

export default function TermsOfService() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Terms of Service | Webart4U',
    'description': 'Terms of Service for Webart4U - Learn about the terms and conditions governing the use of our services.',
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
        id="terms-service-jsonld"
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
                <FileText className="w-4 h-4 text-[#FF4B24]" />
                <span>Terms of Service</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Terms of <span className="text-[#FF4B24]">Service</span>
            </h1>
            <p className="text-gray-400 mb-8">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>
          
          <div className="bg-black/30 backdrop-blur-sm border border-gray-800 rounded-xl p-8 shadow-xl">
            <div className="prose prose-lg prose-invert max-w-none">
              <p>
                Welcome to Webart4U. These Terms of Service (&quot;Terms&quot;) govern your use of our website and services. By accessing or using our website or services, you agree to be bound by these Terms.
              </p>
              
              <h2 className="text-white text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using our website or services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our website or services.
              </p>
              
              <h2 className="text-white text-2xl font-bold mt-8 mb-4">2. Services</h2>
              <p>
                Webart4U provides web development, design, and related digital services. The specific services to be provided will be outlined in a separate agreement or statement of work between Webart4U and the client.
              </p>
              
              <h2 className="text-white text-2xl font-bold mt-8 mb-4">3. User Accounts</h2>
              <p>
                Some features of our services may require you to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
              
              <h2 className="text-white text-2xl font-bold mt-8 mb-4">4. Intellectual Property</h2>
              <div className="bg-white/5 p-5 rounded-lg border border-gray-800 mb-4">
                <p className="mb-4">
                  <strong className="text-[#FF4B24]">4.1 Our Intellectual Property</strong><br />
                  The content, features, and functionality of our website, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are owned by Webart4U or our licensors and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="mb-4">
                  <strong className="text-[#FF4B24]">4.2 Client Content</strong><br />
                  You retain ownership of any content you provide to us for use in your project. By providing content to us, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display the content solely for the purpose of providing our services to you.
                </p>
                <p>
                  <strong className="text-[#FF4B24]">4.3 Deliverables</strong><br />
                  Upon full payment of all applicable fees, we will assign to you all rights, title, and interest in the final deliverables created specifically for you, except for third-party materials and our pre-existing intellectual property.
                </p>
              </div>
              
              <h2 className="text-white text-2xl font-bold mt-8 mb-4">5. Payment Terms</h2>
              <div className="bg-white/5 p-5 rounded-lg border border-gray-800 mb-4">
                <p className="mb-4">
                  <strong className="text-[#FF4B24]">5.1 Fees</strong><br />
                  Fees for our services will be outlined in a separate agreement or statement of work. All fees are non-refundable unless otherwise specified.
                </p>
                <p>
                  <strong className="text-[#FF4B24]">5.2 Payment Schedule</strong><br />
                  Payment schedules will be outlined in a separate agreement or statement of work. We reserve the right to suspend services if payments are not received according to the agreed schedule.
                </p>
              </div>
              
              <h2 className="text-white text-2xl font-bold mt-8 mb-4">6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Webart4U shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Your use or inability to use our website or services</li>
                <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                <li>Any interruption or cessation of transmission to or from our website</li>
                <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our website</li>
              </ul>
              
              <h2 className="text-white text-2xl font-bold mt-8 mb-4">7. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Webart4U and our affiliates, officers, directors, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses arising from your use of our website or services or your violation of these Terms.
              </p>
              
              <h2 className="text-white text-2xl font-bold mt-8 mb-4">8. Termination</h2>
              <p>
                We may terminate or suspend your access to our website or services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use our website and services will immediately cease.
              </p>
              
              <h2 className="text-white text-2xl font-bold mt-8 mb-4">9. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
              </p>
              
              <h2 className="text-white text-2xl font-bold mt-8 mb-4">10. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              
              <h2 className="text-white text-2xl font-bold mt-8 mb-4">11. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="bg-[#FF4B24]/10 p-4 rounded-lg border border-[#FF4B24]/20 mt-4">
                <span className="font-semibold text-[#FF4B24]">Email:</span> <a href="mailto:legal@webart4u.com" className="text-white hover:text-[#FF4B24] transition-colors">legal@webart4u.com</a><br />
                <span className="font-semibold text-[#FF4B24]">Phone:</span> <a href="tel:+15551234567" className="text-white hover:text-[#FF4B24] transition-colors">+91 88 6767 2589</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 