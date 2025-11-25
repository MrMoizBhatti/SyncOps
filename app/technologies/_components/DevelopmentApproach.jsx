"use client";
import React from "react";
import { FaSearch, FaPencilRuler, FaCode, FaVial, FaRocket, FaSync } from "react-icons/fa";

const DevelopmentApproach = () => {
  const steps = [
    {
      number: "01",
      icon: <FaSearch className="w-8 h-8" />,
      title: "Discover",
      description: "Deep dive into your business requirements, goals, and technical constraints to understand the full scope of your project.",
      details: ["Requirements Analysis", "Stakeholder Interviews", "Technical Assessment", "Project Planning"]
    },
    {
      number: "02",
      icon: <FaPencilRuler className="w-8 h-8" />,
      title: "Design",
      description: "Create comprehensive architecture and UI/UX designs that align with your business objectives and user needs.",
      details: ["System Architecture", "UI/UX Design", "Database Design", "API Design"]
    },
    {
      number: "03",
      icon: <FaCode className="w-8 h-8" />,
      title: "Develop",
      description: "Build robust, scalable applications using modern development practices and cutting-edge technologies.",
      details: ["Agile Development", "Code Reviews", "Pair Programming", "Continuous Integration"]
    },
    {
      number: "04",
      icon: <FaVial className="w-8 h-8" />,
      title: "Test",
      description: "Comprehensive testing across all layers to ensure quality, performance, and reliability of your application.",
      details: ["Unit Testing", "Integration Testing", "Performance Testing", "Security Testing"]
    },
    {
      number: "05",
      icon: <FaRocket className="w-8 h-8" />,
      title: "Deploy",
      description: "Seamless deployment to production environments with zero-downtime and automated rollback capabilities.",
      details: ["CI/CD Pipeline", "Environment Management", "Monitoring Setup", "Performance Optimization"]
    },
    {
      number: "06",
      icon: <FaSync className="w-8 h-8" />,
      title: "Iterate",
      description: "Continuous improvement through feedback loops, performance monitoring, and iterative development cycles.",
      details: ["User Feedback", "Performance Monitoring", "Bug Fixes", "Feature Enhancements"]
    }
  ];

  return (
    <section className="py-20 bg-white" id="development-approach">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-[#00B894]">Our Development Process</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2D2D2D] mb-6">
            Our Approach to Software Development
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We follow a proven methodology that ensures high-quality, scalable, and maintainable software solutions delivered on time and within budget.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-100 relative overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00B894]/5 to-[#00C4FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                {/* Step Number */}
                <div className="text-6xl font-bold text-gray-100 mb-4 group-hover:text-[#00B894]/20 transition-colors duration-300">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4 group-hover:text-[#00B894] transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                {/* Details List */}
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-100">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#00B894] mb-2">6-Step</div>
            <div className="text-gray-600">Process</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#00C4FF] mb-2">100%</div>
            <div className="text-gray-600">Quality</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#00B894] mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#00C4FF] mb-2">Agile</div>
            <div className="text-gray-600">Methodology</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentApproach; 