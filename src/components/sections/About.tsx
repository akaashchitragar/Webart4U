'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  Building2, Target, Rocket, Code2, Users, Trophy, Calendar, MapPin,
  Lightbulb, Shield, Clock, Sparkles, CheckCircle2, ArrowRight, Star, Award, Globe
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useRef, useState, useEffect } from 'react';

// Custom Icon component with consistent styling but unique visual treatments
const IconWrapper = ({ 
  icon: Icon, 
  color = 'text-[#FF4B24]',
  size = 'medium',
  animation = 'none',
  className = ''
}: { 
  icon: any, 
  color?: string,
  size?: 'small' | 'medium' | 'large',
  animation?: 'pulse' | 'bounce' | 'rotate' | 'none',
  className?: string
}) => {
  // Icon size mappings
  const iconSizes = {
    small: 'h-4 w-4',
    medium: 'h-6 w-6',
    large: 'h-8 w-8'
  };
  
  // We're keeping the function structure but only using it for 'none' case
  // This makes it easier to add animations back later if needed
  const getAnimationVariant = () => {
    return { animate: {} }; // No animation for any case
  };
  
  const animationProps = getAnimationVariant();
  
  return (
    <motion.div 
      className={`${className}`}
      whileHover={{ scale: 1.2, rotate: 5 }}
      {...animationProps}
    >
      <Icon className={`${iconSizes[size]} ${color} drop-shadow-md`} strokeWidth={1.5} />
    </motion.div>
  );
};

const expertise = [
  {
    icon: Lightbulb,
    title: 'Creative Excellence',
    description: "Innovative designs that capture your brand's essence",
    color: 'text-amber-400',
    animation: 'none'
  },
  {
    icon: Shield,
    title: 'Proven Track Record',
    description: 'Consistent delivery of high-quality solutions',
    color: 'text-emerald-400',
    animation: 'none'
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Meeting deadlines without compromising quality',
    color: 'text-sky-400',
    animation: 'none'
  },
  {
    icon: Sparkles,
    title: 'Custom Solutions',
    description: 'Tailored approaches for unique business needs',
    color: 'text-fuchsia-400',
    animation: 'none'
  }
];

const globalPresence = [
  { country: 'America', flag: '🇺🇸' },
  { country: 'Australia', flag: '🇦🇺' },
  { country: 'Europe', flag: '🇪🇺' },
  { country: 'UK', flag: '🇬🇧' },
  { country: 'Japan', flag: '🇯🇵' },
  { country: 'Singapore', flag: '🇸🇬' },
  { country: 'UAE', flag: '🇦🇪' }
];

const stats = [
  { 
    icon: Trophy, 
    label: 'Projects', 
    value: '500+', 
    color: 'text-amber-400', 
    image: '/images/about/projects.jpg',
    borderColor: 'border-amber-400/30',
    animation: 'none'
  },
  { 
    icon: Users, 
    label: 'Clients', 
    value: '200+', 
    color: 'text-sky-400', 
    image: '/images/about/clients.jpg',
    borderColor: 'border-sky-400/30',
    animation: 'none'
  }
];

// Background images for bento boxes
const bentoBackgrounds: Record<string, string> = {
  company: '/images/about/company-bg.jpg',
  years: '/images/about/years-bg.jpg',
  location: '/images/about/location-bg.jpg',
  global: '/images/about/global-bg.jpg',
  expertise: '/images/about/expertise-bg.jpg',
  projects: '/images/about/projects-bg.jpg',
  clients: '/images/about/clients-bg.jpg'
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut"
    }
  })
};

// Animated Bento Box component
const BentoBox = ({ 
  children, 
  className, 
  index = 0,
  hoverEffect = "company",
  onMouseEnter,
  onMouseLeave
}: { 
  children: React.ReactNode, 
  className: string,
  index?: number,
  hoverEffect?: string,
  onMouseEnter?: () => void,
  onMouseLeave?: () => void
}) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </motion.div>
  );
};

export default function About() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [hoveredBox, setHoveredBox] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden bg-[#0D0D0D]">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#6A0DAD]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#FF4B24]/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
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
              <Building2 className="w-4 h-4 text-[#FF4B24]" />
              <span>About Us</span>
              <motion.div
                className="absolute inset-0 rounded-full bg-[#FF4B24]/5 z-[-1]"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Our <span className="text-gradient bg-gradient-to-r from-[#FF4B24] to-[#FF8F6B]">Story</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Learn about our journey, expertise, and global presence in the digital world
          </p>
        </motion.div>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 auto-rows-[minmax(180px,auto)] gap-3">
          {/* Main About Box - Spans 8 columns, 2 rows */}
          <BentoBox
            className="col-span-12 md:col-span-8 row-span-2 group"
            index={0}
            hoverEffect="company"
            onMouseEnter={() => setHoveredBox('company')}
            onMouseLeave={() => setHoveredBox(null)}
          >
            <div className="h-full w-full bg-black/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF4B24]/10 via-transparent to-transparent opacity-60"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4B24]/10 rounded-full -mr-16 -mt-16"></div>
              
              {/* Hover background image */}
              <div 
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${hoveredBox === 'company' ? 'opacity-20' : 'opacity-0'}`} 
                style={{ backgroundImage: `url(${bentoBackgrounds.company})` }}
              ></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <IconWrapper 
                    icon={Building2} 
                    color="text-[#FF4B24]"
                    size="large"
                    animation="none"
                    className="flex-shrink-0"
                  />
                  <h3 className="text-2xl font-bold text-white">About the Company</h3>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Founded in 2002, Webart4U is a premier design and development firm with over two decades 
                  of experience in delivering innovative and impactful solutions for businesses across the Globe.
                </p>
                
                <div className="p-5 bg-black/40 rounded-xl mb-auto backdrop-blur-sm border border-gray-800/30">
                  <div className="flex items-start gap-4">
                    <IconWrapper 
                      icon={Target} 
                      color="text-rose-400"
                      animation="none"
                      className="flex-shrink-0 mt-1"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Our Mission</h3>
                      <p className="text-gray-300">
                        Our mission is to transform ideas into impactful designs and experiences. 
                        We are dedicated to helping businesses thrive by crafting solutions that 
                        are not only visually stunning but also strategically effective.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-800/20">
                  <div className="flex items-center gap-2">
                    <IconWrapper 
                      icon={Award} 
                      color="text-amber-400"
                      size="small"
                      animation="none"
                    />
                    <p className="text-sm text-gray-400">Trusted by industry leaders across the Globe</p>
                  </div>
                </div>
              </div>
            </div>
          </BentoBox>

          {/* Years in Business - Spans 4 columns, 1 row */}
          <BentoBox
            className="col-span-12 md:col-span-4 row-span-1 group"
            index={1}
            hoverEffect="years"
            onMouseEnter={() => setHoveredBox('years')}
            onMouseLeave={() => setHoveredBox(null)}
          >
            <div className="h-full w-full bg-black/60 backdrop-blur-sm rounded-3xl p-6 border border-gray-800 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6A0DAD]/10 via-transparent to-transparent opacity-60"></div>
              
              {/* Hover background image */}
              <div 
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${hoveredBox === 'years' ? 'opacity-20' : 'opacity-0'}`} 
                style={{ backgroundImage: `url(${bentoBackgrounds.years})` }}
              ></div>
              
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                <IconWrapper 
                  icon={Calendar} 
                  color="text-teal-400"
                  size="large"
                  animation="none"
                  className="mb-3"
                />
                
                <motion.h3 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-5xl font-bold text-white mb-1"
                >
                  22
                </motion.h3>
                <p className="text-gray-400">Years of Excellence</p>
              </div>
            </div>
          </BentoBox>

          {/* Location - Spans 4 columns, 1 row */}
          <BentoBox
            className="col-span-12 md:col-span-4 row-span-1 group"
            index={2}
            hoverEffect="location"
            onMouseEnter={() => setHoveredBox('location')}
            onMouseLeave={() => setHoveredBox(null)}
          >
            <div className="h-full w-full bg-black/60 backdrop-blur-sm rounded-3xl p-6 border border-gray-800 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF4B24]/10 via-transparent to-transparent opacity-60"></div>
              
              {/* Hover background image */}
              <div 
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${hoveredBox === 'location' ? 'opacity-20' : 'opacity-0'}`} 
                style={{ backgroundImage: `url(${bentoBackgrounds.location})` }}
              ></div>
              
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                <IconWrapper 
                  icon={MapPin} 
                  color="text-[#FF4B24]"
                  size="large"
                  animation="none"
                  className="mb-4"
                />
                
                <div className="flex flex-col items-center">
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl font-bold text-white mb-2"
                  >
                    Made in India
                  </motion.h3>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-center gap-2 mb-3"
                  >
                    <span className="text-2xl">🇮🇳</span>
                    <div className="h-0.5 w-6 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-full"></div>
                    <span className="text-2xl">🌎</span>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg font-medium text-[#FF4B24]"
                  >
                    For the World
                  </motion.p>
                </div>
              </div>
            </div>
          </BentoBox>

          {/* Global Presence - Spans 6 columns, 1 row */}
          <BentoBox
            className="col-span-12 md:col-span-6 row-span-1 group"
            index={3}
            hoverEffect="global"
            onMouseEnter={() => setHoveredBox('global')}
            onMouseLeave={() => setHoveredBox(null)}
          >
            <div className="h-full w-full bg-black/60 backdrop-blur-sm rounded-3xl p-6 border border-gray-800 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6A0DAD]/10 via-transparent to-transparent opacity-60"></div>
              
              {/* Hover background image */}
              <div 
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${hoveredBox === 'global' ? 'opacity-20' : 'opacity-0'}`} 
                style={{ backgroundImage: `url(${bentoBackgrounds.global})` }}
              ></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <IconWrapper 
                    icon={Globe} 
                    color="text-indigo-400"
                    animation="none"
                    className="flex-shrink-0"
                  />
                  <h3 className="text-lg font-semibold text-white">Serving Clients Across The Globe</h3>
                </div>
                
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-2">
                  {globalPresence.map((item, index) => (
                    <motion.div
                      key={item.country}
                      custom={index}
                      variants={scaleIn}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                      className="flex items-center gap-2 bg-black/40 rounded-lg p-2 transition-all hover:bg-black/60 border border-gray-800/30"
                    >
                      <span className="text-xl">{item.flag}</span>
                      <span className="text-sm text-gray-300">{item.country}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </BentoBox>

          {/* Expertise Highlight - Spans 6 columns, 2 rows */}
          <BentoBox
            className="col-span-12 md:col-span-6 row-span-2 group"
            index={4}
            hoverEffect="expertise"
            onMouseEnter={() => setHoveredBox('expertise')}
            onMouseLeave={() => setHoveredBox(null)}
          >
            <div className="h-full w-full bg-black/60 backdrop-blur-sm rounded-3xl p-6 border border-gray-800 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF4B24]/10 to-[#6A0DAD]/10 opacity-60"></div>
              
              {/* Hover background image */}
              <div 
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${hoveredBox === 'expertise' ? 'opacity-20' : 'opacity-0'}`} 
                style={{ backgroundImage: `url(${bentoBackgrounds.expertise})` }}
              ></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-xl font-bold text-white mb-5">Our Expertise</h3>
                
                <div className="grid grid-cols-1 gap-5 flex-grow">
                  {expertise.map((item, index) => (
                    <motion.div 
                      key={item.title}
                      custom={index}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3 group/item"
                    >
                      <IconWrapper 
                        icon={item.icon} 
                        color={item.color}
                        animation={item.animation as any}
                        className="flex-shrink-0 mt-1"
                      />
                      <div>
                        <h4 className="font-semibold text-white text-base mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </BentoBox>

          {/* Stats Grid - 4 small boxes */}
          {stats.map((stat, index) => (
            <BentoBox
              key={stat.label}
              className="col-span-6 sm:col-span-3 row-span-1 group"
              index={5 + index}
              hoverEffect={stat.label.toLowerCase()}
              onMouseEnter={() => {
                setHoveredStat(index);
                setHoveredBox(stat.label.toLowerCase());
              }}
              onMouseLeave={() => {
                setHoveredStat(null);
                setHoveredBox(null);
              }}
            >
              <div className={`h-full w-full bg-black/60 backdrop-blur-sm rounded-3xl p-5 border overflow-hidden relative ${hoveredStat === index ? stat.borderColor : 'border-gray-800'} transition-colors duration-300`}>
                <div className="absolute inset-0 bg-gradient-to-br opacity-60" style={{ 
                  backgroundImage: `linear-gradient(to bottom right, ${stat.color.replace('bg-', '').replace('-500/20', '-500/10')}, transparent)`
                }}></div>
                
                {/* Hover background image */}
                <div 
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${hoveredBox === stat.label.toLowerCase() ? 'opacity-20' : 'opacity-0'}`} 
                  style={{ backgroundImage: `url(${bentoBackgrounds[stat.label.toLowerCase()]})` }}
                ></div>
                
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                  <IconWrapper 
                    icon={stat.icon} 
                    color={stat.color}
                    animation={stat.animation as any}
                    className="mb-3"
                    size="large"
                  />
                  
                  <motion.p 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="font-bold text-2xl text-white"
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-xs text-gray-400">{stat.label}</p>
                </div>
              </div>
            </BentoBox>
          ))}
        </div>
      </div>
    </section>
  );
} 