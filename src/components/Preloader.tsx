'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { create } from 'zustand';
import Image from 'next/image';

// Create a store to manage loading state globally
interface LoadingStore {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export const useLoadingStore = create<LoadingStore>((set) => ({
  isLoading: true,
  setIsLoading: (loading) => set({ isLoading: loading }),
}));

export const Preloader = () => {
  const [localLoading, setLocalLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const setIsLoading = useLoadingStore((state) => state.setIsLoading);

  // Initialize client-side state and handle loading simulation
  useEffect(() => {
    setIsClient(true);
    
    // Simulate loading progress using deterministic increments
    const interval = setInterval(() => {
      setProgress(prev => {
        // Use fixed increments instead of random
        const increment = 3;
        const newProgress = prev + increment;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 100);

    // Set total loading time to 2 seconds
    const timer = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      
      // Small delay after reaching 100% before removing preloader
      setTimeout(() => {
        setLocalLoading(false);
        setIsLoading(false);
      }, 500);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [setIsLoading]);

  // Only render client-side to avoid hydration mismatch
  if (!isClient) {
    return null;
  }

  return (
    <AnimatePresence>
      {localLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gray-950"
        >
          <div className="flex flex-col items-center justify-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Image
                src="/hero-logo.png"
                alt="Company Logo"
                width={120}
                height={120}
                className="object-contain drop-shadow-lg"
              />
            </motion.div>
            
            {/* Company name */}
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold mb-6"
            >
              <span className="text-white">Webart</span>
              <span className="text-orange-500">4U</span>
            </motion.h2>

            {/* Progress bar */}
            <motion.div
              className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="h-full bg-orange-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </motion.div>

            {/* Progress percentage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white font-medium"
            >
              {Math.round(progress)}%
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 