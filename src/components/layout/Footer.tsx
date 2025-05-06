'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  ArrowRight,
  Mail,
  Phone,
  Sparkles,
} from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';
import { Button } from "@/components/ui/button";
import dynamic from 'next/dynamic';

// Dynamically import Cal component with SSR disabled
const Cal = dynamic(
  () => import('@calcom/embed-react').then((mod) => mod.default),
  { ssr: false, loading: () => null }
);

const navigation = {
  main: [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ],
  social: [
    { name: 'X / Twitter', href: 'https://x.com/chitragarakaash', icon: FaXTwitter },
    { name: 'GitHub', href: 'https://github.com/chitragarakaash/chitragarakaash', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/webart4u-india/?viewAsMember=true', icon: Linkedin },
  ],
};

export default function Footer() {
  const [calApiLoaded, setCalApiLoaded] = useState(false);

  useEffect(() => {
    // Safely load Cal API
    const loadCalApi = async () => {
      try {
        const { getCalApi } = await import('@calcom/embed-react');
        const cal = await getCalApi();
        cal("ui", {
          theme: "dark",
          styles: {
            branding: {
              brandColor: "#FF4B24",
            }
          },
        });
        setCalApiLoaded(true);
      } catch (error) {
        console.error("Failed to load Cal.com API:", error);
      }
    };
    
    loadCalApi();
  }, []);

  // Function to handle the button click and open Cal.com popup
  const handleScheduleMeeting = async () => {
    try {
      const { getCalApi } = await import('@calcom/embed-react');
      const cal = await getCalApi();
      cal("modal", {
        calLink: "webart4u/30min",
        config: {
          name: "Webart4U",
          email: "",
          notes: "",
          guests: [],
          theme: "dark",
        }
      });
    } catch (error) {
      console.error("Failed to load Cal.com:", error);
      // Fallback - redirect to Cal.com
      window.open("https://cal.com/webart4u/30min", "_blank");
    }
  };

  return (
    <footer className="bg-[#0D0D0D] relative overflow-hidden">
      {/* Cal.com embed script - only render when needed */}
      {calApiLoaded && <Cal calLink="webart4u/30min" style={{ display: "none" }} />}
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#6A0DAD]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#FF4B24]/10 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* CTA Section - Redesigned */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-20">
          <div className="relative">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FF4B24]/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute top-20 right-20 w-32 h-32 bg-[#6A0DAD]/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-0 left-1/3 w-24 h-24 bg-[#FF4B24]/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
            
            {/* Content container with glass effect */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative z-10 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-10 shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mb-8"
                >
                  <motion.div
                    className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium border border-white/10 shadow-sm mb-4"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                      background: "rgba(255, 255, 255, 0.15)"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Sparkles className="w-4 h-4 text-[#FF4B24]" />
                    <span>COLLABORATION</span>
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[#FF4B24]/5 z-[-1]"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Let&apos;s Create <span className="text-[#FF4B24]">Something Amazing</span> Together
                  </h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Ready to transform your ideas into reality? Our team of experts is here to help you build the digital experience you&apos;ve been dreaming of.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col md:flex-row items-center gap-6"
                >
                  {/* Animated CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF4B24] to-[#FF7A59] rounded-full blur-md opacity-70 animate-pulse"></div>
                    <Button
                      onClick={handleScheduleMeeting}
                      className="relative bg-gradient-to-r from-[#FF4B24] to-[#FF7A59] hover:from-[#FF7A59] hover:to-[#FF4B24] text-white rounded-full px-8 py-6 shadow-lg transition-all duration-500 flex items-center gap-3"
                    >
                      <span className="font-bold">SCHEDULE A MEETING NOW</span>
                      <ArrowRight className="h-5 w-5 animate-bounce-x" />
                    </Button>
                  </motion.div>
                  
                  {/* Or divider with animation */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-center gap-4 my-4 md:my-0"
                  >
                    <div className="h-[1px] w-10 bg-gray-700"></div>
                    <span className="text-gray-400 text-sm">OR</span>
                    <div className="h-[1px] w-10 bg-gray-700"></div>
                  </motion.div>
                  
                  {/* Contact info with hover effects */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-center gap-4"
                  >
                    <motion.a
                      href="mailto:info@webart4u.com"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-[#FF4B24]/20 border border-white/10 transition-colors duration-300"
                    >
                      <Mail className="h-5 w-5 text-[#FF4B24]" />
                    </motion.a>
                    <motion.a
                      href="tel:+918867672589"
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-[#FF4B24]/20 border border-white/10 transition-colors duration-300"
                    >
                      <Phone className="h-5 w-5 text-[#FF4B24]" />
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Simple Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-white">Webart<span className="text-[#FF4B24]">4U</span></span>
            </Link>
          </div>
          
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6 md:mb-0">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-[#FF4B24] text-sm transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Social Links */}
          <div className="flex gap-4">
            {navigation.social.map((item) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-[#FF4B24]/20 border border-white/10 text-gray-400 hover:text-[#FF4B24] transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 12px rgba(255, 75, 36, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{item.name}</span>
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Webart4U. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/legal/privacy" className="text-gray-500 hover:text-[#FF4B24] text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/legal/terms" className="text-gray-500 hover:text-[#FF4B24] text-sm transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 