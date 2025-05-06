'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  Home,
  Users2,
  LayoutGrid,
  Cpu,
  FolderKanban,
  MessageSquareQuote,
  HelpCircle,
  Sparkles,
  Rocket,
  Layers,
  GanttChartSquare,
  Lightbulb,
} from 'lucide-react';

// Define section colors
const sectionColors = {
  hero: { color: '#3B82F6', rgb: '59, 130, 246' },
  about: { color: '#8B5CF6', rgb: '139, 92, 246' },
  services: { color: '#F59E0B', rgb: '245, 158, 11' },
  'tech-stack': { color: '#FF4B24', rgb: '255, 75, 36' },
  portfolio: { color: '#06B6D4', rgb: '6, 182, 212' },
  testimonials: { color: '#6366F1', rgb: '99, 102, 241' },
  faq: { color: '#F43F5E', rgb: '244, 63, 94' },
};

const navItems = [
  { name: 'Hero', href: '#hero', icon: Home },
  { name: 'About Us', href: '#about', icon: Users2 },
  { name: 'Services', href: '#services', icon: Layers },
  { name: 'Tech Stack', href: '#tech-stack', icon: Cpu },
  { name: 'Portfolio', href: '#portfolio', icon: FolderKanban },
  { name: 'Testimonials', href: '#testimonials', icon: MessageSquareQuote },
  { name: 'FAQ', href: '#faq', icon: Lightbulb },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const [indicatorPosition, setIndicatorPosition] = useState({ left: 0, width: 0 });
  const [indicatorColor, setIndicatorColor] = useState(sectionColors.hero);

  useEffect(() => {
    const handleScroll = () => {
      // Get all section elements
      const sections = navItems.map(item => {
        const id = item.href.substring(1);
        const element = document.getElementById(id);
        return { id, element };
      }).filter(item => item.element !== null);
      
      // Check if we're at the top of the page (hero section)
      if (window.scrollY < 100) {
        setActiveSection('hero');
        updateIndicatorPosition('hero');
        setIndicatorColor(sectionColors.hero);
        return;
      }
      
      // Find the section currently in view
      const currentSection = sections.find(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          // Adjust these values to fine-tune when a section is considered "active"
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
        updateIndicatorPosition(currentSection.id);
        // Update color based on the current section
        setIndicatorColor(sectionColors[currentSection.id as keyof typeof sectionColors] || sectionColors.hero);
      }
    };

    // Initial check on mount
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Set initial indicator position
    updateIndicatorPosition(activeSection);
    // Set initial indicator color
    setIndicatorColor(sectionColors[activeSection as keyof typeof sectionColors] || sectionColors.hero);
  }, [activeSection]);

  const updateIndicatorPosition = (section: string) => {
    if (navRef.current) {
      const activeButton = navRef.current.querySelector(`[data-section="${section}"]`) as HTMLElement;
      if (activeButton) {
        const rect = activeButton.getBoundingClientRect();
        const navRect = navRef.current.getBoundingClientRect();
        setIndicatorPosition({
          left: rect.left - navRect.left,
          width: rect.width,
        });
      }
    }
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 25 }}
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50"
    >
      <motion.nav
        className="bg-black/90 backdrop-blur-xl rounded-full px-4 py-2 border-2 border-gray-700 flex items-center shadow-lg shadow-black/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {/* Company Logo */}
        <motion.div 
          className="mr-2 flex items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          <Link href="#hero">
            <div className="relative w-9 h-9 flex items-center justify-center">
              <Image 
                src="/hero-logo.png" 
                alt="Company Logo" 
                width={36} 
                height={36}
                className="object-contain brightness-125 z-10 relative"
                priority
              />
              {/* Glow effect */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-orange-500/40 blur-md -z-10"
                animate={{
                  opacity: [0.5, 0.9, 0.5],
                  scale: [0.9, 1.2, 0.9]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
              {/* Additional subtle ring */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-orange-400/30 -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 0.8, 0.6]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
            </div>
          </Link>
        </motion.div>

        {/* Vertical Separator */}
        <div className="h-8 w-px bg-gray-700 mx-3 opacity-80"></div>

        <ul ref={navRef} className="flex items-center gap-1 relative">
          {/* Modern Liquid Bubble Highlighter */}
          <motion.div
            className="absolute z-0"
            initial={false}
            animate={{
              left: indicatorPosition.left,
              width: indicatorPosition.width,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          >
            {/* Liquid bubble effect */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ 
                background: `linear-gradient(135deg, ${indicatorColor.color}, rgba(${indicatorColor.rgb}, 0.8))`,
                width: '90%',
                height: '90%',
                filter: 'blur(1px)',
                boxShadow: `0 0 10px 2px ${indicatorColor.color}40`
              }}
              animate={{
                scale: [1, 1.1, 1],
                borderRadius: ["50%", "40%", "50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
            />
            
            {/* Shimmering effect */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden"
              style={{ 
                width: '100%',
                height: '100%',
                background: 'transparent',
                opacity: 0.7,
              }}
            >
              <motion.div
                className="absolute w-full h-full"
                style={{
                  background: `linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)`,
                  transform: 'translateX(-100%)',
                }}
                animate={{
                  x: ['100%', '-100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 1
                }}
              />
            </motion.div>
          </motion.div>
          
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.substring(1);
            const isHovered = hoveredItem === item.name;
            const itemColor = sectionColors[item.href.substring(1) as keyof typeof sectionColors] || sectionColors.hero;
            
            return (
              <motion.li key={item.name} className="z-10">
                <button
                  data-section={item.href.substring(1)}
                  onClick={() => handleNavClick(item.href)}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`relative p-2 rounded-full transition-all duration-300 group ${
                    isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <motion.div
                    animate={{
                      scale: isActive || isHovered ? 1.2 : 1,
                      rotate: isHovered && !isActive ? [0, -10, 10, -5, 5, 0] : 0
                    }}
                    transition={{
                      rotate: {
                        duration: 0.5,
                        ease: "easeInOut"
                      },
                      scale: {
                        duration: 0.3,
                        ease: "backOut"
                      }
                    }}
                    style={{
                      filter: isActive ? `drop-shadow(0 0 8px ${itemColor.color})` : 'none'
                    }}
                    className="relative"
                  >
                    <Icon 
                      className={`w-5 h-5 ${isActive ? 'text-white' : ''} transition-all duration-300 stroke-[2.5px]`} 
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full opacity-30"
                        style={{ backgroundColor: itemColor.color }}
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.15 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                </button>
              </motion.li>
            );
          })}
        </ul>
      </motion.nav>
    </motion.header>
  );
} 