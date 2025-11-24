"use client";
import React from "react";
import { FaCheckCircle, FaRocket, FaUsers, FaChartLine } from "react-icons/fa";

const ProvenMethodologyStrip = () => {
  const highlights = [
    {
      icon: <FaCheckCircle className="w-6 h-6" />,
      text: "Proven track record of successful project deliveries"
    },
    {
      icon: <FaRocket className="w-6 h-6" />,
      text: "Accelerated development with modern tools and practices"
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      text: "Collaborative approach with transparent communication"
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      text: "Measurable results and continuous improvement"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-white to-[#FAFAFF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00F8B4]/10 to-[#00C4FF]/10 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-[#00F8B4]">Proven Methodology</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-[#2D2D2D] mb-6 leading-tight">
                Trusted by <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">500+</span> Companies Worldwide
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our proven development methodology has been refined over years of experience, delivering exceptional results for businesses across industries. We combine industry best practices with innovative approaches to ensure your project's success.
              </p>
              
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full flex items-center justify-center">
                      <div className="text-white">
                        {highlight.icon}
                      </div>
                    </div>
                    <span className="text-gray-700 font-medium">{highlight.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-[#00F8B4]/10 to-[#00C4FF]/10 rounded-xl border border-[#00F8B4]/20">
                <div className="text-4xl font-bold text-[#00F8B4] mb-2">500+</div>
                <div className="text-gray-600 font-medium">Projects Delivered</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-[#00C4FF]/10 to-[#00F8B4]/10 rounded-xl border border-[#00C4FF]/20">
                <div className="text-4xl font-bold text-[#00C4FF] mb-2">98%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-[#00F8B4]/10 to-[#00C4FF]/10 rounded-xl border border-[#00F8B4]/20">
                <div className="text-4xl font-bold text-[#00F8B4] mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Support Available</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-[#00C4FF]/10 to-[#00F8B4]/10 rounded-xl border border-[#00C4FF]/20">
                <div className="text-4xl font-bold text-[#00C4FF] mb-2">5+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenMethodologyStrip; 