"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaRocket, FaChartLine } from 'react-icons/fa';
import SafeLink from './ui/SafeLink';

// Floating Dots Component
const FloatingDots = () => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    // Generate dots only on client side to avoid hydration mismatch
    const generatedDots = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2,
    }));
    setDots(generatedDots);
  }, []);

  if (dots.length === 0) {
    return null; // Don't render anything until dots are generated
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-gradient-to-r from-brand-aqua/40 to-brand-teal/40"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default function FinalCTA() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-6 text-center relative overflow-hidden">
      {/* Background Effects - Matching Homepage */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00F8B4]/5 via-transparent to-[#00C4FF]/5"></div>
      
      {/* Enhanced Animated Gradient Background */}
      <motion.div 
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-brand-aqua to-brand-teal rounded-full filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-brand-teal to-brand-aqua rounded-full filter blur-3xl opacity-10"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.1, 0.2],
          x: [0, -25, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Enhanced Rotating Gradient Animation */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-brand-aqua/3 to-brand-teal/3 rounded-full filter blur-3xl"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ y }}
      />
      
      {/* Floating Dots Background */}
      <FloatingDots />
      
      {/* Enhanced Floating Elements */}
      <motion.div 
        className="absolute top-1/4 left-10 w-4 h-4 bg-brand-aqua rounded-full"
        animate={{ 
          y: [0, -25, 0],
          opacity: [0.6, 1, 0.6],
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/2 right-20 w-3 h-3 bg-brand-teal rounded-full"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.5, 0.9, 0.5],
          scale: [1, 1.4, 1],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-20 w-2 h-2 bg-brand-aqua rounded-full"
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.5, 1],
          rotate: [0, 360, 0]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-10 w-3 h-3 bg-brand-teal rounded-full"
        animate={{ 
          y: [0, -22, 0],
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.2, 1],
          rotate: [360, 0, 360]
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
         <motion.h2 
           className="text-gray-900 text-4xl md:text-5xl font-bold leading-tight mb-6"
           initial={{ opacity: 0, y: 30, scale: 0.95 }}
           whileInView={{ opacity: 1, y: 0, scale: 1 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           viewport={{ once: true }}
         >
           Ready to <motion.span 
             className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent"
             animate={{
               backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
             }}
             transition={{
               duration: 3,
               repeat: Infinity,
               ease: "easeInOut"
             }}
             style={{
               backgroundSize: "200% 200%",
             }}
           >
             Transform
           </motion.span> Your Business?
         </motion.h2>
         
         <motion.p 
           className="text-gray-500 text-lg md:text-xl mt-2 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Let's schedule a free 1-on-1 session to help you build scalable, intelligent solutions.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-6"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ 
              scale: 1.03,
              y: -3,
              boxShadow: "0 20px 40px rgba(0, 248, 180, 0.3)"
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <SafeLink href="/contact">
              <motion.div
                className="btn-primary inline-flex items-center justify-center px-10 py-5 relative overflow-hidden"
                whileHover={{ 
                  boxShadow: "0 15px 30px rgba(0, 248, 180, 0.4)"
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-brand-aqua/20 to-brand-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ scale: 1.1 }}
                />
                <motion.div
                  whileHover={{ rotate: 12 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaRocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                </motion.div>
                <span className="relative z-10">Book Free Consultation</span>
              </motion.div>
            </SafeLink>
          </motion.div>
          
          <motion.div
            whileHover={{ 
              scale: 1.03,
              y: -3,
              boxShadow: "0 20px 40px rgba(0, 196, 255, 0.2)"
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <SafeLink href="/case-studies">
              <motion.div
                className="btn-secondary inline-flex items-center justify-center px-10 py-5 relative overflow-hidden"
                whileHover={{ 
                  boxShadow: "0 15px 30px rgba(0, 196, 255, 0.3)"
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-brand-teal/10 to-brand-aqua/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{ scale: 1.1 }}
                />
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChartLine className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                </motion.div>
                <span className="relative z-10">See Our Work</span>
              </motion.div>
            </SafeLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 