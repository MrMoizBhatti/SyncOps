"use client";
import React from "react";
import { FaShieldAlt, FaChartLine, FaGlobe, FaCogs } from "react-icons/fa";

const MultiCloudBenefits = () => {
  const benefits = [
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Enhanced Security",
      description: "Distribute risk across multiple providers and implement defense-in-depth security strategies",
      stats: "99.9% Security Uptime"
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Cost Optimization",
      description: "Leverage competitive pricing and optimize costs by using the best services from each provider",
      stats: "40% Cost Reduction"
    },
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Access to worldwide data centers ensuring optimal performance for global user bases",
      stats: "200+ Data Centers"
    },
    {
      icon: <FaCogs className="w-8 h-8" />,
      title: "Operational Flexibility",
      description: "Avoid vendor lock-in and maintain flexibility to choose the best services for each workload",
      stats: "Zero Vendor Lock-in"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0B0A1C] via-[#0F1E2E] to-[#0B0A1C] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00F8B4]/5 to-[#00C4FF]/5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] rounded-full filter blur-3xl opacity-10 animate-pulse delay-500"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full filter blur-3xl opacity-10 animate-pulse delay-1500"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose Multi-Cloud?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our multi-cloud approach provides unmatched flexibility, security, and performance advantages that single-cloud solutions simply cannot match.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 relative overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00F8B4]/10 to-[#00C4FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00F8B4] transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {benefit.description}
                </p>
                
                {/* Stats */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00F8B4]/20 to-[#00C4FF]/20 border border-[#00F8B4]/30 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-[#00F8B4] rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-[#00F8B4]">{benefit.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Ready to experience the power of multi-cloud architecture? Let us help you build a resilient, scalable, and cost-effective cloud strategy.
          </p>
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] text-white font-semibold px-8 py-4 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
            <FaCogs className="w-5 h-5" />
            Get Cloud Strategy Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default MultiCloudBenefits; 