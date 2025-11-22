"use client";
import React from "react";
import SafeLink from "../../components/ui/SafeLink";

const TechnologiesHero = () => {
  const metrics = [
    {
      label: "System Uptime",
      value: "99.9%",
      color: "from-emerald-400 to-emerald-600",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20"
    },
    {
      label: "Error Rate",
      value: "<0.1%",
      color: "from-amber-400 to-amber-600",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20"
    },
    {
      label: "Deployment Success",
      value: "100%",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      label: "AI Accuracy",
      value: "98.5%",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-[#0B0A1C] py-12 lg:py-16">
      {/* Background Effects - Matching Landing Page */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00F8B4]/10 to-[#00C4FF]/10 opacity-30"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00F8B4]/20 to-[#00C4FF]/20 border border-[#00F8B4]/30 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-[#00F8B4] rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-[#00F8B4]">Future-Ready Technology</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-snug mb-4">
              <span className="bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] bg-clip-text text-transparent">
                Powering Innovation
              </span>
              <br />
              <span className="text-white">Through Advanced</span>
              <br />
              <span className="text-white">Technology Stack</span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Discover our comprehensive suite of cutting-edge technologies that drive modern software solutions and empower businesses to achieve their digital transformation goals with unmatched performance and reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <SafeLink href="#tech-stack">
                <button className="group bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Explore Our Stack
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </SafeLink>
              
              <SafeLink href="/contact">
                <button className="group border-2 border-[#00F8B4] text-[#00F8B4] font-semibold px-8 py-4 rounded-lg hover:bg-[#00F8B4] hover:text-white transition-all duration-300 relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    Get Free Consultancy
                  </span>
                </button>
              </SafeLink>
            </div>
          </div>
          
          {/* Right Side - Enhanced Metric Cards */}
          <div className="relative">
            <div className="bg-[#1A1A2E]/90 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl max-h-[380px] w-full">
              {/* Console Header - Compact */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-[#00F8B4] rounded-full animate-pulse"></div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Technology Performance</h3>
                    <p className="text-gray-400 text-sm">Real-time System Metrics</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#00F8B4] rounded-full animate-pulse"></div>
                  <span className="text-[#00F8B4] text-sm font-medium">LIVE</span>
                </div>
              </div>
              
              {/* Compact Performance Metrics Grid - 2x2 */}
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <div key={index} className={`group ${metric.bgColor} ${metric.borderColor} rounded-xl p-4 border backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden`}>
                    {/* Glowing effect */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>
                    
                    <div className="relative z-10 text-center">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-1`}>
                        {metric.value}
                      </div>
                      <div className="text-gray-400 text-sm font-medium">
                        {metric.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#00F8B4] to-[#00C4FF] rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-[#00C4FF] to-[#00F8B4] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesHero; 