"use client";
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show button when user has scrolled past 80% of the page
      // This ensures the button appears at the bottom section of the page
      const scrollPercentage = scrollY / (documentHeight - windowHeight);
      
      if (scrollPercentage > 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-brand-aqua to-brand-teal rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.9, boxShadow: '0 0 0 0 rgba(0,196,255,0)' }}
          animate={{ opacity: 1, scale: 1, boxShadow: '0 0 40px 0 rgba(0,196,255,0.25)' }}
          exit={{ opacity: 0, scale: 0.9, boxShadow: '0 0 0 0 rgba(0,196,255,0)' }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <FaArrowUp className="text-white text-xl" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

