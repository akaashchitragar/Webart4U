'use client';

import { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, Phone, Clock, Server } from 'lucide-react';
import Image from 'next/image';

// Move FAQ data outside component to prevent re-creation on each render
const faqs = [
  {
    question: 'What services does Webart4U offer?',
    answer: 'We specialize in UI/UX design, website development, web applications, and mobile app development for Android and iOS, using the latest tech stack and AI-driven solutions.'
  },
  {
    question: 'How long does it take to develop a website or app?',
    answer: 'The timeline depends on the complexity and scope of the project. Typically, websites take 2-6 weeks, while mobile apps may take 6-12 weeks.'
  },
  {
    question: 'Do you provide post-launch support?',
    answer: 'Yes, we offer ongoing maintenance and support to ensure your website or app runs smoothly and stays updated.'
  },
  {
    question: 'Can you help with branding and logo design?',
    answer: 'Absolutely! We provide logo creation and brand guideline formulation to help establish a strong and cohesive brand identity.'
  },
  {
    question: 'How do I get started with Webart4U?',
    answer: 'Simply reach out to us through our email/phone call or schedule a consultation to discuss your project requirements.'
  }
];

// Animation variants for reuse
const fadeInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const scaleInVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 }
};

const floatingBoxVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  hover: { 
    y: -5,
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3), 0 8px 12px rgba(0, 0, 0, 0.25)'
  }
};

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Check if section is in view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      });
    });
    
    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Memoize toggle function to prevent unnecessary re-renders
  const toggleAccordion = useCallback((index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  }, [expandedIndex]);

  // Memoize background elements to prevent re-renders
  const backgroundElements = useMemo(() => (
    <>
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#6A0DAD]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#FF4B24]/10 rounded-full blur-3xl pointer-events-none"></div>
    </>
  ), []);

  return (
    <section id="faq" ref={sectionRef} className="py-24 relative overflow-hidden bg-[#0D0D0D]">
      {/* Background Elements */}
      {backgroundElements}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Heading */}
          <div className="order-2 lg:order-1">
            <motion.div
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                <Image 
                  src="/images/faq/support-image.jpg"
                  alt="Customer support team ready to help with your questions" 
                  width={600} 
                  height={450}
                  className="object-cover w-full h-full"
                  loading="lazy"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10"></div>
              </div>
              
              {/* 99.9% Uptime Floating Box */}
              <motion.div
                variants={floatingBoxVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute -left-10 top-10 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-xl shadow-xl border border-white/20 cursor-pointer"
                style={{
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25), 0 6px 10px rgba(0, 0, 0, 0.22)',
                  transform: 'translateZ(20px)',
                  zIndex: 5
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Server className="w-6 h-6 text-[#6A0DAD]" />
                    <motion.div 
                      className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold">99.9% Uptime</p>
                    <p className="text-xs text-gray-300">Guaranteed</p>
                  </div>
                </div>
              </motion.div>
              
              {/* 24/7 Support Floating Box */}
              <motion.div
                variants={{
                  ...floatingBoxVariants,
                  hidden: { opacity: 0, x: 20 }
                }}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -left-6 bottom-20 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-xl shadow-xl border border-white/20 cursor-pointer"
                style={{
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25), 0 6px 10px rgba(0, 0, 0, 0.22)',
                  transform: 'translateZ(20px)',
                  zIndex: 5
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    >
                      <Clock className="w-6 h-6 text-[#FF4B24]" />
                    </motion.div>
                  </div>
                  <div>
                    <p className="text-sm font-bold">24/7 Support</p>
                    <p className="text-xs text-gray-300">Always available</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ 
                  y: -5,
                  scale: 1.03,
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3), 0 8px 12px rgba(0, 0, 0, 0.25)',
                  transition: { duration: 0.3 }
                }}
                className="absolute -bottom-6 -right-6 bg-[#FF4B24] text-white p-6 rounded-xl shadow-xl cursor-pointer"
                style={{
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25), 0 6px 10px rgba(0, 0, 0, 0.22)',
                  transform: 'translateZ(30px)',
                  zIndex: 10
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="group relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                    <Phone className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 relative z-10" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Contact Our Experts</p>
                    <p className="text-xs text-white/80 mt-0.5">Get personalized help</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right Column - FAQ Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <motion.div
                variants={scaleInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block mb-3"
              >
                <motion.div
                  className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium border border-white/10 shadow-sm"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                    background: "rgba(255, 255, 255, 0.15)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <HelpCircle className="w-4 h-4 text-[#FF4B24]" />
                  <span>FAQs</span>
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[#FF4B24]/5 z-[-1]"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
                Frequently Asked <span className="text-gradient bg-gradient-to-r from-[#FF4B24] to-[#FF8F6B]">Questions</span>
              </h2>
              <p className="text-gray-400 max-w-2xl text-sm">
                Find answers to common questions about our services and process. If you have additional questions, feel free to contact us.
              </p>
            </motion.div>
            
            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  ref={(el) => { accordionRefs.current[index] = el; }}
                  variants={fadeInUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black/60 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-5 text-left flex items-center justify-between hover:bg-[#FF4B24]/10 transition-colors"
                    aria-expanded={expandedIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="font-medium text-white">{faq.question}</span>
                    <div className={`flex items-center justify-center w-6 h-6 rounded-full ${
                      expandedIndex === index ? 'bg-[#FF4B24]' : 'bg-gray-800'
                    } transition-colors`}>
                      {expandedIndex === index ? (
                        <Minus className="h-3.5 w-3.5 text-white" />
                      ) : (
                        <Plus className="h-3.5 w-3.5 text-white" />
                      )}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: 'auto', 
                          opacity: 1,
                          transition: { 
                            height: { duration: 0.3 }, 
                            opacity: { duration: 0.3, delay: 0.1 } 
                          }
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          transition: { 
                            height: { duration: 0.2 }, 
                            opacity: { duration: 0.1 } 
                          }
                        }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 text-gray-400 border-t border-gray-800/50">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 