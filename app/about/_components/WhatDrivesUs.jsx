"use client";
import React from "react";

const WhatDrivesUs = () => {
  const principles = [
    {
      title: "Client-Centric",
      description: "Your success is our success. We prioritize understanding your unique challenges and delivering solutions that drive real business value.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      gradient: "from-[#00F8B4] to-[#00C4FF]"
    },
    {
      title: "Innovation",
      description: "We stay ahead of the curve by embracing cutting-edge technologies and creative problem-solving approaches.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      gradient: "from-[#00C4FF] to-[#00F8B4]"
    },
    {
      title: "Quality Assurance",
      description: "Every line of code, every feature, and every solution undergoes rigorous testing to ensure reliability and performance.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      gradient: "from-[#00F8B4] to-[#00C4FF]"
    },
    {
      title: "Collaboration",
      description: "We believe the best solutions come from working together—with our clients, our team, and the broader tech community.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.7 6.28c-.37.5-.58 1.11-.58 1.73V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2z"/>
        </svg>
      ),
      gradient: "from-[#00C4FF] to-[#00F8B4]"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#2D2D2D] mb-6">
          What Drives Us
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          These core principles guide every decision we make and every solution we create, ensuring we deliver exceptional results.
        </p>
      </div>

      {/* Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {principles.map((principle, index) => (
          <div
            key={index}
            className="group bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
          >
            {/* Glowing background effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="mb-8">
                <div className={`w-20 h-20 bg-gradient-to-br ${principle.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  {principle.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-3xl font-bold text-[#2D2D2D] mb-6 group-hover:text-[#00F8B4] transition-colors duration-300">
                {principle.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {principle.description}
              </p>
            </div>

            {/* Floating accent elements */}
            <div className={`absolute top-6 right-6 w-3 h-3 bg-gradient-to-r ${principle.gradient} rounded-full animate-pulse opacity-60`}></div>
            <div className={`absolute bottom-6 left-6 w-2 h-2 bg-gradient-to-r ${principle.gradient} rounded-full animate-bounce opacity-50`}></div>
          </div>
        ))}
      </div>

      {/* Bottom Quote */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-[#00F8B4]/10 to-[#00C4FF]/10 rounded-3xl p-8 border border-[#00F8B4]/20">
          <blockquote className="text-2xl font-semibold text-[#2D2D2D] mb-4 italic">
            "We don't just build software—we build partnerships that drive lasting success."
          </blockquote>
          <p className="text-gray-600">— SyncOps Philosophy</p>
        </div>
      </div>
    </div>
  );
};

export default WhatDrivesUs; 