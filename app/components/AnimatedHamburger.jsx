"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function AnimatedHamburger({ 
  isOpen, 
  onClick, 
  className = "" 
}) {
  const iconVariants = {
    closed: {
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      rotate: 180,
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    closed: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.button
      onClick={onClick}
      className={`p-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00C4FF]/50 touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center ${className}`}
      variants={buttonVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      whileHover={{ 
        scale: 1.1,
        backgroundColor: "rgba(255, 255, 255, 0.15)",
      }}
      whileTap={{ scale: 0.95 }}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <motion.div
        variants={iconVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="relative"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} className="text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={24} className="text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
};

export default AnimatedHamburger;
