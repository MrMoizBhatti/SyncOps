"use client";
import { FaHeartbeat, FaCreditCard, FaGraduationCap, FaShoppingCart, FaTruck } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ArrowRightCircle, ArrowDownCircle } from 'lucide-react';

const industries = [
  { name: "Healthcare", icon: FaHeartbeat, color: "from-red-400 to-pink-500", gradient: "from-red-400 to-pink-500" },
  { name: "FinTech", icon: FaCreditCard, color: "from-green-400 to-blue-500", gradient: "from-green-400 to-blue-500" },
  { name: "EdTech", icon: FaGraduationCap, color: "from-purple-400 to-indigo-500", gradient: "from-purple-400 to-indigo-500" },
  { name: "Retail", icon: FaShoppingCart, color: "from-orange-400 to-red-500", gradient: "from-orange-400 to-red-500" },
  { name: "Logistics", icon: FaTruck, color: "from-blue-400 to-cyan-500", gradient: "from-blue-400 to-cyan-500" },
];

export default function IndustriesWeServe() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <motion.h2 
          className="text-4xl lg:text-5xl font-bold text-[#222222] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Industries We <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">
            Serve
          </span>
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We deliver innovative solutions across diverse industries, helping businesses thrive in the digital age.
        </motion.p>
      </div>
      
      {/* Graph/Diagram Style Flow */}
      <div className="relative">
        <div className="relative ">
          {/* Desktop SVG connectors - connecting all nodes */}
          <div className="hidden lg:block absolute inset-x-8 top-[120px] h-16 pointer-events-none z-0">
            <svg viewBox="0 0 1000 80" className="w-full h-full" fill="none">
              <defs>
                <linearGradient id="industryLine1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.4" />
                  <stop offset="25%" stopColor="#22c55e" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#a855f7" stopOpacity="0.5" />
                  <stop offset="75%" stopColor="#f97316" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 100 40 Q 250 40 500 40 T 900 40"
                stroke="url(#industryLine1)"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.3 }}
              />
            </svg>
          </div>

          {/* Flow Nodes */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 relative z-20">
            {industries.map((industry, idx) => {
              const IconComponent = industry.icon;
              
              return (
                <motion.div
                  key={industry.name}
                  className="relative flex flex-col items-center"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  {/* Node Circle */}
                  <div className="relative mb-6">
                    <motion.div
                      className={`w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br ${industry.gradient} rounded-full flex items-center justify-center shadow-2xl relative z-10`}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-full flex items-center justify-center">
                        <IconComponent className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
                      </div>
                    </motion.div>
                    
                    {/* Pulse Animation */}
                    <motion.div
                      className={`absolute inset-0 mx-auto w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br ${industry.gradient} rounded-full opacity-20`}
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.2, 0, 0.2],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: idx * 0.3,
                      }}
                    />
                  </div>

                  {/* Industry Name */}
                  <motion.h3 
                    className="text-base lg:text-lg font-semibold text-[#222222] text-center group-hover:text-[#00B894] transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.3 }}
                  >
                    {industry.name}
                  </motion.h3>

                  {/* Arrow Connector - Desktop */}
                  {idx < industries.length - 1 && (
                    <div className="hidden lg:block absolute top-[60px] -right-4 transform -translate-y-1/2 z-30">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.5 }}
                      >
                        <ArrowRightCircle className="w-8 h-8 text-gray-400 bg-white rounded-full shadow-md border-2 border-gray-200" />
                      </motion.div>
                    </div>
                  )}

                  {/* Arrow Connector - Mobile/Tablet */}
                  {idx < industries.length - 1 && idx % 2 === 0 && idx < industries.length - 2 && (
                    <div className="lg:hidden md:block hidden absolute top-[140px] left-1/2 transform -translate-x-1/2 z-30">
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.5 }}
                      >
                        <ArrowDownCircle className="w-8 h-8 text-gray-400 bg-white rounded-full shadow-md border-2 border-gray-200 rotate-90" />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
} 