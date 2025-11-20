"use client";
import React from "react";
import { FaRocket, FaShieldAlt, FaSync, FaUsers } from "react-icons/fa";

const ContinuouslyEvolvingStrip = () => {
  const features = [
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: "Latest Versions",
      description: "Always updated to the most recent stable releases"
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Security First",
      description: "Enterprise-grade security and compliance standards"
    },
    {
      icon: <FaSync className="w-6 h-6" />,
      title: "Continuous Updates",
      description: "Regular updates and maintenance for optimal performance"
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Community Driven",
      description: "Leveraging the best practices from global developer communities"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#FAFAFF] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#2D2D2D] mb-4">
              Continuously Evolving Technology Stack
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our technology stack is constantly updated and refined to ensure we deliver the most cutting-edge solutions for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-6 rounded-xl hover:bg-gradient-to-br hover:from-[#00F8B4]/5 hover:to-[#00C4FF]/5 transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-[#2D2D2D] mb-2 group-hover:text-[#00F8B4] transition-colors duration-300">
                  {feature.title}
                </h4>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 pt-8 border-t border-gray-100">
            <p className="text-gray-600 mb-4">
              Ready to leverage our cutting-edge technology stack?
            </p>
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
              <FaRocket className="w-4 h-4" />
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContinuouslyEvolvingStrip; 