"use client";
import { TrendingUp, Users, Clock, Star } from 'lucide-react';
import { useAnimatedCounter } from '../case-studies/_components/useAnimatedCounter';
import { motion } from 'framer-motion';

const metrics = [
  {
    value: "50+",
    label: "Projects Delivered",
    description: "Successfully completed projects across various industries",
    icon: TrendingUp,
    color: "from-[#00B894] to-[#00C4FF]"
  },
  {
    value: "99.5%",
    label: "Uptime Guarantee",
    description: "Reliable infrastructure with enterprise-grade SLA",
    icon: Clock,
    color: "from-[#00C4FF] to-[#00B894]"
  },
  {
    value: "25+",
    label: "Expert Team",
    description: "Senior developers and architects with proven track records",
    icon: Users,
    color: "from-[#00B894] to-[#00C4FF]"
  },
  {
    value: "9.8",
    label: "Average NPS",
    description: "Client satisfaction score from hundreds of projects",
    icon: Star,
    color: "from-[#00C4FF] to-[#00B894]"
  }
];

export default function TrackRecord() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F2937] mb-6">
            Proven <span className="bg-gradient-to-r from-[#00B894] to-[#00C4FF] bg-clip-text text-transparent">
              Track Record
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers that speak for themselves. We've consistently delivered exceptional results for our clients.
          </p>
        </motion.div>

        {/* Graph/Diagram Style Flow */}
        <div className="relative">
          <div className="relative">
            {/* Desktop SVG connectors - connecting all metrics */}
            <div className="hidden lg:block absolute inset-x-8 top-[80px] h-8 pointer-events-none z-0">
              <svg viewBox="0 0 1000 40" className="w-full h-full" fill="none">
                <defs>
                  <linearGradient id="metricLine1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00B894" stopOpacity="0.3" />
                    <stop offset="33%" stopColor="#00C4FF" stopOpacity="0.4" />
                    <stop offset="66%" stopColor="#00B894" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#00C4FF" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M 125 20 Q 250 20 375 20 T 625 20 T 875 20"
                  stroke="url(#metricLine1)"
                  strokeWidth="2"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-20">
              {metrics.map((metric, index) => {
                const IconComponent = metric.icon;
                const { count, ref } = useAnimatedCounter(metric.value, 2000);
                
                return (
                  <motion.div
                    key={metric.label}
                    ref={ref}
                    className="relative flex flex-col items-center"
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    {/* Node Circle */}
                    <div className="relative mb-4">
                      <motion.div
                        className={`w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${metric.color} rounded-full flex items-center justify-center shadow-xl relative z-10`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-full flex items-center justify-center">
                          <IconComponent className="w-8 h-8 lg:w-9 lg:h-9 text-white" />
                        </div>
                      </motion.div>
                      
                      {/* Pulse Animation */}
                      <motion.div
                        className={`absolute inset-0 mx-auto w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${metric.color} rounded-full opacity-20`}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.2, 0, 0.2],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                    </div>

                    {/* Metric Content */}
                    <div className="text-center">
                      <motion.div 
                        className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#1F2937] to-[#00B894] bg-clip-text text-transparent mb-2"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3 }}
                        aria-label={metric.value}
                      >
                        {count}
                      </motion.div>
                      
                      <motion.h3 
                        className="text-base lg:text-lg font-semibold text-[#00C4FF] mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.4 }}
                        aria-label={metric.label}
                      >
                        {metric.label}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-xs lg:text-sm text-gray-600 leading-relaxed max-w-xs mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.5 }}
                        aria-label={metric.description}
                      >
                        {metric.description}
                      </motion.p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00B894] rounded-full"></div>
              ISO 27001 Certified
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00C4FF] rounded-full"></div>
              SOC 2 Type II Compliant
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00B894] rounded-full"></div>
              GDPR Ready
            </span>
          </div>
        </div>
      </div>
    </section>
  );
} 