'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

// Reduced testimonial data with only key testimonials
const testimonials = [
  {
    id: 1,
    name: 'Raj Patel',
    role: 'Tech Entrepreneur',
    content: "Exceptional website development!\n\nWebart4U built our company website using the latest technologies and AI-driven features. The site is blazing fast, responsive on all devices, and has helped us establish a strong online presence. Their attention to detail is remarkable.",
    rating: 5,
    image: '/images/testimonials/raj-patel.jpg',
    company: 'TechVision Inc.'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Product Manager',
    content: "Seamless project management!\n\nThe Webart4U team managed our complex project with exceptional skill. Their communication was clear, timelines were met, and they were flexible with our changing requirements. I highly recommend their services.",
    rating: 5,
    image: '/images/testimonials/priya-sharma.jpg',
    company: 'InnovatePro Solutions'
  },
  {
    id: 3,
    name: 'Thomas Jacks',
    role: 'Startup Founder',
    content: "Revolutionary digital solutions!\n\nWorking with Webart4U has been a game-changer for our startup. Their innovative approach and technical expertise helped us launch our platform ahead of schedule. The quality of their work exceeded our expectations.",
    rating: 5,
    image: '/images/testimonials/thomas-jacks.jpg',
    company: 'LaunchPad Ventures'
  },
  {
    id: 4,
    name: 'Linda Watson',
    role: 'Marketing Director',
    content: "Best UI/UX design experience!\n\nThe team at Webart4U transformed our outdated interface into a stunning, user-friendly design. The intuitive navigation and visual appeal have significantly increased our user engagement and conversion rates.",
    rating: 5,
    image: '/images/testimonials/linda-watson.jpg',
    company: 'BrandForward Media'
  }
];

// Rating stars component
const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-amber-400 fill-amber-400' : i < rating ? 'text-amber-400 fill-amber-400' : 'text-amber-400'}`} 
        />
      ))}
    </div>
  );
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#0D0D0D]">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#6A0DAD]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#FF4B24]/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Heading and Navigation */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block mb-3"
              >
                <motion.div
                  className="inline-flex items-center gap-2 py-2 px-4 rounded-md bg-gradient-to-r from-[#FF4B24]/20 to-[#FF8F6B]/20 backdrop-blur-sm text-white text-sm font-medium border border-[#FF4B24]/20 shadow-sm relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#FF4B24]/10 to-[#FF8F6B]/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                  <div className="relative z-10 flex items-center gap-2">
                    <motion.div
                      animate={{ 
                        rotate: [0, 15, -15, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                    >
                      <Star className="w-4 h-4 text-[#FF4B24] fill-[#FF4B24]" />
                    </motion.div>
                    <span>Client Success Stories</span>
                  </div>
                </motion.div>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold mb-3 text-white"
              >
                What Our <span className="text-gradient bg-gradient-to-r from-[#FF4B24] to-[#FF8F6B]">Clients</span> Say
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-400 max-w-2xl text-sm mb-8"
              >
                Hear from businesses that have transformed their digital presence with our services
              </motion.p>
              
              {/* Testimonial Navigation */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-4 mt-8"
              >
                <button 
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-gray-800 hover:bg-[#FF4B24]/20 text-white transition-colors duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > activeIndex ? 1 : -1);
                        setActiveIndex(index);
                      }}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === activeIndex ? 'bg-[#FF4B24] w-8' : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <button 
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-gray-800 hover:bg-[#FF4B24]/20 text-white transition-colors duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right Column - Testimonial Display */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden" 
            ref={testimonialsRef}
          >
            <div className="relative h-[400px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeIndex}
                  initial={{ 
                    opacity: 0,
                    x: direction * 200
                  }}
                  animate={{ 
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease: "easeInOut" }
                  }}
                  exit={{ 
                    opacity: 0,
                    x: direction * -200,
                    transition: { duration: 0.5, ease: "easeInOut" }
                  }}
                  className="absolute inset-0"
                >
                  <div className="bg-black/60 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden h-full p-8 relative flex flex-col">
                    {/* Large quote icon */}
                    <div className="absolute -bottom-6 -right-6 opacity-10">
                      <Quote className="w-32 h-32 text-[#FF4B24]" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <RatingStars rating={testimonials[activeIndex].rating} />
                          <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            className="relative group"
                          >
                            <span className="text-xs font-medium text-white px-3 py-1.5 bg-gradient-to-r from-[#FF4B24]/20 to-[#FF8F6B]/20 backdrop-blur-sm rounded-md border border-[#FF4B24]/20 shadow-sm flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B24] animate-pulse"></span>
                              {testimonials[activeIndex].company}
                            </span>
                            <motion.div
                              className="absolute inset-0 rounded-md bg-gradient-to-r from-[#FF4B24]/30 to-[#FF8F6B]/30 z-[-1] opacity-0 blur-[2px]"
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          </motion.div>
                        </div>
                        
                        <h3 className="font-bold text-white text-xl md:text-2xl mb-3">&ldquo;{testimonials[activeIndex].content.split('\n\n')[0]}&rdquo;</h3>
                        <p className="text-gray-400 text-sm md:text-base">{testimonials[activeIndex].content.split('\n\n')[1]}</p>
                      </div>
                      
                      <div className="flex items-center mt-6 pt-4 border-t border-gray-800/50">
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden mr-4 border-2 border-[#FF4B24]/20">
                          <Image 
                            src={testimonials[activeIndex].image} 
                            alt={testimonials[activeIndex].name} 
                            width={64} 
                            height={64} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <span className="text-base font-medium block text-white">{testimonials[activeIndex].name}</span>
                          <span className="text-sm text-gray-400">{testimonials[activeIndex].role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 