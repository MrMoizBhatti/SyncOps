"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function InViewWrapper({ 
  children, 
  className = "", 
  animation = "fadeUp",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  stagger = 0.06
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold, once: true });

  const animations = {
    fadeUp: {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { duration, delay, ease: "easeOut" }
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration, delay, ease: "easeOut" }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration, delay, ease: "easeOut" }
    },
    slideUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration, delay, ease: "easeOut" }
    },
    slideInLeft: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 },
      transition: { duration, delay, ease: "easeOut" }
    },
    slideInRight: {
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0 },
      transition: { duration, delay, ease: "easeOut" }
    }
  };

  const selectedAnimation = animations[animation] || animations.fadeUp;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={selectedAnimation.initial}
      animate={isInView ? selectedAnimation.animate : selectedAnimation.initial}
      transition={selectedAnimation.transition}
    >
      {children}
    </motion.div>
  );
}

// Stagger wrapper for multiple children
export function StaggerWrapper({ 
  children, 
  className = "", 
  animation = "fadeUp",
  stagger = 0.06,
  threshold = 0.1 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold, once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {Array.isArray(children) ? 
        children.map((child, index) => (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        )) : 
        <motion.div variants={itemVariants}>
          {children}
        </motion.div>
      }
    </motion.div>
  );
}
