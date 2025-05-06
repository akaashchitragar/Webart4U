'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  Palette,
  Code,
  Globe,
  Smartphone,
  Zap,
  ArrowRight,
  CheckCircle2,
  Circle,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { useState, useId, useRef, useEffect } from 'react';

const services = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Crafting intuitive and visually stunning user interfaces that enhance user experiences and drive engagement.',
    color: 'from-pink-500/30 to-rose-500/30',
    textColor: 'text-rose-300',
    borderColor: 'group-hover:border-rose-400',
    shadowColor: 'group-hover:shadow-rose-500/20',
    gradientText: 'bg-gradient-to-r from-rose-400 to-pink-500',
    points: [
      'User-centered design approach',
      'Interactive prototyping',
      'Usability testing',
      'Responsive interface design'
    ]
  },
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Building modern, responsive websites using the latest tech stack and AI-driven abilities to ensure performance, scalability, and innovation.',
    color: 'from-amber-500/30 to-yellow-500/30',
    textColor: 'text-amber-300',
    borderColor: 'group-hover:border-amber-400',
    shadowColor: 'group-hover:shadow-amber-500/20',
    gradientText: 'bg-gradient-to-r from-amber-400 to-yellow-500',
    points: [
      'Responsive & mobile-first design',
      'SEO optimization',
      'Performance optimization',
      'Content management systems'
    ]
  },
  {
    icon: Code,
    title: 'Web Applications',
    description: 'Developing robust and dynamic web apps powered by Node.js to streamline your business processes and deliver seamless functionality.',
    color: 'from-blue-500/30 to-indigo-500/30',
    textColor: 'text-blue-300',
    borderColor: 'group-hover:border-blue-400',
    shadowColor: 'group-hover:shadow-blue-500/20',
    gradientText: 'bg-gradient-to-r from-blue-400 to-indigo-500',
    points: [
      'Custom business solutions',
      'API development & integration',
      'Real-time data processing',
      'Secure authentication systems'
    ]
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Creating high-performance Android and iOS applications using the latest tech stack and AI to provide exceptional user experiences on the go.',
    color: 'from-emerald-500/30 to-teal-500/30',
    textColor: 'text-emerald-300',
    borderColor: 'group-hover:border-emerald-400',
    shadowColor: 'group-hover:shadow-emerald-500/20',
    gradientText: 'bg-gradient-to-r from-emerald-400 to-teal-500',
    points: [
      'Native & cross-platform apps',
      'Offline functionality',
      'Push notifications',
      'App store optimization'
    ]
  },
];

// Pre-defined particle positions to avoid hydration mismatch
const particles = [
  { size: 3, top: '10%', left: '20%', delay: '0s', duration: '15s' },
  { size: 4, top: '25%', left: '10%', delay: '1s', duration: '12s' },
  { size: 2, top: '40%', left: '35%', delay: '2s', duration: '18s' },
  { size: 5, top: '70%', left: '15%', delay: '0.5s', duration: '14s' },
  { size: 3, top: '85%', left: '30%', delay: '1.5s', duration: '16s' },
  { size: 4, top: '15%', left: '70%', delay: '2.5s', duration: '13s' },
  { size: 2, top: '35%', left: '80%', delay: '0.7s', duration: '17s' },
  { size: 5, top: '60%', left: '75%', delay: '1.2s', duration: '15s' },
  { size: 3, top: '80%', left: '85%', delay: '2.2s', duration: '14s' },
  { size: 4, top: '50%', left: '50%', delay: '1.8s', duration: '16s' },
  { size: 2, top: '20%', left: '40%', delay: '0.3s', duration: '18s' },
  { size: 3, top: '45%', left: '22%', delay: '1.3s', duration: '15s' },
  { size: 4, top: '75%', left: '60%', delay: '2.7s', duration: '13s' },
  { size: 2, top: '30%', left: '65%', delay: '0.9s', duration: '17s' },
  { size: 3, top: '90%', left: '40%', delay: '1.6s', duration: '14s' },
  { size: 4, top: '5%', left: '55%', delay: '2.3s', duration: '16s' },
  { size: 2, top: '55%', left: '8%', delay: '0.2s', duration: '15s' },
  { size: 3, top: '65%', left: '92%', delay: '1.9s', duration: '17s' },
  { size: 4, top: '38%', left: '48%', delay: '2.8s', duration: '14s' },
  { size: 2, top: '95%', left: '75%', delay: '0.8s', duration: '16s' },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const id = useId(); // Generate stable IDs for server/client consistency
  const sectionRef = useRef<HTMLElement>(null);
  
  // Parallax effect for background elements
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        if (sectionRef.current) {
          const scrollPosition = window.scrollY;
          const sectionTop = sectionRef.current.offsetTop;
          const sectionHeight = sectionRef.current.offsetHeight;
          
          // Only apply effect when section is in view
          if (scrollPosition > sectionTop - window.innerHeight && 
              scrollPosition < sectionTop + sectionHeight) {
            const parallaxElements = sectionRef.current.querySelectorAll('.parallax-bg');
            parallaxElements.forEach((el: any) => {
              const speed = el.dataset.speed || 0.2;
              const yPos = (scrollPosition - sectionTop) * speed;
              el.style.transform = `translateY(${yPos}px)`;
            });
          }
        }
      };
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0A0A0A] to-[#121212]">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#6A0DAD]/15 rounded-full blur-3xl pointer-events-none parallax-bg" data-speed="0.2"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#FF4B24]/15 rounded-full blur-3xl pointer-events-none parallax-bg" data-speed="-0.1"></div>
      
      {/* Additional background elements for glass effect */}
      <div className="absolute top-40 right-20 w-40 h-40 bg-primary/10 rounded-full blur-2xl pointer-events-none parallax-bg" data-speed="0.3"></div>
      <div className="absolute bottom-40 left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl pointer-events-none parallax-bg" data-speed="-0.2"></div>
      <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none parallax-bg" data-speed="0.15"></div>
      <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none parallax-bg" data-speed="-0.15"></div>
      
      {/* Animated particles with fixed positions */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div 
            key={`${id}-particle-${i}`}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: particle.top,
              left: particle.left,
              animation: `float ${particle.duration} linear infinite`,
              animationDelay: particle.delay
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-2">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium border border-white/10 shadow-sm"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                background: "rgba(255, 255, 255, 0.15)"
              }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span>What We Offer</span>
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/5 z-[-1]"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our <span className="text-gradient bg-gradient-to-r from-[#FF4B24] to-[#FF8F6B]">
              Services
            </span>
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            At Webart4U, we specialize in delivering cutting-edge digital solutions tailored to meet your business needs.
          </p>
        </motion.div>

        {/* Service tabs for mobile view */}
        <div className="lg:hidden mb-8 flex overflow-x-auto pb-2 gap-2 scrollbar-hide">
          {services.map((service, index) => (
            <button
              key={`${id}-tab-${index}`}
              onClick={() => setActiveTab(activeTab === index ? null : index)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 backdrop-blur-md ${
                activeTab === index 
                  ? `bg-gradient-to-r ${service.color.replace('/30', '')} text-white font-medium border border-white/20` 
                  : 'bg-white/5 text-gray-200 hover:bg-white/10 border border-white/5'
              }`}
            >
              <service.icon className="h-4 w-4" />
              <span>{service.title}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = activeTab === null || activeTab === index;
            
            return (
              <motion.div
                key={`${id}-service-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{ 
                  scale: isVisible ? 1 : 0.95,
                  opacity: isVisible ? 1 : 0.5,
                  height: isVisible ? 'auto' : '0',
                  margin: isVisible ? '0' : '0'
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`h-full transition-all duration-500 ${isVisible ? 'block' : 'hidden lg:block'}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card 
                  className={`bg-[#151515]/70 backdrop-blur-xl border-2 border-white/20 text-white h-full flex flex-col 
                    ${service.borderColor} ${service.shadowColor} 
                    transition-all duration-500 overflow-hidden group relative
                    hover:translate-y-[-8px] hover:shadow-xl hover:bg-[#1A1A1A]/80
                    before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:opacity-0 
                    before:transition-opacity before:duration-500 hover:before:opacity-100
                    shadow-lg shadow-black/30`}
                >
                  {/* Glowing effect on hover - client-side only */}
                  <div className={`absolute -inset-px rounded-xl bg-gradient-to-r ${service.color.replace('/30', '/50')} opacity-20 blur-sm group-hover:opacity-60 group-hover:blur-md transition-all duration-500`} />
                  
                  {/* Glass shine effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-xl">
                    <div className="absolute -inset-[400px] top-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-30 rotate-45 transform origin-top-left transition-opacity duration-1000"></div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-r ${service.color.replace('/30', '/60')} rotate-45 transform origin-bottom-left`}></div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col relative z-10">
                    <div className={`mb-6 p-4 rounded-lg bg-gradient-to-br ${service.color.replace('/30', '/60')} backdrop-blur-md w-16 h-16 flex items-center justify-center
                      group-hover:scale-110 transition-transform duration-500 relative overflow-hidden shadow-lg`}>
                      <div className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <Icon className={`h-8 w-8 text-white group-hover:animate-pulse relative z-10 drop-shadow-md`} />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300 relative inline-block text-white drop-shadow-sm">
                      {service.title}
                      <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${service.textColor} group-hover:w-full transition-all duration-500`}></span>
                    </h3>
                    
                    <p className="text-gray-100 mb-6 group-hover:text-white transition-colors duration-300 leading-relaxed drop-shadow-sm">{service.description}</p>
                    
                    <ul className="space-y-3 mt-auto">
                      {service.points.map((point, i) => (
                        <motion.li 
                          key={`${id}-point-${index}-${i}`}
                          className="flex items-start gap-2 group/item"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.1 * i + 0.3 }}
                        >
                          <div className={`h-5 w-5 rounded-full flex items-center justify-center ${service.textColor} mt-0.5 flex-shrink-0 
                            group-hover/item:bg-gradient-to-r ${service.color.replace('/30', '/60')} 
                            backdrop-blur-sm transition-all duration-300 shadow-md border border-white/20
                            bg-black/50`}>
                            <Circle className="h-3 w-3 group-hover/item:scale-125 transition-transform duration-300" />
                          </div>
                          <span className="text-sm text-white font-medium group-hover/item:text-white transition-colors duration-300 drop-shadow-sm">{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* UI/UX Design Illustration */}
                  {index === 0 && (
                    <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none overflow-hidden transition-transform duration-700 group-hover:scale-110 group-hover:translate-x-2 opacity-50 group-hover:opacity-70">
                      <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 drop-shadow-lg blur-[1px] group-hover:blur-0 transition-all duration-500">
                        {/* Artboard/Canvas */}
                        <rect x="120" y="80" width="70" height="100" rx="4" fill="#FF4B7E" fillOpacity="0.15"/>
                        
                        {/* UI Elements */}
                        <rect x="130" y="90" width="50" height="10" rx="2" fill="#FF4B7E" fillOpacity="0.3"/>
                        <rect x="130" y="105" width="30" height="5" rx="2" fill="#FF4B7E" fillOpacity="0.25"/>
                        <rect x="130" y="115" width="50" height="25" rx="2" fill="#FF4B7E" fillOpacity="0.2"/>
                        <rect x="130" y="145" width="20" height="20" rx="10" fill="#FF4B7E" fillOpacity="0.3"/>
                        <rect x="155" y="145" width="20" height="20" rx="2" fill="#FF4B7E" fillOpacity="0.25"/>
                        
                        {/* Cursor */}
                        <circle cx="140" cy="125" r="3" fill="#FF4B7E" fillOpacity="0.5"/>
                        
                        {/* Color Palette */}
                        <circle cx="110" cy="100" r="10" fill="#FF4B7E" fillOpacity="0.4"/>
                        <circle cx="110" cy="125" r="10" fill="#FF4B7E" fillOpacity="0.3"/>
                        <circle cx="110" cy="150" r="10" fill="#FF4B7E" fillOpacity="0.25"/>
                      </svg>
                    </div>
                  )}
                  
                  {/* Website Development Illustration */}
                  {index === 1 && (
                    <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none overflow-hidden transition-transform duration-700 group-hover:scale-110 group-hover:translate-x-2 opacity-50 group-hover:opacity-70">
                      <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 drop-shadow-lg blur-[1px] group-hover:blur-0 transition-all duration-500">
                        {/* Browser Window */}
                        <rect x="100" y="80" width="90" height="100" rx="4" fill="#F59E0B" fillOpacity="0.15"/>
                        <rect x="100" y="80" width="90" height="15" rx="4" fill="#F59E0B" fillOpacity="0.2"/>
                        
                        {/* Browser Controls */}
                        <circle cx="110" cy="87" r="3" fill="#F59E0B" fillOpacity="0.4"/>
                        <circle cx="120" cy="87" r="3" fill="#F59E0B" fillOpacity="0.3"/>
                        <circle cx="130" cy="87" r="3" fill="#F59E0B" fillOpacity="0.4"/>
                        
                        {/* Website Content */}
                        <rect x="110" y="105" width="70" height="10" rx="2" fill="#F59E0B" fillOpacity="0.25"/>
                        <rect x="110" y="120" width="50" height="5" rx="2" fill="#F59E0B" fillOpacity="0.3"/>
                        <rect x="110" y="130" width="70" height="30" rx="2" fill="#F59E0B" fillOpacity="0.2"/>
                        
                        {/* Code Elements */}
                        <path d="M90 140L100 150L90 160" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3"/>
                        <path d="M80 140L70 150L80 160" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3"/>
                      </svg>
                    </div>
                  )}
                  
                  {/* Web Applications Illustration */}
                  {index === 2 && (
                    <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none overflow-hidden transition-transform duration-700 group-hover:scale-110 group-hover:translate-x-2 opacity-50 group-hover:opacity-70">
                      <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 drop-shadow-lg blur-[1px] group-hover:blur-0 transition-all duration-500">
                        {/* Data Flow Lines */}
                        <path d="M100 80C100 80 130 100 160 100" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.3"/>
                        <path d="M160 100C160 100 180 120 160 140" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.3"/>
                        <path d="M160 140C160 140 130 160 100 140" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.3"/>
                        <path d="M100 140C100 140 80 120 100 100" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.3"/>
                        <path d="M100 100C100 100 130 120 100 140" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.25"/>
                        
                        {/* Data Nodes */}
                        <circle cx="100" cy="80" r="8" fill="#3B82F6" fillOpacity="0.4"/>
                        <circle cx="160" cy="100" r="8" fill="#3B82F6" fillOpacity="0.3"/>
                        <circle cx="160" cy="140" r="8" fill="#3B82F6" fillOpacity="0.4"/>
                        <circle cx="100" cy="140" r="8" fill="#3B82F6" fillOpacity="0.3"/>
                        <circle cx="100" cy="100" r="8" fill="#3B82F6" fillOpacity="0.4"/>
                      </svg>
                    </div>
                  )}
                  
                  {/* Mobile App Development Illustration */}
                  {index === 3 && (
                    <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none overflow-hidden transition-transform duration-700 group-hover:scale-110 group-hover:translate-x-2 opacity-50 group-hover:opacity-70">
                      <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 drop-shadow-lg blur-[1px] group-hover:blur-0 transition-all duration-500">
                        {/* Phone Outlines */}
                        <rect x="140" y="70" width="40" height="80" rx="8" fill="#10B981" fillOpacity="0.15"/>
                        <rect x="145" y="75" width="30" height="70" rx="4" fill="#10B981" fillOpacity="0.2"/>
                        
                        {/* Phone Screen Elements */}
                        <rect x="150" y="85" width="20" height="5" rx="1" fill="#10B981" fillOpacity="0.3"/>
                        <rect x="150" y="95" width="20" height="15" rx="2" fill="#10B981" fillOpacity="0.25"/>
                        <rect x="150" y="115" width="8" height="8" rx="4" fill="#10B981" fillOpacity="0.4"/>
                        <rect x="162" y="115" width="8" height="8" rx="1" fill="#10B981" fillOpacity="0.3"/>
                        <rect x="150" y="128" width="20" height="5" rx="1" fill="#10B981" fillOpacity="0.3"/>
                        
                        {/* App Icons */}
                        <rect x="110" y="90" width="20" height="20" rx="4" fill="#10B981" fillOpacity="0.3"/>
                        <rect x="110" y="115" width="20" height="20" rx="10" fill="#10B981" fillOpacity="0.25"/>
                        <rect x="110" y="140" width="20" height="20" rx="4" fill="#10B981" fillOpacity="0.2"/>
                      </svg>
                    </div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-200 max-w-3xl mx-auto font-medium">
            We combine creativity, technology, and innovation to bring your ideas to life and help your business thrive in the digital age.
          </p>
        </motion.div>
      </div>

      {/* Add CSS for floating animation */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
        }
      `}</style>
    </section>
  );
} 