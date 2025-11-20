"use client";
import React from "react";
import { ArrowRight, Zap, RefreshCw, Shield, CheckCircle, TrendingUp, Users, Clock } from "lucide-react";
import SafeLink from "./ui/SafeLink";
import { motion } from 'framer-motion';
import { stagger, fadeUp, viewport } from '../../lib/motionConfig';

const products = [
  {
    title: "SyncFlow",
    description: "AI-powered workflow automation platform that streamlines business processes and reduces manual tasks by up to 80%.",
    icon: Zap,
    color: "from-[#00F8B4] to-[#00C4FF]",
    href: "/products/syncflow",
    stats: [
      { label: "Efficiency Gain", value: "80%" },
      { label: "Time Saved", value: "50hrs/week" }
    ],
    benefits: [
      "Intelligent process optimization",
      "Real-time analytics dashboard",
      "Predictive insights for teams"
    ]
  },
  {
    title: "DataSync Pro",
    description: "Enterprise-grade data synchronization solution that ensures real-time consistency across all your systems and databases.",
    icon: RefreshCw,
    color: "from-[#00C4FF] to-[#00F8B4]",
    href: "/products/datasync-pro",
    stats: [
      { label: "Sync Speed", value: "<1ms" },
      { label: "Uptime", value: "99.9%" }
    ],
    benefits: [
      "Multi-platform integration",
      "Advanced conflict resolution",
      "Comprehensive audit trails"
    ]
  },
  {
    title: "CloudGuard",
    description: "Comprehensive cloud security platform that protects your infrastructure with advanced threat detection and compliance monitoring.",
    icon: Shield,
    color: "from-[#00F8B4] to-[#00C4FF]",
    href: "/products/cloudguard",
    stats: [
      { label: "Threats Blocked", value: "10M+" },
      { label: "Compliance", value: "100%" }
    ],
    benefits: [
      "Zero-trust architecture",
      "Automated incident response",
      "Regulatory compliance ready"
    ]
  }
];

export default function InHouseProducts() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0B0A1C] via-[#0F0E1F] to-[#0B0A1C] text-white relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00F8B4]/10 via-[#00C4FF]/5 to-[#00F8B4]/10"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#00F8B4]/5 to-[#00C4FF]/5 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div className="text-center mb-20" initial="initial" whileInView="animate" viewport={viewport} variants={stagger.container(0.06)}>
          <motion.div className="inline-block mb-6" variants={fadeUp(16)}>
            <span className="px-4 py-2 bg-gradient-to-r from-[#00F8B4]/20 to-[#00C4FF]/20 rounded-full text-sm text-[#00F8B4] border border-[#00F8B4]/30">
              Built In-House
            </span>
          </motion.div>
          <motion.h2 className="text-4xl md:text-6xl font-bold mb-6" variants={fadeUp(16)}>
            Our <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">
              Enterprise Solutions
            </span>
          </motion.h2>
          <motion.p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" variants={fadeUp(20)}>
            Proven solutions built by our team, solving real-world challenges and driving measurable business impact.
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={product.title}
                initial="initial"
                whileInView="animate"
                viewport={viewport}
                variants={fadeUp(18 + index * 2)}
              >
                <div className={`group flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/10 hover:border-[#00C4FF]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00C4FF]/20 hover:bg-white/10`}>
                  {/* Left/Right Side - Icon and Stats */}
                  <div className={`flex-1 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="flex flex-col items-center lg:items-start">
                      {/* Icon */}
                      <div className={`w-24 h-24 bg-gradient-to-br ${product.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl`}>
                        <IconComponent size={48} className="text-white" strokeWidth={2.5} />
                      </div>
                      
                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
                        {product.stats.map((stat, idx) => (
                          <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10 text-center lg:text-left">
                            <div className="text-2xl font-bold bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">
                              {stat.value}
                            </div>
                            <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Right/Left Side - Content */}
                  <div className="flex-1">
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-[#00F8B4] transition-colors duration-300">
                      {product.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                      {product.description}
                    </p>
                    
                    {/* Benefits List */}
                    <ul className="space-y-3 mb-8">
                      {product.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <CheckCircle size={20} className="text-[#00F8B4] flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* CTA */}
                    <SafeLink
                      href={product.href}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-[#00F8B4]/30 transition-all duration-300 group/btn"
                    >
                      <span>Explore {product.title}</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </SafeLink>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 