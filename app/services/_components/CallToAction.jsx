"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaChartLine, FaArrowRight, FaStar, FaUsers, FaClock } from 'react-icons/fa';
import SafeLink from "../../components/ui/SafeLink";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-br from-[#0B0A1C] via-[#0F1E2E] to-[#0B0A1C] py-24 px-6 text-center relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00F8B4]/5 via-transparent to-[#00C4FF]/5"></div>
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] rounded-full filter blur-3xl opacity-10"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.1, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
      
      {/* Enhanced Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-[#00F8B4] rounded-full animate-bounce opacity-60"></div>
      <div className="absolute top-1/2 right-20 w-3 h-3 bg-[#00C4FF] rounded-full animate-pulse opacity-50"></div>
      <div className="absolute bottom-1/4 left-20 w-2 h-2 bg-[#00F8B4] rounded-full animate-pulse delay-1000 opacity-40"></div>
      <div className="absolute bottom-1/3 right-10 w-3 h-3 bg-[#00C4FF] rounded-full animate-bounce delay-500 opacity-50"></div>
      
      {/* Additional floating stars */}
      <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-30"></div>
      <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse delay-2000 opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">Transform</span> Your Business?
          </h2>
          
          <p className="text-xl text-gray-300 mt-6 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's schedule a free 1-on-1 session to help you build scalable, intelligent solutions that drive real results.
          </p>
          
          {/* Enhanced Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <motion.div
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-xl flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-white text-xl" />
              </div>
              <h3 className="text-white font-bold text-2xl mb-2">500+</h3>
              <p className="text-gray-300 text-sm">Happy Clients</p>
            </motion.div>
            
            <motion.div
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] rounded-xl flex items-center justify-center mx-auto mb-4">
                <FaStar className="text-white text-xl" />
              </div>
              <h3 className="text-white font-bold text-2xl mb-2">99.8%</h3>
              <p className="text-gray-300 text-sm">Success Rate</p>
            </motion.div>
            
            <motion.div
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-xl flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-white text-xl" />
              </div>
              <h3 className="text-white font-bold text-2xl mb-2">24/7</h3>
              <p className="text-gray-300 text-sm">Support</p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Enhanced CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <SafeLink href="/contact">
            <motion.button 
              className="group bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] text-white font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-[0_0_30px_rgba(0,248,180,0.4)] hover:scale-105 transition-all duration-300 relative overflow-hidden flex items-center justify-center min-w-[200px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Get free consultancy session"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FaRocket className="w-5 h-5 mr-3 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Get Free Consultancy</span>
              <FaArrowRight className="w-4 h-4 ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </SafeLink>
          
          <SafeLink href="/case-studies">
            <motion.button 
              className="group bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/20 hover:border-[#00F8B4]/50 hover:scale-105 transition-all duration-300 flex items-center justify-center min-w-[200px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View case studies"
            >
              <FaChartLine className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
              <span>See Case Studies</span>
              <FaArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </SafeLink>
        </motion.div>
        
        {/* Trust Indicators */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-gray-400 text-sm mb-4">Trusted by industry leaders</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="w-16 h-8 bg-white/20 rounded flex items-center justify-center">
              <span className="text-white text-xs font-semibold">TechCorp</span>
            </div>
            <div className="w-16 h-8 bg-white/20 rounded flex items-center justify-center">
              <span className="text-white text-xs font-semibold">FinTech</span>
            </div>
            <div className="w-16 h-8 bg-white/20 rounded flex items-center justify-center">
              <span className="text-white text-xs font-semibold">RetailPro</span>
            </div>
            <div className="w-16 h-8 bg-white/20 rounded flex items-center justify-center">
              <span className="text-white text-xs font-semibold">GlobalTech</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
