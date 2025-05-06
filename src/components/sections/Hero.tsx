'use client';

import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { motion, useMotionValue, useTransform, useSpring, MotionValue } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { Container } from '../ui/container';
import Image from 'next/image';
import { useLoadingStore } from '../Preloader';
import { throttle } from 'lodash';

// Custom font styling
const headingStyle = {
  fontFamily: "'Inter', 'SF Pro Display', 'Helvetica Neue', sans-serif",
  fontStretch: 'normal',
  letterSpacing: '0',
  textTransform: 'uppercase' as const,
  fontWeight: 800
};

// Memoize floating logos data to prevent recreation on each render
const floatingLogos = [
  { 
    name: 'App Store', 
    src: '/images/tech/app-store.svg',
    size: { width: 55, height: 55 },
    position: { top: '15%', left: '12%' },
    color: '#0D96F6'
  },
  { 
    name: 'Google Play', 
    src: '/images/tech/google-play.svg',
    size: { width: 40, height: 40 },
    position: { bottom: '25%', left: '18%' },
    color: '#01C853'
  },
  { 
    name: 'Slack', 
    src: '/images/tech/slack.svg',
    size: { width: 48, height: 48 },
    position: { top: '30%', left: '8%' },
    color: '#E01E5A'
  },
  { 
    name: 'GitHub', 
    src: '/images/tech/github.svg',
    size: { width: 52, height: 52 },
    position: { bottom: '18%', left: '25%' },
    color: '#24292F'
  },
  { 
    name: 'Stripe', 
    src: '/images/tech/stripe.svg',
    size: { width: 45, height: 45 },
    position: { top: '20%', right: '15%' },
    color: '#635BFF'
  },
  { 
    name: 'MySQL', 
    src: '/images/tech/mysql.svg',
    size: { width: 80, height: 80 },
    position: { bottom: '15%', right: '20%' },
    color: '#00758F'
  },
  { 
    name: 'React', 
    src: '/images/tech/react.svg',
    size: { width: 75, height: 75 },
    position: { top: '35%', right: '8%' },
    color: '#61DAFB'
  },
  { 
    name: 'JavaScript', 
    src: '/images/tech/javascript.svg',
    size: { width: 58, height: 58 },
    position: { top: '50%', left: '15%' },
    color: '#F7DF1E'
  },
  { 
    name: 'CSS3', 
    src: '/images/tech/css3.svg',
    size: { width: 52, height: 52 },
    position: { bottom: '35%', right: '12%' },
    color: '#264DE4'
  }
];

// Letter animation component - further optimized
const AnimatedLetter = ({ letter, className, style }: { letter: string, className: string, style?: React.CSSProperties }) => {
  return (
    <motion.span
      className="inline-block mx-[0.01em]"
      style={{
        ...style,
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        WebkitFontSmoothing: 'subpixel-antialiased',
        transform: 'translateZ(0)'
      }}
      whileHover={{ 
        scale: 1.05, // Further reduced scale for better performance
        transition: { 
          type: "spring", 
          stiffness: 400, // Balanced stiffness
          damping: 20,
          mass: 0.2, // Even lighter mass
          duration: 0.08 // Even shorter duration
        } 
      }}
    >
      {letter === ' ' ? '\u00A0' : letter}
    </motion.span>
  );
};

// Reduced and simplified particle background component
const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Pre-defined deterministic values for server/client consistency
  const particles = useMemo(() => {
    const predefinedParticles = [
      { x: 12, y: 25, size: 2.5, color: "rgba(200, 200, 220, 0.2)", speed: 0.25 },
      { x: 35, y: 45, size: 1.5, color: "rgba(180, 210, 240, 0.15)", speed: 0.3 },
      { x: 65, y: 15, size: 3.0, color: "rgba(220, 195, 200, 0.18)", speed: 0.2 },
      { x: 85, y: 75, size: 2.0, color: "rgba(195, 215, 225, 0.22)", speed: 0.15 },
      { x: 45, y: 85, size: 1.8, color: "rgba(210, 200, 230, 0.2)", speed: 0.35 },
      { x: 25, y: 65, size: 2.2, color: "rgba(205, 230, 210, 0.17)", speed: 0.28 },
      { x: 80, y: 35, size: 1.2, color: "rgba(230, 210, 195, 0.16)", speed: 0.33 },
      { x: 15, y: 95, size: 2.8, color: "rgba(190, 195, 225, 0.19)", speed: 0.22 },
      { x: 90, y: 5, size: 1.7, color: "rgba(215, 225, 200, 0.21)", speed: 0.27 },
      { x: 55, y: 55, size: 2.3, color: "rgba(225, 200, 215, 0.23)", speed: 0.18 },
      { x: 5, y: 35, size: 1.9, color: "rgba(200, 220, 235, 0.25)", speed: 0.31 },
      { x: 75, y: 80, size: 2.6, color: "rgba(220, 210, 195, 0.24)", speed: 0.19 },
      { x: 33, y: 22, size: 1.3, color: "rgba(195, 235, 220, 0.2)", speed: 0.29 },
      { x: 67, y: 52, size: 2.1, color: "rgba(235, 215, 185, 0.17)", speed: 0.26 },
      { x: 40, y: 78, size: 1.6, color: "rgba(210, 185, 225, 0.21)", speed: 0.23 }
    ];
    
    return predefinedParticles.map((p, i) => ({
      id: `particle-${i}`,
      x: p.x,
      y: p.y,
      size: p.size,
      color: p.color,
      speed: p.speed
    }));
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
    >
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            filter: 'blur(1px)',
            opacity: 0.5,
            animation: `float ${5 / particle.speed}s infinite alternate ease-in-out`
          }}
        />
      ))}
    </div>
  );
};

// Custom hook to create transforms for a logo
// const useLogoTransforms = (mouseX: MotionValue, mouseY: MotionValue, index: number) => {
//   // Further reduced depth factor for smoother effect
//   const depthFactor = 0.5 + (index % 3) * 0.2;
//   
//   // Lighter transforms with smaller ranges
//   const rotateX = useTransform(mouseY, [-0.5, 0.5], [2 * depthFactor, -2 * depthFactor], {
//     clamp: true
//   });
//   
//   const rotateY = useTransform(mouseX, [-0.5, 0.5], [-2 * depthFactor, 2 * depthFactor], {
//     clamp: true
//   });
//   
//   // Reduced translation for smoother experience
//   const translateX = useTransform(mouseX, [-0.5, 0.5], [-3 * depthFactor, 3 * depthFactor], {
//     clamp: true
//   });
//   
//   const translateY = useTransform(mouseY, [-0.5, 0.5], [-3 * depthFactor, 3 * depthFactor], {
//     clamp: true
//   });
// 
//   return { rotateX, rotateY, translateX, translateY };
// };

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "We Deliver Solutions Tailored To Your Needs";
  const sectionRef = useRef<HTMLElement>(null);
  
  // Even more optimized mouse tracking with throttling + debouncing
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);
  
  // Add spring physics with optimized values for smooth transitions
  const mouseX = useSpring(rawMouseX, { 
    stiffness: 75, // Lower stiffness for smoother motion
    damping: 25, 
    mass: 0.3 // Lighter for quicker response
  });
  
  const mouseY = useSpring(rawMouseY, { 
    stiffness: 75,
    damping: 25,
    mass: 0.3
  });
  
  const isLoading = useLoadingStore((state) => state.isLoading);
  
  // Highly optimized mouse movement handler - reduced update frequency
  const handleMouseMove = useCallback(
    throttle((e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      // Use requestAnimationFrame for smoother updates
      window.requestAnimationFrame(() => {
        rawMouseX.set(x - 0.5);
        rawMouseY.set(y - 0.5);
      });
    }, 20), // Increased throttle time for better performance (was 10ms)
    [rawMouseX, rawMouseY]
  );
  
  // Add animation class directly in GSAP to reduce unnecessary renders
  useEffect(() => {
    if (isLoading) return;
    
    // Use a single timeline for better sequencing
    const tl = gsap.timeline();
    setIsLoaded(true);
    
    // Optimize GSAP animations
    tl.to('.hero-title-1', {
      opacity: 1,
      y: 0,
      duration: 0.5, // Slightly reduced duration
      ease: 'power2.out' // More efficient easing
    })
    .to('.hero-title-2', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.3')
    .to('.hero-title-3', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.3')
    .to('.hero-subtitle', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.3')
    .to('.hero-scroll-indicator', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.3');
  }, [isLoading]);
  
  // Track mouse movement with passive event listener for better performance
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      handleMouseMove.cancel();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);
  
  // More efficient typewriter with requestAnimationFrame
  useEffect(() => {
    if (!isLoaded || isLoading) return;
    
    let currentIndex = 0;
    let lastTime = 0;
    const delay = 50; // ms between each character
    
    const animate = (timestamp: number) => {
      if (!lastTime) lastTime = timestamp;
      
      if (timestamp - lastTime >= delay) {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.substring(0, currentIndex));
          currentIndex++;
          lastTime = timestamp;
        }
      }
      
      if (currentIndex <= fullText.length) {
        requestAnimationFrame(animate);
      }
    };
    
    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isLoaded, isLoading, fullText]);

  // Smooth scroll function
  const scrollToNextSection = () => {
    const nextSection = sectionRef.current?.nextElementSibling;
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Pre-calculate transform values with clamping for consistent behavior
  const mainContentRotateX = useTransform(mouseY, [-0.5, 0.5], [0.5, -0.5], {
    clamp: true // Reduced rotation angles for smoother motion
  });
  
  const mainContentRotateY = useTransform(mouseX, [-0.5, 0.5], [-0.5, 0.5], {
    clamp: true
  });

  // Create individual transforms for each logo upfront
  const logo0RotateX = useTransform(mouseY, [-0.5, 0.5], [1, -1], { clamp: true });
  const logo0RotateY = useTransform(mouseX, [-0.5, 0.5], [-1, 1], { clamp: true });
  const logo0TranslateX = useTransform(mouseX, [-0.5, 0.5], [-1.5, 1.5], { clamp: true });
  const logo0TranslateY = useTransform(mouseY, [-0.5, 0.5], [-1.5, 1.5], { clamp: true });
  
  const logo1RotateX = useTransform(mouseY, [-0.5, 0.5], [1.2, -1.2], { clamp: true });
  const logo1RotateY = useTransform(mouseX, [-0.5, 0.5], [-1.2, 1.2], { clamp: true });
  const logo1TranslateX = useTransform(mouseX, [-0.5, 0.5], [-1.8, 1.8], { clamp: true });
  const logo1TranslateY = useTransform(mouseY, [-0.5, 0.5], [-1.8, 1.8], { clamp: true });
  
  const logo2RotateX = useTransform(mouseY, [-0.5, 0.5], [1.4, -1.4], { clamp: true });
  const logo2RotateY = useTransform(mouseX, [-0.5, 0.5], [-1.4, 1.4], { clamp: true });
  const logo2TranslateX = useTransform(mouseX, [-0.5, 0.5], [-2.1, 2.1], { clamp: true });
  const logo2TranslateY = useTransform(mouseY, [-0.5, 0.5], [-2.1, 2.1], { clamp: true });

  // Reference array of transforms
  const logoTransforms = [
    { rotateX: logo0RotateX, rotateY: logo0RotateY, translateX: logo0TranslateX, translateY: logo0TranslateY },
    { rotateX: logo1RotateX, rotateY: logo1RotateY, translateX: logo1TranslateX, translateY: logo1TranslateY },
    { rotateX: logo2RotateX, rotateY: logo2RotateY, translateX: logo2TranslateX, translateY: logo2TranslateY }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden py-20 bg-gray-950"
    >
      {/* Simplified Particle Background */}
      <ParticleBackground />

      {/* Floating Tech Logos with display optimizations */}
      {floatingLogos.map((logo, index) => {
        // Use the pre-computed transforms based on index (or fallback to first if index is out of bounds)
        const transforms = logoTransforms[index % logoTransforms.length];
        
        return (
          <motion.div
            key={`floating-logo-${index}`}
            className="absolute z-10 opacity-90 cursor-pointer hidden lg:block"
            initial={{ 
              opacity: 0, 
              scale: 0.5,
              x: index % 2 === 0 ? -50 : 50,
              y: index % 2 === 0 ? -50 : 50
            }}
            animate={{ 
              opacity: isLoading ? 0 : 1, 
              scale: 1,
              x: 0,
              y: 0
            }}
            transition={{ 
              duration: 0.7, 
              delay: 0.2 + (index * 0.1),
              ease: "easeOut"
            }}
            style={{
              ...logo.position as any,
              rotateX: transforms.rotateX,
              rotateY: transforms.rotateY,
              x: transforms.translateX,
              y: transforms.translateY,
              perspective: 1000,
              transformStyle: "preserve-3d" as any,
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)'
            }}
            whileHover={{ 
              scale: 1.05, // Further reduced scale for faster hover
              transition: { 
                duration: 0.1, 
                type: "spring", 
                stiffness: 250, 
                damping: 15 
              }
            }}
          >
            <div className="drop-shadow-lg filter relative group">
              {/* Simplified glass effect */}
              <div 
                className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
                style={{ 
                  width: `${logo.size.width + 20}px`, 
                  height: `${logo.size.height + 20}px`,
                  left: -10,
                  top: -10,
                  backgroundColor: `${logo.color}05`
                }}
              />
              
              <div className="relative">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.size.width}
                  height={logo.size.height}
                  className={`object-contain relative z-10 ${
                    // Apply filter to dark logos
                    logo.name === 'GitHub' || 
                    logo.name === 'MySQL' || 
                    logo.name === 'Stripe' ||
                    logo.name === 'Google Play' ||
                    logo.name === 'App Store' ||
                    logo.name === 'Slack' ? 
                    'brightness-0 invert' : ''
                  }`}
                />
              </div>
              
              {/* Simplified tooltip */}
              <motion.div 
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap pointer-events-none border border-gray-800"
                style={{ color: logo.color }}
                initial={{ opacity: 0, y: 10 }}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                animate="hidden"
                whileHover="visible"
                transition={{ duration: 0.1 }}
              >
                {logo.name}
              </motion.div>
            </div>
          </motion.div>
        );
      })}

      {/* Simplified Grid Background with reduced animations */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
        <div className="w-full h-full bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
          {/* Single grid pattern with minimal animation */}
          <div 
            className="grid-pattern absolute inset-0 opacity-[0.15]" 
            style={{
              backgroundImage: 'linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              boxShadow: 'inset 0 0 30px rgba(0,0,0,0.3)'
            }}
          />
        </div>
      </div>
      
      {/* Reduced decorative elements for better performance */}
      <div className="absolute top-20 left-20 w-[30vw] h-[30vw] rounded-full bg-gradient-to-r from-pink-900/10 to-purple-900/10 blur-[80px] opacity-20 z-0"></div>
      <div className="absolute bottom-20 right-20 w-[35vw] h-[35vw] rounded-full bg-gradient-to-r from-blue-900/10 to-teal-900/10 blur-[100px] opacity-20 z-0"></div>
      
      {/* Main content with optimized 3D effect */}
      <Container className="relative z-10 px-4 md:px-6">
        <motion.div 
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
          style={{
            perspective: 1000,
            rotateX: mainContentRotateX,
            rotateY: mainContentRotateY,
            willChange: 'transform',
            transform: 'translateZ(0)'
          }}
        >
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 text-sm font-medium border border-gray-700 shadow-sm"
              whileHover={{ 
                scale: 1.02, // Reduced scale for better performance
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 350, damping: 15 }}
            >
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span>Your Vision, Our Expertise</span>
            </motion.div>
          </motion.div>
          
          {/* Optimized heading with improved letter animations */}
          <div className="mb-10 relative">
            <h1 className="sr-only">INNOVATIVE IMPACTFUL CREATIVE</h1>
            
            {/* First line */}
            <div className="overflow-hidden mb-2">
              <motion.div 
                className="hero-title-1 text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] text-gray-200 opacity-0 transform translate-y-8 flex justify-center"
                style={{ 
                  willChange: 'transform, opacity',
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(0)'
                }}
              >
                {useMemo(() => (
                  "INNOVATIVE".split('').map((letter, index) => (
                    <AnimatedLetter 
                      key={`innovative-${index}`} 
                      letter={letter} 
                      className="text-gray-200"
                      style={headingStyle}
                    />
                  ))
                ), [])}
              </motion.div>
            </div>
            
            {/* Second line */}
            <div className="overflow-hidden mb-2">
              <motion.div 
                className="hero-title-2 text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] text-orange-500 opacity-0 transform translate-y-8 flex justify-center"
                style={{ 
                  willChange: 'transform, opacity',
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(0)'
                }}
              >
                {useMemo(() => (
                  "IMPACTFUL".split('').map((letter, index) => (
                    <AnimatedLetter 
                      key={`impactful-${index}`} 
                      letter={letter} 
                      className="text-orange-500"
                      style={headingStyle}
                    />
                  ))
                ), [])}
              </motion.div>
            </div>
            
            {/* Third line */}
            <div className="overflow-hidden">
              <motion.div 
                className="hero-title-3 text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] text-gray-200 opacity-0 transform translate-y-8 flex justify-center"
                style={{ 
                  willChange: 'transform, opacity',
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(0)'
                }}
              >
                {useMemo(() => (
                  <>
                    {"CREATIVE".split('').map((letter, index) => (
                      <AnimatedLetter 
                        key={`creative-${index}`} 
                        letter={letter} 
                        className="text-gray-200"
                        style={headingStyle}
                      />
                    ))}
                    <AnimatedLetter 
                      key="creative-dot" 
                      letter="." 
                      className="text-orange-500"
                      style={{...headingStyle, color: '#ff5722'}}
                    />
                  </>
                ), [])}
              </motion.div>
            </div>
          </div>
          
          <p
            className="hero-subtitle text-lg sm:text-xl max-w-3xl mx-auto mb-8 text-gray-400 leading-relaxed opacity-0 transform translate-y-8"
          >
            {typedText}
          </p>
        </motion.div>
      </Container>
      
      {/* Simplified scroll indicator */}
      <motion.div 
        className="hero-scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10 opacity-0 translate-y-8"
        onClick={scrollToNextSection}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex flex-col items-center">
          {/* Mouse icon with scroll animation */}
          <div className="relative w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1 mb-2">
            <motion.div 
              className="w-1.5 h-1.5 bg-orange-500 rounded-full"
              animate={{ 
                y: [0, 12, 0],
                opacity: [1, 0.5, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.8,
                ease: "easeInOut" 
              }}
            />
          </div>
          
          <span className="text-sm font-medium text-gray-400 mb-1">Scroll down</span>
          <ChevronDown className="h-5 w-5 text-orange-500" />
        </div>
      </motion.div>
    </section>
  );
} 