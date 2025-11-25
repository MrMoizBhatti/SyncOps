"use client";
import React from "react";

const MissionVision = () => {
  return (
    <div id="mission" className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00B894]/10 to-[#00C4FF]/10 rounded-full px-6 py-2 mb-6">
          <div className="w-2 h-2 bg-gradient-to-r from-[#00B894] to-[#00C4FF] rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-[#00B894]">Our Foundation</span>
        </div>
        <h2 className="text-4xl lg:text-6xl font-bold text-[#2D2D2D] mb-6">
          Our Mission & Vision
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
          We're driven by a clear purpose: to transform businesses through innovative technology solutions that create lasting impact.
        </p>
      </div>

      {/* Mission & Vision Cards */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        {/* Mission Card */}
        <div className="group bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden transform hover:scale-105">
          {/* Enhanced glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00B894]/5 to-[#00C4FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            {/* Enhanced Icon */}
            <div className="mb-10">
              <div className="w-24 h-24 bg-gradient-to-br from-[#00B894] to-[#00C4FF] rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-[0_20px_40px_rgba(0,184,148,0.3)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>

            {/* Content */}
            <h3 className="text-4xl font-bold text-[#2D2D2D] mb-8 group-hover:text-[#00B894] transition-colors duration-500">
              Our Mission
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              To empower businesses with cutting-edge AI-powered software solutions that drive growth, efficiency, and competitive advantage in the digital age.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that technology should be a catalyst for positive change, enabling organizations to achieve their full potential while creating meaningful impact in the world.
            </p>
          </div>

          {/* Enhanced floating accent elements */}
          <div className="absolute top-8 right-8 w-4 h-4 bg-[#00B894] rounded-full animate-pulse opacity-60 group-hover:animate-bounce"></div>
          <div className="absolute bottom-8 left-8 w-3 h-3 bg-[#00C4FF] rounded-full animate-bounce opacity-50 group-hover:animate-pulse"></div>
          <div className="absolute top-1/2 right-4 w-2 h-2 bg-[#00B894] rounded-full animate-pulse delay-1000 opacity-40"></div>
        </div>

        {/* Vision Card */}
        <div className="group bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden transform hover:scale-105">
          {/* Enhanced glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00C4FF]/5 to-[#00B894]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            {/* Enhanced Icon */}
            <div className="mb-10">
              <div className="w-24 h-24 bg-gradient-to-br from-[#00C4FF] to-[#00B894] rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-[0_20px_40px_rgba(0,196,255,0.3)] transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>

            {/* Content */}
            <h3 className="text-4xl font-bold text-[#2D2D2D] mb-8 group-hover:text-[#00C4FF] transition-colors duration-500">
              Our Vision
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              To be the leading force in AI-powered software development, setting new standards for innovation, quality, and client success in the technology industry.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We envision a future where every business has access to intelligent, scalable solutions that transform their operations and unlock unprecedented growth opportunities.
            </p>
          </div>

          {/* Enhanced floating accent elements */}
          <div className="absolute top-8 right-8 w-4 h-4 bg-[#00C4FF] rounded-full animate-pulse opacity-60 group-hover:animate-bounce"></div>
          <div className="absolute bottom-8 left-8 w-3 h-3 bg-[#00B894] rounded-full animate-bounce opacity-50 group-hover:animate-pulse"></div>
          <div className="absolute top-1/2 right-4 w-2 h-2 bg-[#00C4FF] rounded-full animate-pulse delay-1000 opacity-40"></div>
        </div>
      </div>

      {/* Enhanced Bottom Stats */}
      <div className="bg-gradient-to-r from-[#00B894]/5 to-[#00C4FF]/5 rounded-3xl p-12 border border-[#00B894]/20">
        <div className="text-center mb-12">
          <h3 className="text-3xl lg:text-4xl font-bold text-[#2D2D2D] mb-4">
            Trusted by Industry Leaders
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our track record speaks for itself. Here are the numbers that define our success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
              <span className="text-3xl font-bold text-[#2D2D2D] group-hover:text-[#00B894] transition-colors duration-300">50+</span>
            </div>
            <h4 className="text-xl font-semibold text-[#2D2D2D] mb-3">Projects Delivered</h4>
            <p className="text-gray-600">Successfully completed projects across various industries</p>
          </div>
          
          <div className="group text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-[#00C4FF]/20 to-[#00B894]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
              <span className="text-3xl font-bold text-[#2D2D2D] group-hover:text-[#00C4FF] transition-colors duration-300">98%</span>
            </div>
            <h4 className="text-xl font-semibold text-[#2D2D2D] mb-3">Client Satisfaction</h4>
            <p className="text-gray-600">Consistently high satisfaction rates from our clients</p>
          </div>
          
          <div className="group text-center transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-[#00B894]/20 to-[#00C4FF]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
              <span className="text-3xl font-bold text-[#2D2D2D] group-hover:text-[#00B894] transition-colors duration-300">24/7</span>
            </div>
            <h4 className="text-xl font-semibold text-[#2D2D2D] mb-3">Support Available</h4>
            <p className="text-gray-600">Round-the-clock support for all our solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision; 