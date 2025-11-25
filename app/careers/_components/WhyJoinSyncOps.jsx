"use client";
import React from "react";

const WhyJoinSyncOps = () => {
  const benefits = [
    {
      icon: "🚀",
      title: "Cutting-Edge Projects",
      description: "Work on the latest AI and machine learning technologies that are shaping the future of software development.",
      gradient: "from-[#00B894] to-[#00C4FF]"
    },
    {
      icon: "🌍",
      title: "Remote-First Culture",
      description: "Work from anywhere in the world with flexible hours and a supportive team that values work-life balance.",
      gradient: "from-[#00C4FF] to-[#00B894]"
    },
    {
      icon: "🎓",
      title: "Continuous Learning",
      description: "Access to courses, conferences, and mentorship programs to help you grow both personally and professionally.",
      gradient: "from-[#00B894] to-[#00C4FF]"
    },
    {
      icon: "💡",
      title: "Innovation-Driven",
      description: "Be part of a team that encourages creative thinking and rewards innovative solutions to complex problems.",
      gradient: "from-[#00C4FF] to-[#00B894]"
    },
    {
      icon: "🤝",
      title: "Collaborative Environment",
      description: "Join a diverse team where every voice matters and collaboration leads to breakthrough solutions.",
      gradient: "from-[#00B894] to-[#00C4FF]"
    },
    {
      icon: "🏆",
      title: "Competitive Benefits",
      description: "Comprehensive health coverage, generous PTO, and performance-based bonuses that recognize your contributions.",
      gradient: "from-[#00C4FF] to-[#00B894]"
    }
  ];

  return (
    <div id="why-join-syncops" className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#1F3A56] mb-6">
          Why Join SyncOps?
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Discover what makes SyncOps the perfect place to grow your career and make a real impact in the world of AI-powered software.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 relative overflow-hidden"
          >
            {/* Glowing background effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            
            {/* Icon */}
            <div className="relative z-10 mb-6">
              <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                <span className="text-2xl">{benefit.icon}</span>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-[#1F3A56] mb-3 group-hover:text-[#00B894] transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Employee Quote Card - Highlighted */}
      <div className="relative max-w-4xl mx-auto">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-3xl blur-3xl"></div>
        
        {/* Quote Card */}
        <div className="relative bg-gradient-to-br from-white to-[#F9FCFE] rounded-3xl p-12 lg:p-16 shadow-2xl border border-gray-100">
          {/* Quote Icon */}
          <div className="mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-full flex items-center justify-center shadow-lg mx-auto">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
          </div>

          {/* Quote Text */}
          <blockquote className="text-2xl lg:text-3xl font-medium text-[#1F3A56] mb-8 leading-relaxed text-center">
            "At SyncOps, I've found the perfect balance of challenging work and supportive culture. Every day feels like I'm contributing to something meaningful that will shape the future of technology."
          </blockquote>

          {/* Author */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">SM</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-[#1F3A56]">Sarah Mitchell</p>
                <p className="text-gray-600">Senior AI Engineer</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#00B894]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-6 -left-6 w-4 h-4 bg-[#00B894] rounded-full animate-pulse opacity-60"></div>
        <div className="absolute -bottom-6 -right-6 w-6 h-6 bg-[#00C4FF] rounded-full animate-bounce opacity-50"></div>
      </div>
    </div>
  );
};

export default WhyJoinSyncOps; 