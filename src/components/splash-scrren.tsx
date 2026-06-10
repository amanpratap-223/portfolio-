"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show splash screen briefly
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Premium dark background - deep charcoal to black */}
          <div className="absolute inset-0 bg-[#050505]" />
          
          {/* Subtle gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#050505] to-[#000000]" />
          
          {/* Subtle radial glow in corners */}
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.08)_0%,transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.08)_0%,transparent_50%)]" />
          
          {/* Very subtle mesh gradient overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(15,15,20,0.5),transparent_50%,rgba(10,10,15,0.3))]" />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 text-center"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-8 tracking-wide">
              नमस्ते
            </h1>
            
            {/* 3-dot loading animation */}
            <div className="flex justify-center items-center gap-2">
              <motion.div
                className="w-3 h-3 bg-white/80 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0,
                }}
              />
              <motion.div
                className="w-3 h-3 bg-white/80 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              />
              <motion.div
                className="w-3 h-3 bg-white/80 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
