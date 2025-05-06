'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Rocket } from 'lucide-react';

// Tech stack items organized by category
const techStack = [
  { name: 'Figma', logo: '/images/tech/figma.svg', category: 'design' },
  { name: 'Adobe Illustrator', logo: '/images/tech/adobe-illustrator.svg', category: 'design' },
  { name: 'Adobe XD', logo: '/images/tech/adobe-xd.svg', category: 'design' },
  { name: 'React', logo: '/images/tech/react.svg', category: 'frontend' },
  { name: 'Next.js', logo: '/images/tech/nextjs.svg', category: 'frontend' },
  { name: 'Vue.js', logo: '/images/tech/vuejs.svg', category: 'frontend' },
  { name: 'Nuxt.js', logo: '/images/tech/nuxtjs.svg', category: 'frontend' },
  { name: 'HTML5', logo: '/images/tech/html5.svg', category: 'frontend' },
  { name: 'CSS3', logo: '/images/tech/css3.svg', category: 'frontend' },
  { name: 'JavaScript', logo: '/images/tech/javascript.svg', category: 'frontend' },
  { name: 'Firebase', logo: '/images/tech/firebase.svg', category: 'backend' },
  { name: 'AWS', logo: '/images/tech/aws-amplify.svg', category: 'backend' },
  { name: 'Heroku', logo: '/images/tech/heroku.svg', category: 'backend' },
  { name: 'Python', logo: '/images/tech/python.svg', category: 'backend' },
  { name: 'PHP', logo: '/images/tech/php.svg', category: 'backend' },
  { name: 'WordPress', logo: '/images/tech/wordpress.svg', category: 'backend', special: true },
  { name: 'Cpanel', logo: '/images/tech/cpanel.svg', category: 'backend' },
  { name: 'Flutter', logo: '/images/tech/flutter.svg', category: 'mobile' },
  { name: 'Xcode', logo: '/images/tech/xcode.svg', category: 'mobile' },
  { name: 'VS Code', logo: '/images/tech/vscode.svg', category: 'tools' }
];

export default function TechStack() {
  const [isHovering, setIsHovering] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(60);
  
  // Handle mouse enter/leave for the scrolling container
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  
  // Adjust animation speed based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setAnimationSpeed(40);
      } else {
        setAnimationSpeed(45);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="tech-stack" className="py-20 relative overflow-hidden bg-[#0D0D0D]">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#6A0DAD]/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#FF4B24]/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow-delay"></div>
      <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none animate-float"></div>
      
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
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
              <Rocket className="w-4 h-4 text-[#FF4B24]" />
              <span>Tech Arsenal</span>
              <motion.div
                className="absolute inset-0 rounded-full bg-[#FF4B24]/5 z-[-1]"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Tools & <span className="text-gradient bg-gradient-to-r from-[#FF4B24] to-[#FF8F6B]">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            The cutting-edge tools I use to craft exceptional digital experiences
          </p>
        </motion.div>
        
        {/* Infinite Scrolling Tech Stack */}
        <div 
          className="relative overflow-hidden py-10"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0D0D0D] to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0D0D0D] to-transparent pointer-events-none"></div>
            
            <div className="flex overflow-visible">
              <div 
                className={`flex py-6 animate-scroll-left ${isHovering ? 'animate-paused' : ''}`}
                style={{ animationDuration: `${animationSpeed}s` }}
              >
                {techStack.map((tech, index) => (
                  <div key={`tech-${tech.name}`} className="flex-shrink-0 mx-5 px-2">
                    <div className="group">
                      <div 
                        className={`w-24 h-24 rounded-xl ${
                          tech.special ? 'bg-white/20' : 'bg-white/5'
                        } backdrop-blur-md border border-gray-800/50 flex items-center justify-center p-3 
                        transition-all duration-300 group-hover:border-[${
                          tech.category === 'frontend' ? '#3B82F6' : 
                          tech.category === 'backend' ? (tech.special ? '#00A0D2' : '#10B981') :
                          tech.category === 'design' ? '#FF4B24' :
                          tech.category === 'mobile' ? '#8B5CF6' : '#F59E0B'
                        }]/50 relative overflow-visible 
                        group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-xl`}
                        style={{
                          boxShadow: `0 0 0 rgba(${
                            tech.category === 'frontend' ? '59, 130, 246' : 
                            tech.category === 'backend' ? (tech.special ? '0, 160, 210' : '16, 185, 129') :
                            tech.category === 'design' ? '255, 75, 36' :
                            tech.category === 'mobile' ? '139, 92, 246' : '245, 158, 11'
                          }, 0)`,
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                        <div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl blur-md"
                          style={{
                            backgroundColor: `rgba(${
                              tech.category === 'frontend' ? '59, 130, 246' : 
                              tech.category === 'backend' ? (tech.special ? '0, 160, 210' : '16, 185, 129') :
                              tech.category === 'design' ? '255, 75, 36' :
                              tech.category === 'mobile' ? '139, 92, 246' : '245, 158, 11'
                            }, 0.2)`
                          }}
                        ></div>
                        <Image 
                          src={tech.logo} 
                          alt={tech.name} 
                          width={72} 
                          height={72}
                          className="w-full h-full object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="mt-3 text-center transition-all duration-300 group-hover:transform group-hover:translate-y-1">
                        <p className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300 font-medium">{tech.name}</p>
                        <span 
                          className="text-xs mt-1 inline-block opacity-0 group-hover:opacity-100 transition-all duration-300"
                          style={{
                            color: tech.category === 'frontend' ? '#3B82F6' : 
                                  tech.category === 'backend' ? (tech.special ? '#00A0D2' : '#10B981') :
                                  tech.category === 'design' ? '#FF4B24' :
                                  tech.category === 'mobile' ? '#8B5CF6' : '#F59E0B'
                          }}
                        >
                          {tech.category.charAt(0).toUpperCase() + tech.category.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {techStack.map((tech, index) => (
                  <div key={`tech-dup-${tech.name}`} className="flex-shrink-0 mx-5 px-2">
                    <div className="group">
                      <div 
                        className={`w-24 h-24 rounded-xl ${
                          tech.special ? 'bg-white/20' : 'bg-white/5'
                        } backdrop-blur-md border border-gray-800/50 flex items-center justify-center p-3 
                        transition-all duration-300 group-hover:border-[${
                          tech.category === 'frontend' ? '#3B82F6' : 
                          tech.category === 'backend' ? (tech.special ? '#00A0D2' : '#10B981') :
                          tech.category === 'design' ? '#FF4B24' :
                          tech.category === 'mobile' ? '#8B5CF6' : '#F59E0B'
                        }]/50 relative overflow-visible 
                        group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-xl`}
                        style={{
                          boxShadow: `0 0 0 rgba(${
                            tech.category === 'frontend' ? '59, 130, 246' : 
                            tech.category === 'backend' ? (tech.special ? '0, 160, 210' : '16, 185, 129') :
                            tech.category === 'design' ? '255, 75, 36' :
                            tech.category === 'mobile' ? '139, 92, 246' : '245, 158, 11'
                          }, 0)`,
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                        <div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl blur-md"
                          style={{
                            backgroundColor: `rgba(${
                              tech.category === 'frontend' ? '59, 130, 246' : 
                              tech.category === 'backend' ? (tech.special ? '0, 160, 210' : '16, 185, 129') :
                              tech.category === 'design' ? '255, 75, 36' :
                              tech.category === 'mobile' ? '139, 92, 246' : '245, 158, 11'
                            }, 0.2)`
                          }}
                        ></div>
                        <Image 
                          src={tech.logo} 
                          alt={tech.name} 
                          width={72} 
                          height={72}
                          className="w-full h-full object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="mt-3 text-center transition-all duration-300 group-hover:transform group-hover:translate-y-1">
                        <p className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300 font-medium">{tech.name}</p>
                        <span 
                          className="text-xs mt-1 inline-block opacity-0 group-hover:opacity-100 transition-all duration-300"
                          style={{
                            color: tech.category === 'frontend' ? '#3B82F6' : 
                                  tech.category === 'backend' ? (tech.special ? '#00A0D2' : '#10B981') :
                                  tech.category === 'design' ? '#FF4B24' :
                                  tech.category === 'mobile' ? '#8B5CF6' : '#F59E0B'
                          }}
                        >
                          {tech.category.charAt(0).toUpperCase() + tech.category.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      {/* Add CSS for animations */}
      <style jsx global>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-scroll-left {
          animation: scroll-left linear infinite;
          animation-play-state: running;
        }
        
        .animate-paused {
          animation-play-state: paused !important;
        }
        
        .text-gradient {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        
        @keyframes pulse-slow-delay {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        .animate-pulse-slow-delay {
          animation: pulse-slow-delay 8s ease-in-out infinite 2s;
        }
        
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
} 