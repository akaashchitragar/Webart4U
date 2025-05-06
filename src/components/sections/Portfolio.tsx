'use client';

import { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, ChevronRight, Code2 } from 'lucide-react';
import Image from 'next/image';

// Move projects data outside component to prevent re-creation on each render
const projects = [
  {
    title: 'QRQoder',
    category: 'Web Application',
    year: '2024',
    image: '/images/portfolio/qrqoder.jpg',
    description: 'Advanced QR code generation platform with customization options, analytics, and tracking capabilities. Features a user-friendly dashboard for managing multiple QR codes, detailed scan statistics, and branded design options.',
    technologies: 'React, Node.js, Express.js, MongoDB, Heroku, Chart.js, QR Code API',
    link: '#',
  },
  {
    title: 'Svastha',
    category: 'Ayurvedic Wellness App',
    year: '2024',
    image: '/images/portfolio/svastha.jpg',
    description: 'Comprehensive Ayurvedic wellness application providing personalized health recommendations based on traditional Ayurvedic scriptures and modern AI technology. Analyzes users\' unique constitution (Prakruti) and current imbalances (Vikruti) to deliver customized remedies, dietary advice, and lifestyle recommendations.',
    technologies: 'React Native, Node.js, Express, MongoDB, Google Gemini 1.5 Pro, Firebase, AWS, Razorpay',
    link: '#',
    features: [
      'Personalized Dosha Analysis through detailed questionnaires',
      'AI-Powered Recommendations using Google\'s Gemini 1.5 Pro',
      'Seasonal Wellness Calendar based on location and current season',
      'Ayurvedic Practitioner Network for virtual consultations',
      'Multilingual Support in multiple Indian languages',
      'Offline Mode for access in rural areas with limited connectivity'
    ],
    usp: 'Combines ancient Ayurvedic wisdom with cutting-edge AI technology to deliver truly personalized health recommendations from classical texts like Charaka Samhita and Sushruta Samhita.'
  },
  {
    title: 'Camio',
    category: 'Photography Platform',
    year: '2024',
    image: '/images/portfolio/camio.jpg',
    description: 'Revolutionary platform for passionate photographers to share authentic, non-AI photos, connect with like-minded individuals, and discover photography events. Features EXIF data display, community building, and event hosting capabilities.',
    technologies: 'Flutter, Node.js, Express.js, PostgreSQL, Firebase, AWS S3, Socket.IO',
    link: '#',
  },
  {
    title: 'Devo Edu Tech',
    category: 'E-Learning Platform',
    year: '2023',
    image: '/images/portfolio/devo-edutech.jpg',
    description: 'Innovative hospitality training platform offering on-demand learning, industry insights, and expert-curated content. Empowering the hospitality industry with modern, multilingual learning modules accessible anytime, anywhere.',
    technologies: 'Next.js, Tailwind CSS, Node.js, MongoDB, AWS',
    link: '#',
  },
  {
    title: 'Oikos Consultants',
    category: 'Environmental Consulting',
    year: '2024',
    image: '/images/portfolio/oikos-consultants.jpg',
    description: 'Leading environmental consulting firm specializing in sustainability solutions, biodiversity conservation, and ecological services. Features BRSR compliance, sustainability audits, and interactive testimonials from industry leaders.',
    technologies: 'Next.js, Framer Motion, Tailwind CSS, AWS Amplify, Responsive Design',
    link: '#',
  },
];

// Animation variants for reuse
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const scaleInVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 }
};

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const thumbnailRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isInView, setIsInView] = useState(false);

  // Set initial load to false after component mounts
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      });
    });
    
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 500);
    
    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      clearTimeout(timer);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Track scroll position for parallax effects - optimized with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Memoize the handleMouseMove function to prevent unnecessary re-renders
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isInView) return;
    
    if (cursorRef.current && thumbnailRef.current && sectionRef.current) {
      // Get section's position relative to viewport
      const rect = sectionRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to the section
      const x = e.clientX;
      const y = e.clientY;
      setMousePosition({ x, y });

      // Update custom cursor position with no transition for immediate response
      requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.transition = 'transform 0.05s linear';
          cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
        }
        
        // We're now using top/left positioning for the thumbnail instead of transform
        if (thumbnailRef.current && activeIndex !== null) {
          // Calculate position based on viewport boundaries to prevent thumbnail from going off-screen
          const viewportWidth = window.innerWidth;
          const viewportHeight = window.innerHeight;
          const thumbnailWidth = 400;
          const thumbnailHeight = 280;
          
          // Default offset
          let offsetX = 60;
          let offsetY = -140;
          
          // Adjust offset if near viewport edges
          if (x + offsetX + thumbnailWidth > viewportWidth - 20) {
            offsetX = -thumbnailWidth - 20; // Place to the left if near right edge
          }
          
          if (y + offsetY < 20) {
            offsetY = 20; // Prevent going above the top edge
          } else if (y + offsetY + thumbnailHeight > viewportHeight - 20) {
            offsetY = -thumbnailHeight - 20; // Place above if near bottom edge
          }
          
          thumbnailRef.current.style.transition = 'top 0.2s ease-out, left 0.2s ease-out';
          thumbnailRef.current.style.top = `${y + offsetY}px`;
          thumbnailRef.current.style.left = `${x + offsetX}px`;
        }
      });
    }
  }, [isInView, activeIndex]);

  // Memoize the background elements to prevent re-renders
  const backgroundElements = useMemo(() => (
    <>
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div 
        className="absolute top-20 right-10 w-64 h-64 bg-[#6A0DAD]/10 rounded-full blur-3xl pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      ></div>
      <div 
        className="absolute bottom-20 left-10 w-80 h-80 bg-[#FF4B24]/10 rounded-full blur-3xl pointer-events-none"
        style={{ transform: `translateY(${scrollY * -0.03}px)` }}
      ></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-40 left-[10%] w-1 h-20 bg-gradient-to-b from-[#FF4B24] to-transparent opacity-30"></div>
      <div className="absolute bottom-40 right-[10%] w-1 h-20 bg-gradient-to-t from-[#6A0DAD] to-transparent opacity-30"></div>
    </>
  ), [scrollY]);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-[#0D0D0D]"
      onMouseMove={handleMouseMove}
    >
      {/* Background Elements with Parallax Effect */}
      {backgroundElements}
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
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
              <Code2 className="w-4 h-4 text-[#FF4B24]" />
              <span>PORTFOLIO</span>
              <motion.div
                className="absolute inset-0 rounded-full bg-[#FF4B24]/5 z-[-1]"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Our Latest <span className="text-gradient bg-gradient-to-r from-[#FF4B24] to-[#FF8F6B]">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm">
            Explore our latest projects and see how we help businesses achieve their digital goals with innovative solutions.
          </p>
        </motion.div>

        <div className="relative">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-b border-gray-800 last:border-none overflow-hidden"
              onMouseEnter={() => {
                console.log('Mouse enter:', index);
                setActiveIndex(index);
              }}
              onMouseLeave={() => {
                console.log('Mouse leave');
                setActiveIndex(null);
              }}
            >
              <motion.div
                className="group py-8 px-4 md:px-8 flex flex-col md:flex-row md:items-center justify-between transition-all duration-300 rounded-xl relative block overflow-hidden"
                initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  transition: { duration: 0.2 }
                }}
              >
                {/* Animated border gradient */}
                <motion.div 
                  className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute inset-0 rounded-xl p-[1px] overflow-hidden">
                    <div className="absolute inset-[-1000%] bg-gradient-to-r from-[#FF4B24] via-[#6A0DAD] to-[#FF4B24] animate-[spin_4s_linear_infinite]" style={{ width: '2000%', height: '2000%' }}></div>
                  </div>
                  <div className="absolute inset-[1px] rounded-[10px] bg-[#0D0D0D]"></div>
                </motion.div>
                
                {/* Content Container with Staggered Children */}
                <motion.div
                  className="flex-1"
                  whileHover="hover"
                >
                  <motion.h3 
                    className="text-2xl md:text-3xl font-semibold mb-2 text-white group-hover:text-[#FF4B24] transition-colors"
                    variants={{
                      hover: { 
                        y: 0,
                        x: 10,
                        transition: { duration: 0.2, ease: "easeOut" }
                      }
                    }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.div 
                    className="flex items-center gap-4 text-sm text-gray-400 mb-2"
                    variants={{
                      hover: { 
                        y: 0,
                        x: 10,
                        transition: { duration: 0.2, delay: 0.05, ease: "easeOut" }
                      }
                    }}
                  >
                    <span>{project.category}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                    <span>{project.year}</span>
                  </motion.div>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ 
                          opacity: 1, 
                          height: 'auto',
                          transition: { duration: 0.3, ease: "easeOut" }
                        }}
                        exit={{ 
                          opacity: 0, 
                          height: 0,
                          transition: { duration: 0.2, ease: "easeIn" }
                        }}
                      >
                        <motion.p 
                          className="text-sm text-gray-500 max-w-2xl mb-2"
                          variants={{
                            hover: { 
                              y: 0,
                              x: 10,
                              transition: { duration: 0.2, delay: 0.1, ease: "easeOut" }
                            }
                          }}
                        >
                          {project.description}
                        </motion.p>
                        
                        <motion.div 
                          className="flex flex-wrap gap-2 mt-2"
                          variants={{
                            hover: { 
                              y: 0,
                              x: 10,
                              transition: { duration: 0.2, delay: 0.15, ease: "easeOut" }
                            }
                          }}
                        >
                          {project.technologies.split(', ').map((tech, i) => (
                            <span key={i} className="text-xs bg-[#FF4B24]/10 text-[#FF4B24] px-2 py-1 rounded-full">
                              {tech}
                            </span>
                          ))}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                <motion.div 
                  className="mt-4 md:mt-0 flex items-center gap-2"
                  variants={{
                    hover: { 
                      x: 0,
                      scale: 1.05,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }
                  }}
                  whileHover="hover"
                >
                  <motion.div 
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FF4B24]/10 group-hover:bg-[#FF4B24] transition-colors"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 90,
                      transition: { duration: 0.3, type: "spring", stiffness: 400 }
                    }}
                  >
                    <ChevronRight className="h-5 w-5 text-[#FF4B24] group-hover:text-white transition-colors" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Custom Cursor - Only render when needed */}
        {!isInitialLoad && (
          <div
            ref={cursorRef}
            className={`fixed top-0 left-0 w-16 h-16 mix-blend-difference pointer-events-none -translate-x-1/2 -translate-y-1/2 z-50 transition-opacity duration-300 ${
              activeIndex !== null ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
            aria-hidden="true"
          >
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="30" stroke="#FF4B24" strokeWidth="2" strokeDasharray="4 4" className="animate-spin-slow" style={{ animationDuration: '8s' }} />
              <circle cx="32" cy="32" r="24" fill="#FF4B24" fillOpacity="0.1" />
              <circle cx="32" cy="32" r="8" fill="#FF4B24" />
            </svg>
          </div>
        )}

        {/* Project Thumbnail */}
        <div
          ref={thumbnailRef}
          className={`fixed pointer-events-none z-40 transition-all duration-300 ${
            activeIndex !== null ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}
          style={{ 
            width: '400px',
            height: '280px',
            position: 'fixed',
            top: '0px',
            left: '0px',
            transformOrigin: 'center',
            visibility: activeIndex !== null ? 'visible' : 'hidden',
            filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.5))',
            willChange: 'top, left, opacity, transform' // Performance optimization
          }}
          aria-hidden="true"
        >
          {activeIndex !== null && (
            <div className="w-full h-full rounded-lg overflow-hidden border border-gray-800 transform transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF4B24]/20 to-[#6A0DAD]/20 z-10"></div>
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <Image
                  src={projects[activeIndex].image}
                  alt={projects[activeIndex].title}
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                  width={400}
                  height={280}
                  loading="lazy"
                  quality={85}
                />
              </motion.div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4 z-20">
                <p className="text-white text-sm font-medium mb-1">{projects[activeIndex].title}</p>
                <p className="text-gray-300 text-xs truncate">{projects[activeIndex].technologies}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 