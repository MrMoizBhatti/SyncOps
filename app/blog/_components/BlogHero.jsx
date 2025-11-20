"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SafeLink from "../../components/ui/SafeLink";
import { FaSearch, FaRocket, FaBookOpen, FaChartBar, FaUsers, FaClock, FaStar, FaCheckCircle, FaEye } from 'react-icons/fa';

// Floating Particle Background Component
const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const generatedParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2,
    }));
    setParticles(generatedParticles);
  }, []);

  if (particles.length === 0) {
    return null; // Don't render anything until particles are generated
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-brand-aqua/30 to-brand-teal/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Trust Chips Component (matching homepage)
const TrustChips = () => {
  const trustChips = [
    {
      icon: <FaCheckCircle className="text-brand-aqua" />,
      text: "50+ Articles Published"
    },
    {
      icon: <FaStar className="text-brand-teal" />,
      text: "10K+ Monthly Readers"
    },
    {
      icon: <FaClock className="text-brand-aqua" />,
      text: "24/7 Fresh Content"
    }
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {trustChips.map((chip, index) => (
        <motion.div
          key={index}
          className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-gray-200 border border-white/20 hover:bg-white/20 hover:border-brand-teal/30 transition-all duration-300"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
          whileHover={{ 
            scale: 1.05, 
            y: -2,
            boxShadow: "0 10px 25px rgba(0, 248, 180, 0.15)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span 
            className="text-base"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            {chip.icon}
          </motion.span>
          {chip.text}
        </motion.div>
      ))}
    </div>
  );
};

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const startCount = 0;
    const endCount = parseInt(end.replace(/\D/g, ''));

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const currentCount = Math.floor(progress * endCount);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, duration]);

  return <span>{count}{end.replace(/\d/g, '')}</span>;
};

const BlogHero = () => {
  const featuredStats = [
    { number: "50+", label: "Articles Published", icon: <FaBookOpen className="w-6 h-6" />, color: "from-brand-aqua to-brand-teal" },
    { number: "10K+", label: "Monthly Readers", icon: <FaUsers className="w-6 h-6" />, color: "from-brand-teal to-brand-aqua" },
    { number: "24/7", label: "Fresh Content", icon: <FaClock className="w-6 h-6" />, color: "from-brand-aqua to-brand-teal" },
    { number: "100%", label: "Expert Insights", icon: <FaStar className="w-6 h-6" />, color: "from-brand-teal to-brand-aqua" }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background Effects - Matching Homepage */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-gray-900"></div>
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5"></div>
      
      {/* Gradient Aura - Matching Homepage */}
      <motion.div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-brand-aqua/20 via-brand-teal/10 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Floating Particles Background */}
      <FloatingParticles />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-16">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-white">
            <div>
              <motion.h1 
                className="text-display font-bold leading-tight mb-6 text-balance"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Discover{" "}
                <motion.span 
                  className="gradient-text"
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
                  Insights That Drive Innovation
                </motion.span>
              </motion.h1>
            </div>
            
            <motion.p 
              className="text-body-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Explore our curated collection of articles on AI, software development, cloud technologies, and industry trends. Stay ahead with expert insights and practical knowledge.
            </motion.p>
            
            {/* Enhanced CTAs - Matching Homepage */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(0, 248, 180, 0.3)"
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <SafeLink
                  href="#blog-posts"
                  className="btn-primary inline-flex items-center justify-center relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-brand-aqua/20 to-brand-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  <FaBookOpen className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">Explore Articles</span>
                </SafeLink>
              </motion.div>
              
              <motion.div
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(0, 196, 255, 0.2)"
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <SafeLink
                  href="/contact"
                  className="btn-secondary inline-flex items-center justify-center relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-brand-teal/10 to-brand-aqua/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  <FaRocket className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">Subscribe</span>
                </SafeLink>
              </motion.div>
            </motion.div>
            
            {/* Enhanced Trust Chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <TrustChips />
            </motion.div>
          </div>
          
          {/* Right Side - Stats Cards */}
          <div className="relative">
            <motion.div 
              className="glass-dark rounded-3xl p-8 border border-white/10 shadow-2xl hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 25px 50px rgba(0, 248, 180, 0.15)"
              }}
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {featuredStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center group"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -3
                    }}
                  >
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-soft group-hover:shadow-glow relative overflow-hidden`}
                      whileHover={{ 
                        boxShadow: "0 15px 30px rgba(0, 248, 180, 0.3)"
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-brand-aqua/20 to-brand-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        style={{
                          backgroundSize: "200% 200%",
                        }}
                      />
                      <motion.span 
                        className="relative z-10"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {stat.icon}
                      </motion.span>
                    </motion.div>
                    
                    <motion.div 
                      className="text-3xl font-bold text-white mb-2 group-hover:text-brand-teal transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 + index * 0.2 }}
                    >
                      <AnimatedCounter end={stat.number} duration={2 + index * 0.5} />
                    </motion.div>
                    
                    <div className="text-sm font-medium text-gray-300 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="text-center mt-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
              >
                <p className="text-white text-sm font-medium">Latest Insights & Trends</p>
                <p className="text-gray-400 text-xs mt-1">Stay ahead with expert knowledge</p>
              </motion.div>
            </motion.div>
            
            {/* Enhanced Floating Elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-brand rounded-full opacity-60"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-brand-reverse rounded-full opacity-40"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.8, 0.4],
                rotate: [360, 180, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero; 